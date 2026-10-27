// Site behaviour for index.html. Loaded with `defer`, after Leaflet, so the DOM is parsed
// and `L` is available. Kept out of inline <script> tags so the CSP can forbid inline scripts.

var GA_ID = "G-CCQZWDN49P";
var CONSENT_KEY = "analytics-consent";

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

// ── Language ──────────────────────────────────────────────────────────────
var currentLanguage = readStorage("language") || "id";

function switchLanguage(lang) {
  currentLanguage = lang;
  writeStorage("language", lang);
  document.documentElement.lang = lang;

  document.querySelectorAll("[data-en][data-id]").forEach(function (element) {
    element.textContent = element.getAttribute("data-" + lang);
  });

  document.querySelectorAll(".lang-btn").forEach(function (btn) {
    if (btn.getAttribute("data-lang") === lang) {
      btn.classList.add("bg-primary", "text-white");
      btn.classList.remove("text-primary", "dark:text-white");
    } else {
      btn.classList.remove("bg-primary", "text-white");
      btn.classList.add("text-primary", "dark:text-white");
    }
  });
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
  var toggle = document.getElementById("mobile-menu-toggle");
  var menu = document.getElementById("mobile-menu");
  if (!toggle || !menu) return;

  toggle.addEventListener("click", function () {
    menu.classList.toggle("hidden");
  });
  menu.querySelectorAll("a").forEach(function (link) {
    link.addEventListener("click", function () {
      menu.classList.add("hidden");
    });
  });
}

// ── Map ───────────────────────────────────────────────────────────────────
function initMap() {
  if (typeof L === "undefined" || !document.getElementById("map")) return;
  var map = L.map("map").setView([-1.2241, 116.9263671], 16);
  L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
    attribution:
      '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    maxZoom: 19,
  }).addTo(map);
  L.marker([-1.2241, 116.9263671])
    .addTo(map)
    .bindPopup("<b>NEXIS</b><br/>NEXIS HQ");
}

// ── Loading screen ────────────────────────────────────────────────────────
function hideLoadingScreen() {
  setTimeout(function () {
    var loading = document.getElementById("loading-screen");
    if (!loading) return;
    loading.style.opacity = "0";
    setTimeout(function () {
      loading.style.display = "none";
    }, 500);
  }, 1000);
}

document.addEventListener("DOMContentLoaded", function () {
  switchLanguage(currentLanguage);
  document.querySelectorAll(".lang-btn").forEach(function (btn) {
    btn.addEventListener("click", function () {
      switchLanguage(this.getAttribute("data-lang"));
    });
  });

  initMobileMenu();
  initConsent();
  initMap();
  hideLoadingScreen();
});
