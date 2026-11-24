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
    }
  ]
};
