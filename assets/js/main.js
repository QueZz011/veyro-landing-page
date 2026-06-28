(function () {
  const defaults = {
    brandName: "Veyra Yol Yardım",
    siteUrl: "https://veyrayolyardim.com",
    customerPhone: "+90 546 534 20 33",
    customerWhatsapp: "905465342033",
    applicationPhone: "+90 546 534 20 33",
    applicationWhatsapp: "905465342033",
    email: "veyro.iletisim@gmail.com",
    defaultWhatsappMessage: "Merhaba, yolda kaldım. Çekici veya yol yardım desteği almak istiyorum. Konumumu paylaşacağım.",
    applicationWhatsappMessage: "Merhaba, Veyra Yol Yardım ağına çekici veya şirket başvurusu yapmak istiyorum."
  };

  const state = { config: defaults };

  function onlyDigits(value) {
    return String(value || "").replace(/\D/g, "");
  }

  function whatsappUrl(number, message) {
    return `https://wa.me/${onlyDigits(number)}?text=${encodeURIComponent(message || "")}`;
  }

  function applyConfig(config) {
    state.config = { ...defaults, ...config };

    document.querySelectorAll("[data-brand]").forEach((el) => {
      el.textContent = state.config.brandName;
    });

    document.querySelectorAll("[data-phone]").forEach((el) => {
      el.textContent = state.config.customerPhone;
    });

    document.querySelectorAll("[data-email]").forEach((el) => {
      el.textContent = state.config.email;
    });

    document.querySelectorAll("[data-phone-link]").forEach((el) => {
      el.href = `tel:${onlyDigits(state.config.customerPhone)}`;
    });

    document.querySelectorAll("[data-email-link]").forEach((el) => {
      el.href = `mailto:${state.config.email}`;
    });

    document.querySelectorAll("[data-wa-customer]").forEach((el) => {
      el.href = whatsappUrl(state.config.customerWhatsapp, state.config.defaultWhatsappMessage);
    });
  }

  async function loadConfig() {
    try {
      const response = await fetch("/config.json", { cache: "no-store" });
      if (!response.ok) throw new Error("Config not found");
      applyConfig(await response.json());
    } catch (error) {
      applyConfig(defaults);
    }
  }

  function initMenu() {
    const button = document.querySelector("[data-menu-button]");
    if (!button) return;
    button.addEventListener("click", () => {
      document.body.classList.toggle("nav-open");
      button.setAttribute("aria-expanded", String(document.body.classList.contains("nav-open")));
    });

    document.querySelectorAll(".nav-links a").forEach((link) => {
      link.addEventListener("click", () => {
        document.body.classList.remove("nav-open");
        button.setAttribute("aria-expanded", "false");
      });
    });
  }

  function initBrokenImages() {
    document.querySelectorAll("img[data-fallback]").forEach((img) => {
      img.addEventListener("error", () => img.classList.add("is-missing"), { once: true });
    });
  }

  function formValue(form, name) {
    const field = form.elements[name];
    return field ? String(field.value || "").trim() : "";
  }

  function initForms() {
    document.querySelectorAll("[data-application-form]").forEach((form) => {
      form.addEventListener("submit", (event) => {
        event.preventDefault();
        const type = form.dataset.applicationForm || "Başvuru";
        const message = [
          state.config.applicationWhatsappMessage,
          "",
          `Başvuru tipi: ${type}`,
          `Ad soyad / Firma: ${formValue(form, "name")}`,
          `Telefon: ${formValue(form, "phone")}`,
          `E-posta: ${formValue(form, "email") || "Belirtilmedi"}`,
          `Şehir: ${formValue(form, "city") || "Belirtilmedi"}`,
          `Araç sayısı: ${formValue(form, "vehicle_count") || "Belirtilmedi"}`,
          `Not: ${formValue(form, "message") || "Belirtilmedi"}`
        ].join("\n");
        window.open(whatsappUrl(state.config.applicationWhatsapp, message), "_blank", "noopener");
      });
    });
  }

  document.addEventListener("DOMContentLoaded", () => {
    initMenu();
    initBrokenImages();
    initForms();
    loadConfig();
  });
})();
