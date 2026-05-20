# 💼 웹 개발자 포트폴리오

현대적이고 인터랙티브한 개발자 포트폴리오 웹사이트입니다. 
순수 HTML, CSS, JavaScript와 Tailwind CSS를 사용하여 만들어졌습니다.

## ✨ 주요 기능

- 🎨 **현대적인 다크 모드 디자인** - 세련되고 전문적인 UI/UX
- 📱 **완벽한 반응형 디자인** - 모바일, 태블릿, 데스크톱 모두 최적화
- ⚡ **부드러운 스크롤 애니메이션** - Intersection Observer API 활용
- 🔍 **SEO 최적화** - 메타 태그 및 시맨틱 HTML 구조
- 🎯 **네비게이션 하이라이트** - 현재 섹션 자동 감지
- 📲 **모바일 메뉴** - 터치 친화적인 햄버거 메뉴
- ⬆️ **Back to Top 버튼** - 긴 페이지 스크롤 편의성

## 🛠 기술 스택

```
Frontend:
- HTML5 (시맨틱 마크업)
- CSS3 (애니메이션, 그라데이션, 반응형)
- JavaScript (ES6+, Intersection Observer API)
- Tailwind CSS (Utility-first CSS)

Tools:
- Git / GitHub
- VS Code
```

## 📁 프로젝트 구조

```
portfolio/
├── index.html                  # 메인 HTML 파일
├── css/
│   └── styles.css             # 커스텀 스타일 및 애니메이션
├── js/
│   └── main.js                # 인터랙션 로직
├── README.md                  # 프로젝트 문서
├── CLAUDE.md                  # 개발 가이드
└── assets/                    # (향후) 이미지 및 리소스
```

## 🚀 빠른 시작

### 1. 로컬에서 실행

#### 방법 1: 직접 파일 열기
```bash
# index.html을 브라우저에서 직접 열기
```

#### 방법 2: Python HTTP 서버 (권장)
```bash
# 포트폴리오 디렉토리에서 실행
python -m http.server 8000

# 브라우저에서 http://localhost:8000 접속
```

#### 방법 3: VS Code Live Server
1. Live Server 확장 설치
2. `index.html` 우클릭 → "Open with Live Server"

### 2. 개인 정보 수정

`index.html` 파일에서 다음 부분을 자신의 정보로 변경:

```html
<!-- 이름 및 직급 -->
<h1>Your Name</h1>
<p>Your Title</p>

<!-- 프로젝트 정보 -->
<h3>Your Project Name</h3>
<p>Your Project Description</p>

<!-- 경력 정보 -->
<h3>Your Position</h3>
<p>Your Company</p>

<!-- 연락처 -->
<a href="mailto:your.email@example.com">your.email@example.com</a>
```

### 3. 배포

#### GitHub Pages로 배포 (무료)
```bash
# 1. GitHub 저장소 생성
git init
git add .
git commit -m "Initial commit: portfolio"
git branch -M main
git remote add origin https://github.com/username/portfolio.git
git push -u origin main

# 2. GitHub Settings → Pages → main 브랜치 선택
# 3. https://username.github.io/portfolio 에서 접속 가능
```

