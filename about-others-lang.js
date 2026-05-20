/* About Me + Others modal strings (merged into window.I18N after site-lang.js) */
(function () {
    var MERGE = {
        en: {
            about_modal_title: 'About Me',
            about_personal_details: 'Personal Details',
            about_access_denied: 'YOU CANNOT ACCESS THE PERSONAL DETAILS!',
            about_access_q: 'Want to access personal details?',
            about_access_click: 'Click here',
            aria_show_pin: 'Show PIN',
            about_otp_placeholder: 'Enter one-time PIN',
            about_otp_submit: 'Submit',
            about_label_name: 'Name',
            about_label_age: 'Age',
            about_label_birth_date: 'Birth Date',
            about_label_birthplace: 'Birthplace',
            about_name_value: 'Leo Paul Yamaguchi',
            about_age_value: '18 Years Old',
            about_birth_date_value: 'March 15, 2008',
            about_birthplace_value: 'Dr. Rafael S. Tumbukon Memorial Hospital',
            about_message_for_me: 'MESSAGE FOR ME',
            about_hobbies: 'Hobbies',
            about_my_favorites: 'My Favorites',
            about_hobby_games: 'Playing Online Games',
            about_hobby_music: 'Listening to Music',
            link_see_more: 'see more...',
            link_see_less: 'see less...',
            btn_back_main: 'Back to Main Menu',
            btn_exit: 'Exit',
            aria_close: 'Close',
            about_toggle_access: 'Toggle access',
            about_toggle_hobbies: 'Click to view hobbies',
            about_toggle_favorites: 'Click to view favorites',
            others_heading: 'Others',
            others_gaming: 'Gaming',
            others_gaming_desc: 'When I get bored, I play these games.',
            others_music: 'Music',
            others_music_desc: "When I'm sleeping, eating, walking, etc., I play this music.",
            others_singer: 'SINGER',
            others_singer_desc: "I can't live without my favorite singers😭.",
            others_apps: 'My Apps',
            others_apps_desc: 'These are the apps I created.',
            others_coming_title: 'COMING SOON',
            others_coming_desc: 'STAY TUNED',
            others_coming2_title: 'COMING SOON',
            others_coming2_desc: 'NOT YET AVAILABLE',
            others_clock: 'Clock',
            others_clock_desc: 'Live analog and digital time.',
            others_xmas_heading: 'Your Christmas Message',
            unavailable_default: 'UNFORTUNATELY UNAVAILABLE AT THIS TIME!',
            others_not_available_now: 'NOT YET AVAILABLE',
            about_fav_cats_title: 'Cats',
            about_fav_cats_short:
                'One of my favorite animals is the cat. I like cats because they are cute, calm, and independent. They don\'t need too much attention, but they still show love in their own ways.',
            about_fav_cats_full:
                'One of my favorite animals is the cat. I like cats because they are cute, calm, and independent. They don\'t need too much attention, but they still show love in their own ways. I enjoy watching how playful they can be when they chase toys or roll around. Their soft fur and gentle purring make me feel relaxed whenever I\'m near them. Cats also have funny personalities, and that makes me smile every day.',
            about_fav_music_title: 'Music',
            about_fav_music_short:
                'Music is one of the things I can\'t live without. It helps me express how I feel and comforts me when I\'m sad or tired.',
            about_fav_music_full:
                'Music is one of the things I can\'t live without. It helps me express how I feel and comforts me when I\'m sad or tired. I like listening to different types of music depending on my mood — sometimes pop when I want to dance, and slow songs when I just want to think. Music inspires me and gives me energy to start my day. It\'s like my best friend that always understands me.',
            about_fav_sunsets_title: 'Sunsets',
            about_fav_sunsets_short:
                'I love watching sunsets because they are peaceful and beautiful. When the sky turns orange, pink, and purple, it feels like the world slows down for a moment.',
            about_fav_sunsets_full:
                'I love watching sunsets because they are peaceful and beautiful. When the sky turns orange, pink, and purple, it feels like the world slows down for a moment. It reminds me to appreciate life and be thankful for another day. Watching a sunset makes me calm and helps me forget my worries. It\'s one of those simple things that make me feel happy inside.',
            about_fav_foods_title: 'Foods',
            about_fav_foods_short:
                'When it comes to food, I have quite a sweet and simple taste. I love chocolate because it melts in my mouth and instantly makes me feel happy.',
            about_fav_foods_full:
                'When it comes to food, I have quite a sweet and simple taste. I love chocolate because it melts in my mouth and instantly makes me feel happy. Spaghetti is my favorite meal because it\'s flavorful and comforting — I especially like it when it\'s cooked with a sweet-style sauce. And marshmallows? They\'re soft, sweet, and fun to eat, especially when roasted or mixed with chocolate. These foods remind me of celebrations, bonding, and happy moments with friends and family.',
            about_fav_friends_title: 'My Friends',
            about_fav_friends_short:
                'My friends are also one of my favorites because they make my life more colorful and fun. They\'re always there when I need someone to talk to or laugh with.',
            about_fav_friends_full:
                'My friends are also one of my favorites because they make my life more colorful and fun. They\'re always there when I need someone to talk to or laugh with. I like being surrounded by people who understand and support me no matter what. My friends motivate me to be better and remind me that I\'m never alone in facing challenges.',
            about_fav_movies_title: 'Movies',
            about_fav_movies_short:
                'I enjoy watching movies and shows that make me laugh, feel inspired, or even emotional. Some of my favorites are Minions and Doraemon because they\'re funny, cute, and full of good lessons about friendship and kindness.',
            about_fav_movies_full:
                'I enjoy watching movies and shows that make me laugh, feel inspired, or even emotional. Some of my favorites are Minions and Doraemon because they\'re funny, cute, and full of good lessons about friendship and kindness. I also like watching BL (Boys\' Love) series because they show different kinds of love and teach acceptance, equality, and respect for the LGBTQIA+ community. I admire how these stories show that love is love — no matter who you are.',
            about_fav_social_title: 'Social Media',
            about_fav_social_short:
                'Social media is one of my favorites because it allows me to communicate, share, and learn from different people around the world.',
            about_fav_social_full:
                'Social media is one of my favorites because it allows me to communicate, share, and learn from different people around the world. I enjoy using various platforms where I can express myself creatively and stay informed about current events. Through these platforms, I can connect with my family and friends, explore new ideas, and discover trends that match my interests. Social media also helps me stay updated with technology, entertainment, and news while providing a space to appreciate art, culture, and diverse communities. It is important in my daily life because it combines communication, learning, and self-expression in one digital environment.',
            about_fav_it_title: 'Why I Chose IT?',
            about_fav_it_short:
                'I chose Information Technology (IT) because I\'ve always been interested in computers and how technology works. I want to learn how to create programs, fix problems, and use technology to make life easier for people.',
            about_fav_it_full:
                'I chose Information Technology (IT) because I\'ve always been interested in computers and how technology works. I want to learn how to create programs, fix problems, and use technology to make life easier for people. I believe IT has a big role in the future, and being part of it makes me excited. I know it won\'t always be easy, but I\'m ready to face the challenges because it\'s something I\'m truly passionate about.',
            others_stay_tuned: 'stay tuned',
            others_stay_tuned_sparkle: 'stay tuned ✨'
        }
    };

    function mergeLang(code, obj) {
        if (!window.I18N || !window.I18N[code] || !obj) return;
        Object.assign(window.I18N[code], obj);
    }

    mergeLang('en', MERGE.en);

    /* Filipino */
    mergeLang('fil', {
        about_modal_title: 'Tungkol sa Akin',
        about_personal_details: 'Personal na Detalye',
        about_access_denied: 'HINDI MO MA-ACCESS ANG PERSONAL NA DETALYE!',
        about_access_q: 'Gusto mong ma-access ang personal na detalye?',
        about_access_click: 'Pindutin dito',
        aria_show_pin: 'Ipakita ang PIN',
        about_otp_placeholder: 'Ilagay ang one-time PIN',
        about_otp_submit: 'Ipasa',
        about_label_name: 'Pangalan',
        about_label_age: 'Edad',
        about_label_birth_date: 'Petsa ng Kapanganakan',
        about_label_birthplace: 'Lugar ng Kapanganakan',
        about_name_value: 'Leo Paul Yamaguchi',
        about_age_value: '18 taóng gulang',
        about_birth_date_value: 'Marso 15, 2008',
        about_birthplace_value: 'Dr. Rafael S. Tumbukon Memorial Hospital',
        about_message_for_me: 'MENSAHE PARA SA AKIN',
        about_hobbies: 'Mga Hilig',
        about_my_favorites: 'Mga Paborito Ko',
        about_hobby_games: 'Maglaro ng Online Games',
        about_hobby_music: 'Makinig ng Musika',
        link_see_more: 'tingnan pa...',
        link_see_less: 'mas kaunti...',
        btn_back_main: 'Bumalik sa Main Menu',
        btn_exit: 'Lumabas',
        aria_close: 'Isara',
        about_toggle_access: 'Ipakita/itago',
        about_toggle_hobbies: 'Pindutin para sa mga hilig',
        about_toggle_favorites: 'Pindutin para sa mga paborito',
        others_heading: 'Iba pa',
        others_gaming: 'Gaming',
        others_gaming_desc: 'Kapag bored ako, nilalaro ko ang mga larong ito.',
        others_music: 'Musika',
        others_music_desc: 'Kapag natutulog, kumakain, o naglalakad ako, pinapatugtog ko ito.',
        others_singer: 'MANG-AAWIT',
        others_singer_desc: 'Hindi ako mabubuhay nang wala ang paborito kong mga mang-aawit😭.',
        others_apps: 'Mga App Ko',
        others_apps_desc: 'Ito ang mga app na ginawa ko.',
        others_coming_title: 'MALAPIT NA',
        others_coming_desc: 'ABANGAN',
        others_coming2_title: 'MALAPIT NA',
        others_coming2_desc: 'HINDI AVAILABLE SA NGAYON',
        others_clock: 'Orasan',
        others_clock_desc: 'Live na analog at digital na oras.',
        others_xmas_heading: 'Ang Iyong Christmas Message',
        unavailable_default: 'PASENSYA, HINDI AVAILABLE SA NGAYON!',
        others_not_available_now: 'HINDI AVAILABLE SA NGAYON',
        about_fav_cats_title: 'Mga Pusa',
        about_fav_cats_short:
            'Isa sa paborito kong hayop ang pusa. Cute sila, kalmado, at malaya. Hindi sila masyadong needy pero ramdam mo pa rin ang pagmamahal sa kanilang paraan.',
        about_fav_cats_full:
            'Isa sa paborito kong hayop ang pusa. Cute sila, kalmado, at malaya. Hindi sila masyadong needy pero ramdam mo pa rin ang pagmamahal sa kanilang paraan. Natutuwa ako kapag naglalaro sila o nag-roll. Ang lambot ng balahibo at purr nila nakaka-relax. May kakaibang personality ang mga pusa at nakakapangiti sila araw-araw.',
        about_fav_music_title: 'Musika',
        about_fav_music_short:
            'Hindi ko kaya ang araw nang walang musika. Tinutulungan akong ipahayag ang nararamdaman at nagpapagaan ng loob kapag malungkot o pagod ako.',
        about_fav_music_full:
            'Hindi ko kaya ang araw nang walang musika. Tinutulungan akong ipahayag ang nararamdaman at nagpapagaan ng loob kapag malungkot o pagod ako. Iba-ibang genre depende sa mood — pop kapag gusto kong sumayaw, mabagal kapag gusto kong mag-isip. Inspirasyon ito at nagbibigay enerhiya. Parang best friend na naiintindihan ako.',
        about_fav_sunsets_title: 'Mga Sunset',
        about_fav_sunsets_short:
            'Mahilig akong manood ng sunset — payapa at maganda. Kapag nagiging orange, pink, at purple ang langit, parang bumabagal ang mundo.',
        about_fav_sunsets_full:
            'Mahilig akong manood ng sunset — payapa at maganda. Kapag nagiging orange, pink, at purple ang langit, parang bumabagal ang mundo. Paalala itong magpasalamat sa buhay. Nakakakalma at nakakalimot sa problema. Isa ito sa simpleng bagay na nagpapasaya sa akin.',
        about_fav_foods_title: 'Pagkain',
        about_fav_foods_short:
            'Sweet at simple ang panlasa ko. Love ko ang tsokolate — tumutunaw sa bibig at instant happy. Paborito ko rin ang spaghetti na may sweet-style sauce.',
        about_fav_foods_full:
            'Sweet at simple ang panlasa ko. Love ko ang tsokolate — tumutunaw sa bibig at instant happy. Paborito ko rin ang spaghetti na may sweet-style sauce. Ang marshmallow ay lambot-lambot at masaya kainin, lalo kung inihaw o may tsokolate. Naaalala ko ang celebrations at bonding kasama pamilya at kaibigan.',
        about_fav_friends_title: 'Mga Kaibigan',
        about_fav_friends_short:
            'Paborito ko rin ang mga kaibigan — nagpapakulay ng buhay ko. Nandiyan sila kapag kailangan ko ng kausap o kakatawa.',
        about_fav_friends_full:
            'Paborito ko rin ang mga kaibigan — nagpapakulay ng buhay ko. Nandiyan sila kapag kailangan ko ng kausap o kakatawa. Gusto ko ng taong naiintindihan at sumusuporta. Hinuhimok nila akong maging mas mabuti at naalala kong hindi ako nag-iisa sa hamon.',
        about_fav_movies_title: 'Mga Pelikula',
        about_fav_movies_short:
            'Gusto ko ng pelikula at palabas na nakakatawa, inspirasyon, o emosyonal. Paborito ko ang Minions at Doraemon — nakakatawa at may aral tungkol sa pagkakaibigan.',
        about_fav_movies_full:
            'Gusto ko ng pelikula at palabas na nakakatawa, inspirasyon, o emosyonal. Paborito ko ang Minions at Doraemon — nakakatawa at may aral tungkol sa pagkakaibigan. Nanonood din ako ng BL (Boys\' Love) dahil iba\'t ibang uri ng pag-ibig ang ipinapakita at tinuturo ang acceptance at respeto sa LGBTQIA+. Love is love.',
        about_fav_social_title: 'Social Media',
        about_fav_social_short:
            'Paborito ko ang social media dahil nakikipag-usap ako, nagbabahagi, at natututo mula sa iba\'t ibang tao sa mundo.',
        about_fav_social_full:
            'Paborito ko ang social media dahil nakikipag-usap ako, nagbabahagi, at natututo mula sa iba\'t ibang tao sa mundo. Sa iba\'t ibang platform makapag-express ako at manatiling updated. Nakakakonekta sa pamilya at kaibigan, nakakadiskubre ng ideya at trends. Mahalaga sa araw-araw ko dahil pinagsasama ang komunikasyon, pag-aaral, at pagpapahayag.',
        about_fav_it_title: 'Bakit IT?',
        about_fav_it_short:
            'Pinili ko ang IT dahil interesado ako sa computer at teknolohiya. Gusto kong matutong gumawa ng programa, ayusin ang problema, at gawing mas madali ang buhay ng tao.',
        about_fav_it_full:
            'Pinili ko ang IT dahil interesado ako sa computer at teknolohiya. Gusto kong matutong gumawa ng programa, ayusin ang problema, at gawing mas malapit ang kinabukasan. Alam kong hindi laging madali pero handa akong harapin dahil ito ang passion ko.',
        others_stay_tuned: 'abangan',
        others_stay_tuned_sparkle: 'abangan ✨'
    });

    /* Bahasa Indonesia */
    mergeLang('id', {
        about_modal_title: 'Tentang Saya',
        about_personal_details: 'Detail Pribadi',
        about_access_denied: 'ANDA TIDAK DAPAT MENGAKSES DETAIL PRIBADI!',
        about_access_q: 'Ingin mengakses detail pribadi?',
        about_access_click: 'Klik di sini',
        aria_show_pin: 'Tampilkan PIN',
        about_otp_placeholder: 'Masukkan PIN sekali pakai',
        about_otp_submit: 'Kirim',
        about_label_name: 'Nama',
        about_label_age: 'Usia',
        about_label_birth_date: 'Tanggal Lahir',
        about_label_birthplace: 'Tempat Lahir',
        about_name_value: 'Leo Paul Yamaguchi',
        about_age_value: '18 tahun',
        about_birth_date_value: '15 Maret 2008',
        about_birthplace_value: 'Dr. Rafael S. Tumbukon Memorial Hospital',
        about_message_for_me: 'PESAN UNTUK SAYA',
        about_hobbies: 'Hobi',
        about_my_favorites: 'Favorit Saya',
        about_hobby_games: 'Bermain Game Online',
        about_hobby_music: 'Mendengarkan Musik',
        link_see_more: 'lihat selengkapnya...',
        link_see_less: 'lebih sedikit...',
        btn_back_main: 'Kembali ke Menu Utama',
        btn_exit: 'Keluar',
        aria_close: 'Tutup',
        about_toggle_access: 'Buka/tutup',
        about_toggle_hobbies: 'Klik untuk melihat hobi',
        about_toggle_favorites: 'Klik untuk melihat favorit',
        others_heading: 'Lainnya',
        others_gaming: 'Gaming',
        others_gaming_desc: 'Kalau bosan, saya main game ini.',
        others_music: 'Musik',
        others_music_desc: 'Saat tidur, makan, jalan, dll., saya putar musik ini.',
        others_singer: 'PENYANYI',
        others_singer_desc: 'Saya tidak bisa hidup tanpa penyanyi favorit😭.',
        others_apps: 'Aplikasi Saya',
        others_apps_desc: 'Ini aplikasi yang saya buat.',
        others_coming_title: 'SEGERA HADIR',
        others_coming_desc: 'NANTIKAN',
        others_coming2_title: 'SEGERA HADIR',
        others_coming2_desc: 'TIDAK TERSEDIA SAAT INI',
        others_xmas_heading: 'Pesan Natal Anda',
        unavailable_default: 'MAAF, TIDAK TERSEDIA SAAT INI!',
        others_not_available_now: 'TIDAK TERSEDIA SAAT INI',
        about_fav_cats_title: 'Kucing',
        about_fav_cats_short:
            'Salah satu hewan favorit saya adalah kucing. Lucu, tenang, dan mandiri. Tidak terlalu menuntut tapi tetap menunjukkan kasih sayang.',
        about_fav_cats_full:
            'Salah satu hewan favorit saya adalah kucing. Lucu, tenang, dan mandiri. Saya suka melihat mereka bermain atau berguling. Bulu lembut dan dengkuran menenangkan. Kucing punya kepribadian lucu dan membuat saya tersenyum setiap hari.',
        about_fav_music_title: 'Musik',
        about_fav_music_short:
            'Musik salah satu hal yang tidak bisa saya lewatkan. Membantu mengekspresikan perasaan dan menenangkan saat sedih atau lelah.',
        about_fav_music_full:
            'Musik salah satu hal yang tidak bisa saya lewatkan. Saya mendengarkan genre berbeda sesuai suasana — pop untuk bersemangat, lagu pelan untuk merenung. Musik menginspirasi dan memberi energi. Seperti teman yang mengerti.',
        about_fav_sunsets_title: 'Matahari Terbenam',
        about_fav_sunsets_short:
            'Saya suka menonton sunset — damai dan indah. Saat langit jingga, merah muda, dan ungu, dunia terasa melambat.',
        about_fav_sunsets_full:
            'Saya suka menonton sunset — damai dan indah. Mengingatkan untuk bersyukur. Menenangkan dan melupakan sejenak kekhawatiran. Hal sederhana yang membuat bahagia.',
        about_fav_foods_title: 'Makanan',
        about_fav_foods_short:
            'Selera saya manis dan sederhana. Saya suka cokelat yang meleleh di mulut. Spaghetti dengan saus manis adalah favorit.',
        about_fav_foods_full:
            'Selera saya manis dan sederhana. Cokelat membuat saya bahagia. Spaghetti nyaman dengan saus manis. Marshmallow lembut dan menyenangkan, terutang dipanggang atau dengan cokelat. Mengingatkan pada perayaan dan kebersamaan.',
        about_fav_friends_title: 'Teman-Teman',
        about_fav_friends_short:
            'Teman juga favorit saya — mereka mewarnai hidup saya. Ada saat saya butuh bicara atau tertawa.',
        about_fav_friends_full:
            'Teman juga favorit saya. Saya suka dikelilingi orang yang mengerti dan mendukung. Mereka memotivasi saya dan mengingatkan bahwa saya tidak sendirian menghadapi tantangan.',
        about_fav_movies_title: 'Film',
        about_fav_movies_short:
            'Saya menikmati film yang lucu, inspiratif, atau emosional. Minions dan Doraemon favorit — lucu dan penuh pelajaran persahabatan.',
        about_fav_movies_full:
            'Saya menikmati film yang lucu dan inspiratif. Minions dan Doraemon mengajarkan persahabatan. Saya juga menonton serial BL karena menunjukkan berbagai bentuk cinta serta penerimaan dan hormat untuk LGBTQIA+. Cinta adalah cinta.',
        about_fav_social_title: 'Media Sosial',
        about_fav_social_short:
            'Media sosial favorit karena saya bisa berkomunikasi, berbagi, dan belajar dari orang di seluruh dunia.',
        about_fav_social_full:
            'Media sosial memungkinkan komunikasi, berbagi, dan belajar. Saya bisa berkreasi dan tetap mengikuti berita. Terhubung dengan keluarga dan teman, menemukan ide dan tren. Penting dalam hidup saya karena menggabungkan komunikasi, belajar, dan ekspresi diri.',
        about_fav_it_title: 'Mengapa IT?',
        about_fav_it_short:
            'Saya memilih IT karena tertarik pada komputer dan teknologi. Ingin belajar membuat program, memperbaiki masalah, dan mempermudah hidup orang.',
        about_fav_it_full:
            'Saya memilih IT karena tertarik pada komputer dan teknologi. IT punya peran besar di masa depan. Tidak selalu mudah, tetapi saya siap menghadapi tantangan karena ini passion saya.',
        others_stay_tuned: 'nantikan',
        others_stay_tuned_sparkle: 'nantikan ✨'
    });

    /* Japanese */
    mergeLang('ja', {
        about_modal_title: '自己紹介',
        about_personal_details: '個人情報',
        about_access_denied: '個人情報にはアクセスできません！',
        about_access_q: '個人情報を見ますか？',
        about_access_click: 'ここをタップ',
        aria_show_pin: 'PINを表示',
        about_otp_placeholder: 'ワンタイムPINを入力',
        about_otp_submit: '送信',
        about_label_name: '名前',
        about_label_age: '年齢',
        about_label_birth_date: '生年月日',
        about_label_birthplace: '出生地',
        about_name_value: 'Leo Paul Yamaguchi',
        about_age_value: '18歳',
        about_birth_date_value: '2008年3月15日',
        about_birthplace_value: 'Dr. Rafael S. Tumbukon Memorial Hospital',
        about_message_for_me: '自分へのメッセージ',
        about_hobbies: '趣味',
        about_my_favorites: '好きなこと',
        about_hobby_games: 'オンラインゲームをすること',
        about_hobby_music: '音楽を聴くこと',
        link_see_more: 'もっと見る...',
        link_see_less: '閉じる',
        btn_back_main: 'メインメニューに戻る',
        btn_exit: '終了',
        aria_close: '閉じる',
        about_toggle_access: '開く／閉じる',
        about_toggle_hobbies: 'タップして趣味を表示',
        about_toggle_favorites: 'タップしてお気に入りを表示',
        others_heading: 'その他',
        others_gaming: 'ゲーム',
        others_gaming_desc: '退屈なときに遊ぶゲームです。',
        others_music: '音楽',
        others_music_desc: '寝るとき、食べるとき、歩くときなどに聴いています。',
        others_singer: '歌手',
        others_singer_desc: '好きな歌手なしでは生きられません😭',
        others_apps: 'マイアプリ',
        others_apps_desc: '今つくっているアプリです。',
        others_coming_title: '近日公開',
        others_coming_desc: 'お楽しみに',
        others_coming2_title: '近日公開',
        others_coming2_desc: '現在はご利用いただけません',
        others_xmas_heading: 'あなたのクリスマスメッセージ',
        unavailable_default: '現在ご利用いただけません！',
        others_not_available_now: '現在はご利用いただけません',
        about_fav_cats_title: '猫',
        about_fav_cats_short:
            '好きな動物のひとつは猫です。かわいくて落ち着いていて、自立しています。べったりしなくても、猫なりの愛情をくれます。',
        about_fav_cats_full:
            '好きな動物のひとつは猫です。おもちゃを追いかけたりごろごろしたりする様子が見ていて楽しいです。柔らかい毛並みとゴロゴロいう音が癒やされます。個性があって毎日笑顔にしてくれます。',
        about_fav_music_title: '音楽',
        about_fav_music_short:
            '音楽はなくてはならないものです。気持ちを表現してくれて、しんどいときもそばにいてくれます。',
        about_fav_music_full:
            '気分に合わせていろいろなジャンルを聴きます。踊りたいときはポップ、考えたいときはゆっくりした曲。音楽はインスピレーションと元気の源で、いつもわかってくれる友だちみたいです。',
        about_fav_sunsets_title: '夕焼け',
        about_fav_sunsets_short:
            '夕焼けが好きです。空がオレンジやピンク、紫に染まると、世界が一瞬ゆっくりになる気がします。',
        about_fav_sunsets_full:
            '夕焼けは静かで美しいです。生きていることに感謝したくなります。見ていると心が落ち着き、悩みを忘れられます。小さな幸せを感じさせてくれます。',
        about_fav_foods_title: '食べ物',
        about_fav_foods_short:
            '甘いものとシンプルな味が好きです。チョコレートは口の中で溶けてすぐハッピーになります。',
        about_fav_foods_full:
            'チョコレートや甘めのソースのスパゲッティが大好きです。マシュマロは焼いたりチョコと一緒に食べたりすると楽しいです。お祝いや家族・友だちとの時間を思い出します。',
        about_fav_friends_title: '友だち',
        about_fav_friends_short:
            '友だちも大切な「好き」です。話したり笑ったり、いつもそばにいてくれます。',
        about_fav_friends_full:
            '友だちは私の毎日をカラフルにしてくれます。わかってくれて支えてくれる人に囲まれていることがうれしいです。挑戦のときもひとりじゃないと思えます。',
        about_fav_movies_title: '映画',
        about_fav_movies_short:
            '笑える、心が動く、感情が揺れる作品が好きです。ミニオンズやドラえもんはユーモアと友情の大切さを教えてくれます。',
        about_fav_movies_full:
            'BL作品も見ます。さまざまな愛の形や、LGBTQIA+への受容と平等、尊重を学べます。愛は誰にだって同じだと感じます。',
        about_fav_social_title: 'SNS',
        about_fav_social_short:
            'SNSは世界中の人とつながり、学べるのが好きです。',
        about_fav_social_full:
            '創作の表現やニュースのチェックにも使っています。家族や友だちともつながれます。コミュニケーションと学びと自己表現が一つの場所にあります。',
        about_fav_it_title: 'なぜITを選んだか',
        about_fav_it_short:
            'コンピューターとテクノロジーにずっと興味がありました。プログラムを作り、問題を直し、人の生活を楽にしたいです。',
        about_fav_it_full:
            'ITは未来に大きな役割があります。簡単ではないこともわかっていますが、本当に好きだからこそ挑戦したいです。',
        others_stay_tuned: 'お楽しみに',
        others_stay_tuned_sparkle: 'お楽しみに ✨'
    });

    /* Korean */
    mergeLang('ko', {
        about_modal_title: '나 소개',
        about_personal_details: '개인 정보',
        about_access_denied: '개인 정보에 접근할 수 없습니다!',
        about_access_q: '개인 정보를 보시겠어요?',
        about_access_click: '여기를 누르세요',
        aria_show_pin: 'PIN 표시',
        about_otp_placeholder: '일회용 PIN 입력',
        about_otp_submit: '확인',
        about_label_name: '이름',
        about_label_age: '나이',
        about_label_birth_date: '생일',
        about_label_birthplace: '출생지',
        about_name_value: 'Leo Paul Yamaguchi',
        about_age_value: '18세',
        about_birth_date_value: '2008년 3월 15일',
        about_birthplace_value: 'Dr. Rafael S. Tumbukon Memorial Hospital',
        about_message_for_me: '나에게 보내는 메시지',
        about_hobbies: '취미',
        about_my_favorites: '내가 좋아하는 것',
        about_hobby_games: '온라인 게임하기',
        about_hobby_music: '음악 듣기',
        link_see_more: '더 보기...',
        link_see_less: '간단히',
        btn_back_main: '메인 메뉴로',
        btn_exit: '나가기',
        aria_close: '닫기',
        about_toggle_access: '펼치기/접기',
        about_toggle_hobbies: '눌러서 취미 보기',
        about_toggle_favorites: '눌러서 즐겨찾기 보기',
        others_heading: '기타',
        others_gaming: '게임',
        others_gaming_desc: '심심할 때 하는 게임이에요.',
        others_music: '음악',
        others_music_desc: '잠잘 때, 먹을 때, 걸을 때 등 이 음악을 들어요.',
        others_singer: '가수',
        others_singer_desc: '좋아하는 가수 없이는 못 살아요😭',
        others_apps: '내 앱',
        others_apps_desc: '제가 지금 만든 앱들이에요.',
        others_coming_title: '곧 공개',
        others_coming_desc: '기대해 주세요',
        others_coming2_title: '곧 공개',
        others_coming2_desc: '지금은 이용할 수 없습니다',
        others_xmas_heading: '크리스마스 메시지',
        unavailable_default: '지금은 이용할 수 없습니다!',
        others_not_available_now: '지금은 이용할 수 없습니다',
        about_fav_cats_title: '고양이',
        about_fav_cats_short:
            '좋아하는 동물 중 하나는 고양이예요. 귀엽고 차분하고 독립적이에요. 너무 들러붙지 않아도 사랑을 표현해요.',
        about_fav_cats_full:
            '장난감을 쫓거나 구르며 노는 모습이 재미있어요. 부드러운 털과 골골거리는 소리가 편안해요. 개성도 있어서 매일 미소 짓게 돼요.',
        about_fav_music_title: '음악',
        about_fav_music_short:
            '음악은 없으면 안 되는 것 같아요. 기분을 표현해 주고 슬프거나 지칠 때 위로가 돼요.',
        about_fav_music_full:
            '기분에 따라 장르를 바꿔 들어요 — 춤추고 싶을 땐 팝, 생각할 땐 잔잔한 노래. 영감과 에너지를 주는, 늘 이해해 주는 친구 같아요.',
        about_fav_sunsets_title: '노을',
        about_fav_sunsets_short:
            '노을 보는 걸 좋아해요. 하늘이 주황·분홍·보라로 물들면 세상이 잠시 느려지는 느낌이에요.',
        about_fav_sunsets_full:
            '평온하고 아름다워요. 삶에 감사하게 되고 걱정을 잠시 잊게 해요. 작은 행복을 느끼게 해줘요.',
        about_fav_foods_title: '음식',
        about_fav_foods_short:
            '달고 단순한 입맛이에요. 초콜릿은 입 안에서 녹으며 바로 기분이 좋아져요.',
        about_fav_foods_full:
            '달콤한 소스 스파게티도 좋아해요. 마시멜로는 구워 먹거나 초콜릿이랑 같이 먹으면 재미있어요. 축하와 가족·친구와의 시간이 떠올라요.',
        about_fav_friends_title: '친구들',
        about_fav_friends_short:
            '친구들도 소중한 즐겨찾기예요. 이야기하고 웃을 때 항상 곁에 있어요.',
        about_fav_friends_full:
            '이해하고 응원해 주는 사람들이 있어서 좋아요. 더 나아지게 동기를 주고, 도전할 때 혼자가 아니라는 걸 알게 해줘요.',
        about_fav_movies_title: '영화',
        about_fav_movies_short:
            '웃기고 영감을 주거나 감동적인 작품을 좋아해요. 미니언즈와 도라에몽은 우정과 친절에 대한 이야기가 좋아요.',
        about_fav_movies_full:
            'BL 시리즈도 봐요. 다양한 사랑과 LGBTQIA+에 대한 수용·평등·존중을 배워요. 사랑은 누구에게나 같다고 느껴요.',
        about_fav_social_title: '소셜 미디어',
        about_fav_social_short:
            '전 세계 사람들과 소통하고 배울 수 있어서 좋아요.',
        about_fav_social_full:
            '창작 표현과 소식 확인에도 쓰고 있어요. 가족·친구와도 연결되고 새로운 아이디어와 트렌드를 발견해요. 일상에서 소통·학습·표현이 한곳에 모여 있어요.',
        about_fav_it_title: '왜 IT를 선택했나요',
        about_fav_it_short:
            '컴퓨터와 기술에 늘 관심이 있었어요. 프로그램을 만들고 문제를 고치며 사람들의 삶을 편하게 하고 싶어요.',
        about_fav_it_full:
            'IT는 미래에 큰 역할을 한다고 믿어요. 쉽지만은 않겠지만 정말 좋아하는 일이라 도전할 준비가 되어 있어요.',
        others_stay_tuned: '기대해 주세요',
        others_stay_tuned_sparkle: '기대해 주세요 ✨'
    });
})();
