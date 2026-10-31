// Site behaviour for index.html. Loaded with `defer`, after Leaflet, so the DOM is parsed
// and `L` is available. Kept out of inline <script> tags so the CSP can forbid inline scripts.

var GA_ID = "G-CCQZWDN49P";
var CONSENT_KEY = "analytics-consent";
var NEXIS_LATLNG = [-1.2189287, 116.9344658];

function readStorage(key) {
  try {
    return localStorage.getItem(key);
  } catch (e) {
    return null;
  }
}

function writeStorage(key, value) {
  try {
    localStorage.setItem(key, value);
  } catch (e) {
    // Private mode or blocked storage: the choice just won't be remembered.
  }
}

// ── Google Analytics (only after consent) ────────────────────────────────
function loadAnalytics() {
  if (window.gtag) return;
  window.dataLayer = window.dataLayer || [];
  window.gtag = function () {
    window.dataLayer.push(arguments);
  };
  window.gtag("js", new Date());
  window.gtag("config", GA_ID);

  var script = document.createElement("script");
  script.async = true;
  script.src = "https://www.googletagmanager.com/gtag/js?id=" + GA_ID;
  document.head.appendChild(script);
}

function initConsent() {
  var banner = document.getElementById("consent-banner");
  var choice = readStorage(CONSENT_KEY);

  if (choice === "granted") loadAnalytics();
  if (!banner || choice === "granted" || choice === "denied") return;

  banner.classList.remove("hidden");
  banner.querySelectorAll("[data-consent]").forEach(function (btn) {
    btn.addEventListener("click", function () {
      var value = btn.getAttribute("data-consent");
      writeStorage(CONSENT_KEY, value);
      if (value === "granted") loadAnalytics();
      banner.classList.add("hidden");
    });
  });
}

// ── Mobile menu ───────────────────────────────────────────────────────────
function initMobileMenu() {
  var toggle = document.getElementById("menu-toggle");
  var menu = document.getElementById("menu-mobile");
  if (!toggle || !menu) return;

  function setOpen(open) {
    menu.classList.toggle("hidden", !open);
    toggle.setAttribute("aria-expanded", String(open));
    toggle.setAttribute("aria-label", open ? "Tutup menu" : "Buka menu");
  }

  toggle.addEventListener("click", function () {
    setOpen(menu.classList.contains("hidden"));
  });
  menu.querySelectorAll("a").forEach(function (link) {
    link.addEventListener("click", function () {
      setOpen(false);
    });
  });
  document.addEventListener("keydown", function (event) {
    if (event.key === "Escape" && !menu.classList.contains("hidden")) {
      setOpen(false);
      toggle.focus();
    }
  });
}

// ── Map (initialised when the contact section scrolls into view) ─────────
function initMap() {
  var el = document.getElementById("map");
  if (!el || typeof L === "undefined") return;

  function build() {
    var map = L.map(el, { scrollWheelZoom: false }).setView(NEXIS_LATLNG, 16);
    L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
      attribution:
        '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
      maxZoom: 19,
    }).addTo(map);
    L.marker(NEXIS_LATLNG).addTo(map).bindPopup("<b>NEXIS</b><br/>Bukit Batakan Permai III, Blok D15 No.09");
  }

  if (!("IntersectionObserver" in window)) return build();
  var observer = new IntersectionObserver(
    function (entries) {
      if (entries[0].isIntersecting) {
        observer.disconnect();
        build();
      }
    },
    { rootMargin: "200px" }
  );
  observer.observe(el);
}

document.addEventListener("DOMContentLoaded", function () {
  initMobileMenu();
  initConsent();
  initMap();
});
