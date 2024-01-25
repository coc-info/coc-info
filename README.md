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

## 유틸리티

### coc-api

coc-api유틸리티는 Clash of Clans API(이하 COC API)에 요청을 보내는 유틸리티입니다. 내부적으로 API Key 인증과 에러처리 및 타입체크를 수행합니다.

coc-api(utils/coc-api/README.md링크)자세히

## 컨벤션

### 컴포넌트

#### 컴포넌트 종류

컴포넌트는 두 종류가 있습니다.

- 페이지 컴포넌트: 각 라우트에 하나씩 있는 page.tsx파일에 정의된 컴포넌트입니다.
- 일반 컴포넌트: 페이지 컴포넌트를 제외한 모든 컴포넌트입니다.

#### 컴포넌트 폴더 구조

일반 컴포넌트는 컴포넌트 이름으로 명명된 폴더의 내부 index.tsx파일에 작성합니다.

```
FooComponent
└─ index.tsx
```

```tsx
// FooComponent/index.tsx
function FooComponent() {
  return <div>{/* ... */}</div>;
}
```

일반 컴포넌트 폴더 내부에 자식 컴포넌트나 유틸리티 등 해당 컴포넌트에 관련된 것들을 포함시킬 수 있습니다.

```
FooComponent
├─ index.tsx
├─ BarComponent
│  └─ index.tsx
└─ utils
   └─ calc.ts
```

```tsx
// FooComponent/index.tsx
import BarComponent from './BarComponents';
import { sum } from './utils/calc';

function FooComponent() {
  const num = sum(5, 6);
  return (
    <div>
      <BarCompoent>{num}</BarCompoent>
    </div>
  );
}
```

모든 일반 컴포넌트는 `src/components`또는 각 라우트 폴더의 `_components`폴더 안에 위치해야합니다.

```
src
├─ components
│  └─ CommonButton
│     └─ ...
└─ app
   ├─ page.tsx
   ├─ _components
   │  └─ FooComponent
   │     └─ ...
   └─ clans
      ├─ page.tsx
      └─ _components
         └─ BarComponent
            └─ ...
```

`src/components`폴더는 모든 페이지에서 재사용 될 수 있는 컴포넌트를 포함합니다.

각 라우트 폴더의 `_components`폴더는 해당 라우트에서 사용될 컴포넌트를 포함합니다. 이 컴포넌트는 재사용을 고려하지 않아도 됩니다.
