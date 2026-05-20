# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

---

## 🌍 언어 및 커뮤니케이션 규칙

### 기본 설정
- **기본 응답 언어**: 한국어
- **코드 주석**: 한국어로 작성
- **커밋 메시지**: 한국어로 작성
- **문서화**: 한국어로 작성
- **변수명/함수명**: 영어 (코드 표준 준수)

### 예시
```javascript
// ✅ 올바른 예시
const getUserData = () => {
    // 사용자 데이터를 가져오는 함수
    return fetch('/api/user');
};

// ❌ 피해야 할 예시
const 사용자데이터가져오기 = () => {
    // user data get function
    return fetch('/api/user');
};
```

---

## 📌 프로젝트 개요

**프로젝트명**: 웹 개발자 포트폴리오  
**목표**: 현대적이고 인터랙티브한 개발자 포트폴리오 웹사이트 구축  
**기술 스택**: HTML5, CSS3, JavaScript (ES6+), Tailwind CSS  
**배포**: GitHub Pages, Netlify 등

---

## 🛠 개발 환경 및 실행

### 필수 도구
- VS Code (코드 에디터)
- Chrome/Firefox (DevTools 필요)
- Python 3.x (로컬 웹 서버용)
- Git (버전 관리)

### 로컬 실행

```bash
# 포트폴리오 디렉토리로 이동
cd portfolio

# Python HTTP 서버 실행
python -m http.server 8000

# 브라우저에서 접속
http://localhost:8000
```

### VS Code Live Server 사용
1. "Live Server" 확장 설치
2. `index.html` 우클릭 → "Open with Live Server"

---

## 📁 프로젝트 구조

```
portfolio/
├── index.html              # 메인 페이지 (7개 섹션 포함)
│   ├── Navigation         # 고정 헤더 + 모바일 메뉴
│   ├── Hero              # 첫 인상 섹션
│   ├── About             # 자기소개 섹션
│   ├── Skills            # 기술 스택 (3개 카테고리)
│   ├── Projects          # 포트폴리오 (4개 프로젝트)
│   ├── Experience        # 경력/교육 (타임라인)
│   ├── Contact           # 연락처 & 소셜 링크
│   └── Footer            # 저작권 정보
│
├── css/
│   └── styles.css        # 애니메이션, 반응형, 커스텀 스타일
│
├── js/
│   └── main.js           # 인터랙션 로직 (이벤트, 스크롤 효과)
│
├── assets/               # (향후) 이미지, 폰트 등
│
├── README.md             # 사용자 가이드
└── CLAUDE.md            # 개발 가이드 (이 파일)
```

---

## 🏗 아키텍처

### 3계층 분리 구조

```
┌─────────────────────────────────────────┐
│   Presentation Layer (index.html)      │
│  - 시맨틱 HTML5 구조                    │
│  - Tailwind CSS 유틸리티 클래스         │
│  - 섹션별 모듈화된 마크업              │
└─────────────────────────────────────────┘
              ↓
┌─────────────────────────────────────────┐
│   Styling Layer (css/styles.css)        │
│  - @keyframes 애니메이션 정의            │
│  - 호버/포커스 효과                     │
│  - 반응형 디자인 (@media queries)      │
│  - 다크/라이트 모드 지원                │
└─────────────────────────────────────────┘
              ↓
┌─────────────────────────────────────────┐
│   Logic Layer (js/main.js)              │
│  - 이벤트 리스너 (클릭, 스크롤)          │
│  - DOM 조작 (classList 추가/제거)       │
│  - Intersection Observer API            │
│  - 애니메이션 트리거                    │
└─────────────────────────────────────────┘
```

### 주요 개발 패턴

#### 1. Vanilla JavaScript (프레임워크 없음)
- 모든 로직이 `main.js`에 집중
- DOM 조작은 `querySelector` / `querySelectorAll` 사용
- 간단하고 성능 효율적

