const howImg = document.querySelector(".how__img");
const howText = document.querySelector(".how__text");
const headerImg = document.querySelector(".home__img");
const thinkAboutText = document.querySelector(".think-about__text");
const getInTouchBtn = document.querySelector(".button--get-in-touch");
const contactForm = document.querySelector(".contact__form");
const contactHeader = document.querySelector(".contact__header");
const contactText = document.querySelector(".contact__text");
const formInputs = document.querySelectorAll("input");
const inputError = document.querySelectorAll(".error");
const firstName = document.querySelector("#first-name");
const businessType = document.querySelector("#business-type");
const email = document.querySelector("#email");

// formInputs.forEach((formInput) => {
//   formInput.addEventListener("input", (event) => {
//     let inputValue = event.target.value;

//     if (inputValue != undefined && inputValue.length > 0) {
//       event.target.innerHTML = "*Error";
//     }
//   });
// });

// if (formInputs === "" || formInputs === null) {
//   console.log("missing");
// }

// input.addEventListener("invalid", (event) => {
//   if (event.target.innerHTML === "") {
//     console.log("missing");
//   }
// });
// const validateForm = (e) => {
//   // e.preventDefault();
//   formInputs.forEach((input) => {
//     input.addEventListener("input", (e) => {
//       let inputValue = e.target.value;
//       console.log(inputValue);

//       if (inputValue.length < 1) {
//         //input.nextElementSibling.innerHTML = "*Error";
//         e.target.innerHTML = "*Error";
//       }
//     });
//   });
// };

if (screen.width > 767) {
  howImg.attributes[1].nodeValue =
    "./assets/images/img-icons-path-tablet@3x.png";

  howText.innerHTML =
    "We’ve helped lots of businesses switch to O2, so we know how to make the process as smooth as possible. The steps below provide the foundation for every project:";
}

if (screen.width >= 992) {
  headerImg.attributes[1].nodeValue = "./assets/images/img-header@3x.png";

  thinkAboutText.innerHTML =
    "Switching mobile provider might be the kind of thing you haven’t given a second thought to ― after all, you’re probably pretty busy with all the things that come with running a business. <br><br> But mobile matters. Especially in a constantly evolving workplace. So getting it right is important, and that’s a good reason to switch sooner.";

  howImg.attributes[1].nodeValue =
    "./assets/images/img-icons-path-desktop@3x.png";
}

const submitContactForm = () => {
  //e.preventDefault();
  getInTouchBtn.addEventListener("click", () => {
    //validateForm();
    if (businessType.value.length > 0) {
      businessType.nextElementSibling.innerHTML = "";
      businessType.classList.remove("invalid");
    } else if (businessType.value.length < 1) {
      businessType.nextElementSibling.innerHTML = "*Error";
      businessType.classList.add("invalid");
      return;
    }

    if (firstName.value.length > 0) {
      firstName.nextElementSibling.innerHTML = "";
      firstName.classList.remove("invalid");
    } else if (firstName.value.length < 1) {
      firstName.nextElementSibling.innerHTML = "*Error";
      firstName.classList.add("invalid");
      return;
    }

    if (
      email.value.length > 0 &&
      email.value.includes("@") &&
      email.value.includes(".")
    ) {
      email.nextElementSibling.innerHTML = "";
      email.classList.remove("invalid");
    } else if (
      email.value.length < 1 ||
      !email.value.includes("@") ||
      !email.value.includes(".")
    ) {
      email.nextElementSibling.innerHTML = "*Error";
      email.classList.add("invalid");
      return;
    }

    contactForm.innerHTML = "";
    contactHeader.innerHTML = "Thank you for your submission";
    contactText.innerHTML =
      "You will get to hear about all the great stuff we’re doing by email or phone.";
  });
};
submitContactForm();
