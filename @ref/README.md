# Ref
- 도메인 주소
https://nicespoons.com/

- 부트스트랩 기본 grid 사용방법
    - https://getbootstrap.com/docs/5.2/layout/grid/

- 민티
    - https://bootswatch.com/minty/
    
- 아이콘
    - 부트스트랩 기본 아이콘 : https://icons.getbootstrap.com/
    - 폰트어썸 아이콘 : https://fontawesome.com/docs/web/use-with/vue/add-icons
- scss 설치시 version 오류.
    - https://cli.vuejs.org/guide/css.html#css-modules
    - vue-cli 4, webpack 4에서 scss 사용시 sass-loader 버전을 10으로 제한해야함.
```
npm install -D sass-loader@^10 sass
```

- color palette
    - https://colorhunt.co/
    - https://colors.muz.li/
    - https://color.adobe.com/ko/create/color-wheel
    - (색상조합 사이트 모음 블로그)[https://moo-you.tistory.com/214]

- 카카오톡 로그인 api
# 기능 소개
-  OAuth 2.0
### openId Connect
- 로그인 세션 대신 사용할 수 있는 JWT 형식의 토큰을 제공.
- ID 토큰의 만료 시간은 액세스 토큰과 동일하다.

- 회원가입을 한 이력이 있으면 바로 로그인,
- 회원가입이 안되어있으면 동의정보 구한 후 로그인.
- (JWT는 어디에 저장해야할까?)[https://velog.io/@0307kwon/JWT%EB%8A%94-%EC%96%B4%EB%94%94%EC%97%90-%EC%A0%80%EC%9E%A5%ED%95%B4%EC%95%BC%ED%95%A0%EA%B9%8C-localStorage-vs-cookie]
- (login 세션 유지하기1)[https://kdinner.tistory.com/60]
- (login 세션 유지하기2)[https://minu0807.tistory.com/64]
- (login 세션 유지하기3)[https://carrotweb.tistory.com/141]


### jwt를 이용한 유저 정보 요청

### 새로고침시 store 유저정보 날라가는 현상
#### 원인
- 새로고침시 vue 인스턴스가 소면 후 다시 생성되기 때문에 vuex의 state도 모두 초기화 되어버림.

#### 해결방법
- vuex-persistedstate 이용
- state에 저장된 값을 웹 브라우저의 localStorage에 저장 및 업데이트를 해준다.
- 그래서 새로고침되어도 state의 값을 localStorage에서 다시 동기화 시켜준다.
- 플러그인 설치
'''
npm install --save vuex-persistedstate
'''

- 플러그인에 세팅을 해준 후 로컬 스토리지에 업데이트할 파일만 설정해줄수있다.
- 모든 state를 로컬스토리지에 저장하게되면 성능 저하가 올 수 있기 때문.
```jsx
// store/index.js
import { createStore } from 'vuex';
import createPersistedState from 'vuex-persistedstate';

import { user } from './user';
import { score } from './score';

export default createStore({
	modules: {
		user,
		score,
	},
	plugins: [
		createPersistedState({
			paths: ['user'],
		}),
	],
});

```

