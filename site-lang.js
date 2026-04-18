(function () {
    var STORAGE_KEY = 'aboutMySelf_siteLang';
    window.SITE_LANG_KEYS = ['en', 'fil', 'id', 'ja', 'ko'];
    window.LANG_AUTONYM = { en: 'English', fil: 'Filipino', id: 'Bahasa Indonesia', ja: '日本語', ko: '한국어' };

    var introEn =
        'HELLO THERE! I\'M SO GLAD YOU DROPPED BY🥰🫶🏻\n\n' +
        'THIS IS WHERE YOU\'LL GET TO KNOW A LITTLE MORE ABOUT ME <span id="introUpdatedResetDash" class="intro-updated-reset-dash" title="">—</span> ESPECIALLY MY HOBBIES, AND MY FAVORITES.\n\n' +
        'FEEL FREE TO EXPLORE, AND ENJOY YOUR STAY!\n        \n            !KIDLY ROTATE YOUR PHONE TO LANDSCAPE, FOR BETTER EXPERIENCE!';

    var introFil =
        'KAMUSTA! NATUTUWA AKONG NARITO KA🥰🫶🏻\n\n' +
        'DITO MO MALALAMAN ANG KONTI TUNGKOL SA AKIN <span id="introUpdatedResetDash" class="intro-updated-reset-dash" title="">—</span> LALO NA ANG MGA HOBBY AT PABORITO KO.\n\n' +
        'LIBRENG MAGLIBOT AT ENJOY!\n        \n            PAKI-ROTATE ANG TELEPONO SA LANDSCAPE PARA MAS MAGANDA ANG EXPERIENCE!';

    var introId =
        'HAI! SENANG KAMU BERKUNJUNG🥰🫶🏻\n\n' +
        'DI SINI KAMU BISA MENGENAL AKU LEBIH JAUH <span id="introUpdatedResetDash" class="intro-updated-reset-dash" title="">—</span> TERUTAMA HOBI DAN KESUKAANKU.\n\n' +
        'SILAKAN JELAJAHI DAN SELAMAT MENIKMATI!\n        \n            MOHON PUTAR PONSEL KE MODE LANDSCAPE UNTUK PENGALAMAN LEBIH BAIK!';

    var introJa =
        'こんにちは！来てくれてうれしいです🥰🫶🏻\n\n' +
        'ここでは私のこと、<span id="introUpdatedResetDash" class="intro-updated-reset-dash" title="">—</span>特に趣味や好きなものについて少し知ってもらえます。\n\n' +
        'ゆっくり見て楽しんでください！\n        \n            より良い体験のため、スマホを横（ランドスケープ）向きにしてください！';

    var introKo =
        '안녕! 와줘서 정말 기뻐🥰🫶🏻\n\n' +
        '여기서 나에 대해 조금 더 알 수 있어요 <span id="introUpdatedResetDash" class="intro-updated-reset-dash" title="">—</span> 특히 취미와 좋아하는 것들!\n\n' +
        '편하게 둘러보고 즐겨 줘!\n        \n            더 좋은 화면을 위해 휴대폰을 가로(랜드스케이프)로 돌려 주세요!';

    function base() {
        return {
            settings_title: 'SETTINGS',
            settings_whats_new: "What's New",
            settings_open: 'Open',
            settings_theme: 'Theme',
            settings_language: 'Language',
            settings_volume: 'Volume',
            settings_brightness: 'Brightness',
            settings_language_note:
                'Note: This language feature currently supports only five languages and is still under development. Some parts of the site may still appear in English.',
            aria_lang_note: 'Language note',
            settings_version_note:
                'Note: This website uses Mobile Data and can drain your mobile load; Wi‑Fi is recommended.',
            settings_caution_text: 'Caution: Changing this will also affect your device!',
            btn_ok: 'OK',
            visitors_viewing_now: 'Viewing Now:',
            visitors_visits: 'Visits:',
            visitors_refresh: 'Refresh',
            visitors_viewing_tab: 'VIEWING TAB',
            theme_day: 'DAY MODE',
            theme_night: 'NIGHT MODE',
            btn_about: 'About Me',
            btn_others: 'Others',
            warning_unfinished: "THIS ISN'T OFFICIALLY FINISHED YET; I STILL HAVE MANY WORKS TO DO",
            warning_updates_in: 'UPDATES IN',
            form_answer: 'ANSWER THIS FORM',
            countdown_title: 'COUNTDOWN TO 2026',
            intro_welcome_title: 'WELCOME',
            intro_skip: 'Skip',
            intro_message_html: introEn,
            updated_title: 'UPDATED',
            updated_body:
                'Thank you for patiently waiting while my website was being updated. The new version has now been successfully applied.',
            loading_prefix: 'Loading',
            loading_done: 'Done!',
            aria_settings: 'Open settings',
            load_m0: 'Sync in progress... almost there!',
            load_m1: 'Just a moment...',
            load_m2: 'Please wait while we load everything',
            load_m3: 'Warming things up...',
            load_m4: 'Bringing everything together...',
            load_m5: 'Finalizing setup...',
            load_m6: 'One moment, making things ready...',
            load_m7: 'Syncing data...',
            load_m8: 'Booting system...',
            load_m9: 'Decoding your personalized device...',
            load_m10: 'Aligning digital coordinates...',
            load_m11: 'Initiating advanced system protocols...',
            visitors_checking: 'Checking...'
        };
    }

    window.I18N = {
        en: base(),
        fil: Object.assign(base(), {
            settings_title: 'SETTINGS',
            settings_whats_new: 'Ano ang Bago',
            settings_open: 'Buksan',
            settings_theme: 'Tema',
            settings_language: 'Wika',
            settings_volume: 'Volume',
            settings_brightness: 'Liwanag',
            settings_language_note:
                'Paalala: Ang feature na wika ay sumusuporta pa lamang sa limang wika at patuloy na binubuo. Maaaring may mga bahagi pa ring nasa English.',
            aria_lang_note: 'Paalala sa wika',
            settings_version_note:
                'Paalala: gumagamit ang site ng Mobile Data at maaaring maubos ang load; mas mainam ang Wi‑Fi.',
            settings_caution_text: 'Babala: maaapektuhan din ng pagbabagong ito ang iyong device!',
            theme_day: 'ARAW MODE',
            theme_night: 'GABI MODE',
            btn_about: 'Tungkol sa Akin',
            btn_others: 'Iba pa',
            warning_unfinished: 'HINDI PA OPISYAL NA TAPOS; MARAMI PA AKONG GAGAWIN',
            warning_updates_in: 'MGA UPDATE SA',
            form_answer: 'SAGUTIN ANG FORM',
            countdown_title: 'COUNTDOWN HANGGANG 2026',
            intro_welcome_title: 'MALIGAYANG DATING',
            intro_skip: 'Laktawan',
            intro_message_html: introFil,
            updated_title: 'NA-UPDATE',
            updated_body:
                'Salamat sa iyong pasensya habang ina-update ang website. matagumpay nang na-apply ang bagong bersyon.',
            loading_prefix: 'Nilo-load',
            loading_done: 'Tapos na!',
            aria_settings: 'Buksan ang settings',
            load_m0: 'Nagsi-sync... malapit na!',
            load_m1: 'Sandali lang...',
            load_m2: 'Hintayin habang nilo-load ang lahat',
            load_m3: 'Pinapainit ang sistema...',
            load_m4: 'Pinagsasama ang lahat...',
            load_m5: 'Tinatapos ang setup...',
            load_m6: 'Sandali, inihahanda...',
            load_m7: 'Nagsi-sync ng data...',
            load_m8: 'Nagbo-boot ng sistema...',
            load_m9: 'Dine-decode ang device mo...',
            load_m10: 'Inaayos ang digital coordinates...',
            load_m11: 'Sinisimulan ang advanced protocols...',
            visitors_checking: 'Sinusuri...'
        }),
        id: Object.assign(base(), {
            settings_title: 'PENGATURAN',
            settings_whats_new: 'Yang Baru',
            settings_open: 'Buka',
            settings_theme: 'Tema',
            settings_language: 'Bahasa',
            settings_volume: 'Volume',
            settings_brightness: 'Kecerahan',
            settings_language_note:
                'Catatan: Fitur bahasa saat ini hanya mendukung lima bahasa dan masih dalam pengembangan. Sebagian teks mungkin masih dalam bahasa Inggris.',
            aria_lang_note: 'Catatan bahasa',
            settings_version_note:
                'Catatan: situs ini memakai data seluler dan bisa menghabiskan kuota; Wi‑Fi disarankan.',
            settings_caution_text: 'Peringatan: perubahan ini juga memengaruhi perangkat Anda!',
            theme_day: 'MODE SIANG',
            theme_night: 'MODE MALAM',
            btn_about: 'Tentang Saya',
            btn_others: 'Lainnya',
            warning_unfinished: 'BELUM SELESAI SEPENUHNYA; MASIH BANYAK YANG HARUS DITYELESAIKAN',
            warning_updates_in: 'PEMBARUAN DALAM',
            form_answer: 'ISI FORMULIR INI',
            countdown_title: 'HITUNG MUNDUR MENUJU 2026',
            intro_welcome_title: 'SELAMAT DATANG',
            intro_skip: 'Lewati',
            intro_message_html: introId,
            updated_title: 'DIPERBARUI',
            updated_body:
                'Terima kasih telah menunggu pembaruan situs. Versi baru telah berhasil diterapkan.',
            loading_prefix: 'Memuat',
            loading_done: 'Selesai!',
            aria_settings: 'Buka pengaturan',
            load_m0: 'Sinkronisasi... hampir selesai!',
            load_m1: 'Sebentar...',
            load_m2: 'Harap tunggu, memuat semua',
            load_m3: 'Menyiapkan...',
            load_m4: 'Menyatukan semuanya...',
            load_m5: 'Menyelesaikan pengaturan...',
            load_m6: 'Sebentar, menyiapkan...',
            load_m7: 'Sinkron data...',
            load_m8: 'Menyalakan sistem...',
            load_m9: 'Membaca perangkat Anda...',
            load_m10: 'Menyelaraskan koordinat digital...',
            load_m11: 'Memulai protokol lanjutan...',
            visitors_checking: 'Memeriksa...'
        }),
        ja: Object.assign(base(), {
            settings_title: '設定',
            settings_whats_new: '新着情報',
            settings_open: '開く',
            settings_theme: 'テーマ',
            settings_language: '言語',
            settings_volume: '音量',
            settings_brightness: '明るさ',
            settings_language_note:
                '注意：言語機能は現在5言語のみ対応しており、開発中です。サイトの一部は英語のまま表示されることがあります。',
            aria_lang_note: '言語についての注意',
            settings_version_note:
                '注意：モバイルデータ通信を使用します。通信量がかかるため、Wi‑Fi の利用をおすすめします。',
            settings_caution_text: '注意：変更は端末側にも影響することがあります。',
            theme_day: '昼モード',
            theme_night: '夜モード',
            btn_about: '自己紹介',
            btn_others: 'その他',
            warning_unfinished: 'まだ正式には完成していません。やることがたくさんあります',
            warning_updates_in: '更新まで',
            form_answer: 'フォームに答える',
            countdown_title: '2026年までのカウントダウン',
            intro_welcome_title: 'ようこそ',
            intro_skip: 'スキップ',
            intro_message_html: introJa,
            updated_title: '更新済み',
            updated_body:
                'サイト更新のお待ちありがとうございます。新しいバージョンが適用されました。',
            loading_prefix: '読み込み中',
            loading_done: '完了！',
            aria_settings: '設定を開く',
            load_m0: '同期中…もうすぐです！',
            load_m1: '少々お待ちください…',
            load_m2: '読み込み中です',
            load_m3: '準備中…',
            load_m4: 'まとめています…',
            load_m5: 'セットアップを完了中…',
            load_m6: '準備しています…',
            load_m7: 'データを同期中…',
            load_m8: 'システム起動中…',
            load_m9: '端末情報を読み取り中…',
            load_m10: '座標を合わせています…',
            load_m11: '高度なプロトコルを開始中…',
            visitors_checking: '確認中…'
        }),
        ko: Object.assign(base(), {
            settings_title: '설정',
            settings_whats_new: '새 소식',
            settings_open: '열기',
            settings_theme: '테마',
            settings_language: '언어',
            settings_volume: '음량',
            settings_brightness: '밝기',
            settings_language_note:
                '안내: 언어 기능은 현재 5개 언어만 지원하며 계속 개발 중입니다. 일부 내용은 영어로 표시될 수 있습니다.',
            aria_lang_note: '언어 안내',
            settings_version_note:
                '안내: 모바일 데이터를 사용하며 데이터 요금이 발생할 수 있어요. Wi‑Fi 사용을 권장합니다.',
            settings_caution_text: '주의: 변경 사항이 기기에도 영향을 줄 수 있어요!',
            theme_day: '낮 모드',
            theme_night: '밤 모드',
            btn_about: '나 소개',
            btn_others: '기타',
            warning_unfinished: '아직 공식적으로 완성되지 않았어요. 할 일이 많이 남았습니다',
            warning_updates_in: '업데이트까지',
            form_answer: '폼에 응답하기',
            countdown_title: '2026년까지 카운트다운',
            intro_welcome_title: '환영합니다',
            intro_skip: '건너뛰기',
            intro_message_html: introKo,
            updated_title: '업데이트됨',
            updated_body:
                '웹사이트 업데이트를 기다려 주셔서 감사합니다. 새 버전이 적용되었습니다.',
            loading_prefix: '로딩 중',
            loading_done: '완료!',
            aria_settings: '설정 열기',
            load_m0: '동기화 중… 거의 끝났어요!',
            load_m1: '잠시만요…',
            load_m2: '모두 불러오는 중이에요',
            load_m3: '준비 중…',
            load_m4: '모두 모으는 중…',
            load_m5: '설정 마무리 중…',
            load_m6: '잠시만요, 준비 중…',
            load_m7: '데이터 동기화 중…',
            load_m8: '시스템 부팅 중…',
            load_m9: '기기 정보 읽는 중…',
            load_m10: '디지털 좌표 맞추는 중…',
            load_m11: '고급 프로토콜 시작 중…',
            visitors_checking: '확인 중…'
        })
    };

    window.getSiteLang = function () {
        try {
            var c = localStorage.getItem(STORAGE_KEY);
            if (window.SITE_LANG_KEYS.indexOf(c) >= 0) return c;
        } catch (e) {}
        return 'en';
    };

    window.setSiteLang = function (code) {
        if (window.SITE_LANG_KEYS.indexOf(code) < 0) code = 'en';
        try {
            localStorage.setItem(STORAGE_KEY, code);
        } catch (e) {}
    };

    window.t = function (key) {
        var code = window.getSiteLang();
        var b = window.I18N[code] || window.I18N.en;
        var s = b[key];
        if (s !== undefined && s !== '') return s;
        return window.I18N.en[key] || key;
    };

    window.applySiteLanguage = function (code) {
        window.setSiteLang(code);
        code = window.getSiteLang();
        var bundle = window.I18N[code] || window.I18N.en;
        document.documentElement.setAttribute('lang', code === 'fil' ? 'fil' : code);

        document.querySelectorAll('[data-i18n]').forEach(function (el) {
            var k = el.getAttribute('data-i18n');
            if (!k) return;
            var v = bundle[k];
            if (v === undefined || v === '') v = window.I18N.en[k];
            if (v !== undefined) el.textContent = v;
        });
        document.querySelectorAll('[data-i18n-aria]').forEach(function (el) {
            var k = el.getAttribute('data-i18n-aria');
            if (!k) return;
            var v = bundle[k];
            if (v === undefined || v === '') v = window.I18N.en[k];
            if (v !== undefined) el.setAttribute('aria-label', v);
        });

        var introEl = document.getElementById('introWelcomeMessage');
        if (introEl && bundle.intro_message_html) {
            introEl.innerHTML = bundle.intro_message_html;
        }

        var themeLab = document.getElementById('themeToggleLabel');
        if (themeLab) {
            var dark = document.body.classList.contains('dark-mode');
            themeLab.textContent = dark ? window.t('theme_night') : window.t('theme_day');
        }

        var trigLab = document.getElementById('settingsLangTriggerLabel');
        if (trigLab && window.LANG_AUTONYM[code]) {
            trigLab.textContent = window.LANG_AUTONYM[code];
        }

        var settingsBtn = document.getElementById('settingsBtn');
        if (settingsBtn) settingsBtn.setAttribute('aria-label', window.t('aria_settings'));

        document.querySelectorAll('.settings-lang-option').forEach(function (btn) {
            var lc = btn.getAttribute('data-lang');
            btn.classList.toggle('is-active', lc === code);
        });

        if (typeof window.__reapplyVisitorsStatusForLang === 'function') {
            try {
                window.__reapplyVisitorsStatusForLang();
            } catch (e) {}
        }
    };
})();
