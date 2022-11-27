var yellowColor = "#ffc107";
let dateDiv = document.querySelectorAll(".date *");
let date = new Date();
dateDiv[0].innerHTML = date.getDate();
dateDiv[1].innerHTML = date.toLocaleString("default", { month: "short" });
dateDiv[2].innerHTML = date.getFullYear();

let allSections = document.querySelectorAll("body > div[id]");
let navBar = document.querySelectorAll(".nav-bar ul li");
let beforeSpan = document.querySelector(".before");
let skillsSpan = document.getElementsByClassName("percentage");
let moreAboutMe = $(".more-about");
moreAboutMe.click(function (e) {
  beforeSpan.style.animationName = "cha-eff";
  setTimeout(() => {
    beforeSpan.style.removeProperty("animation-name");
  }, 1500);

  navBar.forEach((el) => {
    el.classList.remove("active");
  });
  navBar[1].classList.add("active");

  allSections.forEach((sec) => {
    sec.style.display = "none";
  });
  allSections[1].style.display = "block";
});

for (let j = 0; j < allSections.length; j++) {
  const section = allSections[j];
  if (section.id == "home") {
    allSections.forEach((sec) => {
      sec.style.display = "none";
    });
    section.style.display = "flex";
  }
}

for (let i = 0; i < navBar.length; i++) {
  const element = navBar[i];
  element.addEventListener("click", () => {
    if (element.classList.contains("active")) {
      return;
    } else {
      beforeSpan.style.animationName = "cha-eff";
      setTimeout(() => {
        beforeSpan.style.removeProperty("animation-name");
      }, 1500);

      navBar.forEach((el) => {
        el.classList.remove("active");
      });
      element.classList.add("active");
    }

    for (let j = 0; j < allSections.length; j++) {
      const section = allSections[j];
      if (section.id == "home") {
        allSections.forEach((sec) => {
          sec.style.display = "none";
        });
        section.style.display = "flex";
      } else if (section.id == element.innerText.toLowerCase()) {
        allSections.forEach((sec) => {
          sec.style.display = "none";
        });
        section.style.display = "block";
      }
    }
  });
}

navBar[1].addEventListener("click", () => {
  let skillsPer = document.getElementById("skills");
  let started = false; // function hasn't performed yet;
  window.onscroll = () => {
    if (window.scrollY >= skillsPer.offsetTop) {
      if (started == false) {
        [...skillsSpan].forEach((el) => {
          let percentage = el.dataset.perc;
          let counter = setInterval(() => {
            el.textContent++;
            if (el.textContent == percentage) {
              clearInterval(counter);
            }
          }, 50);
          // }, 50 / percentage); if I want all element end in one time
        });
      }
      started = true;
    }
  };
});
