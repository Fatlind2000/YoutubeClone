let btn = document.getElementById("btn-one");
let nav = document.getElementById("sidebar");

let id = document.getElementById("personal");
let info = document.getElementById("information");

let color = document.getElementById("appearance");
let body = document.getElementsByTagName("main")[0];

btn.addEventListener("click", function () {
 
  nav.classList.toggle("hidden");
  
});

id.addEventListener("click", function () {
  nav.classList.add("show");
  info.classList.toggle("hide");
});

let images = [
  "./content/images/baloon-img.png",
  "./content/images/cat-img.png",
  "./content/images/dog-img.png",
  "./content/images/mario-img.png",
  "./content/images/sonic-img.png",
  "./content/images/spong-img.png",
];
let photoOne = document.getElementById("photo-one-one");
let titleOfPhoto = document.getElementById("title-image");
let createImage = document.getElementById("create-image");
let imageViews = document.getElementById("image-views");
let clientPhoto = document.getElementById("account-image");
let subscribers = document.getElementById("subscribers-video");

function getRandomItem(arr) {
  const randomIndex = Math.floor(Math.random() * arr.length);
  const item = arr[randomIndex];

  return item;
}

for (let i = 0; i < 20; i++) {
  let une = document.getElementsByClassName("side-container")[0];

  let div = document.createElement("div");
  let img = document.createElement("img");
  let divone = document.createElement("div");
  let titlefour = document.createElement("h4");
  let paragraph = document.createElement("p");
  let p = document.createElement("p");

  div.setAttribute("class", "pictures-side");
  img.setAttribute("class", "small-picture");
  img.setAttribute("src", getRandomItem(images));

  if (img.getAttribute("src") === images[0]) {
    titlefour.innerHTML = "Ballon";
    paragraph.innerHTML = "Air World";
    p.innerHTML =
      Math.floor(Math.random() * 1000) +
      "K views " +
      Math.floor(Math.random() * 10 + 1) +
      " months ago";
  } else if (img.getAttribute("src") === images[1]) {
    titlefour.innerHTML = "Cute Cat";
    paragraph.innerHTML = "Baby Animals";
    p.innerHTML =
      Math.floor(Math.random() * 1000) +
      "K views " +
      Math.floor(Math.random() * 10 + 1) +
      " months ago";
  } else if (img.getAttribute("src") === images[2]) {
    titlefour.innerHTML = "Dog";
    paragraph.innerHTML = "Baby Animals";
    p.innerHTML =
      Math.floor(Math.random() * 1000) +
      "K views " +
      Math.floor(Math.random() * 10 + 1) +
      " months ago";
  } else if (img.getAttribute("src") === images[3]) {
    titlefour.innerHTML = "Super Mario";
    paragraph.innerHTML = "Nintendo";
    p.innerHTML =
      Math.floor(Math.random() * 1000) +
      "K views " +
      Math.floor(Math.random() * 10 + 1) +
      " months ago";
  } else if (img.getAttribute("src") === images[4]) {
    titlefour.innerHTML = "Sonic the Hedgehog";
    paragraph.innerHTML = "Paramount Pictures";
    p.innerHTML =
      Math.floor(Math.random(4, 100) * 1000) +
      "K views " +
      Math.floor(Math.random() * 10 + 1) +
      " months ago";
  } else {
    titlefour.innerHTML = "Spongebob Squarepants";
    paragraph.innerHTML = "SpongeBob SquarePants";
    p.innerHTML =
      Math.floor(Math.random() * 1000) +
      "K views " +
      Math.floor(Math.random() * 10 + 1) +
      " months ago";
  }

  divone.appendChild(titlefour);
  divone.appendChild(paragraph);
  divone.appendChild(p);
  div.appendChild(img);
  div.appendChild(divone);

  une.appendChild(div);

  div.addEventListener("click", function () {
    window.scrollTo(0, 0);
    photoOne.src = img.src;
    titleOfPhoto.innerHTML = titlefour.innerHTML;
    createImage.innerHTML = paragraph.innerHTML;
    subscribers.innerHTML = Math.floor(Math.random() * 1000) + " Subscribers";
    showComment.innerHTML = "";
  });
}

