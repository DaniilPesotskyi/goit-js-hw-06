const inputRef = document.getElementById('font-size-control')
const textContentRef = document.getElementById('text')

inputRef.addEventListener('input', event => {

    textContentRef.style.fontSize = `${event.target.value}px`
})