document.addEventListener("DOMContentLoaded", () => {
  // --- 1. ТАБИ ---
  const tabBtns = document.querySelectorAll(".tab-btn");
  const tabContents = document.querySelectorAll(".tab-content");

  tabBtns.forEach((btn) => {
    btn.addEventListener("click", () => {
      tabBtns.forEach((b) => b.classList.remove("active"));
      tabContents.forEach((c) => c.classList.remove("active"));

      btn.classList.add("active");
      const target = btn.getAttribute("data-tab");
      document.getElementById(target).classList.add("active");
    });
  });

  // --- 2. МОДАЛЬНЕ ВІКНО ---
  const modal = document.getElementById("my-modal");
  const openBtn = document.getElementById("open-modal-btn");
  const closeBtn = document.querySelector(".close-modal");

  openBtn.addEventListener("click", () => modal.classList.add("open"));
  closeBtn.addEventListener("click", () => modal.classList.remove("open"));

  window.addEventListener("click", (e) => {
    if (e.target === modal) modal.classList.remove("open");
  });

  // --- 3. ВАЛІДАЦІЯ ФОРМИ ---
  const form = document.getElementById("contact-form");
  const nameInput = document.getElementById("user-name");
  const phoneInput = document.getElementById("user-phone");

  function validateField(input, condition) {
    if (condition) {
      input.classList.remove("invalid");
      return true;
    } else {
      input.classList.add("invalid");
      return false;
    }
  }

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const isNameValid = validateField(
      nameInput,
      nameInput.value.trim().length >= 2,
    );
    const isPhoneValid = validateField(
      phoneInput,
      /^\d{10}$/.test(phoneInput.value.trim()),
    );

    if (isNameValid && isPhoneValid) {
      alert("Форма успішно відправлена!");
      form.reset();
      modal.classList.remove("open");
    }
  });

  // Жива валідація при вводі
  nameInput.addEventListener("input", () => {
    validateField(nameInput, nameInput.value.trim().length >= 2);
  });

  phoneInput.addEventListener("input", () => {
    validateField(phoneInput, /^\d{10}$/.test(phoneInput.value.trim()));
  });
});
