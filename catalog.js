window.WEB3_ATLAS_CATALOG = {
  "version": "1.0.0",
  "modules": [
    {
      "id": "01-wallet-keys",
      "order": 1,
      "layer": "V1: 链上生存与第一笔交易",
      "icon": "🔑",
      "accentColor": "#38bdf8",
      "title": {
        "zh": "钱包、密钥与数字签名",
        "en": "Wallets, Keys & Signatures"
      },
      "summary": {
        "zh": "理解为什么助记词即资产、哈希雪崩效应，以及签名如何在不暴露私钥的前提下证明所有权。",
        "en": "Why seed phrases are assets and how signatures prove ownership without revealing private keys."
      },
      "lessons": [
        {
          "file": "01-seed-to-address.html",
          "title": {
            "zh": "助记词、私钥与哈希雪崩",
            "en": "Seed Phrase, Private Key & Avalanche"
          },
          "subtitle": {
            "zh": "改一个字母，整个钱包地址彻底面目全非。为什么丢了助记词神仙也找不回？",
            "en": "Change one character and the entire address changes completely."
          },
          "duration": "4 min",
          "sandboxType": "visualizer",
          "concepts": [
            "BIP-39",
            "Private Key",
            "Hash Avalanche",
            "Address"
          ],
          "prerequisites": [],
          "path": "01-wallet-keys/01-seed-to-address.html"
        },
        {
          "file": "02-digital-signature.html",
          "title": {
            "zh": "数字签名与链上验签",
            "en": "Digital Signatures & Verification"
          },
          "subtitle": {
            "zh": "不用把私钥发给矿工，怎么证明这笔转账确实是你本人授权的？",
            "en": "How to prove a transaction is yours without ever exposing your private key."
          },
          "duration": "4 min",
          "sandboxType": "simulator",
          "concepts": [
            "ECDSA",
            "Signature",
            "Tamper-Proof",
            "Public Key"
          ],
          "prerequisites": [
            "01-wallet-keys/01-seed-to-address.html"
          ],
          "path": "01-wallet-keys/02-digital-signature.html"
        }
      ]
    },
    {
      "id": "02-tx-gas-multichain",
      "order": 2,
      "layer": "V1: 链上生存与第一笔交易",
      "icon": "⛽",
      "accentColor": "#f59e0b",
      "title": {
        "zh": "多链交易与费用机制",
        "en": "Transactions, Gas & Multi-chain Fees"
      },
      "summary": {
        "zh": "搞懂交易为什么会卡住（Pending）、EIP-1559 竞价逻辑，以及 ETH、Solana、TRON 三条主流链为何手续费差百倍。",
        "en": "Why transactions get stuck, how EIP-1559 works, and how ETH, SOL, and TRON charge fees."
      },
      "lessons": [
        {
          "file": "01-mempool-gas-auction.html",
          "title": {
            "zh": "Mempool 排队与 Gas 竞价模拟器",
            "en": "Mempool & EIP-1559 Gas Auction"
          },
          "subtitle": {
            "zh": "为什么有时候转账 5 秒到账，有时候卡半小时？拆解区块打包与小费机制。",
            "en": "Why some transactions confirm in seconds while others stay pending."
          },
          "duration": "5 min",
          "sandboxType": "simulator",
          "concepts": [
            "Mempool",
            "EIP-1559",
            "Base Fee",
            "Priority Fee",
            "Nonce"
          ],
          "prerequisites": [
            "01-wallet-keys/02-digital-signature.html"
          ],
          "path": "02-tx-gas-multichain/01-mempool-gas-auction.html"
        },
        {
          "file": "02-eth-sol-tron-fees.html",
          "title": {
            "zh": "ETH vs Solana vs TRON 费用模型对比",
            "en": "ETH vs Solana vs TRON Fee Models"
          },
          "subtitle": {
            "zh": "同样转一笔 USDT，为什么以太坊扣 ETH、波场扣 TRX/能量、Solana 几乎不要钱？",
            "en": "Comparing Gas, Compute Units, and Energy/Bandwidth across major chains."
          },
          "duration": "4 min",
          "sandboxType": "simulator",
          "concepts": [
            "Multi-chain",
            "Gas",
            "TRON Energy",
            "Solana Compute"
          ],
          "prerequisites": [],
          "path": "02-tx-gas-multichain/02-eth-sol-tron-fees.html"
        }
      ]
    },
    {
      "id": "03-security-traps",
      "order": 3,
      "layer": "V1: 链上生存与第一笔交易",
      "icon": "🛡️",
      "accentColor": "#ef4444",
      "title": {
        "zh": "链上安全与防盗攻防",
        "en": "On-chain Security & Traps"
      },
      "summary": {
        "zh": "拆解为什么没泄露助记词钱包依然会被转空：无限授权（Approve）、离线签名钓鱼（Permit）与蜜罐/貔貅盘。",
        "en": "How wallets get drained without leaking seed phrases: Approve, Permit phishing, and honeypots."
      },
      "lessons": [
        {
          "file": "01-approve-and-permit.html",
          "title": {
            "zh": "授权机制与钓鱼签名攻防",
            "en": "Approve & Permit Phishing Lab"
          },
          "subtitle": {
            "zh": "为什么只是点了一次免费签名，钱包里的 USDT 却在几秒内被转空？",
            "en": "Why signing one free message can drain your entire token balance."
          },
          "duration": "5 min",
          "sandboxType": "attack-defense",
          "concepts": [
            "Approve",
            "Unlimited Allowance",
            "Permit2",
            "Revoke"
          ],
          "prerequisites": [
            "01-wallet-keys/02-digital-signature.html"
          ],
          "path": "03-security-traps/01-approve-and-permit.html"
        },
        {
          "file": "02-honeypot-rugpull.html",
          "title": {
            "zh": "蜜罐（貔貅盘）与撤池子拆解",
            "en": "Honeypots & Rug Pulls"
          },
          "subtitle": {
            "zh": "K 线一路暴涨 10 倍，为什么轮到你卖的时候却死活卖不出去？",
            "en": "How malicious token contracts block sells and drain liquidity pools."
          },
          "duration": "4 min",
          "sandboxType": "attack-defense",
          "concepts": [
            "Honeypot",
            "Rug Pull",
            "LP Lock",
            "Contract Audit"
          ],
          "prerequisites": [],
          "path": "03-security-traps/02-honeypot-rugpull.html"
        }
      ]
    },
    {
      "id": "04-first-swap-amm",
      "order": 4,
      "layer": "V1: 链上生存与第一笔交易",
      "icon": "🔄",
      "accentColor": "#10b981",
      "title": {
        "zh": "首次交易与 AMM 机制",
        "en": "First Swap & AMM Mechanics"
      },
      "summary": {
        "zh": "拆解去中心化交易所如何定价、滑点从哪来，以及做市商为何会面临无常损失。",
        "en": "How DEXs price assets, where slippage comes from, and why LPs face impermanent loss."
      },
      "lessons": [
        {
          "file": "01-xyk-slippage-lab.html",
          "title": {
            "zh": "AMM 定价曲线与滑点实验室",
            "en": "AMM Curve & Slippage Lab"
          },
          "subtitle": {
            "zh": "为什么买得越多，成交价越贵？亲手拉动 x·y=k 曲线看清流动性深度。",
            "en": "Why bigger trades cost exponentially more on a constant product curve."
          },
          "duration": "5 min",
          "sandboxType": "simulator",
          "concepts": [
            "AMM",
            "x*y=k",
            "Slippage",
            "Liquidity Depth"
          ],
          "prerequisites": [
            "02-tx-gas-multichain/01-mempool-gas-auction.html"
          ],
          "path": "04-first-swap-amm/01-xyk-slippage-lab.html"
        },
        {
          "file": "02-impermanent-loss.html",
          "title": {
            "zh": "LP 做市与无常损失对比器",
            "en": "LP & Impermanent Loss Lab"
          },
          "subtitle": {
            "zh": "把币放进池子赚高年化手续费，为什么币价大涨大跌后反而跑输死拿现货？",
            "en": "Why providing liquidity can underperform simply holding when prices move."
          },
          "duration": "5 min",
          "sandboxType": "simulator",
          "concepts": [
            "LP",
            "Impermanent Loss",
            "Yield vs HODL",
            "Arbitrage"
          ],
          "prerequisites": [
            "04-first-swap-amm/01-xyk-slippage-lab.html"
          ],
          "path": "04-first-swap-amm/02-impermanent-loss.html"
        }
      ]
    },
    {
      "id": "05-stablecoins-peg",
      "order": 5,
      "layer": "V2: DeFi 金融引擎与市场博弈",
      "icon": "💵",
      "accentColor": "#22c55e",
      "title": {
        "zh": "稳定币与脱锚机制",
        "en": "Stablecoins & De-pegging"
      },
      "summary": {
        "zh": "拆解 USDT、DAI 如何死守 1 美元锚定，以及算法稳定币（UST/LUNA）为何会陷入死亡螺旋。",
        "en": "How USDT and DAI maintain their $1 peg, and why algorithmic stablecoins enter death spirals."
      },
      "lessons": [
        {
          "file": "01-collateral-and-peg.html",
          "title": {
            "zh": "稳定币锚定与套利修复沙盒",
            "en": "Stablecoin Peg & Arbitrage Lab"
          },
          "subtitle": {
            "zh": "没有央行托底，稳定币跌到 $0.96 时凭什么能自动涨回 $1.00？",
            "en": "How arbitrageurs restore a $1 peg when a stablecoin deviates."
          },
          "duration": "5 min",
          "sandboxType": "simulator",
          "concepts": [
            "USDT/USDC",
            "DAI",
            "Over-collateralization",
            "Peg Arbitrage"
          ],
          "prerequisites": [
            "04-first-swap-amm/01-xyk-slippage-lab.html"
          ],
          "path": "05-stablecoins-peg/01-collateral-and-peg.html"
        },
        {
          "file": "02-death-spiral.html",
          "title": {
            "zh": "算法稳定币与死亡螺旋模拟器",
            "en": "Algorithmic Stablecoin Death Spiral"
          },
          "subtitle": {
            "zh": "复盘 400 亿美元 UST/LUNA 崩盘：为什么双币铸造销毁机制在恐慌时会瞬间归零？",
            "en": "Simulating how panic triggers hyperinflation in mint-and-burn algorithmic stablecoins."
          },
          "duration": "5 min",
          "sandboxType": "simulator",
          "concepts": [
            "Algo Stablecoin",
            "Death Spiral",
            "Bank Run",
            "Mint & Burn"
          ],
          "prerequisites": [
            "05-stablecoins-peg/01-collateral-and-peg.html"
          ],
          "path": "05-stablecoins-peg/02-death-spiral.html"
        }
      ]
    },
    {
      "id": "06-lending-liquidation",
      "order": 6,
      "layer": "V2: DeFi 金融引擎与市场博弈",
      "icon": "🏦",
      "accentColor": "#8b5cf6",
      "title": {
        "zh": "DeFi 借贷与清算引擎",
        "en": "DeFi Lending & Liquidations"
      },
      "summary": {
        "zh": "拆解 Aave / Compound 如何在没有征信的情况下放贷：健康系数、清算机器人博弈与闪电贷。",
        "en": "How permissionless lending works via Health Factors, liquidation bots, and Flash Loans."
      },
      "lessons": [
        {
          "file": "01-health-factor-liquidation.html",
          "title": {
            "zh": "健康系数与链上清算模拟器",
            "en": "Health Factor & Liquidation Lab"
          },
          "subtitle": {
            "zh": "抵押 ETH 借出 USDT，币价跌到多少会被清算机器人瞬间没收抵押品？",
            "en": "Drag collateral prices to see when Health Factor drops below 1.0 and triggers liquidation."
          },
          "duration": "5 min",
          "sandboxType": "simulator",
          "concepts": [
            "Aave",
            "Health Factor",
            "LTV",
            "Liquidation Penalty"
          ],
          "prerequisites": [
            "05-stablecoins-peg/01-collateral-and-peg.html"
          ],
          "path": "06-lending-liquidation/01-health-factor-liquidation.html"
        },
        {
          "file": "02-flash-loan-arbitrage.html",
          "title": {
            "zh": "闪电贷（Flash Loan）原子套利演示",
            "en": "Flash Loan Atomic Arbitrage"
          },
          "subtitle": {
            "zh": "零抵押凭空借出 1,000 万美元！拆解“同一个区块内借还”的区块链独有魔法。",
            "en": "Borrowing millions with zero collateral using atomic transaction reverts."
          },
          "duration": "4 min",
          "sandboxType": "visualizer",
          "concepts": [
            "Flash Loan",
            "Atomic Transaction",
            "Revert",
            "Arbitrage"
          ],
          "prerequisites": [
            "04-first-swap-amm/01-xyk-slippage-lab.html"
          ],
          "path": "06-lending-liquidation/02-flash-loan-arbitrage.html"
        }
      ]
    },
    {
      "id": "07-perps-leverage",
      "order": 7,
      "layer": "V2: DeFi 金融引擎与市场博弈",
      "icon": "📈",
      "accentColor": "#f97316",
      "title": {
        "zh": "永续合约与杠杆博弈",
        "en": "Perpetual Futures & Leverage"
      },
      "summary": {
        "zh": "拆解币圈交易量最大的衍生品：永续合约如何靠资金费率锚定现货，以及高倍杠杆为何极易插针爆仓。",
        "en": "How perpetuals peg to spot via funding rates, and how leverage compresses your liquidation distance."
      },
      "lessons": [
        {
          "file": "01-funding-rate-engine.html",
          "title": {
            "zh": "资金费率（Funding Rate）锚定引擎",
            "en": "Funding Rate Engine"
          },
          "subtitle": {
            "zh": "永续合约永不交割，凭什么合约价格不会彻底脱离现货价格？",
            "en": "How periodic payments between longs and shorts keep perp prices anchored to spot."
          },
          "duration": "5 min",
          "sandboxType": "simulator",
          "concepts": [
            "Perp DEX",
            "Funding Rate",
            "Spot-Perp Basis",
            "Delta Neutral"
          ],
          "prerequisites": [],
          "path": "07-perps-leverage/01-funding-rate-engine.html"
        },
        {
          "file": "02-liquidation-heatmap.html",
          "title": {
            "zh": "杠杆倍数与插针爆仓模拟器",
            "en": "Leverage & Liquidation Simulator"
          },
          "subtitle": {
            "zh": "开 50 倍杠杆做多，币价只需要反向波动 2% 你的本金就会瞬间归零。",
            "en": "See how increasing leverage shrinks your margin for error to a razor-thin line."
          },
          "duration": "4 min",
          "sandboxType": "simulator",
          "concepts": [
            "Leverage",
            "Liquidation Price",
            "Margin",
            "Wick Hunt"
          ],
          "prerequisites": [
            "07-perps-leverage/01-funding-rate-engine.html"
          ],
          "path": "07-perps-leverage/02-liquidation-heatmap.html"
        }
      ]
    },
    {
      "id": "08-bonding-curves",
      "order": 8,
      "layer": "V2: DeFi 金融引擎与市场博弈",
      "icon": "🚀",
      "accentColor": "#ec4899",
      "title": {
        "zh": "联合曲线与新币发射",
        "en": "Bonding Curves & Token Launches"
      },
      "summary": {
        "zh": "拆解 Pump.fun 等现代 Meme 发射平台的底层数学：联合曲线定价、外盘毕业机制与早鸟砸盘博弈。",
        "en": "How Pump.fun-style bonding curves price new tokens and why late buyers become exit liquidity."
      },
      "lessons": [
        {
          "file": "01-bonding-curve-launch.html",
          "title": {
            "zh": "联合曲线（Bonding Curve）发射实验室",
            "en": "Bonding Curve Launchpad Lab"
          },
          "subtitle": {
            "zh": "花 2 美元就能发一个新币！拆解内盘联合曲线如何自动定价并“毕业”上外盘 DEX。",
            "en": "How virtual AMM bonding curves price tokens from zero to DEX graduation."
          },
          "duration": "5 min",
          "sandboxType": "simulator",
          "concepts": [
            "Bonding Curve",
            "Pump.fun",
            "Virtual Liquidity",
            "Graduation"
          ],
          "prerequisites": [
            "04-first-swap-amm/01-xyk-slippage-lab.html"
          ],
          "path": "08-bonding-curves/01-bonding-curve-launch.html"
        },
        {
          "file": "02-early-vs-late-dump.html",
          "title": {
            "zh": "早鸟筹码与砸盘数学模拟器",
            "en": "Early Bird vs Late Exit Liquidity"
          },
          "subtitle": {
            "zh": "为什么榜一大哥只花 1 SOL 买的币，涨 10 倍砸盘就能瞬间抽干后面 100 个散户的钱？",
            "en": "The brutal PvP math of asymmetric entry prices in meme coin launches."
          },
          "duration": "4 min",
          "sandboxType": "simulator",
          "concepts": [
            "PvP Math",
            "Exit Liquidity",
            "Market Cap Illusion",
            "Token Distribution"
          ],
          "prerequisites": [
            "08-bonding-curves/01-bonding-curve-launch.html"
          ],
          "path": "08-bonding-curves/02-early-vs-late-dump.html"
        }
      ]
    },
    {
      "id": "09-consensus-ledger",
      "order": 9,
      "layer": "V3: 底层基建与黑暗森林",
      "icon": "⛓️",
      "accentColor": "#6366f1",
      "title": {
        "zh": "账本模型与共识机制",
        "en": "Ledger Models & Consensus"
      },
      "summary": {
        "zh": "拆解比特币的 UTXO 找零账本与以太坊账户模型的本质区别，以及 PoW 算力竞争、51% 攻击与 PoS 质押惩罚。",
        "en": "Comparing Bitcoin UTXO vs Ethereum Accounts, and simulating PoW forks vs PoS slashing."
      },
      "lessons": [
        {
          "file": "01-utxo-vs-account.html",
          "title": {
            "zh": "UTXO 找零模型 vs 账户余额模型",
            "en": "UTXO vs Account Balance Model"
          },
          "subtitle": {
            "zh": "为什么比特币转账像“拿 100 块现金买 30 块东西找回 70 块”，而以太坊像银行卡扣款？",
            "en": "Why Bitcoin spends discrete cash bills while Ethereum updates account balances."
          },
          "duration": "5 min",
          "sandboxType": "visualizer",
          "concepts": [
            "UTXO",
            "Account Model",
            "Change Output",
            "Bitcoin vs ETH"
          ],
          "prerequisites": [
            "02-tx-gas-multichain/01-mempool-gas-auction.html"
          ],
          "path": "09-consensus-ledger/01-utxo-vs-account.html"
        },
        {
          "file": "02-pow-pos-fork.html",
          "title": {
            "zh": "PoW 最长链分叉与 PoS 惩罚模拟器",
            "en": "PoW Forking & PoS Slashing Lab"
          },
          "subtitle": {
            "zh": "没有中心服务器，全球节点如何对“哪条链是真的”达成共识？亲手模拟 51% 双花攻击与 Slashing。",
            "en": "How distributed nodes reach consensus and defend against double-spending."
          },
          "duration": "5 min",
          "sandboxType": "simulator",
          "concepts": [
            "PoW",
            "PoS",
            "51% Attack",
            "Finality",
            "Slashing"
          ],
          "prerequisites": [
            "09-consensus-ledger/01-utxo-vs-account.html"
          ],
          "path": "09-consensus-ledger/02-pow-pos-fork.html"
        }
      ]
    },
    {
      "id": "10-scaling-bridges",
      "order": 10,
      "layer": "V3: 底层基建与黑暗森林",
      "icon": "🌉",
      "accentColor": "#06b6d4",
      "title": {
        "zh": "Layer 2 扩容与跨链桥",
        "en": "Layer 2 Scaling & Bridges"
      },
      "summary": {
        "zh": "拆解以太坊 Rollup（OP 挑战期 vs ZK 零知识证明）如何降本百倍，以及跨链桥为何屡屡成为黑客提款机。",
        "en": "How Optimistic and ZK Rollups scale Ethereum, and why cross-chain bridges are prime hack targets."
      },
      "lessons": [
        {
          "file": "01-rollup-and-zk.html",
          "title": {
            "zh": "Rollup 扩容：OP 挑战期 vs ZK 数学证明",
            "en": "Optimistic vs ZK Rollups"
          },
          "subtitle": {
            "zh": "把 1,000 笔交易压成 1 笔发回主网！直观对比 Optimistic 与 ZK Rollup 的提现速度与安全哲学。",
            "en": "Batching transactions off-chain and comparing fraud proofs vs validity proofs."
          },
          "duration": "5 min",
          "sandboxType": "visualizer",
          "concepts": [
            "Layer 2",
            "Optimistic Rollup",
            "ZK Rollup",
            "7-Day Challenge"
          ],
          "prerequisites": [
            "02-tx-gas-multichain/02-eth-sol-tron-fees.html"
          ],
          "path": "10-scaling-bridges/01-rollup-and-zk.html"
        },
        {
          "file": "02-bridge-mechanics-hacks.html",
          "title": {
            "zh": "跨链桥底层机制与被盗路径模拟器",
            "en": "Cross-Chain Bridge Mechanics & Hacks"
          },
          "subtitle": {
            "zh": "资产根本没有“飞”到另一条链！拆解锁定铸造（Lock & Mint）为何一被黑就脱锚归零。",
            "en": "Why assets never actually leave their home chain, and how bridge exploits drain vaults."
          },
          "duration": "5 min",
          "sandboxType": "attack-defense",
          "concepts": [
            "Lock & Mint",
            "Wrapped Asset",
            "Bridge Hack",
            "Intent Bridge"
          ],
          "prerequisites": [
            "10-scaling-bridges/01-rollup-and-zk.html"
          ],
          "path": "10-scaling-bridges/02-bridge-mechanics-hacks.html"
        }
      ]
    },
    {
      "id": "11-mev-dark-forest",
      "order": 11,
      "layer": "V3: 底层基建与黑暗森林",
      "icon": "🌲",
      "accentColor": "#a855f7",
      "title": {
        "zh": "MEV 与黑暗森林博弈",
        "en": "MEV & The Dark Forest"
      },
      "summary": {
        "zh": "揭开链上最隐秘的猎杀场：拆解 MEV 机器人如何监控 Mempool 对你发动三明治攻击，以及如何用私有 RPC 隐身防夹。",
        "en": "How MEV bots hunt pending transactions in the mempool via sandwich attacks, and how Private RPCs protect you."
      },
      "lessons": [
        {
          "file": "01-sandwich-attack-lab.html",
          "title": {
            "zh": "三明治攻击（夹子机器人）时间轴沙盒",
            "en": "MEV Sandwich Attack Lab"
          },
          "subtitle": {
            "zh": "为什么你每次买完币价格就立刻回落？亲手复现夹子机器人在同一区块里“先买后卖”收割你。",
            "en": "Step-by-step simulation of front-running and back-running your swap inside a single block."
          },
          "duration": "5 min",
          "sandboxType": "attack-defense",
          "concepts": [
            "MEV",
            "Sandwich Attack",
            "Front-run",
            "Back-run",
            "Slippage"
          ],
          "prerequisites": [
            "04-first-swap-amm/01-xyk-slippage-lab.html",
            "02-tx-gas-multichain/01-mempool-gas-auction.html"
          ],
          "path": "11-mev-dark-forest/01-sandwich-attack-lab.html"
        },
        {
          "file": "02-private-rpc-protection.html",
          "title": {
            "zh": "黑暗森林隐身术：私有 RPC 防夹模拟器",
            "en": "Private RPC & MEV Protection"
          },
          "subtitle": {
            "zh": "如何绕过公开 Mempool 直接把交易塞给区块构建者，让全网夹子机器人变成瞎子？",
            "en": "Routing transactions through Flashbots Protect / MEV Blocker to hide from bots."
          },
          "duration": "4 min",
          "sandboxType": "attack-defense",
          "concepts": [
            "Flashbots Protect",
            "Private RPC",
            "Block Builder",
            "MEV Rebate"
          ],
          "prerequisites": [
            "11-mev-dark-forest/01-sandwich-attack-lab.html"
          ],
          "path": "11-mev-dark-forest/02-private-rpc-protection.html"
        }
      ]
    }
  ]
};
