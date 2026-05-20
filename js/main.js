// DOM 요소 캐싱
const navbar = document.getElementById('navbar');
const menuBtn = document.getElementById('menuBtn');
const mobileMenu = document.getElementById('mobileMenu');
const backToTopBtn = document.getElementById('backToTop');
const navLinks = document.querySelectorAll('.nav-link');
const darkModeToggle = document.getElementById('darkModeToggle');
const darkModeToggleMobile = document.getElementById('darkModeToggleMobile');

// 모바일 메뉴 토글
menuBtn.addEventListener('click', () => {
    mobileMenu.classList.toggle('hidden');
    // 햄버거 메뉴 애니메이션
    const spans = menuBtn.querySelectorAll('span');
    spans[0].classList.toggle('rotate-45');
    spans[1].classList.toggle('opacity-0');
    spans[2].classList.toggle('-rotate-45');
});

// 네비게이션 링크 클릭 시 메뉴 닫기
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        mobileMenu.classList.add('hidden');
        const spans = menuBtn.querySelectorAll('span');
        spans[0].classList.remove('rotate-45');
        spans[1].classList.remove('opacity-0');
        spans[2].classList.remove('-rotate-45');
    });
});

// Intersection Observer를 사용한 스크롤 애니메이션
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, observerOptions);

// 섹션별 요소에 관찰자 적용
document.querySelectorAll('section').forEach(section => {
    // 섹션 내 모든 요소에 scroll-animate 클래스 추가
    const elements = section.querySelectorAll('h2, h3, p, div, a');
    elements.forEach((el, index) => {
        if (!el.classList.contains('animate-fade-in') &&
            !el.classList.contains('animate-slide-in-left') &&
            !el.classList.contains('animate-slide-in-right')) {
            el.classList.add('scroll-animate');
            // 요소별 딜레이 추가
            el.style.transitionDelay = `${index * 0.05}s`;
            observer.observe(el);
        }
    });
});

// 성능 최적화: 스크롤 이벤트 throttle
let lastScrollTime = 0;
const scrollThrottle = (callback, delay) => {
    return () => {
        const now = Date.now();
        if (now - lastScrollTime >= delay) {
            callback();
            lastScrollTime = now;
        }
    };
};

// 스크롤 시 네비게이션 바 스타일 변경 (throttled)
const handleScroll = scrollThrottle(() => {
    const scrollY = window.scrollY;

    // 네비게이션 바 배경 변경
    if (scrollY > 50) {
        navbar.classList.add('shadow-lg');
        navbar.style.backgroundColor = 'rgba(17, 24, 39, 0.98)';
    } else {
        navbar.classList.remove('shadow-lg');
        navbar.style.backgroundColor = 'rgba(17, 24, 39, 0.95)';
    }

    // Back to Top 버튼 표시/숨김
    if (scrollY > 300) {
        backToTopBtn.classList.remove('opacity-0', 'invisible');
        backToTopBtn.classList.add('opacity-100', 'visible');
    } else {
        backToTopBtn.classList.add('opacity-0', 'invisible');
        backToTopBtn.classList.remove('opacity-100', 'visible');
    }

    // 현재 섹션 네비게이션 하이라이트
    updateActiveNavLink();
}, 100);

window.addEventListener('scroll', handleScroll);

// 네비게이션 링크 하이라이트 업데이트
function updateActiveNavLink() {
    const sections = document.querySelectorAll('section[id]');
    const scrollY = window.scrollY;

    sections.forEach(section => {
        const sectionTop = section.offsetTop - 100;
        const sectionHeight = section.offsetHeight;
        const sectionId = section.getAttribute('id');

        if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
            // 모든 링크에서 'border-blue-500' 제거
            navLinks.forEach(link => {
                link.classList.remove('border-b-2', 'border-blue-500');
                link.style.color = '';
            });

            // 현재 섹션의 링크 하이라이트
            const activeLink = document.querySelector(`a[href="#${sectionId}"]`);
            if (activeLink) {
                activeLink.classList.add('border-b-2', 'border-blue-500');
                activeLink.style.color = '#60a5fa';
            }
        }
    });
}

// Back to Top 버튼 클릭
backToTopBtn.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

// 부드러운 스크롤 링크
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const href = this.getAttribute('href');
        if (href !== '#' && document.querySelector(href)) {
            e.preventDefault();
            const target = document.querySelector(href);
            const targetPosition = target.offsetTop - 60;

            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth'
            });
        }
    });
});

// 페이지 로드 시 초기화
window.addEventListener('load', () => {
    updateActiveNavLink();
});

// 리사이즈 이벤트 처리
window.addEventListener('resize', () => {
    // 모바일 메뉴 초기화
    if (window.innerWidth > 768) {
        mobileMenu.classList.add('hidden');
        const spans = menuBtn.querySelectorAll('span');
        spans[0].classList.remove('rotate-45');
        spans[1].classList.remove('opacity-0');
        spans[2].classList.remove('-rotate-45');
    }
});

// 다크모드 토글 함수
function toggleDarkMode() {
    const isDark = document.body.classList.toggle('dark');

    // localStorage에 설정 저장
    localStorage.setItem('theme', isDark ? 'dark' : 'light');

    // 버튼 텍스트 업데이트
    const icon = isDark ? '☀️' : '🌙';
    const label = isDark ? '☀️ 라이트모드' : '🌙 다크모드';
    if (darkModeToggle) darkModeToggle.textContent = icon;
    if (darkModeToggleMobile) darkModeToggleMobile.textContent = label;
}

