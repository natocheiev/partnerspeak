# Ресерч: зведення кроків 03–06

> 29.10.2026. Зібрано з нотаток у [research/notes/](notes/). Нового пошуку немає: кожен факт узято з нотаток кроків 03–06 разом із їхнім джерелом.
> Бриф продукту — [CLAUDE.md](../CLAUDE.md).

## Звідки дані

| Звідки | Що взято |
|---|---|
| **Мій власний акаунт** | **Нічого.** Теки `research/screens/own/` немає. Кабінети за логіном не відкривались, застосунки не встановлювались. Де екран видно лише після входу, написано «доступ обмежений». |
| **Публічні сторінки** | Усе в цьому файлі: сайти компаній, сторінки App Store і Google Play (опис, підписи скрінів, відгуки), центри допомоги й FAQ, Reddit, статті. Скріни публічних сторінок зняв Playwright у [research/screens/](screens/). |

**Позначки:**
- [скрін] — файл у `research/screens/`; [AS] — App Store; [GP] — Google Play; [сайт], [help], [FAQ] — сторінки компанії.
- *Висновок:* — моя оцінка на основі фактів, а не факт.
- **дані не підтверджені** — джерела немає або воно суперечливе. У матриці те саме позначено словом «перевірити».

---

## 1. Конкуренти

Шість продуктів з трьох груп кроку 03:
- **хард:** Paired, SumOne, Agapé, Couple Joy (останній додано на запит власника);
- **софт:** Gottman Card Decks;
- **аспіраційна:** BeReal.

Чому саме вони — [notes/03-competitors.md](notes/03-competitors.md) і [notes/04-matrix.md](notes/04-matrix.md). SumOne замінив Candle 29.10.2026 за рішенням власника.

### Матриця

