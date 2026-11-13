(function () {
  const YES = "Yes";
  const NO = "—";

  const packages = {
    alist: {
      name: "A-List",
      price: "$599",
      summary:
        "2-hour party for 12 guests, with a full event party room, party host, and the most inclusions of any package.",
      book: "https://launchwarwick.centeredgeonline.com/event/description/816e4c0d-4d75-457c-ba4d-71e8bed8a72e",
      photo: "images/party-alist.jpg",
      photoAlt: "Kids gathered around a birthday cake with lit candles at a Launch party",
      photoPosition: "center 22%",
      extras: "$35",
      values: {
        Duration: "2 hr",
        Guests: "12",
        "Party place settings": YES,
        "Action Pass during party": "1 hr",
        "Launch grip socks": YES,
        "Party room": "Full event",
        "Unlimited Action Pass after party": YES,
        "GOH redemption prize tickets": "300",
        "GOH Launch T-shirt": YES,
        "GOH Human Claw experience": YES,
        "Party host": YES,
        Pizza: "4 large",
        "Unlimited pitchers": "3 flavors",
        "Goodie bags": YES,
        "Arcade credits": "40",
        "Pixel Floor games": "4",
        "GOH return pass": YES,
        "Private dodgeball game": YES,
        "Party platter": "1",
        "Laser Tag game": YES,
        "XP Arena": YES,
        "Additional guest": "$35"
      }
    },
    allstar: {
      name: "All-Star",
      price: "$489",
      summary:
        "2-hour party for 10 guests, with a full event party room, party host, and a choice of Laser Tag or XP Arena.",
      book: "https://launchwarwick.centeredgeonline.com/event/description/4fa624d1-7974-446b-869f-db160306c9a4",
      photo: "images/party-allstar.jpg",
      photoAlt: "Three friends at a Launch party table with pizza, balloons, and place settings",
      photoPosition: "center 22%",
      extras: "$30",
      values: {
        Duration: "2 hr",
        Guests: "10",
        "Party place settings": YES,
        "Action Pass during party": "1 hr",
        "Launch grip socks": YES,
        "Party room": "Full event",
        "Unlimited Action Pass after party": YES,
        "GOH redemption prize tickets": "300",
        "GOH Launch T-shirt": YES,
        "GOH Human Claw experience": YES,
        "Party host": YES,
        Pizza: "3 large",
        "Unlimited pitchers": "3 flavors",
        "Goodie bags": YES,
        "Arcade credits": "20",
        "Pixel Floor games": "4",
        "GOH return pass": NO,
        "Private dodgeball game": NO,
        "Party platter": NO,
        "Laser Tag game": "Choice",
        "XP Arena": "Choice",
        "Additional guest": "$30"
      }
    },
    mvp: {
      name: "MVP",
      price: "$389",
      summary:
        "2-hour party for 10 guests, with a full event party room, party host, pizza, and unlimited pitchers.",
      book: "https://launchwarwick.centeredgeonline.com/event/description/0585b079-01f4-4c4b-b61e-14766d72f265",
      photo: "images/party-mvp.jpg",
      photoAlt: "Kids laughing and playing together during a Launch party",
      photoPosition: "center 22%",
      extras: "$25",
      values: {
        Duration: "2 hr",
        Guests: "10",
        "Party place settings": YES,
        "Action Pass during party": "1 hr",
        "Launch grip socks": YES,
        "Party room": "Full event",
        "Unlimited Action Pass after party": YES,
        "GOH redemption prize tickets": "300",
        "GOH Launch T-shirt": YES,
        "GOH Human Claw experience": YES,
        "Party host": YES,
        Pizza: "2 large",
        "Unlimited pitchers": "3 flavors",
        "Goodie bags": YES,
        "Arcade credits": "20",
        "Pixel Floor games": NO,
        "GOH return pass": NO,
        "Private dodgeball game": NO,
        "Party platter": NO,
        "Laser Tag game": NO,
        "XP Arena": NO,
        "Additional guest": "$25"
      }
    },
    hof: {
      name: "Hall of Fame",
      price: "$299",
      summary:
        "2-hour party for 10 guests, with a full event party room, party host, Guest of Honor extras, and an Unlimited Action Pass after the party.",
      book: "https://launchwarwick.centeredgeonline.com/event/description/3ec1f389-9b7c-4236-af3a-603c518fdf76",
      photo: "images/party-hof.jpg",
      photoAlt: "A group playing arcade basketball together at Launch Warwick",
      photoPosition: "center 22%",
      extras: "$25",
      values: {
        Duration: "2 hr",
        Guests: "10",
        "Party place settings": YES,
        "Action Pass during party": "1 hr",
        "Launch grip socks": YES,
        "Party room": "Full event",
        "Unlimited Action Pass after party": YES,
        "GOH redemption prize tickets": "300",
        "GOH Launch T-shirt": YES,
        "GOH Human Claw experience": YES,
        "Party host": YES,
        Pizza: NO,
        "Unlimited pitchers": NO,
        "Goodie bags": NO,
        "Arcade credits": NO,
        "Pixel Floor games": NO,
        "GOH return pass": NO,
        "Private dodgeball game": NO,
        "Party platter": NO,
        "Laser Tag game": NO,
        "XP Arena": NO,
        "Additional guest": "$25"
      }
    },
    play: {
      name: "Playdate",
      price: "$149",
      summary:
        "1-hour party for 6 guests (minimum 6, maximum 8), with place settings, grip socks, a 1-hour party room, and a 1-hour Action Pass. Does not include an Unlimited Action Pass after the party.",
      book: "https://launchwarwick.centeredgeonline.com/event/description/91c2002e-0675-4c68-bc07-6c2bb0b5fabe",
      photo: "images/party-play.jpg",
      photoAlt: "A young guest getting face paint at a Launch party",
      photoPosition: "center 22%",
      extras: "$15",
      values: {
        Duration: "1 hr",
        Guests: "6 (max 8)",
        "Party place settings": YES,
        "Action Pass during party": "1 hr",
        "Launch grip socks": YES,
        "Party room": "1 hr",
        "Unlimited Action Pass after party": NO,
        "GOH redemption prize tickets": NO,
        "GOH Launch T-shirt": NO,
        "GOH Human Claw experience": NO,
        "Party host": NO,
        Pizza: NO,
        "Unlimited pitchers": NO,
        "Goodie bags": NO,
        "Arcade credits": NO,
        "Pixel Floor games": NO,
        "GOH return pass": NO,
        "Private dodgeball game": NO,
        "Party platter": NO,
        "Laser Tag game": NO,
        "XP Arena": NO,
        "Additional guest": "$15"
      }
    }
  };

  const featureOrder = [
    "Duration",
    "Guests",
    "Party place settings",
    "Action Pass during party",
    "Launch grip socks",
    "Party room",
    "Unlimited Action Pass after party",
    "GOH redemption prize tickets",
    "GOH Launch T-shirt",
    "GOH Human Claw experience",
    "Party host",
    "Pizza",
    "Unlimited pitchers",
    "Goodie bags",
    "Arcade credits",
    "Pixel Floor games",
    "GOH return pass",
    "Private dodgeball game",
    "Party platter",
    "Laser Tag game",
    "XP Arena",
    "Additional guest"
  ];

  const keys = ["alist", "allstar", "mvp", "hof", "play"];

  const incl = document.getElementById("pf-incl");
  const kicker = document.getElementById("pf-kicker");
  const price = document.getElementById("pf-price");
  const summary = document.getElementById("pf-summary");
  const book = document.getElementById("pf-book");
  const photo = document.getElementById("pf-photo");
  const panel = document.getElementById("party-panel");

  /* Preload package photos so switching is instant */
  Object.values(packages).forEach((pkg) => {
    if (!pkg.photo) return;
    const img = new Image();
    img.src = pkg.photo;
  });
  const tbody = document.getElementById("cmp-body");
  const tabs = Array.from(document.querySelectorAll(".party-pick"));

  function isNo(val) {
    return val === NO;
  }

  function renderTable(active) {
    tbody.innerHTML = featureOrder
      .map((feat) => {
        const cells = keys
          .map((key) => {
            const val = packages[key].values[feat];
            const on = key === active ? " col-on" : "";
            return `<td class="${on.trim()}">${val}</td>`;
          })
          .join("");
        return `<tr><th scope="row">${feat}</th>${cells}</tr>`;
      })
      .join("");

    document.querySelectorAll(".cmp-table [data-col]").forEach((th) => {
      th.classList.toggle("col-on", th.getAttribute("data-col") === active);
    });
  }

  function selectPackage(id, { focus } = {}) {
    const pkg = packages[id];
    if (!pkg) return;

    tabs.forEach((tab) => {
      const on = tab.dataset.pkg === id;
      tab.setAttribute("aria-selected", on ? "true" : "false");
      tab.tabIndex = on ? 0 : -1;
    });

    kicker.textContent = pkg.name + " package";
    price.textContent = pkg.price;
    summary.textContent = pkg.summary;
    book.href = pkg.book;
    book.textContent = "Book " + pkg.name;
    if (photo && pkg.photo) {
      if (photo.src !== new URL(pkg.photo, window.location.href).href) {
        photo.src = pkg.photo;
      }
      photo.alt = pkg.photoAlt || "";
      photo.style.objectPosition = pkg.photoPosition || "center 40%";
    }
    panel.setAttribute("aria-labelledby", "tab-" + (id === "hof" ? "hof" : id === "play" ? "play" : id === "allstar" ? "allstar" : id === "mvp" ? "mvp" : "alist"));

    incl.innerHTML = featureOrder
      .map((feat) => {
        const val = pkg.values[feat];
        const no = isNo(val) ? " no" : "";
        return `<li class="${no.trim()}"><span>${feat}</span><span class="val">${val}</span></li>`;
      })
      .join("");

    renderTable(id);

    if (focus) {
      const tab = tabs.find((t) => t.dataset.pkg === id);
      if (tab) tab.focus();
    }
  }

  tabs.forEach((tab, i) => {
    tab.tabIndex = i === 0 ? 0 : -1;
    tab.addEventListener("click", () => selectPackage(tab.dataset.pkg));
    tab.addEventListener("keydown", (e) => {
      const dir =
        e.key === "ArrowRight" || e.key === "ArrowDown"
          ? 1
          : e.key === "ArrowLeft" || e.key === "ArrowUp"
          ? -1
          : 0;
      if (!dir) return;
      e.preventDefault();
      const next = (i + dir + tabs.length) % tabs.length;
      selectPackage(tabs[next].dataset.pkg, { focus: true });
    });
  });

  selectPackage("alist");

  /* Mobile nav */
  const toggle = document.querySelector(".menu-toggle");
  const header = document.querySelector(".header");
  const nav = document.querySelector(".nav");

  function closeNav() {
    document.body.classList.remove("nav-open");
    if (toggle) toggle.setAttribute("aria-expanded", "false");
    if (toggle) toggle.setAttribute("aria-label", "Open menu");
  }

  if (toggle) {
    toggle.addEventListener("click", () => {
      const open = document.body.classList.toggle("nav-open");
      toggle.setAttribute("aria-expanded", open ? "true" : "false");
      toggle.setAttribute("aria-label", open ? "Close menu" : "Open menu");
    });
  }
  nav.querySelectorAll("a").forEach((a) => a.addEventListener("click", closeNav));
  document.querySelectorAll(".header-ctas a").forEach((a) => a.addEventListener("click", closeNav));

  /* Header shrinks slightly on scroll — optional class hook */
  let last = 0;
  window.addEventListener(
    "scroll",
    () => {
      const y = window.scrollY;
      header.classList.toggle("scrolled", y > 8);
      last = y;
    },
    { passive: true }
  );
})();
