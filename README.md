# 🚀 Getting started with Strapi

## feature
- admin 语言环境增加中文
- ali-oss（上传文件，仅支持英文名）
- 内容类型支持多选（选项配置，仅支持英文名）

## 本地开发

### 不基于 docker
1、进入云机器，拉取项目，启动 mysql 数据库
（如果有现成数据库，跳过这步）
```bash
docker-compose -f docker-compose.devdb.yml up -d
```

2.创建 .env(参考示例)

3、安装依懒
```bash
npm i
```

4、启动服务
```bash
npm run develop
```

### 基于 docker

1.构建开发镜像
```bash
docker build -t strapiapp:dev .
```

2.进入云机器，启动数据库
```bash
docker-compose -f docker-compose.devdb.yml up -d
```

3.启动服务
```bash
docker-compose down
docker-compose up
```
> 数据库使用远程仓库的，先确认云机器已运行数据服务

## 生产部署

1.构建开发镜像
```bash
docker build --build-arg NODE_ENV=production -t strapiapp:latest -f Dockerfile.prod .
```

2.创建 .env(参考示例)
- 注意 DATABASE_PORT=33306，对应 docker-compose.prod 的设置

3.启动服务
```bash
docker-compose -f docker-compose.prod.yml down
docker-compose -f docker-compose.prod.yml up -d
```
