## network
`npx hardhat node` 任务的network只能指定`hardhat`，不能指定配置中其他network。

https://github.com/NomicFoundation/hardhat/issues/2305#issuecomment-1818108208

因为hardhat network只有两种
- built-in Hardhat Network
- JSON-RPC based networks 

  这种custom network需要设置url参数，指定node地址, 比如alchemy的url。而这个配置本义是连接其他的node，而并不是作为`hardhat node`任务的网络配置参数。


hardhat关于`forking other networks`的文档，也只提了两种方式：
- 修改默认的hardhat网络的配置
  ```
  networks: {
    hardhat: {
      forking: {
        url: "https://eth-mainnet.g.alchemy.com/v2/<key>",
        blockNumber: 14390000
      }
    }
  }
  ```
- 通过命令行, 启动一个本地node. 通过--fork 和 --fork-block-number修改网络配置

hardhat中提供两个Default networks object
```
{
    localhost: {
      url: "http://127.0.0.1:8545"
    },
    hardhat: {
      // See its defaults
    }
}
```
