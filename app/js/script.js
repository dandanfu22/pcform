const checks = document.querySelectorAll(".check");
const warning = document.getElementById("warning");

document.getElementById("submit-b").addEventListener("click", () => {
    const anyUnchecked = [...checks].some(c => !c.checked);

    if (anyUnchecked) {
        warning.style.display = "block";
    } else {
        warning.style.display ="none";
    }
});