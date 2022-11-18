var yellowColor = "#ffc107";
let dateDiv = document.querySelectorAll(".date *");

let date = new Date();
dateDiv[0].innerHTML = date.getDate();
dateDiv[1].innerHTML = date.toLocaleString("default", { month: "short" });
dateDiv[2].innerHTML = date.getFullYear();

let allSections = document.querySelectorAll("body > div[id]");
let navBar = document.querySelectorAll(".nav-bar ul li");

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
  element.addEventListener("click", (e) => {
    if (element.classList.contains("active")) {
      return;
    } else {
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
