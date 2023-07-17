import "./index.css";

let menuElem = document.querySelector('.menu');
let buttonElem = document.querySelector('.menu__trigger');

function buttonHendler () {
  menuElem.classList.toggle('open');
  console.log(menuElem)

}


buttonElem.addEventListener('click', buttonHendler);