let favoritemovie = sessionStorage.getItem("favoriteMovie");
photoOne.src = favoritemovie;

let text = sessionStorage.getItem("text");
titleOfPhoto.innerHTML = text;

let image = sessionStorage.getItem("image");
createImage.innerHTML = image;

let input = document.getElementById("input-comment");
let btnCancel = document.getElementById("btn-cancel");
let btnComment = document.getElementById("btn-comment");
let showComment = document.getElementById("show-comment");
let sectionComment = document.getElementById("section-comment");
subscribers.innerHTML = Math.floor(Math.random() * 1000) + " Subscribers";

input.addEventListener("click", function () {
  sectionComment.classList.remove("btn-hidden");
});

btnCancel.addEventListener("click", function () {
  input.value = "";
  sectionComment.classList.add("btn-hidden");
});

btnComment.addEventListener("click", function () {
  let div = document.createElement("div");
  let img = document.createElement("img");
  let divoutside = document.createElement("div");
  let p = document.createElement("p");
  let name = document.createElement("p");
  let time = document.createElement("p");
  let divname = document.createElement("div");

  let divinside = document.createElement("div");
  let likes = document.createElement("i");
  let dislikes = document.createElement("i");
  let para = document.createElement("p");
  let paragraph = document.createElement("p");

  img.src = "./content/images/f-img.png";
  likes.setAttribute("class", "fa-solid fa-thumbs-up");
  dislikes.setAttribute("class", "fa-sharp fa-solid fa-thumbs-down");

  let date = Math.random() * 10 + 1;
  time.innerHTML = date.toFixed(0) + " months ago";
  p.innerHTML = input.value;
  let x = Math.random() * 10 + 1;
  para.innerHTML = x.toFixed(0);
  let y = Math.random() * 100 + 1;
  paragraph.innerHTML = y.toFixed(0);

  img.style.height = "30px";
  img.style.width = "30px";
  img.style.margin = "10px";

  divoutside.style.margin = "10px";
  divoutside.style.width = "100%";

  likes.style.height = "25px";
  likes.style.width = "25px";
  dislikes.style.height = "25px";
  dislikes.style.width = "25px";
  dislikes.style.marginLeft = "100px";

  divinside.style.display = "flex";
  divinside.style.margin = "10px";

  p.style.margin = "4px  0";
  p.style.fontSize = "20px";

  div.style.height = "100px";
  div.style.margin = "10px";
  div.style.display = "flex";

  name.innerHTML = "Fatlind Bytyqi";
  time.style.marginLeft = "20px";
  time.style.fontSize = "14px";
  time.style.color = "gray";

  divname.style.display = "flex";
  divname.style.width = "100%";

  div.appendChild(img);

  divname.appendChild(name);
  divname.appendChild(time);
  divoutside.appendChild(divname);

  divoutside.appendChild(p);

  divinside.appendChild(likes);
  divinside.appendChild(para);
  divinside.appendChild(dislikes);
  divinside.appendChild(paragraph);

  divoutside.appendChild(divinside);

  div.appendChild(divoutside);

  showComment.appendChild(div);

  input.value = "";
  sectionComment.classList.add("btn-hidden");
});


let btnSearch = document.getElementById("btn-search-hidden");
let formSearch = document.getElementById("form-search");
let inputSearch = document.getElementById("input-search");
let btnSearchInside = document.getElementById("btn-search");
let x = window.matchMedia("(max-width: 600px)");


btnSearch.addEventListener("click", function () {
  btnSearch.style.display = "hidden";
  formSearch.classList.toggle("shown");
  if (formSearch.classList.contains("shown")) {
    inputSearch.value = "";
  }
});
btnSearchInside.addEventListener("click", function () {
  formSearch.classList.toggle("shown");
  inputSearch.value = "";
  btnSearch.style.display = "visible";
});