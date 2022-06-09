

//burger menu with animations
let burger = document.getElementById("burger");

let ul = document.getElementsByClassName("unorderedList");
let sections = document.querySelectorAll("section");
let hr = document.getElementsByClassName("hr");

burger.style.zIndex = "999";
document.body.zIndex = "1";
ul[0].style.zIndex = "99";

const rotateHalf = [{ transform: 'rotate(90deg)' }];
const rotateFull = [{ transform: 'rotate(180deg)' }];
const rotateConfig = { duration: 500, iterations: 1 };
let startScreen = document.getElementsByClassName("start-screen")
let bool = false;
burger.addEventListener("click", function (event) {
  bool = !bool;
  ul[0].classList.toggle("burgerOpen", bool);
  if (bool) {
    burger.style.animationFillMode = "forwards";
    burger.animate(rotateHalf, rotateConfig);
    startScreen[0].style.cssText = `backgoround-color:black;opacity:0.4;`;

  } else {
    burger.animate(rotateFull, rotateConfig)
    startScreen[0].style.cssText = `backgoround-color:none;opacity:1;`;

  }

});
startScreen[0].addEventListener("click", function () {
  bool = false;
  burger.animate(rotateFull, rotateConfig)
  startScreen[0].style.cssText = `backgoround-color:none;opacity:1;`;
  ul[0].classList.toggle("burgerOpen", bool);
})


//fetch data
async function getPets() {
  const response = await fetch("../PetsJson.json");
  var data = await response.json();

  return data;
}

getPets()
//drawing ourFriends from fetched Data!
async function set() {
  await getPets().then(data => {
    const petImages = document.getElementsByClassName("cat");
    const petNames = document.getElementsByClassName("petName");
    for (let i = 0; i < petImages.length; i++) {
      petImages[i].src = `${data[i].img}`;
      petNames[i].innerHTML = `${data[i].name}`;
    }

  })
}
set();


//slider right
// let j =1;


const slideRight = [{ transform: 'translateX(100vw)' }];
const slideFromLeft = [{ transform: 'translateX(-100vw)' }];
const slideRightTiming = { duration: 500, iterations: 1 };

let right = document.getElementById("right");
right.addEventListener("click", function changeCards() {
  let cards = document.querySelectorAll(".petCard");


  let j = Math.ceil(Math.random() * 5);
  console.log(j);
  getPets().then(data => {
    const petImages = document.getElementsByClassName("cat");
    const petNames = document.getElementsByClassName("petName");
    cards.forEach(element => {
      element.animate(slideRight, slideRightTiming);
    })
    for (let i = 0; i < petImages.length; i++) {

      petImages[i].rem = ``;
      petNames[i].innerHTML = ``;
      petImages[i].src = `${data[i + j].img}`;
      petNames[i].innerHTML = `${data[i + j].name}`;
    }



    // if(j>2){
    //   j=1;
    // }

    console.log("jei" + j);
  })
});
//j==1;
//slider left
let k = 2;
let left = document.getElementById("left");
left.addEventListener("click", function () {

  let j = Math.ceil(Math.random() * 5);
  getPets().then(data => {
    const petImages = document.getElementsByClassName("cat");
    const petNames = document.getElementsByClassName("petName");

    let cards = document.querySelectorAll(".petCard");
    cards.forEach(element => {
      element.animate(slideFromLeft, slideRightTiming);
    })
    for (let i = 0; i < petImages.length; i++) {
      petImages[i].rem = ``;
      petNames[i].innerHTML = ``;
      petImages[i].src = `${data[i + j].img}`;
      petNames[i].innerHTML = `${data[i + j].name}`;
    }
  })
});

//PopUp
let cards = document.querySelectorAll(".petCard");
console.log(cards);
let petsSection = document.getElementById("pets")
let pop = document.createElement("div");
pop.className = "popWindow";
pop.style.cssText = `position:absolute;margin-left:auto;margin-right:auto;left:0;right:0;text-align:center; width:100vw;height:100vh; z-index:999999; background-color:black;opacity:0.5;z-index:1;`
let modal = document.createElement("div");
modal.className = "moadl";
modal.style.cssText = `position:absolute;margin-left:auto;margin-right:auto;left:0;right:0;text-align:center; width:50%;height:50%; z-index:999999; background-color:white;z-Index:22;`

let source = "";


async function popUp(event) {

  await getPets().then(data => {
    cards.forEach(element => {

      element.addEventListener("click", function (e) {
        e.preventDefault();
        document.body.classList.add("stop-scrolling");

        petsSection.appendChild(pop);
        petsSection.appendChild(modal);
        let i = element.childNodes;
        console.log(i);
        source = i[3].innerText;
        console.log(i[3].innerText);
        let a = data.filter(x => x.name === source)
        console.log(a);
      })
    });

  })

}

popUp();