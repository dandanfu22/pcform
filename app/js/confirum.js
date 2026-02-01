document.addEventListener("DOMContentLoaded", () => {
        const params = new URLSearchParams(window.location.search);

        document.getElementById("c-name").textContent = params.get("name");
        document.getElementById("c-furigana").textContent =
          params.get("furigana");
        document.getElementById("c-year").textContent = params.get("year");
        document.getElementById("c-month").textContent = params.get("month");
        document.getElementById("c-day").textContent = params.get("day");
        document.getElementById("c-tel").textContent = params.get("tel");
        document.getElementById("c-mail").textContent = params.get("email");
        document.getElementById("c-participationdate1").textContent =
          params.get("participationdate1");
        document.getElementById("c-participationdate2").textContent =
          params.get("participationdate2");
        document.getElementById("c-participationdate3").textContent =
          params.get("participationdate3");
        document.getElementById("c-termsofservice").textContent =
          params.get("termsofservice");
        document.getElementById("c-privacypolicy").textContent =
          params.get("privacypolicy");
      });