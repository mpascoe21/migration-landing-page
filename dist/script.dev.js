"use strict";

var howImg = document.querySelector(".how__img");
var howText = document.querySelector(".how__text");

if (screen.width > 767) {
  howImg.attributes[1].nodeValue = "./assets/images/img-icons-path-tablet@3x.png";
  howText.innerHTML = "We’ve helped lots of businesses switch to O2, so we know how to make the process as smooth as possible. The steps below provide the foundation for every project:";
}