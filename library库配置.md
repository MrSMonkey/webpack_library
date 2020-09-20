# wepack配置
请看webpack.config.js文件

# pacakge.json配置
* 
```
{
  "name": "library", // npm库的名称，安装时用npm i library
  "version": "1.0.0",
  "description": "",
  "main": "./dist/library.js",  // 这里需要配置成库打包后的库文件的路径
  "scripts": {
    "build": "webpack"
  },
  "keywords": [],
  "author": "Lichunlin",
  "license": "MIT",
  "dependencies": {
    "webpack": "^4.44.2",
    "webpack-cli": "^3.3.12"
  }
}

```

# npm包发布
* 在npm官网申请一个账号
* 在本地命令行里面运行
```
// 添加的本地npm用户账号
npm adduser
// 发布
npm publish
// 如何使用
npm install library
```