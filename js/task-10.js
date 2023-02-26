function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const userInterfaceRef = document.getElementById('controls')
const boxesFieldRef = document.getElementById('boxes')

const inputRef = userInterfaceRef.children[0];
const createButtonRef = userInterfaceRef.children[1];
const deleteButtonRef = userInterfaceRef.children[2];

createButtonRef.addEventListener('click', onAddElemets)
deleteButtonRef.addEventListener('click', onDeletElements)


function onAddElemets() {
  let elementsNumber = inputRef.value

  let elementValues = {
    width: 30,
    height: 30,
  }

  let elemetsRef = [];

  for (let i = 0; i < elementsNumber; i++) {
    let boxElement = document.createElement('div')
    boxElement.style.width = `${elementValues.width}px`
    boxElement.style.height = `${elementValues.height}px`
    boxElement.style.backgroundColor = getRandomHexColor()
    elemetsRef.push(boxElement);

    elementValues.width += 10;
    elementValues.height += 10;
  }

  boxesFieldRef.append(...elemetsRef)
  console.log(`${elementsNumber} elements created`)
}

function onDeletElements() {
  boxesFieldRef.innerHTML = "";
  console.log("Elements deleted")
}