#### 2. 스크롤 기반 애니메이션
```javascript
// Intersection Observer를 사용한 동적 스크롤 애니메이션
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            // 화면에 진입하면 'visible' 클래스 추가
            entry.target.classList.add('visible');
        }
    });
}, observerOptions);
```

#### 3. 이벤트 위임
```javascript
// 모바일 메뉴 토글
menuBtn.addEventListener('click', () => {
    mobileMenu.classList.toggle('hidden');
});

// 네비게이션 링크 일괄 처리
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        mobileMenu.classList.add('hidden');
    });
});
```

---

## 📝 코드 구조 상세 분석

### HTML (index.html)

**구조 원칙:**
- 시맨틱 태그 사용 (`<header>`, `<nav>`, `<section>`, `<footer>`)
- ID로 섹션 식별 (앵커 링크용)
- Tailwind CSS 유틸리티 클래스 직접 적용

**주요 클래스:**
| 클래스 | 용도 | 적용 대상 |
|--------|------|----------|
| `nav-link` | 네비게이션 링크 | a 태그 |
| `scroll-animate` | 스크롤 애니메이션 | 섹션 내 모든 요소 |
| `animate-*` | 초기 로드 애니메이션 | Hero 섹션 요소 |
| `skill-card` | 기술 카드 호버 효과 | Skills 카드 |
| `project-card` | 프로젝트 카드 호버 효과 | Projects 카드 |

### CSS (styles.css)

**애니메이션 정의:**
```css
@keyframes fade-in { ... }           /* 페이드 인 */
@keyframes slide-in-left { ... }     /* 왼쪽 슬라이드 */
@keyframes slide-in-right { ... }    /* 오른쪽 슬라이드 */
@keyframes bounce { ... }             /* 바운스 */
```

**핵심 스타일:**
- **다크 모드 (기본)**: 배경 `#111827`, 텍스트 `#f3f4f6`
- **그라데이션**: Blue → Purple → Pink
- **전환 효과**: `transition: all 0.3s ease`
- **반응형 기준**: 768px (모바일 vs 데스크톱)

**반응형 브레이크포인트:**
```css
/* 모바일: < 640px */
/* 태블릿: 640px ~ 1024px */
@media (max-width: 768px) { ... }

/* 데스크톱: > 1024px */
@media (min-width: 1024px) { ... }
```

### JavaScript (main.js)

**주요 기능:**

| 기능 | 설명 | 핵심 코드 |
|------|------|----------|
| **모바일 메뉴 토글** | 햄버거 메뉴 열기/닫기 | `mobileMenu.classList.toggle('hidden')` |
| **Scroll 애니메이션** | 화면 진입 시 요소 나타남 | `observer.observe(element)` |
| **네비게이션 하이라이트** | 현재 섹션 표시 | `updateActiveNavLink()` |
| **Back to Top 버튼** | 300px 이상 스크롤 시 표시 | `window.scrollY > 300` |
| **Smooth Scroll 링크** | 앵커 링크 부드러운 이동 | `window.scrollTo({ behavior: 'smooth' })` |

**Intersection Observer 옵션:**
```javascript
const observerOptions = {
    threshold: 0.1,              // 요소 10%가 보이면 트리거
    rootMargin: '0px 0px -100px 0px'  // 하단 100px 여유
};
```

---

## 🎯 개발 가이드

### 콘텐츠 수정 (HTML만 변경)

```html
<!-- 이름 변경 -->
<h1>Park Sung Kwan</h1> → <h1>당신의 이름</h1>

<!-- 직책 변경 -->
<p>웹 개발자 | Frontend Developer</p>

<!-- 이메일 수정 -->
<a href="mailto:park.sungkwan@gmail.com">
→ <a href="mailto:당신의이메일@example.com">

<!-- 프로젝트 정보 수정 -->
<h3>반응형 포트폴리오 웹사이트</h3>
→ <h3>당신의 프로젝트명</h3>

<p>설명</p>
→ <p>프로젝트 설명</p>
```

