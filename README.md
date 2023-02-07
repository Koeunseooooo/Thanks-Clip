![GitHub contributors](https://img.shields.io/github/contributors/Koeunseooooo/Thanks-Clip?style=for-the-badge) [![GitHub issues](https://img.shields.io/github/issues/Koeunseooooo/Thanks-Clip?style=for-the-badge)](https://github.com/Koeunseooooo/Thanks-Clip/issues) 

🙌 개인 회고는 [여기](https://velog.io/@rhdmstj17/%EB%95%A1%EC%8A%A4%ED%81%B4%EB%A6%BD-%ED%94%84%EB%A1%9C%EC%A0%9D%ED%8A%B8-%EC%A0%84%EB%B0%98%EC%A0%81%EC%9D%B8-%ED%9A%8C%EA%B3%A0) 에서 볼 수 있습니다!
# 💌 Thanks Clip

![title_(shadowX)](https://user-images.githubusercontent.com/65647080/217139635-9e05cb03-1fe0-4368-8306-2f02c201047f.jpg)

## 🏠 프로젝트 소개


**쉽고 빠르게 짧은 동영상을 만들어 고마운 마음을 전해볼까요?**

돌아보면 주변에 참 고마운 분들이 많은 것 같습니다.

이번 기회에 주위의 감사한 사람들에게 하나뿐인 클립 영상으로 마음을 전달해보는 건 어떨까요?

짧은 감사편지를 작성하고, 받는 분에게 어울리는 키워드를 뽑아보세요.

여러분의 감사한 마음을 소중히 담아 영상으로 보내드립니다.

> GDSC CAU Frontend-final-project
프로젝트 기간 : 2023.01.02 ~ 2023.01.21


## 🔥 서비스 핵심 기능

### 1. 편지 쓰기 - from / to / letter

받는 사람, 보내는 사람의 이름을 입력한 후 편지 내용을 작성합니다.

<img width="300" alt="%E1%84%89%E1%85%B3%E1%84%8F%E1%85%B3%E1%84%85%E1%85%B5%E1%86%AB%E1%84%89%E1%85%A3%E1%86%BA_2023-02-02_%E1%84%8B%E1%85%A9%E1%84%92%E1%85%AE_12 36 58" src="https://user-images.githubusercontent.com/65647080/217139789-4f61726b-659c-4ba6-a261-0cafe5fe9b79.png" > |<img width="300" alt="%E1%84%89%E1%85%B3%E1%84%8F%E1%85%B3%E1%84%85%E1%85%B5%E1%86%AB%E1%84%89%E1%85%A3%E1%86%BA_2023-02-02_%E1%84%8B%E1%85%A9%E1%84%92%E1%85%AE_12 37 35" src="https://user-images.githubusercontent.com/65647080/217139793-3b219e52-b203-4fd1-bb71-7e73e217c8b3.png" >
-- | -- | 




### 2. 편지 태그 선택

받는 사람에게 어울리는 태그를 2~5개 선택합니다.

<img width="300" alt="%E1%84%89%E1%85%B3%E1%84%8F%E1%85%B3%E1%84%85%E1%85%B5%E1%86%AB%E1%84%89%E1%85%A3%E1%86%BA_2023-02-02_%E1%84%8B%E1%85%A9%E1%84%92%E1%85%AE_12 37 54" src="https://user-images.githubusercontent.com/65647080/217140866-8c2daa68-3428-4a93-879c-a780b653fbc1.png" width="50%" height="50%">



### 3. 편지지 꾸미기

1. 폰트 선택
    
    3가지 폰트 중 하나를 선택하여 편지 텍스트폰트를 변경할 수 있습니다.
    
2. 편지지 선택
3. 편지지 색 선택
4. 스티커 추가
<img width="300" alt="%E1%84%89%E1%85%B3%E1%84%8F%E1%85%B3%E1%84%85%E1%85%B5%E1%86%AB%E1%84%89%E1%85%A3%E1%86%BA_2023-02-02_%E1%84%8B%E1%85%A9%E1%84%92%E1%85%AE_12 39 07" src="https://user-images.githubusercontent.com/65647080/217140887-8b923e6f-6957-4e5e-b72d-73a2fa1d7953.png">



### 4. 영상으로 내보내기

1. 영상 `client`
    
    만들어진 편지 clip을 공유하기 전에 확인할 수 있습니다.
    
<img width="300" alt="%E1%84%89%E1%85%B3%E1%84%8F%E1%85%B3%E1%84%85%E1%85%B5%E1%86%AB%E1%84%89%E1%85%A3%E1%86%BA_2023-02-02_%E1%84%8B%E1%85%A9%E1%84%92%E1%85%AE_12 39 40" src="https://user-images.githubusercontent.com/65647080/217140911-59440861-15db-4323-83a4-cf656084866a.png">

    
2. 영상 `server`
    
    `aws lambda` 에서 clip을 만들고, `s3` 로 업로드합니다.
    

### 5. 카카오톡 공유

1. 보내는 사람
    
    만들어진 영상을 카카오톡 공유 기능을 통해 받는 사람에게 보낼 수 있습니다.
 
    <img width="300" alt="%E1%84%89%E1%85%B3%E1%84%8F%E1%85%B3%E1%84%85%E1%85%B5%E1%86%AB%E1%84%89%E1%85%A3%E1%86%BA_2023-02-02_%E1%84%8B%E1%85%A9%E1%84%92%E1%85%AE_12 40 39" src="https://user-images.githubusercontent.com/65647080/217140928-ab7074cf-3bfe-49d9-94ea-129a97bbee88.png">

2. 받는 사람
    
    보내는 사람으로부터 카카오톡 공유링크를 받습니다. 
    
    링크 클릭하면 동적라우팅되어 다운로드페이지로 이동합니다.
    

### 6. 다운로드 페이지

1. 다운로드
    
    렌더링이 완료되면 다운로드 버튼을 눌러 영상을 다운로드할 수 있습니다.
    
2. 편지 만들기
    
    버튼을 누르면 받는 사람도 편지를 만들 수 있습니다.
    
<img width="300" alt="%E1%84%89%E1%85%B3%E1%84%8F%E1%85%B3%E1%84%85%E1%85%B5%E1%86%AB%E1%84%89%E1%85%A3%E1%86%BA_2023-01-28_%E1%84%8B%E1%85%A9%E1%84%92%E1%85%AE_4 31 23" src="https://user-images.githubusercontent.com/65647080/217140940-44bc47b8-fdcd-486b-b88d-796276c9821b.png">


## 🔨 기술 스택

| 역할 | 종류 |
| --- | --- |
| Framework(SSR) | Next.js |
| Core library | remotion cookies-next @vercel/og partytown |
| Styling library | tailwindcss heroicons |
| State Management library | jotai |
| Backend(serverless) | aws lambda + s3 |
| Package Manager | pnpm |
| Formatting | Eslint, Prettier, husky, lint-staged |


## 🚀 우리의 규칙


- **git branch**
    - 협업시 효율적인 개발을 위해 feautre branch 주도 개발
    - feature 브랜치 생성 시 브랜치 이름은 `feature/담당자이름/기능이름`
    - feature 브랜치에서 짠 코드를 공유하기 위해 Pull Request를 생성
    - Open된 PR은 팀원들에게 리뷰를 받고, 완료되었다면 main 브랜치로 merge 진행
    - master 브랜치로 push시 `vercel` `CI/CD` 로 자동 배포
- **commit rule**
    
    
    | 제목 | 설명 |
    | --- | --- |
    | env | 개발 환경 셋업 |
    | feat | 새로운 기능 추가 |
    | fix | 버그 수정 |
    | docs | md 문서 수정 |
    | style | 코드 포맷팅, 세미콜론 누락, 코드 변경이 없는 경우 |
    | refactor | 코드 리펙토링 |
    | chore | 빌드 업무 수정, 패키지(package.json...) 수정 |
    | test | 테스트 코드, 리펙토링 테스트 코드 추가 |
    
- **Folder Structure**
    
    ```
    📦app
     ┣ 📂common
     ┣ 📂download
     ┃ ┣ 📂components
     ┣ 📂service
     ┣ 📂step
     ┃ ┣ 📂1
     ┃ ┣ 📂2
     ┃ ┣ 📂3
     ┃ ┣ 📂4
     ┣ 📜head.js
     ┣ 📜index.css
     ┣ 📜layout.js
     ┣ 📜logo.module.css
     ┗ 📜page.js
    📦atoms
     ┣ 📜index.js
     ┣ 📜letter.js
     ┗ 📜sticker.js
    📦constant
     ┣ 📜cookie.js
     ┣ 📜deployConfig.js
     ┣ 📜letter.js
     ┣ 📜path.js
     ┗ 📜videoConfig.js
    📦pages
     ┗ 📂api
     ┃ ┣ 📜image.jsx
     ┃ ┗ 📜rendering.js
    📦video
     ┣ 📂components
     ┣ 📜CompositionClient.jsx
     ┣ 📜CompositionServer.jsx
     ┣ 📜Root.jsx
     ┣ 📜index.jsx
     ┗ 📜webpack-override.js
    ```
    

## ⚙️ 프로젝트 Setup 가이드
1. **vscode** 확장 설치

    - prettier
    - eslint

2. **pnpm** 설치

    ```bash
    npm i -g pnpm
    ```

3. 프로젝트 **clone**

4. 프로젝트 패키지 **설치**

    ```bash
    pnpm i
    ```

    > `node_modules` 가 생성되는 것을 확인하세요!

5. 프로젝트 **dev** script 실행

    > 프로덕션 전, 개발을 할 때 사용합니다.

    ```bash
    pnpm dev
    ```

    **localhost:3000** 번으로 개발 서버가 열리는 것을 확인해주세요!

6. 프로젝트 **build** script 테스트

    > `nextJs`가 build를 잘 수행해주는 지 확인해주세요!

    ```bash
    pnpm build
    ```

    > `.next` 폴더가 생성된 것을 확인할 수 있어야 합니다.

7. 프로젝트 **preview** script 테스트

    잘 build된 프로젝트를 이제 실행해봅시다.

    > build결과인 `.next` 폴더를 테스트하는 과정입니다!

    ```bash
    pnpm start
    ```

    **localhost:3000** 빌드용 개발 서버가 열리는 것을 확인해주세요!

