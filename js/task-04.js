const counterEl = document.getElementById('counter')
const counterValueEl = document.getElementById('value')
const decrementButtonCounterEl = counterEl.firstElementChild
const incrementButtonCounterEl = counterEl.lastElementChild


let counterValue = 0

const updateCounterValue = () => {
    counterValueEl.textContent = counterValue;
}

decrementButtonCounterEl.addEventListener('click', () => {
    counterValue -= 1
    updateCounterValue()
})

incrementButtonCounterEl.addEventListener('click', () => {
    counterValue += 1
    updateCounterValue()
})




