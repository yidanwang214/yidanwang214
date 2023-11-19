// section fade in and fade out
const sections = document.querySelectorAll("section");

// const observerOptions = {
//   root: null,
//   threshold: 0.5,
// };

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    const { target, isIntersecting } = entry;

    if (isIntersecting) {
      target.classList.add("fadeIn");
      target.classList.remove("fadeOut");
    } else {
      target.classList.remove("fadeIn");
      target.classList.add("fadeOut");
    }
  });
});

sections.forEach((section) => {
  observer.observe(section);
});

// // delete placeholder div
// function handleWindowResize() {
//   const progLangDiv = document.getElementsByClassName("progLangDiv")[0];
//   if (window.innerWidth <= window.innerHeight) {
//     const progLangDiv = document.getElementsByClassName("progLangDiv")[0];
//     if (progLangDiv === `div#progLangDivPlaceHolder`) {
//       document.getElementById("progLangDivPlaceHolder").remove();
//       document.getElementById("frameworksPlaceHolder").remove();
//       console.log("size down");
//     }
//   } else {
//     const progLangDiv = document.getElementsByClassName("progLangDiv")[0];
//     if (progLangDiv.firstElementChild != `div#progLangDivPlaceHolder`) {
//       const divPlaceHolder = document.createElement("div");
//       progLangDiv.firstElementChild.appendChild(divPlaceHolder);
//       document
//         .getElementsByClassName("frameworksDiv")[0]
//         .firstElementChild.appendChild(divPlaceHolder.cloneNode(true));
//       console.log("size up");
//     }
//   }
// }
// // Initial check on page load
// handleWindowResize();
// // Add event listener for window resize
// window.addEventListener("resize", handleWindowResize);

// handle dropdown
// function handleDropdown() {
//   var navbar = document.getElementById("navbar");
//   if (navbar.style.display === "grid") {
//     navbar.style.display = "none";
//   } else {
//     navbar.style.display = "grid";
//   }
// }
document.addEventListener("DOMContentLoaded", function () {
  var dropDownIcon = document.getElementById("dropDownIcon");
  if (dropDownIcon) {
    // Check if the element exists
    dropDownIcon.addEventListener("click", handleDropdown);
  }

  function handleDropdown() {
    var navbar = document.getElementById("navbar");
    if (navbar.style.display === "grid") {
      navbar.style.display = "none";
    } else {
      navbar.style.display = "grid";
    }
  }
});
