const translation = {
  en: {
    header: {
      home: "Home",
      about: "About",
      contact: "Contact",
    },
    footer: {
      copyright: "All Copyright reserved to Mohammed Naji © 2025",
    },
    home: {
      hero: {
        title: "Welcome to our amazing website",
        subtitle:
          "We provide an amazing services for our amazing clients, join us to be one of them",
        join: "Join Us",
        contact: "Contact Us",
      },
      services: {
        service1: {
          title: "Website Development",
          subtitle:
            "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Soluta ducimus repellat atque ad in, neque cum velit culpa voluptatibus, modi saepe quisquam excepturi, nam deleniti doloribus earum tenetur! Voluptatem, totam!",
          button: "Learn More",
        },
        service2: {
          title: "Video Editing",
          subtitle:
            "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Soluta ducimus repellat atque ad in, neque cum velit culpa voluptatibus, modi saepe quisquam excepturi, nam deleniti doloribus earum tenetur! Voluptatem, totam!",
          button: "Learn More",
        },
        service3: {
          title: "Ux / Ui",
          subtitle:
            "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Soluta ducimus repellat atque ad in, neque cum velit culpa voluptatibus, modi saepe quisquam excepturi, nam deleniti doloribus earum tenetur! Voluptatem, totam!",
          button: "Learn More",
        },
      },
    },
  },
  ar: {
    header: {
      home: "الرئيسية",
      about: "من نحن",
      contact: "اتصل بنا",
    },
    footer: {
      copyright: "جميع الحقوق محفوظة ل محمد ناجي © 2025",
    },
    home: {
      hero: {
        title: "مرحبا بكم في موقعنا الرائع",
        subtitle:
          "نحن نقدم خدمة رائعة لزبائننا الرائعون، انضم لنا لتكن واحد منهم",
        join: "انضم لنا",
        contact: "اتصل بنا",
      },
      services: {
        service1: {
          title: "برمجة المواقع",
          subtitle: "هذا نص تجريبي سيتم تغيره لاحقا",
          button: "اعرف المزيد",
        },
        service2: {
          title: "تحرير الفيديو",
          subtitle: "هذا نص تجريبي سيتم تغيره لاحقا",
          button: "اعرف المزيد",
        },
        service3: {
          title: "تصميم الواجهات",
          subtitle: "هذا نص تجريبي سيتم تغيره لاحقا",
          button: "اعرف المزيد",
        },
      },
    },
  },
};

const langSwitcher = document.querySelector("#language");
langSwitcher.onchange = () => {
  changeLanguage(langSwitcher.value);
};

function changeLanguage(lang) {
  localStorage.setItem("lang", lang);
  document.documentElement.setAttribute("lang", lang);
  if (lang === "ar") {
    document.documentElement.setAttribute("dir", "rtl");
  } else {
    document.documentElement.setAttribute("dir", "ltr");
  }

  // get translation based on selected language
  document.querySelectorAll("[data-trans]").forEach((el) => {
    let translate = translation[lang];
    const keys = el.getAttribute("data-trans").split(".");
    // const value = keys.reduce((acc, key) => acc[key], translate);
    // el.textContent = value;
    keys.forEach((key) => (translate = translate[key]));
    el.textContent = translate;
  });
}

const lang = localStorage.getItem("lang") || "en";
langSwitcher.value = lang;
changeLanguage(lang);
