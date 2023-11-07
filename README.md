# <span id='top'> 🐶오구오구🐱</span>

[서비스소개](#이동할위치의텍스트)

##  **1. 서비스 소개**
> 🗝️ **오구오구 배포 링크 및 테스트 계정**

👉 [오구오구 시작하기](https://oguogu.netlify.app/)

```md
ID: oguogu5959@naver.com
PW: 123123
```

<br />

> 📑 **프로젝트 발표자료**

👉 

<br />

##  **2. 팀원 소개👩🏻‍💻**

<div align="center">

| <img src="https://github.com/FRONTENDSCHOOL7/final-05-oguogu/assets/53458437/e6b24baa-c56f-42f9-9915-4094603b6fcf" height="25px;"/> <br><img src="https://github.com/FRONTENDSCHOOL7/final-05-oguogu/assets/53458437/57075377-68bf-409b-94a7-86ba6299ffb5" height="25px;" /> |             <img src="https://github.com/FRONTENDSCHOOL7/final-05-oguogu/assets/53458437/fc95649e-8a8e-4643-a722-0cdb828d2563" height="25px;"/>              |           <img src="https://github.com/FRONTENDSCHOOL7/final-05-oguogu/assets/53458437/f30ab509-7b41-499a-9233-577f6e1f753d" height="25px;" />           |                                                                          
| :--------------------------------------------------------------------------------------------------------------------------------------: | :--------------------------------------------------------------------------------------------: | :-------------------------------------------------------------------------------------------: | 
|                      <img src="https://github.com/FRONTENDSCHOOL7/final-05-oguogu/assets/53458437/7aa6f7e7-880b-4f53-835e-116085fdfa2a" width="120px;" alt=""/>                       | <img src="https://avatars.githubusercontent.com/u/53458437?v=4" width="120px;" alt=""/> | <img src="https://avatars.githubusercontent.com/u/129969049?v=4" width="120px;" alt=""/> |   
|                                                 [👩🏻‍💻한혜지](https://github.com/hanhj0516)                                                 |                             [👩🏻‍💻최유진](https://github.com/yujin1228)                              |                            [👩🏻‍💻이주연](https://github.com/Meow-Chu)                             |                                                                                                  

</div>
<br />
<p align="right"><a href="#top">(🔼 Top)</a></p>
##  **3. 개발기간**

<br />

##  **4. 개발환경 및 기술스택**
### 개발환경

### 기술스택 및 선정이유

### 폴더구조
<details>
  <summary>폴더구조 펼쳐보기</summary>
  
  ```
  🐶 oguogu🐱
  ├─ .github
  │  ├─ ISSUE_TEMPLATE  ─────────────── 📜 이슈 템플릿
  │  └─ PULL_REQUEST_TEMPLATE.md ────── 📜 PR 템플릿
  │─ .gitignore
  │─ .prettierrc.json   ──────────────────── ⚙️ prettier 설정 파일
  │─  README.md
  │─ .jsconfig.json    
  ├─ public
  │  ├─ favicon.ico
  │  └─ index.html
  └─ 📂 src
  ├─ 📂 api     ───────────────────── 📲 Axios 인스턴스 및 API 관련 모듈 함수
  ├─ 📂 assets  ───────────────────── 🧸 이미지 등 정적 리소스
  ├─ 📂 atoms ─────────────────────── ✨ 리코일 관련 폴더
  ├─ 📂 components
  │  ├─ 📂 comment ────────────────── 📦 게시글상세페이지 기능 구현을 위한 컴포넌트
  │  ├─ 📂 common ─────────────────── 📦 공통 컴포넌트
  │  ├─ 📂 follow ─────────────────── 📦 팔로잉,팔로워 페이지 UI및 기능 구현을 위한 컴포넌트
  │  ├─ 📂 home ───────────────────── 📦 홈(피드) 페이지에서 사용되는 컴포넌트
  │  ├─ 📂 join ───────────────────── 📦 회원가입 페이지에서 사용되는 컴포넌트
  │  ├─ 📂 login ──────────────────── 📦 로그인 페이지에서 사용되는 컴포넌트
  │  ├─ 📂 post   ─────────────────── 📦 프로필, 게시글 작성에서 사용되는 컴포넌트
  │  ├─ 📂 product-page   ─────────── 📦 판매상품 페이지에서 사용되는 컴포넌트
  │  ├─ 📂 product   ──────────────── 📦 상품 관련 페이지에서 사용되는 컴포넌트
  │  └─ 📂 profile   ──────────────── 📦 프로필페이지 피드섹션에서 사용되는 컴포넌트
  │  └─ 📂 search    ──────────────── 📦 검색페이지에서 사용되는 컴포넌트
  ├─ 📂 constants   ───────────────── 🎈 로그인, 회원가입, 프로필수정 시 사용되는 상수
  │  └─ validate.js
  ├─ 📂 hooks ─────────────────────── ♻️ 커스텀 훅 폴더
  │  ├─ useConfirm.js
  │  ├─ useDebounce.js
  │  ├─ useHorizontalScroll.js
  │  ├─ useModal.js
  │  ├─ useObserve.js
  │  └─ useUserForm.js
  ├─ 📂 pages
  │  ├─ 📂 404  ──────────────────── 📝 404에러 페이지
  │  ├─ 📂 AddProductPage─────────── 📝 상품 등록 페이지
  │  ├─ 📂 ChatPage  ─────────────── 📝 채팅목록 및 채팅방 페이지
  │  ├─ 📂 FollowPage  ───────────── 📝 팔로잉, 팔로워 페이지
  │  ├─ 📂 HomePage  ─────────────── 📝 홈(피드) 페이지
  │  ├─ 📂 JoinPage  ─────────────── 📝 회원가입 페이지
  │  ├─ 📂 LoginPage  ────────────── 📝 로그인 페이지
  │  ├─ 📂 PostDetailPage  ───────── 📝 게시글 상세 페이지
  │  ├─ 📂 PostEditPage  ─────────── 📝 게시글 수정 페이지
  │  ├─ 📂 PostUpload  ───────────── 📝 게시글 작성 페이지
  │  ├─ 📂 PostEditPage  ─────────── 📝 판매 상품 수정 페이지
  │  ├─ 📂 ProductPage  ──────────── 📝 판매 상품 페이지
  │  ├─ 📂 ProfileEditPage  ──────── 📝 프로필 수정 페이지
  │  ├─ 📂 ProfilePage  ──────────── 📝 프로필 페이지
  │  ├─ 📂 SearchPage  ───────────── 📝 검색 페이지
  │  ├─ 📂 SplashPage  ───────────── 📝 스플래시 페이지
  ├─ 📂 router  ──────────────────── 📲 라우팅 관련 폴더
  ├─ 📂 styles   ─────────────────── 💄 전역으로 적용할 css 파일들이 포함된 폴더
  │  ├─ index.css
  │  └─  GlobalStyle.js
  ├─ App.js
  └─ index.js
  ```
</details>


### 컨벤션
<details>
  <summary>코드컨벤션</summary>
  
  ### ☑️ 코드 컨벤션

**- 문장이 종료될 때는 세미콜론을 붙여줍니다.** 

**- 함수명, 변수명은 카멜케이스로 작성합니다.** 

**- 가독성을 위해 한 줄에 하나의 문장만 작성합니다.** 

**- 주석은 설명하려는 구문에 맞춰 들여쓰기 합니다.**

```jsx
// Good
function someFunction() {
  ...

  // statement에 관한 주석
  statements
}
```

**- 연산자 사이에는 공백을 추가하여 가독성을 높입니다.** 

```jsx
a+b+c+d // bad
a + b + c + d // good
```

**- 콤마 다음에 값이 올 경우 공백을 추가하여 가독성을 높입니다.**

```jsx
var arr = [1,2,3,4]; //bad
var arr = [1, 2, 3, 4]; //good
```

**- 생성자 함수명의 맨 앞글자는 대문자로 합니다.** 

```jsx
function Person(){}
```

### ☑️ 코드 스타일 컨벤션

**Prettier** 

```jsx
{
  "arrowParens": "always", // 화살표 함수 괄호 사용 여부
  "printWidth": 160, // 줄 바꿈 할 폭 길이
  "tabWidth": 2, // 탭 너비
  "semi": true, // 세미콜론 사용 여부
  "singleQuote": true, // 홑따옴표 사용 여부
  "jsxBracketSameLine": false, // JSX의 마지막 `>`를 다음 줄로 내릴지 여부
  "bracketSameLine": false,  // 요소의 마지막 `>`를 다음 줄로 내릴지 여부
  "bracketSpacing": true, //객체 리터럴에서 괄호에 공백 삽입
  "quoteProps": "as-needed" // 객체 속성에 쿼테이션 적용 방식
}
```
</details>
<details>
  <summary>커밋컨벤션</summary>
  
  ```
  ✨ Feat      : 기능 추가, 삭제, 변경
  🐞 Fix       : 버그, 오류 수정
  🖍  Typofix  : 오타 수정
  ♻️ Refactor   : 코드 리팩토링
  🎨 Style     : CSS 등 사용자 UI 디자인 변경 (제품 코드 수정 발생, 코드 형식, 정렬 등의 변경)
  📝 Docs      : 문서 (문서 추가, 수정, 삭제)
  🧪 Test      : 테스트 (테스트 코드 추가, 수정, 삭제: 비즈니스 로직에 변경 없음)
  🌱 Chore     : 기타 변경사항 (빌드 스크립트 수정 등)
  ⚙️ Config     : npm 모듈 설치 등
  💬 Comment   : 필요한 주석 추가 및 변경
  🚚 Rename    : 파일 혹은 폴더명을 수정하거나 옮기는 작업만 하는 경우
  🗑 Remove    : 파일을 삭제하는 작업만 수행한 경우
  ```
</details>

<br />
<p align="right"><a href="#top">(🔼 Top)</a></p>

##  **5. UI & 기능소개**
### 1) 홈
|시작 화면|회원가입 페이지|프로필 설정 페이지|
|---|---|---|
|![splash]()|![회원가입]()|![프로필설정]()|

|로그인 페이지|피드 페이지|검색 페이지|
|:---:|:---:|:---:|
|![로그인]()|![피드]()|![검색]()|

### 2) 프로필
|프로필 페이지|팔로워/팔로잉 페이지|
|---|---|
|![프로필]()|![팔로우페이지]()|

|프로필 수정|로그아웃|
|:---:|:---:|
|![프로필수정]()|![로그아웃]()|

### 3) 게시글
|게시글 작성|게시글 수정|게시글 삭제|
|---|---|---|
|![게시글작성]()|![게시글수정]()|![게시글삭제]()|

|게시글 상세|댓글작성|댓글삭제|
|:---:|:---:|:---:|
|![좋아요기능]()|![댓글작성]()|[댓글삭제]()|

### 4) 판매상품
|상품등록|상품수정|상품삭제|
|---|---|---|
|![splash]()|![회원가입]()|![프로필]()|

|팔로잉 판매상품|유저별 판매상품|상품정렬|
|:---:|:---:|:---:|
|![로그인]()|![피드]()|![검색]()|

### 5) 채팅
|채팅리스트|채팅룸|
|---|---|
|![splash]()|![회원가입]()|

<br />
<p align="right"><a href="#top">(🔼 Top)</a></p>

##  **6. 세부 역할 분담**
### ❤️ 한혜지
> **🎨 디자인**

- UI 디자인 전체
- 발표 자료 제작
  
<br/>

> **UI 구현**

- 프로필페이지 내 판매상품,게시물 영역
- 팔로잉 팔로워 페이지
- 상품 등록/수정 페이지
- 게시글 등록/수정 페이지

<br/>

> **기능 구현**

- ㅇㅇ
- ㅇㅇ

<br/>

### 💙 최유진
> **⚙️ 프로젝트 초기세팅 및 관리**

- 프로젝트 초기세팅
- 깃허브 관리(코드리뷰 및 브랜치관리)
- 이슈,PR템플릿 설정
- 코드,커밋 컨벤션 설정
- 기술고문
- 리드미작성
- 프로젝트 배포

<br/>

> **UI 구현**

- 헤더,네브바,버튼,게시글카드,상품카드 공통 컴포넌트 제작
- 판매상품 페이지
- 홈 페이지
- 프로필페이지 내 판매상품,게시물 영역
- 게시글 상세 페이지

<br/>

> **기능 구현**

- 홈페이지
  - 게시글 카테고리별로 피드 필터링 기능 구현
  - useObesrve 커스텀훅을 이용해 피드 무한스크롤 구현
  - 카테고리 선택 버튼,판매상품 영역 useHorizontalScroll 커스텀훅을 이용해 마우스드래그로 가로스크롤이 가능하도록 구현
- 판매상품 페이지
    - 판매상품 삭제 기능 구현
    - 팔로잉중인 유저들의 판매상품모음, 유저별 판매상품모음 구현
    - 최신순,인기순(유저의팔로워기준),최저가순,최고가순으로 상품 정렬
- 모달
  - 모달바텀시트,컨펌모달 여닫기를 useModal,useConfirm 커스텀훅을 이용해 전역상태로 관리
  - UI는 같되 컨텐츠는 다른 여러개의 모달들을 type이라는 props로 구현
- 팔로우/언팔로우 기능 구현
  - 팔로우 언팔로우시 팔로우상태에 맞게 버튼 상태 구현
  - 언팔로우시 팔로잉 목록에서 실시간으로 사라지도록 구현
- 유저 검색 기능 구현
  - useDebounce 커스텀훅을 이용해 검색어입력이 완료되었을때(또는 검색어 입력을 잠시 멈추었을때) 검색api호출
  - 검색어와 일치하는 닉네임,계정아이디 텍스트부분 색상처리
  - 검색어와 일치하는 검색결과량이 많을 때 우선 12개 노출 후 '검색결과 더보기' 버튼 클릭 시 추가렌더링
- 게시글 세부 기능
  - 게시글 작성 기능 구현
  - 댓글 작성,삭제,신고 기능 구현
  - 좋아요 기능 구현
- axios 인스턴스 생성 및 모든 api호출 함수 작성
- 프로필 페이지
  - useObesrve 커스텀훅을 이용해 피드 무한스크롤
  - 이미지가 있는 게시글만 필터링해 액자형 피드 구현
- 로더 구현

<br/>

### 💛 이주연
> **📝 문서기록**

- 데일리스크럼 및 회의 기록
- 리드미작성
- 노션관리
- 요구사항 문서 작성

<br />

> **UI 구현**

- ㅇㅇ
- ㅇㅇ

<br/>

> **기능 구현**

- ㅇㅇ
- ㅇㅇ

<br/>
<p align="right"><a href="#top">(🔼 Top)</a></p>

##  **7. 주요코드**


<br/>
<p align="right"><a href="#top">(🔼 Top)</a></p>

##  **8. 리팩토링 계획**

<br/>
<p align="right"><a href="#top">(🔼 Top)</a></p>

##  **9. 소감**

### ❤️ 한혜지


### 💙 최유진


### 💛 이주연

<p align="right"><a href="#top">(🔼 Top)</a></p>
