#!/usr/bin/env python3
"""Scan module directories, validate meta.json, and generate catalog.json / catalog.js."""

import json
import sys
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
EXCLUDE_DIRS = {".git", ".github", "scripts", "shared", "node_modules"}


def load_modules():
    modules = []
    errors = []

    for item in sorted(ROOT.iterdir()):
        if not item.is_dir() or item.name in EXCLUDE_DIRS or item.name.startswith("."):
            continue
        meta_path = item / "meta.json"
        if not meta_path.exists():
            continue

        try:
            meta = json.loads(meta_path.read_text(encoding="utf-8"))
        except json.JSONDecodeError as e:
            errors.append(f"[{item.name}] meta.json JSON 解析失败: {e}")
            continue

        for field in ("id", "order", "title", "lessons"):
            if field not in meta:
                errors.append(f"[{item.name}] 缺少必填字段: {field}")

        valid_lessons = []
        for lesson in meta.get("lessons", []):
            html_file = item / lesson.get("file", "")
            if not html_file.exists():
                errors.append(f"[{item.name}] 找不到页面文件: {lesson.get('file')}")
                continue
            lesson["path"] = f"{item.name}/{lesson['file']}"
            valid_lessons.append(lesson)

        meta["lessons"] = valid_lessons
        modules.append(meta)

    if errors:
        print("❌ 目录校验失败：")
        for err in errors:
            print(f"  - {err}")
        sys.exit(1)

    modules.sort(key=lambda m: m.get("order", 999))
    return modules


def main():
    modules = load_modules()
    payload = {"version": "1.0.0", "modules": modules}

    (ROOT / "catalog.json").write_text(
        json.dumps(payload, ensure_ascii=False, indent=2), encoding="utf-8"
    )
    (ROOT / "catalog.js").write_text(
        f"window.WEB3_ATLAS_CATALOG = {json.dumps(payload, ensure_ascii=False, indent=2)};\n",
        encoding="utf-8",
    )

    total_lessons = sum(len(m["lessons"]) for m in modules)
    print(f"✅ 同步完成：{len(modules)} 个模块，{total_lessons} 个交互课程。")


if __name__ == "__main__":
    main()
