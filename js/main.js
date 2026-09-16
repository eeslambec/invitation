(function () {
  'use strict';

  const WEDDING_DATE = new Date('2026-10-08T16:00:00');

  // Multilingual Dictionary
  const TRANSLATIONS = {
    uz: {
      pageTitle: "Abdurahmon & Muslima — To'y taklifnomasi",
      navTaklif: "Taklif",
      navTaqvim: "Taqvim",
      navManzil: "Manzil",
      heroDate: "2026-yil 8-oktabr, payshanba",
      heroLocation: "«Zamona» to'yxonasi · Toshkent",
      heroBtn: "Taklifnomani o'qish",
      heroScroll: "Pastga",
      invLabel: "Taklifnoma",
      invTitle: "Aziz mehmon!",
      invP1: "Hayotimizning eng baxtli va unutilmas kunini siz bilan baham ko'rishni chin dildan istaymiz.",
      invP2: "Bizning to'y marosomimizga sizni samimiy taklif qilamiz. Sizning ishtirokingiz biz uchun katta baxt, quvonch va sharafdir.",
      invP3: "Keling, bu muqaddas kunni yaqinlarimiz va sevimli mehmonlarimiz bilan birgalikda nishonlaymiz. Sizning iliq tilaklaringiz va yorqin tabassumingiz bizning bayramimizni yanada go'zal qiladi.",
      invClosing: "Sizni kutamiz — Abdurahmon & Muslima oilasi",
      calLabel: "To'y haftasi",
      calTitle: "Oktabr 2026",
      calBadge: "To'y kuni",
      dayDush: "Dush",
      daySesh: "Sesh",
      dayChorsh: "Chorsh",
      dayPaysh: "Paysh",
      dayJuma: "Juma",
      dayShanba: "Shanba",
      dayYaksh: "Yaksh",
      countLabel: "To'y kunigacha",
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
      footerDate: "8-oktabr, 2026"
    },
    ru: {
      pageTitle: "Абдурахмон & Муслима — Свадебное приглашение",
      navTaklif: "Приглашение",
      navTaqvim: "Календарь",
      navManzil: "Адрес",
      heroDate: "8 октября 2026 года, четверг",
      heroLocation: "Ресторан «Zamona» · Ташкент",
      heroBtn: "Читать приглашение",
      heroScroll: "Вниз",
      invLabel: "Приглашение",
      invTitle: "Дорогие гости!",
      invP1: "От всего сердца хотим разделить с вами самый счастливый и незабываемый день нашей жизни.",
      invP2: "Искренне приглашаем вас на наше свадебное торжество. Ваше присутствие для нас — огромная радость, счастье и честь.",
      invP3: "Разделите с нами этот особенный день в кругу близких и любимых людей. Ваши тёплые пожелания и улыбки сделают наш праздник ещё прекраснее.",
      invClosing: "Ждём вас — Семья Абдурахмона и Муслимы",
      calLabel: "Неделя свадьбы",
      calTitle: "Октябрь 2026",
      calBadge: "День свадьбы",
      dayDush: "Пн",
      daySesh: "Вт",
      dayChorsh: "Ср",
      dayPaysh: "Чт",
      dayJuma: "Пт",
      dayShanba: "Сб",
      dayYaksh: "Вс",
      countLabel: "До свадьбы осталось",
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
      footerDate: "8 октября, 2026"
    }
  };

  let currentLang = localStorage.getItem('wedding_lang') || 'uz';

  function setLanguage(lang) {
    if (!TRANSLATIONS[lang]) return;
    currentLang = lang;
    localStorage.setItem('wedding_lang', lang);
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

  // Romantic Wedding Harp & Soft Strings Synthesizer Loop
  let audioCtx = null;
  let harpTimer = null;
  let isHarpPlaying = false;
  let harpStep = 0;

  function initWebAudioSynth() {
    if (audioCtx) return;
    const AudioContext = window.AudioContext || window.webkitAudioContext;
    if (AudioContext) {
      audioCtx = new AudioContext();
    }
  }

  // Plucked Harp Note
  function playHarpPluck(time, freq, gainVal) {
    gainVal = gainVal || 0.07;
    if (!audioCtx || !freq) return;
    const osc1 = audioCtx.createOscillator();
    const osc2 = audioCtx.createOscillator();
    const gain = audioCtx.createGain();
    const filter = audioCtx.createBiquadFilter();

    osc1.type = 'sine';
    osc2.type = 'triangle';
    osc1.frequency.setValueAtTime(freq, time);
    osc2.frequency.setValueAtTime(freq * 2, time);

    filter.type = 'lowpass';
    filter.frequency.setValueAtTime(1600, time);
    filter.frequency.exponentialRampToValueAtTime(350, time + 1.2);

    gain.gain.setValueAtTime(0.001, time);
    gain.gain.linearRampToValueAtTime(gainVal, time + 0.02);
    gain.gain.exponentialRampToValueAtTime(0.0001, time + 1.6);

    osc1.connect(filter);
    osc2.connect(filter);
    filter.connect(gain);
    gain.connect(audioCtx.destination);

    osc1.start(time);
    osc2.start(time);
    osc1.stop(time + 1.6);
    osc2.stop(time + 1.6);
  }

  // Glistening High Chime Accent
  function playGlisten(time, freq, gainVal) {
    gainVal = gainVal || 0.03;
    if (!audioCtx || !freq) return;
    const osc = audioCtx.createOscillator();
    const gain = audioCtx.createGain();

    osc.type = 'sine';
    osc.frequency.setValueAtTime(freq, time);

    gain.gain.setValueAtTime(0.001, time);
    gain.gain.linearRampToValueAtTime(gainVal, time + 0.01);
    gain.gain.exponentialRampToValueAtTime(0.0001, time + 1.8);

    osc.connect(gain);
    gain.connect(audioCtx.destination);

    osc.start(time);
    osc.stop(time + 1.8);
  }

  // Romantic Canon / Wedding Progression Arpeggios (in Hz)
  const HARP_ARPEGGIOS = [
    [146.83, 293.66, 369.99, 440.00, 587.33, 739.99], // D Major
    [110.00, 220.00, 277.18, 329.63, 440.00, 554.37], // A Major
    [123.47, 246.94, 293.66, 369.99, 493.88, 587.33], // B Minor
    [92.50,  185.00, 220.00, 277.18, 369.99, 440.00], // F# Minor
    [98.00,  196.00, 246.94, 293.66, 392.00, 493.88], // G Major
    [146.83, 220.00, 293.66, 369.99, 440.00, 587.33]  // D Major
  ];

  const GLISTEN_NOTES = [1174.66, 1479.98, 1760.00, 880.00, 1174.66, 1479.98];

  function scheduleHarpLoop() {
    if (!isHarpPlaying || !audioCtx) return;
    var now = audioCtx.currentTime;

    var chordIndex = Math.floor(harpStep / 6) % HARP_ARPEGGIOS.length;
    var noteIndex = harpStep % 6;
    var harpFreq = HARP_ARPEGGIOS[chordIndex][noteIndex];

    playHarpPluck(now, harpFreq, noteIndex === 0 ? 0.09 : 0.05);

    if (harpStep % 3 === 0) {
      var glistenFreq = GLISTEN_NOTES[(harpStep / 3) % GLISTEN_NOTES.length];
      playGlisten(now + 0.1, glistenFreq, 0.025);
    }

    harpStep++;
    harpTimer = setTimeout(scheduleHarpLoop, 260);
  }

  // Audio Music Player Controls
  var bgMusic = document.getElementById('bgMusic');
  var musicToggle = document.getElementById('musicToggle');

  var musicStarted = false;
  var bgMusicFailed = false;

  // Pre-load the audio element for mobile: set attributes that help iOS/Android
  if (bgMusic) {
    bgMusic.setAttribute('playsinline', '');
    bgMusic.setAttribute('webkit-playsinline', '');

    bgMusic.addEventListener('error', function () {
      bgMusicFailed = true;
    });
  }

  function startHarpSynth() {
    initWebAudioSynth();
    if (audioCtx && audioCtx.state === 'suspended') {
      audioCtx.resume();
    }
    if (!isHarpPlaying) {
      isHarpPlaying = true;
      harpStep = 0;
      scheduleHarpLoop();
      if (musicToggle) musicToggle.classList.add('music-toggle--playing');
    }
  }

  function stopHarpSynth() {
    isHarpPlaying = false;
    if (harpTimer) clearTimeout(harpTimer);
    if (musicToggle) musicToggle.classList.remove('music-toggle--playing');
  }

  function playMusic() {
    // Resume Web Audio API context if needed (for synth fallback)
    initWebAudioSynth();
    if (audioCtx && audioCtx.state === 'suspended') {
      audioCtx.resume();
    }

    if (!bgMusic || bgMusicFailed) {
      startHarpSynth();
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
          // Audio element failed — use synth fallback
          startHarpSynth();
        });
    }
  }

  function pauseMusic() {
    if (bgMusic) bgMusic.pause();
    stopHarpSynth();
    musicStarted = false;
    if (musicToggle) musicToggle.classList.remove('music-toggle--playing');
  }

  function toggleMusic() {
    if (isHarpPlaying || (bgMusic && !bgMusic.paused)) {
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

  // ── Trigger music from the hero "Taklifnomani o'qish" button ──
  // Mobile browsers need a direct user gesture (click) to allow audio.play().
  // The hero CTA button tap IS that gesture — we call play() directly inside it.
  var heroBtn = document.querySelector('.hero .btn--primary');

  if (heroBtn) {
    heroBtn.addEventListener('click', function () {
      if (!musicStarted && !isHarpPlaying) {
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
        // Autoplay blocked (mobile) — music will start when hero button is tapped
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
    const diff = WEDDING_DATE - now;

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
    '.invitation__inner, .calendar-card, .countdown__grid, .location-card'
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
