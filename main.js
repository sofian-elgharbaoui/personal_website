import allProjectsInfo from "./projects.json" assert { type: "json" };

let dateDiv = document.querySelectorAll(".date *");
let date = new Date();
dateDiv[0].innerHTML = date.getDate();
dateDiv[1].innerHTML = date.toLocaleString("default", { month: "short" });
dateDiv[2].innerHTML = date.getFullYear();

let allSections = document.querySelectorAll("body > div[id]");
let navBar = document.querySelectorAll(".nav-bar ul li");
let beforeSpan = document.querySelector(".before");
let skills = document.getElementById("skills");
let skillsSpan = document.getElementsByClassName("percentage");

let moreAboutMe = $(".more-about");
moreAboutMe.click(function () {
  beforeSpan.style.animationName = "cha-eff";
  setTimeout(() => {
    beforeSpan.style.removeProperty("animation-name");
  }, 500);

  navBar.forEach((el) => {
    el.classList.remove("active");
  });
  navBar[1].classList.add("active");

  allSections.forEach((sec) => {
    sec.style.display = "none";
  });
  allSections[1].style.display = "block";

  //this is connected with the skills percentages
  increaseNumsOnScroll(skills, skillsSpan);
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
    if (!element.classList.contains("active")) {
      beforeSpan.style.animationName = "cha-eff";
      setTimeout(() => {
        beforeSpan.style.removeProperty("animation-name");
      }, 500);

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
  increaseNumsOnScroll(skills, skillsSpan);
});

function increaseNumsOnScroll(section, liOfNums) {
  let started = false; // function hasn't performed yet;
  window.onscroll = () => {
    if (window.scrollY >= section.offsetTop + section.offsetTop / 3) {
      if (started == false) {
        [...liOfNums].forEach((el) => {
          let percentage = el.dataset.perc;

          if (el.textContent != percentage) {
            let counter = setInterval(() => {
              el.textContent++;
              if (el.textContent == percentage) {
                clearInterval(counter);
              }
            }, 50);
            // }, 1000 / percentage);
            //  if I want all element end in one time
          }
        });
      }
      started = true;
    }
  };
}

// // // place all projects at the portfolio
let projects = document.querySelector(".projects");

for (let i = 0; i < allProjectsInfo.length; i++) {
  let projectDiv = document.createElement("div");
  projectDiv.className = "project";
  projectDiv.id = allProjectsInfo[i].id;
  projectDiv.innerHTML = `
    <img src="images/${allProjectsInfo[i].imgs[0]}" alt="${allProjectsInfo[i]["project type"]}" />
    <h2>${allProjectsInfo[i]["project name"]}</h2>
  `;

  projects.appendChild(projectDiv);
}
//

let allProjects = document.querySelectorAll(".project");

let modalPortfolio = document.querySelector(".modal_portfolio");
let modalCloser = document.querySelector(".close_modal");
let projectName = document.querySelector("#project_name");
let projectType = document.querySelector("#project_type");
let projectClient = document.querySelector("#project_client");
let projectLanguages = document.querySelector("#project_languages");
let projectPreview = document.querySelector("#project_preview");
let projectImgs = document.querySelector(".imgs_container");
let projectImgsPag = document.querySelector(".imgs_pagination");

for (let i = 0; i < allProjects.length; i++) {
  const project = allProjects[i];

  project.addEventListener("click", () => {
    modalPortfolio.classList.add("active");

    let myInfo = allProjectsInfo[i];

    projectName.innerText = myInfo["project name"];
    projectType.innerText = myInfo["project type"];
    projectClient.innerText = myInfo.client;
    projectLanguages.innerText = myInfo.languages;

    projectPreview.innerText = myInfo.hostname;
    projectPreview.setAttribute("href", myInfo.url);

    projectImgs.innerHTML = "";
    projectImgsPag.innerHTML = "";

    for (let i = 0; i < myInfo.imgs.length; i++) {
      let img = document.createElement("img");
      img.setAttribute("src", `images/${myInfo.imgs[i]}`);
      projectImgs.append(img);

      let liItem = document.createElement("li");
      projectImgsPag.append(liItem);
    }

    let projectImgsPagItms = [...projectImgsPag.children];
    projectImgsPagItms.forEach((itm, i) => {
      itm.addEventListener("click", () => {
        projectImgsPagItms.forEach((li) => li.classList.remove("active"));
        itm.classList.add("active");
        projectImgs.scrollTo({
          left: 608 * i,
          behavior: "smooth",
        });
      });
    });

    modalCloser.onclick = () => modalPortfolio.classList.remove("active");
  });
}
