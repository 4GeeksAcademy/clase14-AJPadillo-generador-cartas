/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  const pintas = ["♦", "♥", "♠", "♣"];
  const valores = ["2", "3", "4", "5", "6", "7", "8", "9", "J", "Q", "K", "A"];

  const pintasRand = Math.floor(Math.random() * pintas.length);
  const valoresRand = Math.floor(Math.random() * valores.length);

  let header = document.getElementById("headerCard");
  let center = document.getElementById("centerCard");
  let footer = document.getElementById("footerCard");

  let elementoHeader = document.getElementsByClassName("headerPintas");
  let elementoFooter = document.getElementsByClassName("footerPintas");

  for (let i = 0; i < elementoHeader.length; i++) {
    if (pintasRand === 0 || pintasRand === 1) {
      elementoHeader[i].className += " text-danger";
    }
  }

  for (let i = 0; i < elementoFooter.length; i++) {
    if (pintasRand === 0 || pintasRand === 1) {
      elementoFooter[i].className += " text-danger";
    }
  }

  header.textContent = pintas[pintasRand];
  center.textContent = valores[valoresRand];
  footer.textContent = pintas[pintasRand];
};
