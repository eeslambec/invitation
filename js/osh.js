(function () {
  'use strict';

  // Osh date: October 7, 2026 at 07:00
  const OSH_DATE = new Date('2026-10-07T07:00:00');

  // Multilingual Dictionary
  const TRANSLATIONS = {
    uz: {
      pageTitle: "Abdurahmon & Muslima — Osh taklifnomasi",
      navTaklif: "Taklif",
      navTaqvim: "Taqvim",
      navManzil: "Manzil",
      heroBadge: "🍚 Osh marosimi",
      heroDate: "2026-yil 7-oktabr, chorshanba",
      heroTime: "Soat 07:00",
      heroLocation: "«Zamona» to'yxonasi · Toshkent",
      heroBtn: "Taklifnomani o'qish",
      heroScroll: "Pastga",
      invLabel: "Osh taklifnomasi",
      invTitle: "Hurmatli mehmon!",
      invP1: "Farzandimiz Abdurahmonning to'y tantanasi munosabati bilan ertalabki osh marosimiga sizni samimiy taklif qilamiz.",
      invP2: "Dasturxonimizga marhamat! Palovimiz tayyor, joyimiz munavvar. Sizning kelishingiz bizga sharaf va quvonch bag'ishlaydi.",
      invP3: "An'anaviy oshimizni yaqinlarimiz davrasida birga tatib ko'ramiz. Sizni chin dildan kutamiz!",
      invClosing: "Marhamat — Abdurahmon oilasi",
      featPlov: "Palov",
      featPlovDesc: "An'anaviy o'zbek palovi",
      featTime: "Soat 07:00",
      featTimeDesc: "Ertalabki osh boshlanish vaqti",
      featTogether: "Birga",
      featTogetherDesc: "Yaqinlar davrasida",
      calLabel: "Osh haftasi",
      calTitle: "Oktabr 2026",
      calBadge: "Osh kuni",
      dayDush: "Dush",
      daySesh: "Sesh",
      dayChorsh: "Chorsh",
      dayPaysh: "Paysh",
      dayJuma: "Juma",
      dayShanba: "Shanba",
      dayYaksh: "Yaksh",
      countLabel: "Osh kunigacha",
      days: "Kun",
      hours: "Soat",
      minutes: "Daqiqa",
      seconds: "Soniya",
      locLabel: "Manzil",
      locTitle: "«Zamona» to'yxonasi",
      locName: "«Zamona» to'yxonasi",
      locAddress: "Toshkent shahri<br>Olmazor tumani",
      btnYandex: "Yandex Xaritalar",
      btnGoogle: "Google Xaritalar",
      footerDate: "7-oktabr, 2026"
    },
    ru: {
      pageTitle: "Абдурахмон & Муслима — Приглашение на ош",
      navTaklif: "Приглашение",
      navTaqvim: "Календарь",
      navManzil: "Адрес",
      heroBadge: "🍚 Утренний плов",
      heroDate: "7 октября 2026 года, среда",
      heroTime: "В 07:00",
      heroLocation: "Ресторан «Zamona» · Ташкент",
      heroBtn: "Читать приглашение",
      heroScroll: "Вниз",
      invLabel: "Приглашение на ош",
      invTitle: "Уважаемый гость!",
      invP1: "В честь свадебного торжества нашего сына Абдурахмона искренне приглашаем вас на утренний плов.",
      invP2: "Добро пожаловать к нашему столу! Плов готов, место почётное. Ваше присутствие — для нас честь и радость.",
      invP3: "Разделим традиционный плов в кругу близких людей. Искренне ждём вас!",
      invClosing: "Добро пожаловать — Семья Абдурахмона",
      featPlov: "Плов",
      featPlovDesc: "Традиционный узбекский плов",
      featTime: "В 07:00",
      featTimeDesc: "Начало утреннего плова",
      featTogether: "Вместе",
      featTogetherDesc: "В кругу близких",
      calLabel: "Неделя плова",
      calTitle: "Октябрь 2026",
      calBadge: "День плова",
      dayDush: "Пн",
      daySesh: "Вт",
      dayChorsh: "Ср",
      dayPaysh: "Чт",
      dayJuma: "Пт",
      dayShanba: "Сб",
      dayYaksh: "Вс",
      countLabel: "До плова осталось",
      days: "Дней",
      hours: "Часов",
      minutes: "Минут",
      seconds: "Секунд",
      locLabel: "Адрес",
      locTitle: "Ресторан «Zamona»",
      locName: "Ресторан «Zamona»",
      locAddress: "Город Ташкент<br>Алмазарский район",
      btnYandex: "Яндекс Карты",
      btnGoogle: "Google Карты",
      footerDate: "7 октября, 2026"
    }
  };

  let currentLang = localStorage.getItem('osh_lang') || 'uz';

  function setLanguage(lang) {
    if (!TRANSLATIONS[lang]) return;
    currentLang = lang;
    localStorage.setItem('osh_lang', lang);
    document.documentElement.lang = lang;

    document.querySelectorAll('[data-i18n]').forEach(function (el) {
      const key = el.getAttribute('data-i18n');
      if (TRANSLATIONS[lang][key]) {
        el.textContent = TRANSLATIONS[lang][key];
      }
    });

    document.querySelectorAll('[data-i18n-html]').forEach(function (el) {
      const key = el.getAttribute('data-i18n-html');
      if (TRANSLATIONS[lang][key]) {
        el.innerHTML = TRANSLATIONS[lang][key];
      }
    });

    document.querySelectorAll('.lang-btn').forEach(function (btn) {
      btn.classList.toggle('lang-btn--active', btn.getAttribute('data-lang') === lang);
    });
  }

  document.querySelectorAll('.lang-btn').forEach(function (btn) {
    btn.addEventListener('click', function () {
      setLanguage(this.getAttribute('data-lang'));
    });
  });

  setLanguage(currentLang);

  // Audio Music Player Controls
  var bgMusic = document.getElementById('bgMusic');
  var musicToggle = document.getElementById('musicToggle');

  var musicStarted = false;
  var bgMusicFailed = false;

  // Pre-load the audio element for mobile
  if (bgMusic) {
    bgMusic.setAttribute('playsinline', '');
    bgMusic.setAttribute('webkit-playsinline', '');

    bgMusic.addEventListener('error', function () {
      bgMusicFailed = true;
    });
  }

  function playMusic() {
    if (!bgMusic || bgMusicFailed) {
      return;
    }

    bgMusic.volume = 0.35;
    bgMusic.muted = false;
    var playPromise = bgMusic.play();

    if (playPromise !== undefined) {
      playPromise
        .then(function () {
          musicStarted = true;
          if (musicToggle) musicToggle.classList.add('music-toggle--playing');
        })
        .catch(function () {
          musicStarted = false;
          if (musicToggle) musicToggle.classList.remove('music-toggle--playing');
        });
    }
  }

  function pauseMusic() {
    if (bgMusic) bgMusic.pause();
    musicStarted = false;
    if (musicToggle) musicToggle.classList.remove('music-toggle--playing');
  }

  function toggleMusic() {
    if (bgMusic && !bgMusic.paused) {
      pauseMusic();
    } else {
      playMusic();
    }
  }

  if (musicToggle) {
    musicToggle.addEventListener('click', function (e) {
      e.stopPropagation();
      toggleMusic();
    });
  }

  // Trigger music from the hero "Taklifnomani o'qish" button
  var heroBtn = document.querySelector('.hero .btn--primary');

  if (heroBtn) {
    heroBtn.addEventListener('click', function () {
      if (!musicStarted) {
        playMusic();
      }
    });
  }

  // Try silent autoplay on page load (works on desktop, blocked on mobile)
  if (bgMusic) {
    bgMusic.volume = 0.35;
    var autoplayPromise = bgMusic.play();
    if (autoplayPromise !== undefined) {
      autoplayPromise.then(function () {
        musicStarted = true;
        if (musicToggle) musicToggle.classList.add('music-toggle--playing');
      }).catch(function () {
        bgMusic.pause();
        bgMusic.currentTime = 0;
      });
    }
  }

  // Navigation Logic
  const nav = document.getElementById('nav');
  const navToggle = document.getElementById('navToggle');
  const navLinks = document.getElementById('navLinks');
  const navBackdrop = document.getElementById('navBackdrop');

  function handleNavScroll() {
    nav.classList.toggle('nav--scrolled', window.scrollY > 80);
  }

  function openMenu() {
    if (navLinks.classList.contains('nav__links--open')) return;
    navLinks.classList.add('nav__links--open');
    if (navBackdrop) navBackdrop.classList.add('nav__backdrop--open');
    navToggle.setAttribute('aria-expanded', 'true');
    navToggle.classList.add('nav__toggle--active');

    try {
      if (!history.state || !history.state.menuOpen) {
        history.pushState({ menuOpen: true }, '');
      }
    } catch (e) {}
  }

  function closeMenu(isPopState) {
    if (!navLinks.classList.contains('nav__links--open')) return;
    navLinks.classList.remove('nav__links--open');
    if (navBackdrop) navBackdrop.classList.remove('nav__backdrop--open');
    navToggle.setAttribute('aria-expanded', 'false');
    navToggle.classList.remove('nav__toggle--active');

    try {
      if (!isPopState && history.state && history.state.menuOpen) {
        history.replaceState(null, '');
      }
    } catch (e) {}
  }

  navToggle.addEventListener('click', function (e) {
    e.stopPropagation();
    if (navLinks.classList.contains('nav__links--open')) {
      closeMenu(false);
    } else {
      openMenu();
    }
  });

  if (navBackdrop) {
    navBackdrop.addEventListener('click', function () {
      closeMenu(false);
    });
  }

  window.addEventListener('popstate', function () {
    if (navLinks.classList.contains('nav__links--open')) {
      closeMenu(true);
    }
  });

  window.addEventListener('keydown', function (e) {
    if (e.key === 'Escape' && navLinks.classList.contains('nav__links--open')) {
      closeMenu(false);
    }
  });

  // Smooth scrolling for all anchor links
  document.querySelectorAll('a[href^="#"]').forEach(function (anchor) {
    anchor.addEventListener('click', function (e) {
      const targetId = this.getAttribute('href');
      closeMenu(false);
      if (targetId === '#' || !targetId) return;
      const targetElement = document.querySelector(targetId);
      if (targetElement) {
        e.preventDefault();
        const navHeight = nav ? nav.offsetHeight : 0;
        const elementPosition = targetElement.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - (navHeight > 0 ? navHeight - 10 : 0);

        window.scrollTo({
          top: Math.max(0, offsetPosition),
          behavior: 'smooth'
        });
      }
    });
  });

  window.addEventListener('scroll', handleNavScroll);
  handleNavScroll();

  const daysEl = document.getElementById('days');
  const hoursEl = document.getElementById('hours');
  const minutesEl = document.getElementById('minutes');
  const secondsEl = document.getElementById('seconds');

  function pad(num) {
    return String(num).padStart(2, '0');
  }

  function updateCountdown() {
    const now = new Date();
    const diff = OSH_DATE - now;

    if (diff <= 0) {
      daysEl.textContent = '00';
      hoursEl.textContent = '00';
      minutesEl.textContent = '00';
      secondsEl.textContent = '00';
      return;
    }

    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
    const minutes = Math.floor((diff / (1000 * 60)) % 60);
    const seconds = Math.floor((diff / 1000) % 60);

    daysEl.textContent = pad(days);
    hoursEl.textContent = pad(hours);
    minutesEl.textContent = pad(minutes);
    secondsEl.textContent = pad(seconds);
  }

  updateCountdown();
  setInterval(updateCountdown, 1000);

  const fadeElements = document.querySelectorAll(
    '.invitation__inner, .calendar-card, .countdown__grid, .location-card, .osh-feature__card'
  );

  fadeElements.forEach(function (el) {
    el.classList.add('fade-in');
  });

  const observer = new IntersectionObserver(
    function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.15 }
  );

  fadeElements.forEach(function (el) {
    observer.observe(el);
  });
})();
