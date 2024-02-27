let bodyy = document.querySelector("body");
let faSun = document.querySelector(".fa-sun");
let zoneImg = document.querySelector(".zone-img");

faSun.onclick = () => {
  bodyy.classList.toggle("body-js");

  if (bodyy.classList.contains("body-js")) {
    console.log("dark-theme");

    theme = "Dark";
  } else {
    console.log("light-theme");

    theme = "Light";
  }

  sItem();
};

let theme;

let sItem = () => {
  localStorage.setItem("pageTheme", JSON.stringify(theme));
};

let getTheme = JSON.parse(localStorage.getItem("pageTheme"));

if (getTheme == "Dark") {
  bodyy.classList = "body-js";
} else {
  bodyy.classList = "";
}
// let saveData = () => {
//   let setTheme = document.body;

//   setTheme.classList.toggle("body-js");

//   if (setTheme.classList.contains("body-js")) {
//     console.log("dark-theme");

//     theme = "Dark";
//   } else {
//     console.log("light-theme");

//     theme = "Light";
//   }

//   sItem();
// };

let text = document.querySelector(".text");
let addComment = document.querySelector(".addcomment");
let reviewComments = document.querySelector(".review-comments");

let blankHtmlForReview = "";

let ranName = [
  "Theo",
  "Oliver",
  "George",
  "Leo",
  "Freddie",
  "Arthur",
  "Archie",
  "Alfie",
  "Charlie",
  "Oscar",
  "Henry",
  "Harry",
  "Jack",
  "Teddy",
  "Finley",
  "Arlo",
  "Luca",
  "Jacob",
  "Tommy",
  "Lucas",
  "Theodore",
  "Max",
  "Isaac",
  "Albie",
  "James",
  "Mason",
  "Rory",
  "Thomas",
  "Rueben",
  "Roman",
  "Logan",
  "Harrison",
  "William",
  "Elijah",
  "Ethan",
  "Joshua",
  "Hudson",
  "Jude",
  "Louie",
  "Jaxon",
  "Reggie",
  "Oakley",
  "Hunter",
  "Alexander",
  "Toby",
  "Adam",
  "Sebastian",
  "Daniel",
  "Ezra",
  "Rowan",
  "Alex",
  "Dylan",
  "Ronnie",
  "Kai",
  "Hugo",
  "Louis",
  "Riley",
  "Edward",
  "Finn",
  "Grayson",
  "Elliot",
  "Caleb",
  "Benjamin",
  "Bobby",
  "Frankie",
  "Zachary",
  "Brody",
  "Jackson",
  "Ollie",
  "Jasper",
  "Liam",
  "Stanley",
  "Sonny",
  "Blake",
  "Albert",
];

let storeRanNam;

let choseName = () => {
  let ranNum = Math.floor(Math.random() * 75);
  storeRanNam = ranName[ranNum];
};
choseName();

let printCommets = () => {
  let ranNum = Math.floor(Math.random() * 1000);
  blankHtmlForReview += `<div class="review-item"data-aos="fade-right">
  <div class="img-con"><img src="img/user.jpg" alt=""></div>
  <div class="comments">
  <div class="user-name"><span>${storeRanNam}</span><img src="img/5_star-removebg-preview.png" alt=""></div>
  <div class="user-comment"><p>${text.value}</p></div>
  <div class="react">
  <i class="fa-solid fa-thumbs-up"></i><i class="fa-solid fa-thumbs-down"></i>
  </div>
  </div>
  </div>`;

  reviewComments.innerHTML = blankHtmlForReview;
  text.value = "";
  choseName();
  setItemForReviewItem();
};
let dislike = document.querySelector(".fa-thumbs-down");
let like = document.querySelector(".fa-thumbs-up");

let reactionLike = () => {
  like.classList.toggle("fa-thumbs-up-js");
  dislike.classList.remove("fa-thumbs-down-js");
};

like.addEventListener("click", reactionLike);

let reactionDislike = () => {
  like.classList.remove("fa-thumbs-up-js");
  dislike.classList.toggle("fa-thumbs-down-js");
};

dislike.addEventListener("click", reactionDislike);

let setItemForReviewItem = () => {
  localStorage.setItem("reviewItemData", reviewComments.innerHTML);
};
let getItemForReviewItem = () => {
  reviewComments.innerHTML = localStorage.getItem("reviewItemData");
};

getItemForReviewItem();

addComment.addEventListener("click", printCommets);

// for menu
let menu = document.querySelector(".menu");
let spanA = document.querySelector(".a");
let spanB = document.querySelector(".b");
let spanC = document.querySelector(".c");
let ankor = document.querySelector("a");
let headerRight = document.querySelector(".header-right");
function menuIcon() {
  spanA.classList.toggle("a-js");
  spanB.classList.toggle("b-js");
  spanC.classList.toggle("c-js");
  ankor.classList.toggle("js-a");
  headerRight.classList.toggle("header-right-js");

  // mobileMenu();
}

let mobileMenu = () => {
  menu.classList.toggle("menu-js");
};

menu.addEventListener("click", menuIcon);

// for visitors count

let visitors = document.querySelector(".visitors");
let monthlyVisitors = document.querySelector(".monthly-visitors");

let count = localStorage.getItem("visitors") || 0;

window.addEventListener("load", () => {
  count++; // Increment count
  setVisitors();
});

let setVisitors = () => {
  localStorage.setItem("visitors", count);
  visitors.innerText = count;
};
