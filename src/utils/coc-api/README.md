# coc-api

coc-api유틸리티는 Clash of Clans API(이하 COC API)에 요청을 보내는 유틸리티입니다.

내부적으로 API Key 인증과 에러처리 및 타입체크를 수행합니다.

## Requester

coc-api유틸리티에서 COC API에 요청을 보내는 함수를 Requester라고 합니다.

다음은 Requester중 하나인 getClan의 사용예시입니다.

```ts
import { getClan } from '@/utils/coc-api';
import type { GetClanParams } from '@/utils/coc-api/src/requesters/clans';

function FooComponent({ clanTag }: { clanTag: string }) {
  const params: GetClanParams = { tag: clanTag };
  getClan(params).then((cocApiResponse) => {
    const { response, data: clanInfo, isPassedTypeCheck } = cocApiResponse;
    /* ... */
  });
}
```

getClan에 params객체를 인수로 전달하여 호출합니다. 호출된 Requester인 getClan은 CocApiResponse객체를 resolve한 프로미스를 반환합니다.

## CocApiResponse

CocApiResponse객체의 구성은 다음과 같습니다.

```ts
interface CocApiResponse<T> {
  response: Response;
  data?: T;
  isPassedTypeCheck: boolean;
}
```

- response: 일반 fetch에서 반환되는 Response객체
- data: 요청하여 가져온 데이터
- isPassedTypeCheck: data가 `T`타입인지 확인 여부

## Requester 생성

Requester는 `createRequester`함수를 통해 생성해야 합니다.

우선 `createRequester`가 Requester를 생성하는 법을 알기전에 Requester의 타입정의를 보겠습니다.

```ts
type Requester<T, P> = (params: P) => Promise<CocApiResponse<T>>;
```

Requester는 `P`타입의 `params`를 인수로 받아 `T`타입의 `data`속성을 포함하는 CocApiResponse객체를 반환합니다.

그럼 이제 어떻게 `createRequester`가 Requester를 생성하는지 알아보겠습니다.

### createRequester

`createRequester`는 `fetcher`와 `typeChecker`라는 콜백함수를 인수로 받아 Requester를 반환합니다.

```ts
function createRequester<T, P>(fetcher: Fetcher<P>, typeChecker: TypeChecker<T>): Requester<T, P> {
  /* ... */
}
```

### fetcher

`fetcher`는 Requester가 실질적으로 COC API에 요청하는 코드를 작성합니다.

`fetcher`의 타입정의는 다음과 같습니다.

```ts
type Fetcher<P> = (fetchFromCocApi: FetchFromCocApi, params: P) => Promise<FetchingResult>;
```

`fetcher`는 `fetchFromCocApi`콜백함수와 `params`객체를 인수로 받고 `FetchingResult`객체를 resolve한 프로미스를 반환합니다.

- `fetchFromCocApi`: COC API에 요청을 보내는 함수입니다. `fetcher`내에서 이 함수를 사용하여 요청을 보내야 합니다. `fetchFromCocApi`콜백함수는 내부적으로 요청헤더에 API Key를 삽입하고 엔드포인트와 인수로 받은 `path`를 결합하여 생성된 url을 사용하여 `fetch`함수를 호출합니다. 타입정의는 다음과 같습니다.

```ts
type FetchFromCocApi = (path: string, options?: RequestInit) => Promise<Response>;
```

- `params`: `fetcher`에서 사용될 파라미터를 포함하는 객체입니다. 최족적으로 Requester의 `params`가 됩니다.
- `FetchingResult`객체는 `fetch`로 반환된 `Response`가 할당된 `response`와 `Response.json()`으로 반환된 객체가 할당된 `data`를 속성으로 같습니다. 정의는 다음과 같습니다.

```ts
interface FetchingResult {
  response: Response;
  data?: any;
}
```

`fetcher`의 사용예시입니다.

```ts
interface GetClanParams {
  tag: string;
}

const fetcher = async (fetchFromCocApi, { tag }: GetClanParams) => {
  const PATH = `/clans/${encodeURIComponent(tag)}`;

  const response = await fetchFromCocApi(PATH, { next: { revalidate: 5 } });
  const data = await response.json();

  return { response, data };
};
```

### typeChecker

`typeChecker`는 인수로 받은 `data`가 특정타입(아래 정의에서`T`)인지 검사하는 함수입니다.

`typeChecker`의 타입정의는 다음과 같습니다.

```ts
type TypeChecker<T> = (data: any) => data is T;
```

그리고 다음과 같이 사용됩니다.

```ts
interface Person {
  name: string;
  age: number;
}

const checkPerson: TypeChecker<Person> = (data): data is Person => {
  if (data && typeof data.name === 'string' && typeof data.age === 'number') {
    return true;
  }
  return false;
};
```

#### Requester 생성 예시

```ts
// src/requesters/clans/getClan.ts

import { createRequester } from '../createRequester.ts';
import type { Fetcher } from '../createRequester.ts';

//typeChecker
import { checkClan } from '@/utils/coc-api/types/clans/Clan.ts';

//params
export interface GetClanParams {
  tag: string;
}

//fetcher
const fetcher = async (fetchFromCocApi, { tag }: GetClanParams) => {
  const PATH = `/clans/${encodeURIComponent(tag)}`;

  const response = await fetchFromCocApi(PATH, { next: { revalidate: 5 } });
  const data = await response.json();

  return { response, data };
};

//requester
const getClan = createRequester(fetcher, checkClan);
```
