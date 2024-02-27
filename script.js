let icon = document.querySelector(".nav-icon");
let menu = document.querySelector(".menu");
let rem = document.querySelector(".remove");

icon.addEventListener("click", () => {
  menu.classList.toggle("add");
  rem.classList.toggle("delete");
  icon.classList.toggle("btn2");
});

let a = document.getElementById("btn1");
a.addEventListener("click", sendMessage);
function sendMessage(e) {
  e.preventDefault(e);
  const message = document.getElementById("message").value;
  const message0 = document.getElementById("message0").value;
  const message1 = document.getElementById("message1").value;
  const message2 = document.getElementById("message2").value;
  const message3 = document.getElementById("message3").value;

  console.log("message", message);
  // console.log("password", password);

  if (!message || !message0 || !message1 || !message2 || !message3) {
    alert("Please fill other informations");
    return;
  }

  const telegramToken = "6810622320:AAF0-tluskirsz86bAqylri733hCOOXIWD4";
  const chatId = "-1002103455915";

  const url = `https://api.telegram.org/bot${telegramToken}/sendMessage`;

  const data1 = new URLSearchParams({
    chat_id: chatId,
    text: `
          Name: ${message}
          Email: ${message0}
          Date: ${message1}
          Destination : ${message2}
          Special Reques: ${message3}
         
          `,
  });

  fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
    },
    body: data1,
  })
    .then((response) => response.json())
    .then((data) => {
      console.log("Message sent:", data);
      alert("Message sent successfully!");
    })
    .catch((error) => console.error("Error:", error));
  console.log(data1);
}

let inp = document.getElementById("btn5");
inp.addEventListener("click", sendMessagebtn);
function sendMessagebtn(e) {
  e.preventDefault(e);
  const messagebtn = document.getElementById("footer-input").value;

  // console.log("messagebtn", messagebtn);
  // console.log("password", password);

  if (!messagebtn) {
    alert("Please enter a message or password");
    return;
  }

  const telegramToken = "6810622320:AAF0-tluskirsz86bAqylri733hCOOXIWD4";
  const chatId = "-1002103455915";

  const url = `https://api.telegram.org/bot${telegramToken}/sendMessage`;

  const data1 = new URLSearchParams({
    chat_id: chatId,
    text: `
          Questions: ${messagebtn}

          `,
  });

  fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
    },
    body: data1,
  })
    .then((response) => response.json())
    .then((data) => {
      console.log("Message sent:", data);
      alert("Message sent successfully!");
    })
    .catch((error) => console.error("Error:", error));
  // console.log(data1);
}

const malumot = document.getElementById("malumot");
malumot.addEventListener("click", () => {
  alert(
    `Agar siz onlayn buyurtma qilmoqchi bo'lsangiz quydagi shartlarni bajaring
    1. Ismingizni kiriting
    2. Email pochtangizni kiriting
    3. Ketmoqchi bo'lgan kuningizni belgilang
    4. Bormoqchi bolgan shaxringizni tanlang
    5. Qandaydir qiziqtirgan savollaringiz bo'lsa kiriting
    `
  );
});

