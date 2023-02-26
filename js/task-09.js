function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const colorTextContentRef = document.querySelector('.color')
const colorChangeBtnRef = document.querySelector('.change-color')
const pageBodyRef = document.body

colorChangeBtnRef.addEventListener('click', event => {
  colorTextContentRef.textContent = getRandomHexColor();

  pageBodyRef.style.backgroundColor = `${getRandomHexColor()}`
})