### 스타일 커스터마이징

```css
/* 색상 변경 */
.from-blue-500.to-purple-600  /* 파란색 → 보라색 */
→ .from-green-500.to-teal-600 /* 초록색 → 청록색 */

/* 폰트 변경 */
/* styles.css에 Google Fonts 추가 */
@import url('https://fonts.googleapis.com/css2?family=YourFont&display=swap');

/* 여백 조정 */
px-8 py-3  /* padding 8 + 3 */
→ px-6 py-2 /* 더 작게 */
```

### 이미지 추가

```html
<!-- 프로필 사진 추가 -->
<div class="w-64 h-64 mx-auto rounded-2xl" 
     style="background-image: url('assets/profile.jpg'); 
             background-size: cover;
             background-position: center;">
</div>
```

### 섹션 추가

```html
<!-- 새로운 섹션 추가 -->
<section id="blog" class="py-24">
    <div class="container mx-auto px-4 max-w-6xl">
        <h2 class="text-4xl font-bold mb-12 text-center">블로그</h2>
        <!-- 콘텐츠 -->
    </div>
</section>

<!-- 네비게이션에도 링크 추가 -->
<a href="#blog" class="nav-link">Blog</a>
```

---

## 🔧 주요 수정 포인트

| 작업 | 수정 대상 | 위치 |
|------|----------|------|
| 이름/직책 변경 | `index.html` | 라인 1-20 |
| 자기소개 수정 | `index.html` | 라인 180-200 |
| 프로필 사진 추가 | `css/styles.css` | Hero section |
| 프로젝트 정보 | `index.html` | 라인 250-310 |
| 경력/교육 정보 | `index.html` | 라인 350-390 |
| 연락처 정보 | `index.html` | 라인 410-450 |
| 색상 테마 변경 | `index.html` + `styles.css` | 전체 |
| 폰트 변경 | `styles.css` | 라인 150+ |

---

## 🚀 배포

### GitHub Pages (무료)

```bash
# 1. 저장소 생성 및 파일 푸시
git init
git add .
git commit -m "초기 포트폴리오 프로젝트"
git branch -M main
git remote add origin https://github.com/username/portfolio.git
git push -u origin main

# 2. GitHub Settings → Pages 설정
# Main branch 선택 → Save

# 3. 배포 완료
# https://username.github.io/portfolio 에서 접속 가능
```

### 커스텀 도메인 연결

```bash
# 1. 도메인 DNS 설정
# DNS A 레코드: 185.199.108.153 등
# 또는 CNAME: username.github.io

# 2. GitHub Pages Settings에 도메인 입력
# 3. HTTPS 자동 활성화 (1-24시간)
```

---

## 🧪 테스트 및 최적화

### 반응형 디자인 테스트

```bash
# Chrome DevTools 사용
- F12 → Device Toolbar (Ctrl+Shift+M)
- 모바일 (iPhone 12): 390px
- 태블릿 (iPad): 768px
- 데스크톱: 1920px 이상

테스트 체크리스트:
☐ 모바일 메뉴 정상 작동
☐ 텍스트 가독성 (최소 16px)
☐ 버튼 클릭 영역 (최소 44x44px)
☐ 이미지 스케일 적절
☐ 애니메이션 부드러움 (60fps)
```

### 성능 측정

```bash
# Google PageSpeed Insights
https://pagespeed.web.dev

# Lighthouse (Chrome DevTools)
F12 → Lighthouse → Generate report

목표 점수:
- Performance: 90+
- Accessibility: 95+
- Best Practices: 90+
- SEO: 100
```

### SEO 최적화

이미 적용된 사항:
- ✅ 시맨틱 HTML5 태그
- ✅ 메타 태그 (description, og:image)
- ✅ 구조화된 네비게이션
- ✅ 모바일 친화성

추가 개선사항:
- Google Search Console 등록
- Sitemap 생성 (`sitemap.xml`)
- robots.txt 작성