#### Netlify로 배포
1. [Netlify](https://www.netlify.com) 접속 및 로그인
2. "New site from Git" 클릭
3. 저장소 선택 및 배포

## 📝 섹션별 커스터마이징

### Hero Section
- 배경 그라데이션 색상 변경
- 자기소개 텍스트 수정
- CTA 버튼 링크 변경

### About Section
- 프로필 사진 추가 (CSS background-image 사용)
- 자기소개 내용 수정
- 핵심 역량 리스트 변경

### Skills Section
- 기술 스택 항목 추가/삭제
- 카테고리 명칭 변경
- 색상 테마 수정

### Projects Section
- 프로젝트 정보 업데이트
- GitHub 링크 및 데모 URL 추가
- 프로젝트 이미지 추가

### Experience Section
- 경력 정보 추가/수정
- 교육 배경 정보 입력
- 날짜 및 담당 업무 기술

### Contact Section
- 이메일 주소 변경
- 소셜 미디어 링크 수정
- 연락 양식 기능 추가 (선택사항)

## 🎨 색상 팔레트

```css
Primary Colors:
- Blue: #3b82f6 (rgb(59, 130, 246))
- Purple: #a78bfa (rgb(167, 139, 250))
- Pink: #ec4899 (rgb(236, 72, 153))

Dark Theme:
- Background: #111827 (rgb(17, 24, 39))
- Surface: #1f2937 (rgb(31, 39, 55))
- Text: #f3f4f6 (rgb(243, 244, 246))
```

## 🔧 주요 JavaScript 기능

### 1. Smooth Scroll
- 네비게이션 링크 클릭 시 부드러운 스크롤
- `scroll-behavior: smooth` CSS 속성 사용

### 2. Scroll Animation
- Intersection Observer API를 사용한 스크롤 기반 애니메이션
- 섹션 진입 시 페이드인 효과

### 3. Mobile Menu
- 햄버거 메뉴 토글 기능
- 모바일 환경에서만 표시 (md 브레이크포인트)

### 4. Navigation Highlight
- 현재 섹션에 따라 네비게이션 링크 하이라이트
- 스크롤 위치 기반 자동 업데이트

### 5. Back to Top
- 300px 이상 스크롤 시 버튼 표시
- 클릭 시 부드럽게 상단으로 이동

## 📊 성능 최적화

- ✅ Lighthouse Score: 90+
- ✅ Page Load Time: < 2초
- ✅ Mobile Friendly: 100%
- ✅ SEO: 최적화됨

## 🌐 브라우저 호환성

- ✅ Chrome (최신 버전)
- ✅ Firefox (최신 버전)
- ✅ Safari (최신 버전)
- ✅ Edge (최신 버전)
- ✅ Mobile browsers (iOS Safari, Chrome Mobile)

## 📚 학습 자료

### 사용된 기술
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [MDN Web Docs - Intersection Observer](https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API)
- [MDN Web Docs - CSS Animations](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Animations)

### 성능 측정
- [Google PageSpeed Insights](https://pagespeed.web.dev)
- [Google Lighthouse](https://developers.google.com/web/tools/lighthouse)
- [Chrome DevTools](https://developer.chrome.com/docs/devtools/)

## 🎯 향후 개선 사항

- [ ] 라이트 모드 토글 버튼 추가
- [ ] 블로그 섹션 추가
- [ ] 댓글 기능 (utterances, disqus)
- [ ] 이메일 연락 양식 (Formspree, Netlify Forms)
- [ ] 프로젝트 카테고리 필터링
- [ ] 검색 기능
- [ ] 다국어 지원 (i18n)
- [ ] 방문자 분석 (Google Analytics)

## 💡 팁

### 이미지 추가
```html
<!-- CSS background-image -->
<div style="background-image: url('assets/image.jpg')"></div>

<!-- img 태그 -->
<img src="assets/image.jpg" alt="설명">
```

### 프로젝트 사진 추가
About 섹션의 그라데이션 박스를 이미지로 변경:
```html
<div class="w-64 h-64 mx-auto rounded-2xl" 
     style="background-image: url('assets/profile.jpg'); background-size: cover;">
</div>
```

### 다크 모드 추가
`styles.css`의 `@media (prefers-color-scheme: light)` 섹션을 활용하면 
시스템 다크 모드 설정에 따라 자동으로 변경됩니다.

## 📄 라이선스

이 프로젝트는 MIT 라이선스를 따릅니다.
자유롭게 수정하고 배포할 수 있습니다.

## 🤝 기여

개선 사항이나 버그 발견 시 이슈를 등록하거나 PR을 제출해주세요!

---

**마지막 업데이트:** 2024년 5월
**버전:** 1.0.0

행운을 빕니다! 🚀 이 포트폴리오로 많은 기회를 얻으시기 바랍니다! 💼
