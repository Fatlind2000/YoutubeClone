let btn = document.getElementById("btn-one");
let nav = document.getElementById("sidebar");

let id = document.getElementById("personal");
let info = document.getElementById("information");

let color = document.getElementById("appearance");
let body = document.getElementById("root");

let container = document.getElementById("container");

let cardBox = document.getElementsByClassName("card-container");
let photo = document.getElementsByClassName("image-container");
let card = document.getElementById("card");
let titlePhoto = document.getElementsByClassName("title-photo");
let createImage = document.getElementsByClassName("create-image");
let imageViews = document.getElementsByClassName("image-views");



btn.addEventListener("click", function () {
  nav.classList.toggle("hidden");
});

id.addEventListener("click", function () {
  info.classList.toggle("hide");
});

for (let i = 0; i < photo.length; i++) {
  cardBox[i].addEventListener("click", function () {
    window.open("./inside.html", "_self");

    let favoritemovie = photo[i].src;
    let text = titlePhoto[i].innerHTML;
    let image = createImage[i].innerHTML;

    sessionStorage.setItem("favoriteMovie", favoritemovie);
    sessionStorage.setItem("text", text);
    sessionStorage.setItem("image", image);
  });
}

let btnSearch = document.getElementById("btn-search-hidden");
let formSearch = document.getElementById("form-search");
let inputSearch = document.getElementById("input-search");
let btnSearchInside = document.getElementById("btn-search");
let x = window.matchMedia("(max-width: 600px)");
let y = document.querySelectorAll("*");


btnSearch.addEventListener("click", function () {

  formSearch.classList.toggle("shown");
  
  if (formSearch.classList.contains("shown")) {
    inputSearch.value = "";
  }
});
btnSearchInside.addEventListener("click", function () {
  formSearch.classList.toggle("shown");
  inputSearch.value = "";
});

let dogs = document.getElementById("Dogs");
let cats = document.getElementById("Cats");
let spongbob = document.getElementById("SpongBob");
let mario = document.getElementById("Mario");
let balloon = document.getElementById("Balloon");
let sonic = document.getElementById("Sonic");
let games = document.getElementById("Games");
let animals = document.getElementById("Animals");
let anime = document.getElementById("Anime");

dogs.addEventListener("click", function () {
  for (let i = 0; i < cardBox.length; i++) {
    if (cardBox[i].classList.contains("Dogs")) {
      photo[i].src = photo[i].src;
      console.log("i");
    } else {
      cardBox[i].style.display = "none";
    }
  }
});
cats.addEventListener("click", function () {
  for (let i = 0; i < cardBox.length; i++) {
    console.log("i");
    if (cardBox[i].classList.contains("Cats")) {
      photo[i].src = photo[i].src;
    } else {
      cardBox[i].style.display = "none";
    }
  }
});
spongbob.addEventListener("click", function () {
  for (let i = 0; i < cardBox.length; i++) {
    console.log("i");
    if (cardBox[i].classList.contains("SpongBob")) {
      photo[i].src = photo[i].src;
    } else {
      cardBox[i].style.display = "none";
    }
  }
});
mario.addEventListener("click", function () {
  for (let i = 0; i < cardBox.length; i++) {
    console.log("i");
    if (cardBox[i].classList.contains("Mario")) {
      photo[i].src = photo[i].src;
    } else {
      cardBox[i].style.display = "none";
    }
  }
});
balloon.addEventListener("click", function () {
  for (let i = 0; i < cardBox.length; i++) {
    console.log("i");
    if (cardBox[i].classList.contains("Balloon")) {
      photo[i].src = photo[i].src;
    } else {
      cardBox[i].style.display = "none";
    }
  }
});
sonic.addEventListener("click", function () {
  for (let i = 0; i < cardBox.length; i++) {
    console.log("i");
    if (cardBox[i].classList.contains("Sonic")) {
      photo[i].src = photo[i].src;
    } else {
      cardBox[i].style.display = "none";
    }
  }
});
games.addEventListener("click", function () {
  for (let i = 0; i < cardBox.length; i++) {
    console.log("i");
    if (cardBox[i].classList.contains("Games")) {
      photo[i].src = photo[i].src;
    } else {
      cardBox[i].style.display = "none";
    }
  }
});
anime.addEventListener("click", function () {
  for (let i = 0; i < cardBox.length; i++) {
    console.log("i");
    if (cardBox[i].classList.contains("Anime")) {
      photo[i].src = photo[i].src;
    } else {
      cardBox[i].style.display = "none";
    }
  }
});
animals.addEventListener("click", function () {
  for (let i = 0; i < cardBox.length; i++) {
    console.log("i");
    if (cardBox[i].classList.contains("Animals")) {
      photo[i].src = photo[i].src;
    } else {
      cardBox[i].style.display = "none";
    }
  }
});
