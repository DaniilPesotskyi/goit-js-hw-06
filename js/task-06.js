const inputEl = document.getElementById("validation-input");
const validData = Number(inputEl.dataset.length);

const onValidationValue = (event) => {
    const value = event.target.value
    inputEl.classList.add('invalid')

    value.trim().length === validData && value.trim() !== ''
    ? inputEl.classList.replace('invalid', 'valid')
    : inputEl.classList.replace('valid', 'invalid')
}


inputEl.addEventListener('blur', onValidationValue)
