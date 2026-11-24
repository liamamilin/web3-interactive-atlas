# Web3 Interactive Atlas

一套**「深度内容 + 交互式参数沙盒」**结合的 Web3 全景认知地图（**21 大模块 · 42 个互动实验页 · 4 条学习路线 · V1–V5 排雷测验 · 全站术语速查**）。纯静态零依赖，打开 `index.html` 即可在浏览器中零风险把玩链上底层机制。

## 核心亮点
- **42 个零风险交互沙盒**：覆盖助记词雪崩、Permit 钓鱼、多签攻防、Uniswap v3 区间做市、LST 循环贷脱锚、Pendle PT/YT、MEV 三明治、低流通高 FDV 解锁、ZK 山洞与隐私池、RWA 与 AI Agent x402。
- **4 条推荐学习路线 + 前置依赖指引**：按「新手防坑生存线 / DeFi 交易线 / 链上投研线 / 底层与前沿线」循序渐进，支持全站上下课连播导航与进度备份恢复。
- **V1–V5 综合排雷测验（`quiz.html`）**：20 道真实链上决策场景，支持点亮通关徽章与导出 PNG 段位成绩单。
- **高频术语速查（`glossary.html`）**：自动汇总全站核心概念，一键直达对应沙盒实验。

## 完整课程地图（V1 → V5）

### V1：链上生存、托管边界与第一笔交易
1. **01-wallet-keys**：助记词/私钥推导雪崩效应、数字签名与防篡改验签
2. **02-tx-gas-multichain**：Mempool 与 EIP-1559 竞价、ETH / L2 / SOL / TRON 多链费用模型对比
3. **03-security-traps**：Approve 无限授权与 Permit 离线钓鱼、蜜罐/貔貅盘与撤池子拆解
4. **04-first-swap-amm**：AMM 恒定乘积曲线与滑点实验室、LP 无常损失对比器
5. **20-custody-multisig**：CEX 托管与储备证明（PoR）挤兑沙盒、硬件冷签名与 Safe M-of-N 多签攻防

### V2：DeFi 金融引擎与市场博弈
6. **05-stablecoins-peg**：稳定币锚定与套利修复沙盒、算法稳定币与死亡螺旋模拟器
7. **06-lending-liquidation**：健康系数与链上清算模拟器、闪电贷原子套利演示
8. **07-perps-leverage**：永续合约资金费率引擎、杠杆倍数与插针爆仓模拟器
9. **08-bonding-curves**：联合曲线发射与毕业实验室、早鸟筹码与砸盘数学模拟器
10. **18-staking-restaking**：PoS 质押与流动性质押（stETH/wstETH）沙盒、LST 循环贷与再质押连环清算模拟器
11. **19-clmm-yield-splitting**：Uniswap v3 集中流动性（CLMM）区间做市沙盒、Pendle PT/YT 固定利率与积分杠杆

### V3：底层基建、隐私层与黑暗森林
12. **09-consensus-ledger**：UTXO 找零 vs 账户余额模型、PoW 51% 分叉与 PoS 惩罚模拟器
13. **10-scaling-bridges**：Rollup 拼车降本（OP 挑战期 vs ZK 证明）、跨链桥锁定铸造与被盗脱锚模拟
14. **11-mev-dark-forest**：MEV 三明治攻击时间轴沙盒、私有 RPC 与意图撮合防夹模拟器
15. **21-zk-privacy**：零知识证明（ZK）阿里巴巴山洞直觉实验、链上地址追踪与合规隐私池（Privacy Pools）

### V4：经济模型与实战投研
16. **12-tokenomics**：低流通高 FDV 与解锁悬崖模拟器、协议价值捕获与 veToken 锁仓博弈
17. **13-oracles-real-apps**：预言机中位数喂价与防操纵沙盒、预测市场（Polymarket）赔率与 EV 引擎
18. **14-onchain-forensics**：真实收益 vs 通胀庞氏拆解器、链上投研核心指标体检台（TVL / Revenue / P/F）

### V5：前沿叙事与下一代体验
19. **15-account-abstraction**：ERC-4337 与 Paymaster 免 Gas 代付沙盒、Passkey 社交恢复与会话密钥拦截器
20. **16-rwa-institutional**：美债上链（Tokenized T-Bills）收益流转沙盒、ERC-3643 白名单与冻结门禁模拟器
21. **17-ai-agent-crypto**：AI Agent 钱包与 x402 机器微支付沙盒、可验证 AI 推理（TEE vs opML vs zkML）对比器

## 本地运行与自动部署
- 直接双击 `index.html` 即可运行（支持 **4 条精选学习路线**、V1–V5 阶段筛选、关键词搜索、**前置依赖状态提示**与本地进度保存），也可进入 `quiz.html` 挑战 **V1–V5 阶段综合排雷测验（20 道真实链上场景）**。
- 新增模块后执行 `python3 scripts/sync_catalog.py` 自动更新目录；推送到 GitHub `main` 分支后，`.github/workflows/deploy.yml` 会自动部署至 GitHub Pages。