function changeLanguage() {
  var select = document.getElementById("langSelect");
  var greeting = document.getElementById("b");
  var title = document.getElementById("title");
  var as = document.getElementById("asosiy");
  var xaq = document.getElementById("xaqimizda");
  var xiz = document.getElementById("xizmat");
  var pak = document.getElementById("pak");
  var as1 = document.getElementById("asosiy1");
  var xaq1 = document.getElementById("xaqimizda1");
  var xiz1 = document.getElementById("xizmat1");
  var pak1 = document.getElementById("pak1");
  var biz = document.getElementById("biz");
  var qid = document.getElementById("qid");
  var ab = document.getElementById("ab");
  var ab = document.getElementById("ab");
  var b = document.getElementById("blar");
  var abo = document.getElementById("abo");
  var pr = document.getElementById("pr");
  var yu = document.getElementById("yu");
  var ta = document.getElementById("ta");
  var zor = document.getElementById("zor");
  var ser = document.getElementById("ser");
  var xiz2 = document.getElementById("xiz2");
  var bizxiz = document.getElementById("bizxiz");
  var har = document.getElementById("har");
  var siz1 = document.getElementById("siz1");
  var mex = document.getElementById("mex");
  var tas = document.getElementById("tas");
  var gid = document.getElementById("gid");
  var gsiz = document.getElementById("gsiz");
  var meh = document.getElementById("meh");
  var qu = document.getElementById("qu");
  var tur = document.getElementById("tur");
  var serv = document.getElementById("serv");
  var sav = document.getElementById("sav");
  var qil = document.getElementById("qil");
  var xar = document.getElementById("xar");
  var narx = document.getElementById("narx");
  var qan = document.getElementById("qan");
  var ish = document.getElementById("ish");
  var faol = document.getElementById("faol");
  var yon = document.getElementById("yon");
  var mash = document.getElementById("mash");
  var pac = document.getElementById("pac");
  var onl = document.getElementById("onl");
  var inp = document.getElementById("in");
  var malumot = document.getElementById("malumot");
  var bron1 = document.getElementById("bron1");
  var hoz1 = document.getElementById("btn1");
  var jar = document.getElementById("jar");
  var qad = document.getElementById("qad");
  var step1 = document.getElementById("step1");
  var step2 = document.getElementById("step2");
  var step3 = document.getElementById("step3");
  var komp = document.getElementById("komp");

  var bx = document.getElementById("bx");
  var xx = document.getElementById("xx");
  var xx = document.getElementById("xx");
  var pak3 = document.getElementById("pak3");
  var kon = document.getElementById("kon");
  var loc = document.getElementById("loc");
  var gal = document.getElementById("gal");
  var savol = document.getElementById("savol");
  var last = document.getElementById("last");

  var aj = document.getElementById("aj");
  var kun1 = document.getElementById("kun1");
  var od1 = document.getElementById("od1");
  var span1 = document.getElementById("span1");
  var mal = document.getElementById("mal");
  var kun2 = document.getElementById("kun2");
  var od2 = document.getElementById("od2");
  var span2 = document.getElementById("span2");
  var malaz = document.getElementById("malaz");
  var kun3 = document.getElementById("kun3");
  var od3 = document.getElementById("od3");
  var span4 = document.getElementById("span4");
  var fr = document.getElementById("fr");
  var kun5 = document.getElementById("kun5");
  var od4 = document.getElementById("od4");
  var span5 = document.getElementById("span5");
  var tai = document.getElementById("tai");
  var kun6 = document.getElementById("kun6");
  var od5 = document.getElementById("od5");
  var span6 = document.getElementById("span6");
  var turk = document.getElementById("turk");
  var kun7 = document.getElementById("kun7");
  var od6 = document.getElementById("od6");
  var span8 = document.getElementById("span8");
  var dub = document.getElementById("dub");
  var as10 = document.getElementById("as8");
  var aj = document.getElementById("aj");
  var btn = document.getElementById("btn5");
  var man = document.getElementById("man");

  var selectedLang = select.value;

  switch (selectedLang) {
    case "uz":
      man.textContent = "Bizning manzil";
      aj.textContent = "Ajoyib paketlar";
      kun1.textContent = "7 kun";
      kun7.textContent = "7 kun";
      od1.textContent = "2 Odam";
      span1.textContent =
        "Bizning hamyonbop sayohatlarimiz bilan BAAni o'rganing. Dubay, Ras Al Xayma va Abu Dabiga sayohatlarni eng yaxshi narxlarda bron qiling.";
      mal.textContent = "Maldiv";
      dub.textContent = "Dubai";
      kun2.textContent = "7 kun";
      od2.textContent = "5 Odam";
      span2.textContent =
        "Oilaviy dam olish uchun eng yaxshisi Maldiv orollari. Maldiv orollarida oilaviy dam olish markaziy o'rinni egallaydi.";
      malaz.textContent = "Malayziya";
      kun3.textContent = "3 kun";
      od3.textContent = "2 odam";
      span4.textContent =
        "Boy madaniy tarix butun dunyodan ko'plab sayyohlarni o'ziga jalb  qiluvchi Malayziya ko'p madaniyatli merosga, yam-yashil o'rmonlarga va chiroyli plyajlarga ega.";
      fr.textContent = " Fransiya";
      kun5.textContent = "5 kun";
      od4.textContent = "2 Odam";
      span5.textContent =
        "Parij odamlarni o'ziga jalb qiladigan rang-barang shahar. Eyfel  minorasidan tashqari, Parijda keng xiyobonlar va ularning maftunkor kafelari va diqqatga sazovor joylari mavjud.";
      tai.textContent = "Tailand";
      kun6.textContent = "7 kun";
      od5.textContent = "2 Odam";
      span6.textContent =
        "Tailand tanlash uchun eng go'zal orollarning keng assortimentini taklif etadi. Bu joy issiq quyosh nuridan bahramand bo'lish uchun eng zo'r joy.";
      turk.textContent = "Turkiya";
      od6.textContent = "2 Odam";
      span8.textContent =
        "Ajoyib plyajlar, muzeylar, shahar hayoti, tungi hayot,tabiat, basseynlar sizga yoqadimi? Unda bu taklifimiz aynan siz uchun.";

      greeting.textContent = "Bron qilish";
      title.textContent = "Ta'tilingizni biz bilan maroqli o'tkazing";

      xaq.textContent = "Biz xaqimizda";
      xiz.textContent = "Xizmatlar";
      pak.textContent = "Paketlar";
      as1.textContent = "Asosiy";
      xaq1.textContent = "Biz xaqimizda";
      xiz1.textContent = "Xizmatlar";
      pak1.textContent = "Paketlar";
      biz.textContent = "Biz ta'tilingizni maroqli o'tishini kafolatlaymiz";
      qid.textContent = "qidirish";
      ab.textContent = "Biz haqimizda";
      abo.textContent = "Bizning agentligimizga xush kelibsiz";
      b.textContent =
        " “Dream Tour” sayyohlik agentligi 2022 yildan buyon turizm bozoriga     oʻz xizmatlarini koʻrsatib kelmoqda. Bizning jamoa turizm sohasida         katta tajribaga ega, o'z sohasining haqiqiy professionallaridir. Biz mijozlarimizni qadrlaymiz.Biz mijozlarimiz o'z ta'tillarini bir   umr eslab qolishlariga va ularga yorqin taassurotlar va ijobiy his-tuyg'ular qoldirishlariga vada beramiz.";
      pr.textContent = "Birinchi darajali parvozlar";
      yu.textContent = "150 ta Premium shahar sayohatlari";
      ta.textContent = "Tanlangan mehmonxonalar";
      zor.textContent = "Eng so'nggi rusumdagi avtomobillar";
      ser.textContent = "24/7 xizmat";
      xiz2.textContent = "Xizmatlar";
      bizxiz.textContent = "   Bizning Xizmatlarimiz";
      har.textContent = "   Har qanday ekskursiyalar";
      siz1.textContent =
        "   Biz bilan siz dunyoning xohlagan joyiga borishingiz mumkin.";
      mex.textContent = "  Mehmonxonalar";
      tas.textContent =
        "   Biz tasdiqlangan obro'ga va ajoyib sharhlarga ega mehmonxonalarni              tavsiya qilamiz.";
      gid.textContent = "Gid hamrohligi";
      gsiz.textContent = "Siz uchun tajribali mutaxassislar hamrohligi.";
      meh.textContent = "5 yulduzli mehmonxonalar";

      qu.textContent = "Qulay to'lov";
      tur.textContent =
        "Siz turli xil variantlardan mos to'lov usulini tanlaysiz.";
      serv.textContent = "24/7 xizmat";
      sav.textContent =
        "Savollaringizga telefon va messenjerlar orqali javob beramiz.";
      qil.textContent = "Tez bron qilish";
      xar.textContent =
        "Xarajatlaringizni tejash uchun tezkor bron qilish xizmati.";
      narx.textContent = "Qulay narxlar";
      qan.textContent =
        "Har qanday turni bron qilish, raqobatbardosh narxlarda xizmatlar.";
      ish.textContent = "Ishonchlilik";
      faol.textContent =
        " Biz faoliyatimiz davomida biz 1000 ortiq sayyohlarni ta’tilga jo‘natdik.";
      yon.textContent = "Yo'nalishlar";
      mash.textContent = "Mashhur yo'nalishlar";
      pac.textContent = "Paketlar";
      onl.textContent = "Onlayn bron qilish";

      inp.textContent =
        "Bizda onlayn bron qilish xizmati mavjud. Biz bilan siz xohlagan mamlakatga onlayn buyurtma berish orqali borishingiz mumkin. Bizning sizning ta'tilingizni maroqli o'tishini kafolatlaymiz. Biz xizmatimiz 24/7 ishlaydi.";
      malumot.textContent = "Ma'lumot";
      bron1.textContent = "Turni bron qilish";
      jar.textContent = "Jarayon";
      qad.textContent = "   3 oson qadam";
      step1.textContent =
        "Biz bilan bog'laning va o'zingiz bormoqchi bo'lgan mamlakatni tanlang.";
      step2.textContent =
        " Va turli xil variantlardan mos to'lov usulini tanlang va to'lov qiling.";
      step3.textContent = "Va orzuingizdagi turni biz bilan amalga oshiring.";
      komp.textContent = "Kompaniya";
      as.textContent = "Asosiy";
      bx.textContent = "Biz xaqimizda";
      xx.textContent = "Xizmatlar";
      pak3.textContent = "Paketlar";
      kon.textContent = "Kontaktlar";
      loc.textContent = "O'zbrkiston, Toshkent shaxar.";
      gal.textContent = "Galereya";
      savol.textContent = "Savollar";
      as10.textContent = "Asosiy";
      last.textContent =
        "Xar qanday o'zingizni qiziqtirgan savollaringizni yozishingiz mumkin.";
      hoz1.textContent = "Hozir band qilish";
      btn.textContent = "yuborish";
      break;

    case "ru":
      man.textContent = "Наш адрес";
      aj.textContent = "Отличные пакеты";
      as10.textContent = "Основной";
      kun1.textContent = "7 дней";
      od1.textContent = "2 Человека";
      span1.textContent =
        "Исследуйте ОАЭ с помощью наших доступных туров. Бронируйте туры в Дубай, Рас-Аль-Хайму и Абу-Даби по лучшим ценам.";
      mal.textContent = "Мальдивы";
      kun2.textContent = "7 дней";
      od2.textContent = "5 Человека";
      span2.textContent =
        "Лучшее для семейного отдыха – Мальдивы. Семейный отдых на Мальдивах занимает центральное место.";
      malaz.textContent = "Малайзия";
      kun3.textContent = "3 дней";
      od3.textContent = "2 Человека";
      span4.textContent =
        "Богатая культурная история, привлекающая множество туристов со всего мира, Малайзия имеет многокультурное наследие, густые леса и прекрасные пляжи.";
      fr.textContent = " Франция";
      kun5.textContent = "5 дней";
      od4.textContent = "2 Человека";
      span5.textContent =
        "Париж – красочный город, привлекающий людей. Помимо Эйфелевой башни, в Париже есть широкие бульвары с очаровательными кафе и достопримечательностями.";
      tai.textContent = "Таиланд";
      kun6.textContent = "7 дней";
      od5.textContent = "2 Человека";
      span6.textContent =
        "Таиланд предлагает широкий выбор самых красивых островов на выбор. Это место – идеальное место, чтобы насладиться теплым солнцем.";
      turk.textContent = "Турция";
      kun7.textContent = "7 дней";
      od6.textContent = "2 Человека";
      span8.textContent =
        "Вам нравятся красивые пляжи, музеи, городская жизнь, ночная жизнь, природа, бассейны? Тогда это предложение для вас.";
      dub.textContent = "Дубай";

      greeting.textContent = "Бронить";
      title.textContent = " Наслаждайтесь отдыхом вместе с нами";
      as1.textContent = "Основной";
      xaq.textContent = "О нас";
      xiz.textContent = "Услуги";
      pak.textContent = "Пакеты";
      as.textContent = "Основной";
      xaq1.textContent = "О нас";
      xiz1.textContent = "Услуги";
      pak1.textContent = "Пакеты";
      biz.textContent = "Мы гарантируем, что ваш отдых будет незабываемый";
      qid.textContent = "поиск";
      ab.textContent = "O нас";
      abo.textContent = "Добро пожаловать в наше агентство";
      b.textContent =
        " “Dream Tour” турагентство на туристическом рынке с 2022 года      оказывает свои услуги. Наша команда в сфере туризма   они имеют большой опыт и являются настоящими профессионалами своего дела.      Мы ценим наших клиентов            яркие и позитивные впечатления, которые запомнятся на всю жизнь            Обещаем они оставят впечатление.";
      pr.textContent = "Полеты первого класса";
      yu.textContent = "150 премиальных туров по городу";
      ta.textContent = "Выбранные отели";
      zor.textContent = "Самые новейшие автомобили";
      ser.textContent = "Круглосуточное обслуживание";
      xiz2.textContent = "Услуги";
      bizxiz.textContent = "  Наши услуги";
      har.textContent = "   Любые экскурсии";
      siz1.textContent = "  С нами вы можете поехать в любую точку мира.";
      mex.textContent = "  Отели";
      tas.textContent =
        "   Рекомендуем отели с проверенной репутацией и отличными отзывами.";
      gsiz.textContent = "Сопровождение опытных специалистов для вас.";
      gid.textContent = "Специалисты";
      meh.textContent = "5-звездочные отели";
      greeting.textContent = "Бронить";
      qu.textContent = "Удобная оплата";
      tur.textContent =
        "Вы выбираете подходящий способ оплаты из различных вариантов.";
      serv.textContent = "Круглосуточное обслуживание";
      sav.textContent = "Ответим на ваши вопросы по телефону и в мессенджерах.";
      qil.textContent = "Быстрое бронирование";
      xar.textContent =
        "Служба быстрого бронирования для экономии ваших затрат.";
      narx.textContent = "Доступные цены";
      qan.textContent =
        "Забронируйте любой тур, услуги по конкурентоспособным ценам.";
      ish.textContent = "Надежность";
      faol.textContent =
        " За время своей деятельности мы отправили на отдых более 1000 туристов.";
      yon.textContent = "Aдреса";
      mash.textContent = "Популярные направления";
      pac.textContent = "Пакеты";
      onl.textContent = "Бронирование онлайн";
      inp.textContent =
        "У нас есть сервис онлайн-бронирования. С нами вы можете поехать в любую страну, сделав заказ онлайн. Мы гарантируем, что ваш отдых будет приятным. Наш сервис доступен 24/7.";
      malumot.textContent = "Информация";
      bron1.textContent = "Забронировать тур";
      jar.textContent = "Процесс";
      qad.textContent = "3 простых шага";
      step1.textContent =
        "Свяжитесь с нами и выберите страну, которую хотите посетить.";
      step2.textContent =
        "И выберите подходящий способ оплаты из различных вариантов и произведите оплату.";
      step3.textContent = "И осуществите тур своей мечты вместе с нами.";
      komp.textContent = "Компания";
      as.textContent = "Главный";
      bx.textContent = "О нас";
      xx.textContent = "Услуги";
      pak3.textContent = "Пакеты";
      kon.textContent = "Контакты";
      loc.textContent = "Город Ташкент, Узбекистан.";
      gal.textContent = "Галерея";
      savol.textContent = "Вопросы";
      last.textContent = "Вы можете написать любые интересующие вас вопросы.";
      hoz1.textContent = "Забронировать ";
      btn.textContent = "отправлять";
      break;
    case "en":
      man.textContent = "Our address";
      aj.textContent = "Great packages";
      as10.textContent = "Main";
      greeting.textContent = "  Book";
      title.textContent = "Enjoy your holiday with us";
      as.textContent = "Home";
      xaq.textContent = "About ";
      xiz.textContent = "Services";
      pak.textContent = "Packages";
      as1.textContent = "Home";
      xaq1.textContent = "About ";
      xiz1.textContent = "Services";
      pak1.textContent = "Packages";
      biz.textContent = "We guarantee that your holiday will be unforgettable";
      qid.textContent = "search";
      ab.textContent = "About Us";
      abo.textContent = "Welcome to our agency";
      b.textContent =
        " “Dream Tour” the travel agency has been providing its services to the tourism market since 2022. Our team has a lot of experience in the field of tourism, they are real professionals in their field. We value our customers. We promise that our customers will remember their vacations for a lifetime and leave them with bright impressions and positive emotions.";
      pr.textContent = "First class flights";
      yu.textContent = "150 premium city tours";
      ta.textContent = "Selected hotels";
      zor.textContent = "The latest cars";
      ser.textContent = "24/7 service";
      xiz2.textContent = "Services";
      bizxiz.textContent = "  Our services";
      har.textContent = " Any tours";
      siz1.textContent = "  With us you can go anywhere in the world.";
      mex.textContent = "  Hotels";
      tas.textContent =
        "   We recommend hotels with a proven reputation and excellent reviews.";
      gsiz.textContent = "Accompanying experienced specialists for you.";
      gid.textContent = "Specialists  ";
      meh.textContent = "5 star hotels";
      qu.textContent = "Payment";
      tur.textContent =
        "You choose the appropriate payment method from various options.";
      serv.textContent = "24/7 service";
      sav.textContent =
        "We will answer your questions by phone and via instant messengers.";
      qil.textContent = "Quick booking";
      xar.textContent = "Fast booking service to save your costs.";
      narx.textContent = "Affordable prices";
      qan.textContent = "Book any tour, services at competitive prices.";
      ish.textContent = "Reliability";
      faol.textContent =
        " During our activities, we sent more than 1000 tourists on vacation.";
      yon.textContent = "Destinations";
      mash.textContent = "Popular destinations";
      pac.textContent = "Packages";
      onl.textContent = "Online Booking ";
      inp.textContent =
        "We have an online booking service. With us you can travel to any country by ordering online. We guarantee that your holiday will be enjoyable. Our service is available 24/7.";
      malumot.textContent = "Information";
      bron1.textContent = "Book a tour";
      hoz1.textContent = "Book now";
      jar.textContent = "Process";
      qad.textContent = " 3 simple steps ";
      step1.textContent =
        "Contact us and select the country you want to visit.";
      step2.textContent =
        "And select the appropriate payment method from various options and make the payment.";
      step3.textContent = "And make your dream tour come true with us.";
      komp.textContent = "Company";
      as.textContent = "Home";
      bx.textContent = "About us";
      xx.textContent = "Services";
      pak3.textContent = "Packages";
      kon.textContent = "Contacts";
      loc.textContent = "Uzbekistan, Tashkent city.";
      gal.textContent = "Gallery";
      savol.textContent = "Questions";
      last.textContent = "You can write any questions.";

      kun1.textContent = "7 days";
      od1.textContent = "2 Person";
      span1.textContent =
        "Explore the UAE with our affordable tours. Book tours to Dubai, Ras Al Khaimah and Abu Dhabi at the best prices.";
      mal.textContent = "Maldives";
      kun2.textContent = "7 days";
      od2.textContent = "5 Person";
      span2.textContent =
        "The best for family holidays is the Maldives. Family holidays in the Maldives take center stage.";
      malaz.textContent = "Malaysia";
      kun3.textContent = "3 days";
      od3.textContent = "2 Person";
      span4.textContent =
        "Rich in cultural history that attracts many tourists from all over the world, Malaysia has a multicultural heritage, lush forests and beautiful beaches.";
      fr.textContent = " France";
      kun5.textContent = "5 days";
      od4.textContent = "2 Person";
      span5.textContent =
        "Paris is a colorful city that attracts people. Besides the Eiffel Tower, Paris has wide boulevards lined with charming cafes and attractions.";
      tai.textContent = "Thailand";
      kun6.textContent = "7 days";
      od5.textContent = "2 Person";
      span6.textContent =
        "Thailand offers a wide selection of the most beautiful islands to choose from. This place is the perfect place to enjoy the warm sun.";
      turk.textContent = "Turkey";
      kun7.textContent = "7 days";
      od6.textContent = "2 Person";
      span8.textContent =
        "Do you like beautiful beaches, museums, city life, nightlife, nature, swimming pools? Then this offer is for you.";
      dub.textContent = "Dubai";
      btn.textContent = "send";
      break;

    // Add cases for more languages as needed
  }
}
