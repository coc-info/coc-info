# COC Info

## 시스템 아키텍처
![시스템 아키텍처](https://github.com/coc-info/coc-info/assets/78804014/498c5b5f-d26c-48a9-b4fb-d80b9900d134)

## 시작
클래시 오브 클랜 API(https://developer.clashofclans.com) 에서 API키를 발급 받습니다.

프로젝트 내의 .env.local.example파일을 토대로 .env.local파일을 생성합니다.

발급받은 API키를 .env.local파일 내 COC_API_KEY에 할당합니다.
```
# .env.local
COC_API_KEY= #coc api key
```

아래의 명령어로 프로젝트를 시작합니다.
```
# 개발 환경
npm run dev
```

```
# 프로덕트 환경
npm run build
npm run start
```
