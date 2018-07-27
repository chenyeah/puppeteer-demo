# Puppeteer Demo

# 安装
因为墙的原因 `yarn add puppeteer` 会安装错误
```bash
ERROR: Failed to download Chromium r515411! Set "PUPPETEER_SKIP_CHROMIUM_DOWNLOAD" env variable to skip download.
```
所以我们换一种方式

1. 只下载模块而不build
    ```
    yarn add puppeteer --ignore-scripts
    ```
2. 手动下载Chromium文件，解压后放在本地
`chromium` 镜像下载地址：https://npm.taobao.org/mirrors/chromium-browser-snapshots/
- 放在模块的默认读取目录下
  例如 `node_modules\puppeteer\.local-chromium\win64-526987(系统类型-版本号)\chrome-win32(下载的文件名)\`  
  版本号来自 `puppeteer/package.json->puppeteer.chromium_revision`
- 放在其他目录，运行时设置路径参数
  [puppeteer.launch({executablePath:'ChromiumExePath'})](https://github.com/GoogleChrome/puppeteer/blob/master/docs/api.md#puppeteerlaunchoptions)


# 示例

## Demo1 网站截图
#### 运行
```
yarn demo1
```

源码 `src/demo1`