---

## 🐛 디버깅 팁

### 콘솔에서 확인

```javascript
// 네비게이션 상태 확인
console.log(document.querySelector('nav').classList);

// 현재 스크롤 위치
console.log(window.scrollY);

// 요소의 오프셋 (앵커 링크용)
console.log(document.getElementById('about').offsetTop);

// Intersection Observer 활성 상태
console.log(observer);
```

### DevTools 활용

| 탭 | 용도 |
|----|------|
| **Elements** | CSS 실시간 수정, 선택자 확인 |
| **Console** | JavaScript 오류, 변수 확인 |
| **Network** | 리소스 로딩 시간 |
| **Performance** | 성능 프로파일링 |

### 일반적인 문제 해결

| 문제 | 원인 | 해결 방법 |
|------|------|----------|
| 스크롤 애니메이션 미작동 | Observer threshold 오류 | threshold 값 0.1 ~ 0.5 범위 조정 |
| 모바일 메뉴 안 닫힘 | hidden 클래스 제거 누락 | navLinks 클릭 핸들러에서 메뉴 닫기 |
| 이미지 안 보임 | 경로 오류 | 상대 경로 확인 (`./assets/image.jpg`) |
| 네비게이션 하이라이트 오류 | 섹션 ID 불일치 | 링크 href와 섹션 ID 일치 확인 |

---

## 📚 참고 자료

### 공식 문서
- [MDN Web Docs](https://developer.mozilla.org/) - 웹 표준
- [Tailwind CSS](https://tailwindcss.com/docs) - CSS 프레임워크
- [JavaScript.info](https://javascript.info/) - JS 기초

### 성능 도구
- [Google PageSpeed Insights](https://pagespeed.web.dev/)
- [Google Lighthouse](https://developers.google.com/web/tools/lighthouse)
- [Can I Use](https://caniuse.com/) - 브라우저 호환성

### 디자인 영감
- [Dribbble](https://dribbble.com/) - 포트폴리오 영감
- [Behance](https://www.behance.net/) - 개발자 포트폴리오
- [CSS Design Awards](https://www.cssdesignawards.com/) - 수상작 분석

---

## 📋 커밋 메시지 컨벤션

```bash
# 기능 추가
git commit -m "feat: 새로운 섹션 추가"

# 버그 수정
git commit -m "fix: 모바일 메뉴 닫기 오류"

# 스타일 변경
git commit -m "style: 색상 팔레트 변경"

# 성능 최적화
git commit -m "perf: 이미지 최적화"

# 문서 업데이트
git commit -m "docs: README 업데이트"

# 코드 리팩토링
git commit -m "refactor: JavaScript 로직 정리"
```

---

## 🎓 학습 경로

### Phase 1: 기초 구조 (완료 ✅)
- ✅ HTML 마크업
- ✅ Tailwind CSS 스타일
- ✅ Vanilla JavaScript 기본

### Phase 2: 고급 기능 (진행 예정)
- [ ] 라이트 모드 토글
- [ ] 더 많은 색상 옵션
- [ ] 마이크로 애니메이션 강화

### Phase 3: 기능 확장
- [ ] 이메일 연락 양식
- [ ] 블로그 섹션
- [ ] 프로젝트 필터링

### Phase 4: 배포 & 최적화
- [ ] GitHub Pages 배포
- [ ] 커스텀 도메인
- [ ] Google Analytics

---

## 🔑 핵심 요약

```
구조: Vanilla JS + Tailwind CSS (프레임워크 없음)
언어: 한국어 (주석, 문서, 커밋)
스타일: 현대적 다크 모드 (그라데이션, 애니메이션)
반응형: 모바일 우선 설계
성능: 가벼운 파일 크기, 빠른 로딩
```

이 포트폴리오는 **순수 웹 기술**로 만들어진 
**견고하고 확장 가능한** 프로젝트입니다! 🚀
