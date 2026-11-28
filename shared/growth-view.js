(function () {
  const GROWTH_STORAGE_KEY = "web3_atlas_growth_stage_v1";

  const GROWTH_STAGES = [
    {
      stage: 0,
      pill: "🌱 种子层",
      badge: "唯一核心种子 · 起点闭环",
      title: "无中心确权：没有银行，如何证明钱是你的且不能花两次？",
      isSeed: true,
      seedLead:
        "整套 Web3 世界不是一堆零散名词的拼盘，而是全部从这一颗种子里长出来的：如果拿掉银行、政府和公司服务器，只靠互联网上的数学与公开账本，两个互不信任的陌生人怎么完成一次无法伪造、也无法赖账的价值转移？",
      nodes: [
        {
          why: "起点蓝图：没有银行时，账本放哪、谁能记账、凭什么认同？先把「存储 / 提议 / 验证 / 认同」拆开重组，并用「初始状态 / 交易 / 记账 / 激励 / 治理」五维框架横向解剖 BTC、ETH、SOL 与 DOGE：",
          modules: ["00-blockchain-blueprint"]
        },
        {
          why: "交易规则的密码学底座：没有银行账号和密码找回，用公私钥与数字签名证明“我是资产主人”（且签名不暴露私钥）：",
          modules: ["01-wallet-keys"]
        },
        {
          why: "账本状态与防双花机制：拆解 UTXO 纸币找零 vs 账户余额模型，并用 51% 算力分叉与 PoS 惩罚守住同一本账：",
          modules: ["09-consensus-ledger"]
        }
      ],
      closure:
        "✓ 种子层闭环：此时，人类历史上第一次在没有银行的前提下，实现了陌生人点对点安全确权与转账。",
      nextPrompt: "🔥 遭遇第一重现实张力：公共账本太挤 + 私钥丢了没人管 → 展开第 1 阶"
    },
    {
      stage: 1,
      pill: "第 1 阶 · 生存与防线",
      badge: "第 1 阶生长 · 现实碰撞",
      title: "拥堵竞价、托管边界与人性防线",
      tension:
        "<strong>上一阶暴露的张力：</strong>1) 账本空间极其稀缺，全球人一起转账谁先打包、怎么防垃圾交易刷爆网络？2) “私钥即资产”太反人性——没有客服能帮你撤回误操作，有人图省事把币放回中心化交易所（重新引入挪用风险），有人留在链上却点错一次签名就归零。",
      nodes: [
        {
          why: "为解决「区块空间有限与防刷屏」，逼出按字节/算力竞价的交易排队与多链费用模型：",
          modules: ["02-tx-gas-multichain"]
        },
        {
          why: "为解决「私钥单点故障与交易所挪用边界」，逼出 CEX vs 自托管分层、硬件冷签名与 M-of-N 多签防线，以及识别钓鱼授权与蜜罐的生存本能：",
          modules: ["20-custody-multisig", "03-security-traps"]
        }
      ],
      closure:
        "✓ 第 1 阶闭环：你现在不仅能安全持有并发送资产，还懂区块拥堵规则，并能在真实链上守住本金不踩雷。",
      nextPrompt: "🔥 遭遇第二重张力：只会点对点转币，怎么在没有银行的情况下换币、借钱？ → 展开第 2 阶"
    },
    {
      stage: 2,
      pill: "第 2 阶 · 代码金融引擎",
      badge: "第 2 阶生长 · 从记账到无许可金融",
      title: "智能合约、链上乐高与自动金融引擎",
      tension:
        "<strong>上一阶暴露的张力：</strong>只会单纯转币远远不够——现实世界需要“按条件自动放款”“把 ETH 换成美元”“抵押借钱与生息”。如果没有 CEO 和公司担保，谁来保管大家的资金并执行复杂金融规则？",
      nodes: [
        {
          why: "核心跳板：把程序代码写进账本，让没有私钥的“链上自动售货机”替人管钱，并允许协议像乐高一样无缝互调（同时警惕可升级 Proxy 后门）：",
          modules: ["22-smart-contracts-composability"]
        },
        {
          why: "有了能管钱的代码，大家想在链上换币但传统订单簿 Gas 太贵 → 逼出恒定乘积 AMM 与集中流动性（v3）及收益拆分；而币价暴涨暴跌没法做计价单位 → 逼出稳定币锚定机制：",
          modules: ["04-first-swap-amm", "19-clmm-yield-splitting", "05-stablecoins-peg"]
        },
        {
          why: "有了交易池和稳定币，闲置资产想生息加杠杆，但链上没有身份证和征信 → 逼出超额抵押借贷与闪电贷、质押与再质押循环贷、资金费率永续合约，以及零冷启动资金的联合曲线发射：",
          modules: ["06-lending-liquidation", "18-staking-restaking", "07-perps-leverage", "08-bonding-curves"]
        }
      ],
      closure: "✓ 第 2 阶闭环：一套完全由代码驱动、7×24 小时无许可运转的链上金融系统已经自洽成型。",
      nextPrompt: "🔥 遭遇第三重张力：金融繁荣把主网挤爆，公开账本还招来猎杀机器人与隐私裸奔 → 展开第 3 阶"
    },
    {
      stage: 3,
      pill: "第 3 阶 · 物理极限与暗面",
      badge: "第 3 阶生长 · 繁荣的反噬",
      title: "性能扩容、黑暗森林博弈与零知识隐私层",
      tension:
        "<strong>上一阶暴露的张力：</strong>DeFi 繁荣带来三大物理与博弈反噬——1) 主网拥堵导致一笔 Swap 要几十美元；2) 公开排队池（Mempool）让你的交易意图在打包前全网可见，沦为机器人猎物；3) 全透明账本让你从交易所提过一次币就被扒光全部身家。",
      nodes: [
        {
          why: "为突破「主网性能天花板」，逼出链下打包压缩、链上拼车存证的 Layer 2 Rollup 与跨链桥：",
          modules: ["10-scaling-bridges"]
        },
        {
          why: "为对抗「公开 Mempool 的暗算」与「全透明账本的隐私泄露」，逼出私有 RPC 防夹博弈，以及用零知识证明（ZK）实现既隐身又合规的隐私池：",
          modules: ["11-mev-dark-forest", "21-zk-privacy"]
        }
      ],
      closure: "✓ 第 3 阶闭环：你看透了链上繁荣背后的扩容哲学、隐藏税（MEV）与隐私/合规的平衡术。",
      nextPrompt: "🔥 遭遇第四重张力：合约读不到现实数据，发币太容易又滋生海量资本骗局 → 展开第 4 阶"
    },
    {
      stage: 4,
      pill: "第 4 阶 · 现实连接与排雷",
      badge: "第 4 阶生长 · 穿透资本迷雾",
      title: "预言机连接现实、代币抛压与链上投研排雷",
      tension:
        "<strong>上一阶暴露的张力：</strong>1) 封闭的区块链无法自己上网查币价和大选结果，金融合约随时可能因喂价失真被掏空；2) 发币门槛降到几乎为零后，低流通高 FDV 解锁抛压和印空气币的假高年化横行，光懂技术依然会被资本收割。",
      nodes: [
        {
          why: "为打破「链上信息孤岛」，逼出去中心化喂价预言机与用真金白银汇聚现实概率的预测市场：",
          modules: ["13-oracles-real-apps"]
        },
        {
          why: "为识破「资本筹码稀释与庞氏补贴」，逼出代币解锁模型分析与基于真实收入、TVL 和 P/F 估值的链上排雷体检：",
          modules: ["12-tokenomics", "14-onchain-forensics"]
        }
      ],
      closure: "✓ 第 4 阶闭环：你从“会操作的链上玩家”升级为拥有独立数据体检与防收割框架的投研者。",
      nextPrompt: "🔥 遭遇终极张力：助记词拦住 99% 普通人、链下万亿资产进不来、AI 办不了银行卡 → 展开第 5 阶"
    },
    {
      stage: 5,
      pill: "第 5 阶 · 破圈与新物种",
      badge: "第 5 阶生长 · 终局演进",
      title: "账户抽象破圈、RWA 机构资产与 AI Agent 经济",
      tension:
        "<strong>上一阶暴露的张力：</strong>回到种子层遗留的三道终极高墙——1) 抄写助记词和提前买 Gas 拦住了普通大众；2) 加密原生资产总盘子有限，华尔街万亿国债与基金需要合规上链；3) 新物种 AI Agent 正在崛起，银行绝不会给代码发信用卡。",
      nodes: [
        {
          why: "为拆除「助记词与 Gas 门神」，逼出 ERC-4337 / EIP-7702 智能账户、Paymaster 代付与 Passkey 社交恢复：",
          modules: ["15-account-abstraction"]
        },
        {
          why: "为引入「现实世界万亿美债」并服务「无法在传统银行开户的 AI Agent」，逼出合规 RWA 白名单资产与 HTTP 402 机器微支付 + 可验证 AI 推理：",
          modules: ["16-rwa-institutional", "17-ai-agent-crypto"]
        }
      ],
      closure: "🏆 全景闭环达成：从“无银行确权”这一颗种子出发，你已经推演完了整套 Web3 金融与机器经济的演化全貌！",
      isFinal: true
    }
  ];

  function mountGrowthView({ catalog, moduleById, lessonByPath }) {
    let maxUnlockedStage = 0;
    try {
      const saved = parseInt(localStorage.getItem(GROWTH_STORAGE_KEY) || "0", 10);
      if (!isNaN(saved)) maxUnlockedStage = Math.max(0, Math.min(GROWTH_STAGES.length - 1, saved));
    } catch {}

    function renderModuleBox(mod, progress) {
      const modTotal = mod.lessons.length;
      const modDone = mod.lessons.filter((l) => !!progress[l.path]).length;
      return `
        <div style="margin-top:12px;">
          <div class="module-head">
            <h3 style="font-size:18px;">${mod.icon || "📦"} ${mod.title.zh}</h3>
            <div class="module-meta-right">
              <span class="module-layer">${mod.layer || ""}</span>
              <span class="mod-prog-badge ${modDone === modTotal ? "all-done" : ""}">${modDone === modTotal ? "✓ " : ""}${modDone}/${modTotal}</span>
            </div>
          </div>
          <p style="font-size:13px;color:var(--text-muted);margin-bottom:4px;">${mod.summary?.zh || ""}</p>
          <div class="lesson-grid">
            ${mod.lessons
              .map((l) => {
                const isDone = !!progress[l.path];
                const prereqs = (l.prerequisites || []).filter((p) => lessonByPath[p]);
                const prereqHtml = prereqs.length
                  ? `<div class="prereq-row"><span>前置：</span>${prereqs
                      .map((p) => {
                        const met = !!progress[p];
                        return `<span class="prereq-chip ${met ? "met" : "unmet"}">${met ? "✓ " : "○ "}${lessonByPath[p].title.zh}</span>`;
                      })
                      .join("")}</div>`
                  : "";
                return `
                  <a class="lesson-card ${isDone ? "done" : ""}" href="${l.path}">
                    <div>
                      <h3>${isDone ? "✓ " : ""}${l.title.zh}</h3>
                      <p>${l.subtitle.zh}</p>
                      <div class="tag-row">${(l.concepts || []).map((c) => `<span class="tag">${c}</span>`).join("")}</div>
                    </div>
                    ${prereqHtml}
                  </a>
                `;
              })
              .join("")}
          </div>
        </div>
      `;
    }

    function render() {
      const progress = window.AtlasUI.getProgress();
      const pillsEl = document.getElementById("stage-pills");
      const wrap = document.getElementById("growth-wrap");
      if (!pillsEl || !wrap) return;

      pillsEl.innerHTML =
        GROWTH_STAGES.map((st, idx) => {
          const unlocked = idx <= maxUnlockedStage;
          return `<button class="sp-pill ${unlocked ? "unlocked" : ""}" data-stage="${idx}">
            ${unlocked ? st.pill : `🔒 第 ${idx} 阶（未推演）`}
          </button>`;
        }).join("") +
        (maxUnlockedStage < GROWTH_STAGES.length - 1
          ? `<button class="sp-pill" id="btn-expand-all" style="margin-left:auto;">一次性展开全部 5 阶</button>`
          : `<button class="sp-pill" id="btn-collapse-seed" style="margin-left:auto;">收起回到种子层</button>`);

      pillsEl.querySelectorAll("[data-stage]").forEach((btn) => {
        btn.addEventListener("click", () => {
          const s = +btn.dataset.stage;
          if (s > maxUnlockedStage) {
            maxUnlockedStage = s;
            try { localStorage.setItem(GROWTH_STORAGE_KEY, String(maxUnlockedStage)); } catch {}
            render();
          }
          const target = document.getElementById(`growth-stage-${s}`);
          if (target) target.scrollIntoView({ behavior: "smooth", block: "start" });
        });
      });

      const expAll = document.getElementById("btn-expand-all");
      if (expAll)
        expAll.addEventListener("click", () => {
          maxUnlockedStage = GROWTH_STAGES.length - 1;
          try { localStorage.setItem(GROWTH_STORAGE_KEY, String(maxUnlockedStage)); } catch {}
          render();
        });
      const colBtn = document.getElementById("btn-collapse-seed");
      if (colBtn)
        colBtn.addEventListener("click", () => {
          maxUnlockedStage = 0;
          try { localStorage.setItem(GROWTH_STORAGE_KEY, "0"); } catch {}
          render();
        });

      wrap.innerHTML = "";
      GROWTH_STAGES.slice(0, maxUnlockedStage + 1).forEach((st, idx) => {
        const sec = document.createElement("section");
        sec.id = `growth-stage-${idx}`;
        sec.className = st.isSeed ? "seed-card" : "growth-stage";

        const nodesHtml = st.nodes
          .map((node) => {
            const modsHtml = node.modules.map((mid) => (moduleById[mid] ? renderModuleBox(moduleById[mid], progress) : "")).join("");
            return `<div class="causal-node"><div class="causal-why">↳ ${node.why}</div>${modsHtml}</div>`;
          })
          .join("");

        const isFrontier = idx === maxUnlockedStage;
        const actionBtn = st.isFinal
          ? `<a class="btn btn-primary" href="quiz.html">🧭 进入 V1–V5 综合排雷测验 →</a>`
          : isFrontier
          ? `<button class="btn btn-primary" data-unlock="${idx + 1}">${st.nextPrompt}</button>`
          : "";

        sec.innerHTML = `
          <span class="seed-tag">${st.badge}</span>
          <div style="font-size:21px;font-weight:800;line-height:1.4;margin-bottom:6px;color:var(--text);">${st.title}</div>
          ${st.seedLead ? `<p style="font-size:14px;color:var(--card-text);margin-bottom:14px;">${st.seedLead}</p>` : ""}
          ${st.tension ? `<div class="tension-box">${st.tension}</div>` : ""}
          ${nodesHtml}
          <div class="closure-box">
            <span>${st.closure}</span>
            ${actionBtn}
          </div>
        `;
        wrap.appendChild(sec);
      });

      wrap.querySelectorAll("[data-unlock]").forEach((btn) => {
        btn.addEventListener("click", () => {
          const nextIdx = +btn.dataset.unlock;
          maxUnlockedStage = Math.max(maxUnlockedStage, nextIdx);
          try { localStorage.setItem(GROWTH_STORAGE_KEY, String(maxUnlockedStage)); } catch {}
          render();
          const el = document.getElementById(`growth-stage-${nextIdx}`);
          if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
        });
      });
    }

    return { render, GROWTH_STAGES };
  }

  window.AtlasGrowth = { GROWTH_STAGES, mountGrowthView };
})();