// 다크모드 초기화 (저장된 설정 복원)
function initDarkMode() {
    const savedTheme = localStorage.getItem('theme');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const isDark = savedTheme ? savedTheme === 'dark' : prefersDark;

    if (isDark) {
        document.body.classList.add('dark');
        if (darkModeToggle) darkModeToggle.textContent = '☀️';
        if (darkModeToggleMobile) darkModeToggleMobile.textContent = '☀️ 라이트모드';
    }
}

// 다크모드 토글 버튼 이벤트
if (darkModeToggle) {
    darkModeToggle.addEventListener('click', toggleDarkMode);
}
if (darkModeToggleMobile) {
    darkModeToggleMobile.addEventListener('click', () => {
        toggleDarkMode();
        // 모바일 메뉴 닫기
        mobileMenu.classList.add('hidden');
        const spans = menuBtn.querySelectorAll('span');
        spans[0].classList.remove('rotate-45');
        spans[1].classList.remove('opacity-0');
        spans[2].classList.remove('-rotate-45');
    });
}

// 초기 페이지 로드 시 섹션 애니메이션
document.addEventListener('DOMContentLoaded', () => {
    // 다크모드 초기화
    initDarkMode();

    // 연락처 폼 초기화
    initContactForm();

    // Hero 섹션은 자동으로 보임
    const heroSection = document.getElementById('home');
    if (heroSection) {
        const animatedElements = heroSection.querySelectorAll('.animate-fade-in, .animate-slide-in-left, .animate-slide-in-right');
        animatedElements.forEach(el => {
            el.style.animation = '';
            setTimeout(() => {
                if (el.classList.contains('animate-fade-in')) {
                    el.style.animation = 'fade-in 0.8s ease-out';
                } else if (el.classList.contains('animate-slide-in-left')) {
                    el.style.animation = 'slide-in-left 0.8s ease-out';
                } else if (el.classList.contains('animate-slide-in-right')) {
                    el.style.animation = 'slide-in-right 0.8s ease-out';
                }
            }, 100);
        });
    }
});

// 연락처 폼 유효성 검사 및 제출 처리
function initContactForm() {
    const contactForm = document.getElementById('contactForm');
    if (!contactForm) return;

    const nameInput = document.getElementById('name');
    const emailInput = document.getElementById('email');
    const messageInput = document.getElementById('message');
    const successMessage = document.getElementById('successMessage');
    const errorMessage = document.getElementById('errorMessage');

    // 이메일 형식 검증
    const isValidEmail = (email) => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    };

    // 폼 제출 이벤트
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();

        // 입력값 가져오기
        const name = nameInput.value.trim();
        const email = emailInput.value.trim();
        const message = messageInput.value.trim();

        // 오류 메시지 초기화
        successMessage.classList.add('hidden');
        errorMessage.classList.add('hidden');
        document.querySelectorAll('.error-message').forEach(el => el.classList.add('hidden'));

        let hasError = false;

        // 유효성 검사
        if (!name) {
            showError(nameInput, '이름을 입력해주세요');
            hasError = true;
        }

        if (!email) {
            showError(emailInput, '이메일을 입력해주세요');
            hasError = true;
        } else if (!isValidEmail(email)) {
            showError(emailInput, '유효한 이메일 형식이 아닙니다');
            hasError = true;
        }

        if (!message) {
            showError(messageInput, '메시지를 입력해주세요');
            hasError = true;
        }

        if (hasError) return;

        // 폼 제출 (localhost에서는 로그만 하고, 실제 배포 시에는 Formspree 사용)
        console.log('폼 데이터:', { name, email, message });

        // 성공 메시지 표시
        successMessage.classList.remove('hidden');

        // 폼 초기화
        contactForm.reset();

        // 3초 후 성공 메시지 숨기기
        setTimeout(() => {
            successMessage.classList.add('hidden');
        }, 3000);
    });

    function showError(input, message) {
        const errorEl = input.closest('div').querySelector('.error-message');
        if (errorEl) {
            errorEl.textContent = message;
            errorEl.classList.remove('hidden');
        }
        input.classList.add('border-red-500');
    }

    // 입력값 변경 시 오류 상태 해제
    [nameInput, emailInput, messageInput].forEach(input => {
        input.addEventListener('input', () => {
            const errorEl = input.closest('div').querySelector('.error-message');
            if (errorEl) {
                errorEl.classList.add('hidden');
            }
            input.classList.remove('border-red-500');
        });
    });
}

// 프로젝트 필터링 함수
function filterProjects(category) {
    const projectCards = document.querySelectorAll('.project-card');

    projectCards.forEach(card => {
        if (category === 'all' || card.getAttribute('data-category') === category) {
            card.classList.remove('hidden');
            card.style.display = '';
        } else {
            card.classList.add('hidden');
            card.style.display = 'none';
        }
    });

    // 필터 버튼 활성화 상태 업데이트
    const filterBtns = document.querySelectorAll('.filter-project-btn');
    filterBtns.forEach(btn => {
        btn.classList.remove('active');
        if (btn.getAttribute('data-filter') === category) {
            btn.classList.add('active');
        }
    });
}

// 프로젝트 필터 버튼 이벤트 설정
document.querySelectorAll('.filter-project-btn').forEach(btn => {
    btn.addEventListener('click', () => {
        const filter = btn.getAttribute('data-filter');
        filterProjects(filter);
    });
});

// 외부 링크 새 탭에서 열기
document.querySelectorAll('a[href^="http"], a[href^="https"]').forEach(link => {
    link.setAttribute('target', '_blank');
    link.setAttribute('rel', 'noopener noreferrer');
});

// 콘솔에서 디버깅 정보 출력 (개발용)
console.log('Portfolio loaded successfully! 🚀');
console.log('현재 섹션 기반 네비게이션이 활성화되었습니다.');
console.log('프로젝트 필터링 기능이 활성화되었습니다.');
