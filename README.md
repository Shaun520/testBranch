# branch-study

Git 分支学习与练习仓库。

## 文档

- [Git 分支常用指令参考](docs/git-branch-commands.md) — 查看、创建、切换、合并、删除、远程分支等指令速查

## 快速练习

在项目根目录执行：

```bash
git branch
git status
git switch -c practice-branch
# 做一些改动后提交
git add . && git commit -m "练习提交"
git switch main
git merge practice-branch
git branch -d practice-branch
```

## 项目结构

```
branch-study/
├── backend/    # 后端
├── frontend/   # 前端
└── docs/       # Git 学习文档
```
