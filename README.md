# ð Getting started with Strapi

## feature
- admin è¯­è¨ç¯å¢å¢å ä¸­æï¼åç½®æä»¶ï¼
- ali-ossï¼ä¸ä¼ æä»¶ï¼ä»æ¯æè±æåï¼
- åå®¹ç±»åæ¯æå¤éï¼éé¡¹éç½®ï¼ä»æ¯æè±æåï¼
- ckeditorå¯ææ¬ç¼è¾å¨

## æ¬å°å¼å

### ä¸åºäº docker
1ãè¿å¥äºæºå¨ï¼æåé¡¹ç®ï¼å¯å¨ mysql æ°æ®åº
ï¼å¦ææç°ææ°æ®åºï¼è·³è¿è¿æ­¥ï¼
```bash
docker-compose -f docker-compose.devdb.yml up -d
```

2.åå»º .env(åèç¤ºä¾)

3ãå®è£ä¾æ
```bash
npm i
```

4ãå¯å¨æå¡
```bash
npm run develop
```

### åºäº docker

1.æå»ºå¼åéå
```bash
docker build -t strapiapp:dev .
```

2.è¿å¥äºæºå¨ï¼å¯å¨æ°æ®åº
```bash
docker-compose -f docker-compose.devdb.yml up -d
```

3.å¯å¨æå¡
```bash
docker-compose down
docker-compose up
```
> æ°æ®åºä½¿ç¨è¿ç¨ä»åºçï¼åç¡®è®¤äºæºå¨å·²è¿è¡æ°æ®æå¡

## çäº§é¨ç½²

1.æå»ºå¼åéå
```bash
docker build --build-arg NODE_ENV=production -t strapiapp:latest -f Dockerfile.prod .
```

2.åå»º .env(åèç¤ºä¾)
- æ³¨æ DATABASE_PORT=33306ï¼å¯¹åº docker-compose.prod çè®¾ç½®

3.å¯å¨æå¡
```bash
docker-compose -f docker-compose.prod.yml down
docker-compose -f docker-compose.prod.yml up -d
```
