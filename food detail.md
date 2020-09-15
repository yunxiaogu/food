## 项目细节

## Vue项目创建
  - 一：使用Vue CLI3创建项目
    ``` js
      vue create project_name
    ```
  - 二：在GitHub上创建远程仓库new repository
    * 项目一般是Public，使用Vue CLI3创建的项目会自动生成README.md、.gitignore文件，所以不用在创建的仓库配置中勾选
    * Choose a license暂时先不用选则协议
    * 最后点击Create repository
  - 三：创建本地仓库
    * 在本地创建的food文件夹中，以food为根目录，右键Git Bash Here(安装了git后)
    * git命令
      ``` js
        git init    (生成工作区域)
        git add .   (添加到暂存区)
        git commit -m '说明' (提交到版本区)
      ```
    * 本地仓库生成好了，默认就是master分支
  - 四：将本地master分支代码推送到远程的master分支中
    ``` js
      git remote add origin https://github.com/yunxiaogu/food.git　　(远程地址，并且给它取了一个别名：origin)
      git pull --rebase origin master 　(可能由于新创建的远程仓库里面的README或者licence文件不在本地仓库目录中，这时我们需要通过以下命令先将内容合并一下)
      git push origin master　　(开始推送)
    ```
  - 五：后续修改代码保存后，在推送到远程仓库中
    ``` js
      git add .                  (将文件提交到缓存区)

      git commit -m '说明'       (将修改提交到本地仓库)

      // git pull origin master  (从本地仓库或本地分支获取并集成(整合))

      // git remote add origin https://github.com/yunxiaogu/food.git (关联到自己GitHub上的仓库)

      git push -u origin master  (同步到远程仓库)
    ```

## Git使用
  ```
    git add .
  ```
  ```
    git status
  ```
  ```
    git commit -m '说明...'
  ```
  ```
    git push -u origin master
  ```

## 项目目录结构
  - food
      * assets
      * common
      * components
      * element
      * network
      * router
      * store
      * views

## .editorconfig配置文件
  - 一般项目都需要.editorconfig文件来对项目进行统一规范
  - 配置如下
    ```
      // .editorconfig
      root = true

      [*]
      charset = utf-8
      indent_style = space
      indent_size = 2
      end_of_line = lf
      insert_final_newline = true
      trim_trailing_whitespace = true
    ```


## 项目API接口准备
  - 使用**京东智联云-京东万象>API>生活服务>菜谱大全**的API接口服务。https://wx.jdcloud.com
  - URL: https://wx.jdcloud.com/gwtest/init/11072


## 项目的网络请求axios
  - 项目使用axios来发送网络请求。https://element.eleme.cn/#/zh-CN
  - npm安装
    ``` js
      npm install axios --save
    ```
  - **跨域问题 及 解决**
  - 第一步：在项目根目录下创建vue.config.js文件，添加如下配置
    ``` js
      // vue.config.js
      module.exports = {
        outputDir: 'dist',    //build输出目录
        assetsDir: 'assets',  //静态资源目录（js, css, img）
        lintOnSave: false,    //是否开启eslint
        devServer: {
          open: false,        //是否自动弹出浏览器页面
          host: "localhost",
          port: '8080',
          https: true,        //是否使用https协议
          hotOnly: false,     //是否开启热更新
          proxy: {
            '/api': {
              target: 'https://way.jd.com/jisuapi', //API服务器的地址
              changeOrigin: true,
              pathRewrite: {
                '^/api': ''
              }
            }
          }
        }
      }
      ```
  - 第二步：在network/request.js文件中添加如下配置
    ``` js
      // request.js
      ...
      instance.defaults.baseURL = '/api'
      instance.defaults.headers.post['Content-Type'] = 'application/json'
      ...
    ```

## router重复点击报异常
  - 在使用this.$router.push()、go()、replace()等方法时，如果重复点击了router，会抛出异常
    ```
      Uncaught (in promise) NavigationDuplicated: Avoided redundant navigation to current location: "/home".
      ...
    ```
  - 解决办法：将push()、go()、replace()方法中的回调函数补全
    ```
      this.$router.replace(this.path, (success) => {
        return
      }, (err) => {
        return
      })
    ```

## element-ui使用
  - 安装element-ui
    ```
      // 第一步
      npm install element-ui --save
    ```
  - 项目采用**按需引入**，减小项目体积
    ``` js
      vue add element
    ```

## better-scroll使用
  - 安装
    ```
      npm install better-scroll --save
    ```
    
