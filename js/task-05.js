const inputEl = document.getElementById('name-input')
const outputEl = document.getElementById('name-output')


inputEl.addEventListener('input', event => {

    outputEl.textContent = event.currentTarget.value

    if(event.currentTarget.value === "") {
        outputEl.textContent = "Anonymous"
    }
})