# Web3 Interactive Atlas

一套**「深度内容 + 交互式参数沙盒」**结合的 Web3 认知地图。纯静态零依赖，打开 `index.html` 即可在浏览器中零风险把玩链上底层机制。

## V1 模块清单（链上生存与第一笔交易）
1. **01-wallet-keys**：助记词/私钥推导雪崩效应、数字签名与验签
2. **02-tx-gas-multichain**：Mempool 与 EIP-1559 竞价、ETH / SOL / TRON 多链费用模型对比
3. **03-security-traps**：Approve 无限授权与 Permit 离线钓鱼、蜜罐/貔貅盘与撤池子拆解
4. **04-first-swap-amm**：AMM 恒定乘积曲线与滑点实验室、LP 无常损失对比器

## V2 模块清单（DeFi 金融引擎与市场博弈）
5. **05-stablecoins-peg**：稳定币锚定与套利修复沙盒、算法稳定币与死亡螺旋模拟器
6. **06-lending-liquidation**：健康系数与链上清算模拟器、闪电贷原子套利演示
7. **07-perps-leverage**：永续合约资金费率引擎、杠杆倍数与插针爆仓模拟器
8. **08-bonding-curves**：联合曲线发射与毕业实验室、早鸟筹码与砸盘数学模拟器

## 本地运行与扩展
- 直接双击 `index.html` 即可运行。
- 新增模块后执行 `python3 scripts/sync_catalog.py` 自动更新目录并推送部署。
