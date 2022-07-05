const howImg = document.querySelector(".how__img");
const howText = document.querySelector(".how__text");
const headerImg = document.querySelector(".home__img");
const thinkAboutText = document.querySelector(".think-about__text");
const getInTouchBtn = document.querySelector(".button--get-in-touch");
const contactForm = document.querySelector(".contact__form");
const contactHeader = document.querySelector(".contact__header");
const contactText = document.querySelector(".contact__text");

const submitContactForm = () => {
  getInTouchBtn.addEventListener("click", () => {
    contactForm.innerHTML = "";
    contactHeader.innerHTML = "Thank you for your submission";
    contactText.innerHTML =
      "You will get to hear about all the great stuff we’re doing by email or phone.";
  });
};
submitContactForm();

if (screen.width > 767) {
  howImg.attributes[1].nodeValue =
    "./assets/images/img-icons-path-tablet@3x.png";

  howText.innerHTML =
    "We’ve helped lots of businesses switch to O2, so we know how to make the process as smooth as possible. The steps below provide the foundation for every project:";
}

if (screen.width >= 1920) {
  headerImg.attributes[1].nodeValue = "./assets/images/img-header@3x.png";

  thinkAboutText.innerHTML =
    "Switching mobile provider might be the kind of thing you haven’t given a second thought to ― after all, you’re probably pretty busy with all the things that come with running a business. <br><br> But mobile matters. Especially in a constantly evolving workplace. So getting it right is important, and that’s a good reason to switch sooner.";

  howImg.attributes[1].nodeValue =
    "./assets/images/img-icons-path-desktop@3x.png";
}