Перенесено з кроку 04 без змін, оновлено лише шляхи до скрінів. Осі взято з брифу: розділ 1 (головний принцип «об'єднувати») і розділ 7 (MVP, пункт 2 — щоденний ритуал пари).

| Вісь | Paired | SumOne | Agapé | Gottman Card Decks | BeReal | Couple Joy |
|---|---|---|---|---|---|---|
| **1. Перший екран** | **Сайт:**<br>• «★4.7 300k+ reviews»<br>• заголовок «Feel closer as a couple»<br>• «Daily conversations to stay connected.»<br>• кнопка «Try for free»<br>• фото пари з двома репліками «I love our…»<br>• банер «Install now» [скрін](screens/paired-site-first-screen.png)<br>**App Store:** підписи скрінів — «#1 Couples App», «The app that brings couples closer», «Reveal your partner's answer», «1000s of quizzes, games and questions» [скрін](screens/paired-appstore-full.png) · [AS](https://apps.apple.com/us/app/id1469609343)<br>**Застосунок:** доступ обмежений | **Сайт:**<br>• sumone.co — заглушка WordPress: «Nothing Found», «Lorem ipsum» у блоці About, поле пошуку корейською. Продукт не показано, у футері лише контакти й реквізити MonyMony Corp. [скрін](screens/sumone-site-first-screen.png)<br>• Посилання з App Store (sumone.co/en) веде на Terms of Service<br>**App Store:** «Daily question game for couple», ★4.9 · 19K. Підписи скрінів — «10M+ users» і «Couple App — The Sum of your Love!», «One question a day to get to know each other better», «Daily questions», «Special couple EggMon» [скрін](screens/sumone-appstore-full.png) · [AS](https://apps.apple.com/us/app/id1469506430)<br>• В описі тієї ж сторінки — «6 Million people»: розбіжність з «10M+» на скріні<br>**Застосунок:** доступ обмежений | **Сайт:**<br>• «Which couple would you rather be tonight?»<br>• «Spark meaningful conversation, in 1 minute or less…»<br>• кнопки App Store і Google Play<br>• ілюстрація пари в ліжку з перемикачем «Before Agapé → After Agapé» [скрін](screens/agape-site-first-screen.png)<br>**App Store:** підписи — «Answer one curated question every day», «Add your friends, family, and partner», «Meaningful convo with those you value» [скрін](screens/agape-appstore-full.png) · [AS](https://apps.apple.com/us/app/id1507907556)<br>**Застосунок:** доступ обмежений | **Сайт:**<br>• банер «October sale — Shop now»<br>• «My Account», кошик<br>• заголовок «Gottman Card Decks App — A relationship app from The Gottman Institute»<br>• текст про дослідження Інституту [скрін](screens/gottman-site-first-screen.png)<br>**Застосунок** (видно на скрінах App Store):<br>• «Welcome to Gottman Card Decks»<br>• «Want to improve your relationship? This app has questions you can ask your partner…»<br>• кнопка «Get Started»<br>• далі сітка колод: Give Appreciation, I Feel, Salsa, Expressing Needs, Great Listening… [скрін](screens/gottman-appstore-full.png) · [AS](https://apps.apple.com/us/app/id1292398843) | **Сайт:**<br>• відеофон<br>• «Your daily dose of real life.»<br>• «Get the app ↗»<br>• cookie-банер (знято після «Reject all») [скрін](screens/bereal-site-first-screen.png)<br>**App Store:** підписи — «One notification, two minutes» (таймер 01:30 і пуш «Time to BeReal»), «Friends and Celebs Post at the Same Time» [скрін](screens/bereal-appstore-full.png) · [AS](https://apps.apple.com/us/app/id1459645446)<br>**Застосунок:** доступ обмежений | **Сайт:**<br>• кнопка «Try for Free»<br>• «Your relationship is about to become 10x better.»<br>• кнопки App Store і Google Play<br>• два макети застосунку: Timeline зі спогадами і «Questions & Games» з вкладками «All / Your turn (3) / Answered» та блоком «Daily Conversation · NEXT IN 07:25:55 · What did you learn a little bit too late? · ANSWER» з двома аватарами [скрін](screens/couplejoy-site-first-screen.png)<br>**App Store:** підписи — «#1 App for Couples» (фото пари, «Together for 11 years…»), «Many cute widgets», «Answer over 3000 questions», «Save your favorite moments» [скрін](screens/couplejoy-appstore-full.png) · [AS](https://apps.apple.com/us/app/id1624758651)<br>**Застосунок:** доступ обмежений (на сайті лише макети) |
| **2. Ключова задача: щоденний ритуал пари, взаємне відкриття** | 1. Акаунт: ім'я і фото.<br>2. «Invite Partner»: унікальне посилання або 6-значний код. Є також на Home і Us [help](https://support.paired.com/en/articles/164636-how-do-i-pair-with-my-partner)<br>3. Щоденне питання: «Add your answers… then unlock your partner's responses» [GP](https://play.google.com/store/apps/details?id=com.getpaired.app)<br>4. Відповіді закриті, доки не відповіли обоє (відгук Evajan_bieber) [AS](https://apps.apple.com/us/app/id1469609343)<br>5. Після сплати пробного періоду підписка синхронізується на пару [help](https://support.paired.com/en/articles/164636-how-do-i-pair-with-my-partner)<br>Як працює без партнера, на публічних сторінках не сказано: доступ обмежений | • Одне питання на день для обох, «at a time of your choice» [AS](https://apps.apple.com/us/app/id1469506430)<br>• Відповідь партнера видно лише після своєї (користувач, що веде пару близько року) [Reddit](https://www.reddit.com/r/LDR/comments/1mxko5y/free_app_for_couples_to_connect/)<br>• Скрін «Daily questions»: відповіді обох під одним питанням і лічильник коментарів [скрін](screens/sumone-appstore-full.png)<br>• Без підписки: ліміт 200 символів, 400 — за перегляд реклами, реклама після кожної відповіді (відгук Atsushilover) [AS](https://apps.apple.com/us/app/id1469506430)<br>• Як підключається партнер, публічно не описано: доступ обмежений | • Одне питання на день, персоналізоване під тип стосунків<br>• «you're only able to see each other's response, once you have both responded» [GP](https://play.google.com/store/apps/details?id=com.getdailyagape)<br>• Сайт показує 3 кроки: питання → обоє відповіли → бачите відповіді → бали за відповіді [сайт](https://www.getdailyagape.com)<br>• Без пари доступні лише спогади. Питання з'являються після з'єднання. Одиноким користувачам «not at this time» [FAQ](https://www.getdailyagape.com) | • Щоденного ритуалу, з'єднання пари і взаємного відкриття немає<br>• Один телефон: обрати колоду → картка → поставити питання партнеру наживо<br>• Зірка зберігає картку в «Favorites» [сайт](https://www.gottman.com/couples/apps/) · [AS](https://apps.apple.com/us/app/id1292398843) | Аналог механіки, не для пари:<br>• раз на день у випадковий час пуш усім одночасно, 2 хвилини на фото [AS](https://apps.apple.com/us/app/id1459645446)<br>• «Capture and post in time to discover what your Friends are up to» [GP](https://play.google.com/store/apps/details?id=com.bereal.ft)<br>• Пости друзів розмиті, доки не опублікуєш свій [webwise.ie](https://www.webwise.ie/trending/explained-what-is-bereal/) · [CNET](https://kompas.wasmer.app/https_www_cnet_com/tech/services-and-software/no-filters-allowed-this-up-and-coming-social-media-app-aims-for-authenticity) | • Партнер підключається кодом, який один надсилає іншому (огляд WhistleOut, сторінка віддає 403, перевірити) [WhistleOut](https://www.whistleout.com/CellPhones/Apps/couple-joy-relationship-app)<br>• Щоденні питання й ігри: Never Have I Ever, Would You Rather, Who's more likely [скрін](screens/couplejoy-site-first-screen.png)<br>• Відповідь партнера і обговорення — «once you both answered» (старий опис від попереднього видавця Joyful Apps) [Mergeek](https://www.mergeek.com/latest/ZG9o3n3rq62mKMqg)<br>• «Chat in real-time about your quiz answers» [GP](https://play.google.com/store/apps/details?id=com.angcosmin.couple)<br>• У free, за відгуком, по одному набору в категорії, близько 9 наборів [AS](https://apps.apple.com/us/app/id1624758651) |
| **3. «Об'єднувати» — чи видно одразу** | **Так.**<br>• Заголовок «Feel closer as a couple»<br>• Дві репліки від двох людей на фото [скрін](screens/paired-site-first-screen.png)<br>• У App Store третій екран — «Reveal your partner's answer» [скрін](screens/paired-appstore-full.png)<br>*Висновок:* єдиний, хто на першому екрані словами каже «ближче» і показує обох. | **Так у сторі, ні на сайті.**<br>• App Store: «Couple App», «The Sum of your Love!», «One question a day to get to know each other better» [скрін](screens/sumone-appstore-full.png)<br>• Сайт продукту не показує взагалі [скрін](screens/sumone-site-first-screen.png)<br>*Висновок:* «нас двох» зчитується одразу, але через милоту й улюбленця, а не через обіцянку близькості. Два з чотирьох скрінів показують яйце EggMon. | **Так, але розмито.**<br>• Сайт: «Which couple would you rather be tonight?» і «до/після» пари [скрін](screens/agape-site-first-screen.png)<br>• App Store: підзаголовок «Friends, Family, Couples», «Add your friends, family, and partner» [скрін](screens/agape-appstore-full.png)<br>*Висновок:* сайт продає пару, стор — будь-які стосунки. | **Ні на сайті, так у застосунку.**<br>• Перший екран сайту — розпродаж, акаунт, кошик, бренд Інституту [скрін](screens/gottman-site-first-screen.png)<br>• Перший екран застосунку: «questions you can ask your partner» [скрін](screens/gottman-appstore-full.png)<br>*Висновок:* «разом» сказано, але як інструмент, а не як досвід. | **Так** (для друзів).<br>• «Friends and Celebs Post at the Same Time» [скрін](screens/bereal-appstore-full.png)<br>• Розділ «Meaningful Connections» на сайті [сайт](https://bereal.com)<br>*Висновок:* «разом» тут означає «в один момент», а не «одне одному». | **Так, через інтерфейс.**<br>• Під щоденним питанням два аватари і вкладка «Your turn»<br>• Перший скрін App Store — фото пари і лічильник «Together for» [скрін](screens/couplejoy-site-first-screen.png) · [скрін](screens/couplejoy-appstore-full.png)<br>*Висновок:* єдиний, хто показує сам ритуал пари на першому екрані сайту. Але заголовок — гучна обіцянка «10x better», а не «ближче». |
| **4. Як задача завершується** | • Після відкриття відповідей — обговорення: «unlock… to start a discussion» [GP](https://play.google.com/store/apps/details?id=com.getpaired.app)<br>• Стрік особистий у кожного, «Streak Freeze» застосовується автоматично [help](https://support.paired.com/en/articles/164646-what-is-a-streak)<br>• Відновити зламаний стрік можна лише в Premium, якщо він був від 7 днів [help](https://support.paired.com/en/articles/164646-what-is-a-streak)<br>• Відгук: після кінця пробного періоду відповіді партнера стали недоступні [AS](https://apps.apple.com/us/app/id1469609343) | • Відповіді вирощують спільного улюбленця EggMon, з часом він вилуплюється в нову форму [AS](https://apps.apple.com/us/app/id1469506430)<br>• До відповіді можна додати емоцію дня, наприкінці місяця Hakoo збирає «the record of your love» [AS](https://apps.apple.com/us/app/id1469506430)<br>• Коментарі під відповідями [Reddit](https://www.reddit.com/r/LDR/comments/1mxko5y/free_app_for_couples_to_connect/) · [скрін](screens/sumone-appstore-full.png)<br>• Валюта pebbles на декор кімнати EggMon: за відвідування, годування й рекламу (відповідь розробника у відгуках) [AS](https://apps.apple.com/us/app/id1469506430)<br>• Стріку в описі стору немає [AS](https://apps.apple.com/us/app/id1469506430) · [GP](https://play.google.com/store/apps/details?id=com.sumone)<br>• Відгук після 2 років і 200+ питань: питання гіршають, годувати EggMon 3–4 рази — «a waste of time» [AS](https://apps.apple.com/us/app/id1469506430)<br>• Відгук: «The ads are getting out of control!» [GP](https://play.google.com/store/apps/details?id=com.sumone) | • Обоє бачать відповіді<br>• Бали за довжину й швидкість відповіді, бонус за 7 днів поспіль. 100 балів = участь у розіграші [FAQ](https://www.getdailyagape.com)<br>• Спогади можна коментувати (v3.73.0) [скрін](screens/agape-appstore-full.png)<br>• Відгук: питання повторюються, застосунок набрид за рік [AS](https://apps.apple.com/us/app/id1507907556) | • Стану завершення немає: картка → розмова поза застосунком<br>• Лишається лише «Favorites» [сайт](https://www.gottman.com/couples/apps/)<br>• Відгук: хочуть ділитися картками без скріншотів [AS](https://apps.apple.com/us/app/id1292398843) | • Публікація відкриває стрічку друзів<br>• Запізнілий пост дозволено, але він позначений «late» [Wikipedia](https://en.wikipedia.org/wiki/BeReal)<br>• Далі RealMojis і коментарі [GP](https://play.google.com/store/apps/details?id=com.bereal.ft) | • Обговорення відповідей у чаті [GP](https://play.google.com/store/apps/details?id=com.angcosmin.couple)<br>• Щоденний стрік. Відновлення продається окремо: «Streak Repair» від $0,99 за день до $3,99 за 4 дні [AS](https://apps.apple.com/us/app/id1624758651)<br>• v4.29.0: стрік, відповіді й «days together» можна поширити в соцмережі [скрін](screens/couplejoy-appstore-full.png)<br>• Відгук: free «feels like a demo» [AS](https://apps.apple.com/us/app/id1624758651) |
| **5. Мова інтерфейсу** | **EN, FR, DE**<br>«more languages soon to follow» [help](https://support.paired.com/en/articles/164634-can-i-use-paired-in-another-language) · [AS](https://apps.apple.com/us/app/id1469609343)<br>Немає ES, PT, UK | **EN + 8**: FR, DE, ES, JA, KO, TH, VI, традиційна китайська [AS](https://apps.apple.com/us/app/id1469506430)<br>Немає PT, UK | **EN** [AS](https://apps.apple.com/us/app/id1507907556)<br>Немає ES, PT, UK | **EN** [AS](https://apps.apple.com/us/app/id1292398843)<br>Release notes 2.2.0 згадують іспанську — перевірити<br>Немає PT, UK | **EN + 13**, серед них ES і PT [AS](https://apps.apple.com/us/app/id1459645446)<br>На сайті є перемикач мови [сайт](https://bereal.com)<br>Немає UK | **EN** [AS](https://apps.apple.com/us/app/id1624758651)<br>Немає ES, PT, UK |

### Три спільні патерни ринку

1. **Взаємне відкриття — стандарт категорії, а не фішка.**
   - Відповідь партнера закрита, доки не відповів ти:
     - Paired — «Add your answers… then unlock your partner's responses» [GP](https://play.google.com/store/apps/details?id=com.getpaired.app);
     - Agapé — «only able to see each other's response, once you have both responded» [GP](https://play.google.com/store/apps/details?id=com.getdailyagape);
     - SumOne — за словами користувача Reddit [Reddit](https://www.reddit.com/r/LDR/comments/1mxko5y/free_app_for_couples_to_connect/);
     - Couple Joy — у старому описі попереднього видавця [Mergeek](https://www.mergeek.com/latest/ZG9o3n3rq62mKMqg). Для поточної версії дані не підтверджені.
   - BeReal робить те саме з друзями: пости розмиті, доки не опублікуєш свій [webwise.ie](https://www.webwise.ie/trending/explained-what-is-bereal/).
   - *Висновок:* для нас це вхідна вимога, а не відмінність.
2. **Обіцянка «кілька хвилин на день» плюс захист звички.**
   - Обіцянки часу:
     - Paired — «in just 5 minutes a day» [AS](https://apps.apple.com/us/app/id1469609343);
     - Agapé — «in 1 minute or less» [скрін](screens/agape-site-first-screen.png);
     - BeReal — «One notification, two minutes» [скрін](screens/bereal-appstore-full.png);
     - SumOne тривалості не називає, але пара сама обирає час питання [AS](https://apps.apple.com/us/app/id1469506430).
   - Захист звички:
     - Paired — автоматична заморозка стріку [help](https://support.paired.com/en/articles/164646-what-is-a-streak);
     - Agapé — бали за 7 днів поспіль [FAQ](https://www.getdailyagape.com);
     - Couple Joy — платне відновлення стріку [AS](https://apps.apple.com/us/app/id1624758651);
     - SumOne — улюбленець EggMon, який росте від відповідей [AS](https://apps.apple.com/us/app/id1469506430).
3. **Перший екран продає емоцію й соцдоказ, а не процес.**
   - Paired — «★4.7 300k+ reviews» [скрін](screens/paired-site-first-screen.png).
   - SumOne — «10M+ users» [скрін](screens/sumone-appstore-first-screen.png).
   - Couple Joy — «#1 App for Couples» [скрін](screens/couplejoy-appstore-full.png).
   - Agapé — «Before Agapé → After Agapé» [скрін](screens/agape-site-first-screen.png).
   - Сам ритуал пари на першому екрані сайту показує лише Couple Joy: щоденне питання з двома аватарами [скрін](screens/couplejoy-site-first-screen.png).
   - *Висновок* з переглянутих скрінів: як підключити партнера, на першому екрані не показує ніхто.

### Три відмінності

1. **Хто такий «партнер».**
   - Строго пара:
     - Paired — «Feel closer as a couple» [скрін](screens/paired-site-first-screen.png);
     - SumOne — «Couple App» [скрін](screens/sumone-appstore-full.png);
     - Couple Joy — «#1 App for Couples» [скрін](screens/couplejoy-appstore-full.png).
   - Будь-які стосунки: Agapé — «Add your friends, family, and partner» [скрін](screens/agape-appstore-full.png).
   - Синхронізації немає, один телефон на двох: Gottman Card Decks [сайт](https://www.gottman.com/couples/apps/).
   - Соло-ритуал:
     - Agapé без пари показує лише спогади, одиноким — «not at this time» [FAQ](https://www.getdailyagape.com);
     - у Paired, SumOne і Couple Joy публічно не описано: доступ обмежений, дані не підтверджені.
2. **Модель стріку і що буває з утраченим.**
   - Paired: стрік особистий, відновлення лише в Premium [help](https://support.paired.com/en/articles/164646-what-is-a-streak). За відгуком, після пробного періоду відповіді партнера стали недоступні [AS](https://apps.apple.com/us/app/id1469609343).
   - Couple Joy: відновлення кожного дня окремо, $0,99–3,99 [AS](https://apps.apple.com/us/app/id1624758651).
   - Agapé: бали й розіграші [FAQ](https://www.getdailyagape.com).
   - SumOne: стріку в описі немає. Валюту pebbles дають за відвідування, годування улюбленця й рекламу [AS](https://apps.apple.com/us/app/id1469506430).
   - Gottman Card Decks: стріку немає, лишаються лише «Favorites» [сайт](https://www.gottman.com/couples/apps/).
   - *Висновок:* продаж утраченого суперечить принципу брифу «не забирати безкоштовне» (розділ 8).
3. **Мови.**
   - Paired: EN, FR, DE [help](https://support.paired.com/en/articles/164634-can-i-use-paired-in-another-language).
   - BeReal: EN і ще 13, серед них ES і PT [AS](https://apps.apple.com/us/app/id1459645446).
   - SumOne: EN і ще 8, серед них ES, без PT [AS](https://apps.apple.com/us/app/id1469506430).
   - Agapé, Couple Joy, Gottman: лише EN за App Store [AS Agapé](https://apps.apple.com/us/app/id1507907556) · [AS Couple Joy](https://apps.apple.com/us/app/id1624758651) · [AS Gottman](https://apps.apple.com/us/app/id1292398843).
   - Українська — ні в кого. Наш набір EN, ES, PT, UK (бриф, розділ 2) не закриває ніхто з шістьох.


### Що видно на скрінах застосунків (галереї сторів)

Оригінальні картинки з App Store і Google Play лежать по теках `research/screens/<конкурент>/`. Перелік і джерела — [notes/screens-public.md](notes/screens-public.md). Це маркетингові макети, а не записи реального використання.

- **Paired:** розкриття відповіді партнера з замком [скрін](screens/paired/appstore-03.jpg). Екран «Strength / Growth» з висновками про пару [скрін](screens/paired/appstore-06.jpg). «Weekly missions for your partner» — завдання на кілька днів [скрін](screens/paired/appstore-08.jpg).
- **Paired, справжній екран:** підключення партнера — свій код або код партнера [скрін](screens/paired/help-pair-with-partner.png) · [help](https://support.paired.com/en/articles/164636-how-do-i-pair-with-my-partner).
- **SumOne:** відповіді обох під одним питанням [скрін](screens/sumone/appstore-03.jpg). Кнопка «Nudge» — нагадати партнеру відповісти [скрін](screens/sumone/appstore-06.jpg). Обмін pebbles на предмети [скрін](screens/sumone/appstore-07.jpg).
- **Agapé:** «Daily match» — з ким із близьких сьогодні відповідати [скрін](screens/agape/appstore-04.jpg). «Memory Scrapbook» [скрін](screens/agape/appstore-06.jpg).
- **Couple Joy:** питання наборами з лічильником «2/7» — є чіткий кінець набору [скрін](screens/couplejoy/appstore-05.jpg) · [скрін](screens/couplejoy/appstore-06.jpg). Карта стосунків [скрін](screens/couplejoy/appstore-07.jpg).
- **BeReal:** чужі пости розмиті до свого — «Unlock Hidden Pics by Posting Yours» [скрін](screens/bereal/appstore-05.jpg). Реакції RealMojis [скрін](screens/bereal/appstore-06.jpg).
- **Gottman Card Decks:** справжні екрани колод і карток [скрін](screens/gottman/appstore-01.jpg).

*Висновок:* Paired і SumOne додають «підштовхування» партнера (місії, Nudge), а Couple Joy — чіткий кінець набору. Як виглядає момент після відкриття відповідей у реальному користуванні, із цих макетів не видно: доступ обмежений.

Відео-огляди з проходженням застосунків (кадри не зняті) — у [notes/screens-public.md](notes/screens-public.md).

---

## 2. Бенчмарк

Повна версія з критеріями й оцінками — [notes/05-benchmark.md](notes/05-benchmark.md).

### Вимір: «Як задача завершується» (вісь 4 матриці)

**Чого не бачить людина:** коли обоє відповіли, людина бачить відповідь партнера, але не бачить, що це дало *їм двом*. Немає спільного результату, підказки до розмови чи сліду, до якого можна повернутись.

Чому саме ця вісь — на ній ринок найдалі від «об'єднувати». Факти з матриці:
- **Paired:** після відкриття — лише «start a discussion» [GP](https://play.google.com/store/apps/details?id=com.getpaired.app), відновлення стріку за Premium [help](https://support.paired.com/en/articles/164646-what-is-a-streak).
- **Agapé:** бали й розіграші [FAQ](https://www.getdailyagape.com).
- **Couple Joy:** платне відновлення стріку [AS](https://apps.apple.com/us/app/id1624758651).
- **SumOne:** відповіді вирощують улюбленця. Ближче за всіх до спільного результату — місячний підсумок емоцій, але раз на місяць і лише про настрій [AS](https://apps.apple.com/us/app/id1469506430).
- **Gottman Card Decks:** стану завершення немає — картка, а далі розмова поза застосунком [сайт](https://www.gottman.com/couples/apps/).

Еталони з інших категорій і сума балів за 8 критеріями, з 40:

| Еталон | Сума | У чому найсильніший |
|---|---|---|
| BeReal | 30 | розкриття, реакція, приватний архів |
| Spotify Blend | 25 | спільний результат із двох смаків |
| Strava | 23 | визнання одним дотиком |
| Wordle | 22 | чіткий кінець дня |
| Duolingo (Friend Streak і Friends Quest) | 22 | спільний прогрес, нагорода обом |

*Висновок:* бали — моя оцінка за фактами з 05, а не дані.

### Топ-3 механізми для MVP

1. **«Ваш збіг дня» — спільна картка з двох відповідей.**
   - **Звідки:** Spotify Blend будує один плейлист із двох смаків і показує відсоток збігу та пісню, що вас об'єднує [TechCrunch](https://techcrunch.com/?p=2196189) · [Hypebot](https://www.hypebot.com/4-ways-to-use-spotifys-new-blend-shared-playlists-to-interact-with-fans/).
   - **У нас:** після розкриття — одна картка: де збіглися, де ні, і зачіпка для розмови. Картка зберігається в журналі пари.
   - **Чому** (*висновок*): закриває найслабші місця ринку — місток до розмови і спільний артефакт. Працює без AI (бриф, розділ 6): збіги задає структура питання.
2. **Реакція на відповідь партнера за один дотик.**
   - **Звідки:** у BeReal це RealMoji, селфі з емоцією як реакція [PetaPixel](https://petapixel.com/bereal-guide/). У Strava — kudos: у 2017 році їх було 2,3 млрд [The Drum](https://www.thedrum.com/news/2018/07/09/strava-thumbs-down-facebook-likes-explains-why-sweating-kudos-better).
   - **У нас:** одна дія «я тебе почув(ла)», лише між двома, з пушем «твою відповідь побачили».
   - **Чому** (*висновок*): дає ще один привід повернутися, прив'язаний до партнера (бриф, розділ 8).
3. **Чіткий кінець дня і приватний архів «наше».**
   - **Звідки — Wordle:** після гри показує екран завершення дня, нова головоломка з'являється опівночі [NYT Help](https://thenewyorktimeshelpcenter.helpjuice.com/24611727334932-Wordle).
   - **Звідки — BeReal Memories:** приватний архів власних постів [BeReal Help](https://help.bereal.com/hc/en-us/articles/7531349180829). Сторінка віддала помилку 403, тож факт узято з її опису в пошуку: дані не підтверджені напряму.
   - **У нас:** екран «на сьогодні все» з часом наступного питання. Архів пари не зникає без підписки.
   - **Чому** (*висновок*): прямо реалізує принцип брифу «не забирати безкоштовне, зберігати дані» (розділ 8). Це протилежність Paired, де відповіді партнера після пробного періоду, за відгуком, стали недоступні [AS](https://apps.apple.com/us/app/id1469609343).

### Що не спрацює: публічне поширення і змагання з іншими парами

- **Звідки:** у Wordle кнопка Share копіює сітку результату без слова [TechRadar](https://www.techradar.com/news/wordle-is-distracting-everyone-in-2022-but-what-is-it). У Strava kudos ставлять підписники [The Drum](https://www.thedrum.com/news/2018/07/09/strava-thumbs-down-facebook-likes-explains-why-sweating-kudos-better).
- **Чому не в нас** (*висновок*):
  - **зміст інтимний.** Бриф: нічого не надсилається автоматично, самопізнання приватне (розділи 4 і 5);
  - **ризик у небезпечних стосунках.** Публічний слід може стати інструментом контролю (бриф, розділ 5);
  - **порівняння з іншими парами** перетворює близькість на оцінку. Про Paired на Reddit уже пишуть, що питання «prompt arguments rather than dialogue». Цитата є в [notes/03-competitors.md](notes/03-competitors.md) (картка Paired), але без посилання на конкретний тред: дані не підтверджені.

---

## 3. Патерни

Повна версія з п'ятьма патернами — [notes/06-patterns.md](notes/06-patterns.md).

**Ключова задача:** щодня за 2–5 хвилин дати парі привід зблизитися. Кожен ділиться чимось особистим, і обидва бачать це лише тоді, коли поділилися обоє. Джерело — бриф, розділи 1, 3, 7 і 8.

### Обраний патерн: закрита відповідь і взаємне відкриття

**Як працює:**
- одне питання на день;
- кожен відповідає окремо, у свій час;
- відповідь партнера закрита, доки не відповів сам;
- коли відповіли обоє, відповіді відкриваються одночасно.

Де застосовується — Paired, Agapé, SumOne (джерела в «Трьох спільних патернах» вище).

**Чому саме він під наш контекст** (*висновок* зі звірки з брифом):
1. **Це правило приватності брифу, перекладене в UX.** Розділ 4: парні відповіді видно партнеру лише після того, як він теж відповів. На стеку з розділу 11 це правило забезпечує сама база даних (Row Level Security у Supabase), а не лише інтерфейс.
2. **Працює для всіх пар з брифу і вкладається у 2–5 хвилин.**
   - Асинхронність однаково підходить парам, що живуть разом, і парам на відстані (розділ 2).
   - Пуш «партнер уже відповів, твоя черга» з розділу 8 існує лише в цьому патерні.
3. **Знімає холодний старт удвох і дає виміряти головне питання MVP.**
   - Людина відповідає соло ще до того, як партнер приєднався, і це привід для запрошення (розділ 14).
   - Кожен крок видно в даних: відповів → запросив → партнер відповів → відкрили. Це ті самі метрики з розділу 7.

**Умова:** патерн спрацює лише з сильним завершенням — трьома механізмами з бенчмарку вище. Без них ми повторимо Paired і Agapé саме там, де ринок найслабший.

**Інші патерни коротко:**
- **«Вгадай партнера»** — другий, за умови: питання емоційні, а не про факти, і без рахунку між партнерами. Тоді це формат того самого щоденного ритуалу.
- **«Розмова поруч за картками»** не підходить як основа щоденного ритуалу. Він не працює для пар на відстані і соло, не дає події для пушу, а вся дія лишається поза застосунком.

---

## 4. Висновки

Кожен рядок — прогалина ринку, наша гіпотеза і розділ цього файлу, з якого вона випливає. Усі гіпотези — **[гіпотеза]** у термінах брифу. Їх ще треба перевірити, це не факти.

| # | Прогалина | Гіпотеза | Звідки випливає |
|---|---|---|---|
| 1 | Після взаємного розкриття немає спільного результату: лише дві відповіді, стрік або бали. | Якщо після розкриття показувати картку «Ваш збіг дня» із зачіпкою для розмови, частка пар, активних ≥3 дні на тиждень на 2-му тижні (бриф, розділ 7), буде вищою, ніж при простому показі двох відповідей. | 2. Бенчмарк — вимір і механізм 1; 1. Конкуренти — матриця, вісь 4 |
| 2 | Після відкриття партнер ніяк не дає знати, що прочитав. Реакція можлива лише окремим повідомленням або чатом. | Якщо дати реакцію одним дотиком з пушем «твою відповідь побачили», частка днів, коли відповідають обоє, зросте, а D7 пари буде вищим. | 2. Бенчмарк — механізм 2 |
| 3 | Втрату продають: платне відновлення стріку, відповіді партнера після пробного періоду, за відгуком, недоступні. | М'який стрік пари з безкоштовною заморозкою і архів, що не зникає без підписки, підвищать D30 retention пар без падіння конверсії в підписку. | 1. Конкуренти — відмінність 2; 2. Бенчмарк — механізм 3 |
| 4 | Публічно ніхто не показує соло-ритуал до приходу партнера, а Agapé прямо каже одиноким «not at this time». | Якщо людина може відповісти на питання дня соло і її відповідь чекає партнера, більше людей запросить партнера, і більше запрошених приєднаються (бриф, розділ 7: метрика «Пара»). | 1. Конкуренти — відмінність 1; 3. Патерни — причина 3 |
| 5 | Перший екран продає соцдоказ, але не показує, як іде ритуал і як підключити партнера. | Якщо стор, лендинг і онбординг показують сам ритуал (дві закриті відповіді → відкриття) і крок «запроси партнера», частка тих, хто пройшов перший ритуал (активація, розділ 7), буде вищою. | 1. Конкуренти — патерн 3 і матриця, вісь 1 |
| 6 | Набір EN, ES, PT, UK не закриває ніхто, української немає ні в кого. | Повна локалізація з першого дня дасть у ES-, PT- і UK-мовних користувачів активацію, не нижчу за англомовних. Без неї ці ринки лишаються незайнятими. | 1. Конкуренти — відмінність 3 і матриця, вісь 5 |
| 7 | Питання повторюються і закінчуються: Agapé за рік [AS](https://apps.apple.com/us/app/id1507907556), SumOne після 2 років [AS](https://apps.apple.com/us/app/id1469506430). | Чергування форматів у ритуалі (відверте питання і «вгадай партнера» на емоцію) відсуне падіння активності пари порівняно з одним форматом. | 1. Конкуренти — матриця, вісь 4; 3. Патерни — другий патерн |

---

## Джерела

- Нотатки кроків: [03 — конкуренти](notes/03-competitors.md) · [04 — матриця](notes/04-matrix.md) · [05 — бенчмарк](notes/05-benchmark.md) · [06 — патерни](notes/06-patterns.md)
- Скріни публічних сторінок: [research/screens/](screens/)
- Бриф: [CLAUDE.md](../CLAUDE.md)
- Посилання на окремі факти — поруч із кожним фактом вище і в матриці.
