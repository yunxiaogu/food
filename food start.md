## Vue项目准备
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


## 项目接口准备
  - 使用**京东智联云-京东万象>API>生活服务>菜谱大全**的API接口服务。[点击这里](https://wx.jdcloud.com/gwtest/init/11072)
  - URL: https://wx.jdcloud.com/gwtest/init/11072
