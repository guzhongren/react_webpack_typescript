# react_webpack_typescript
> 以Typescript为编程语言，使用React框架及Webpack打包工具设计的组件式开发程序模板

### 基础环境
| 序号     | 名称     | 版本        |
| :------:  |:------: | :---------:|
|1          |Node      | ^v6.10.3LTS|
|2          |Typesctipt| ^2.3       |           
|3          |Webpack   | 2          |

### 安装

1. clone项目
```shell
git clone https://github.com/Guzhongren/react_webpack_typescript.git
```
2. 安装依赖

    1. 在 ***项目跟目录*** 执行如下shell
        ``` shell
        npm install
        ```
    2. 全局安装webpack
        ```shell
        npm install -g webpack
        ```        
3. 运行项目
    ### 打包公共资源
    ```shell
    npm run vendor
    ```
    ### 开发环境运行
    在项目跟目录运行如下命令
    ```shell
    npm run dev
    ```
    在浏览器中打开 http://localhost:8080 即可
    ### 生产环境运行
    ```shell
    npm run build
    ```
    在浏览器中打开wwwroot下的index.html页面即可
    ### 效果
    ![React+ Webpack+ Typescript](./wwwroot/imgs/react_webpack_typescript.png)

### 参考
本项目使用最新版bootstrap-react,名称为[reactstrap](https://reactstrap.github.io/);

API参考地址为 <https://reactstrap.github.io/>
