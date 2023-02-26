const inputEl = document.getElementById("validation-input");
const validData = Number(inputEl.dataset.length);

inputEl.addEventListener("blur", () => {
    inputEl.classList.toggle("valid", inputEl.value.length >= validData );
    inputEl.classList.toggle("invalid", inputEl.value.length < validData )
})
