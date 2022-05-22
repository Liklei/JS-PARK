### git merge 操作复现

##### step-1 创建分支
* 新建代码仓库，基于master分支新建三个dev分支
* （基于master创建三个分支.png）

##### step-2 查看分支日志
- git log 查看代码仓库提交日志
- （1-log-log查看当前指针状态.png）
- （1-1-log-log查看当前指针状态.png）
- （1-2-log-log查看当前指针状态.png）
- HEAD表示一个指针，本地仓库中当前的指向。我们可以看到当本地分支dev1提交到远程仓库时，HEAD指针已经不包含本地分支dev1;并且dev2、dev3与master 远程仓库保持一致;dev1中HEAD指针已经移动;

- git show d7a04e3d193b3501608711 查看某一次commit细节
- （2-log-show查看当前指针状态.png）
