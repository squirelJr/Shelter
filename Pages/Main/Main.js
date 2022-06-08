

//burger menu with animations
let burger = document.getElementsByClassName("burger")[0];
console.log(burger)
let ul = document.getElementsByClassName("unorderedList");
let hr = document.getElementsByClassName("hr");
burger.style.zIndex = "999";


let bool = false;
burger.addEventListener("click", function (event) {
  bool = !bool;
  ul[0].classList.toggle("burgerOpen", bool);
  if (bool) {
    setTimeout(burger.style.webkitTransform = "rotate(90deg) ", 9000)


  } else {
    burger.style.webkitTransform = "rotate(180deg)"
  }

});



//fetch data
async function getPets() {
  const response = await fetch("../PetsJson.json");
  var data = await response.json();
  console.log(data)
  return  data;
}

getPets()
//drawing ourFriends from fetched Data!
async function set(){
  await getPets().then(data=>{
    const petImages = document.getElementsByClassName("cat");
    const petNames = document.getElementsByClassName("petName");
    for(let i=0;i<petImages.length;i++){
      petImages[i].src= `${data[i].img}`;
      petNames[i].innerHTML=`${data[i].name}`;
    }
    
  })
}
set();


//slider right
let j =1;


let right = document.getElementById("right");
right.addEventListener("click", function(){
   getPets().then(data=>{
    const petImages = document.getElementsByClassName("cat");
    const petNames = document.getElementsByClassName("petName");
    for(let i=0;i<petImages.length;i++){
      petImages[i].rem = ``;
      petNames[i].innerHTML=``;
      petImages[i].src = `${data[i+j].img}`;
      petNames[i].innerHTML=`${data[i+j].name}`;
    }
j++;

if(j>5){
  j=5;
}

console.log("jei"+j);
  })
});
//j==1;
//slider left
let k =9;
let left = document.getElementById("left");
left.addEventListener("click", function(){
   getPets().then(data=>{
    const petImages = document.getElementsByClassName("cat");
    const petNames = document.getElementsByClassName("petName");
    --j;
    for(let i=0;i<petImages.length;i++){
      petImages[i].rem = ``;
      petNames[i].innerHTML=``;
      petImages[i].src = `${data[i+j].img}`;
      petNames[i].innerHTML=`${data[i+j].name}`;
    }


if(j<1){
  j=1
}

console.log("kei"+ k)
  })
});

//PopUp
let cards = document.querySelectorAll(".petCard");
console.log(cards);
let pop = document.createElement("div");
pop.className="popWindow";
pop.style.cssText=  `position:absolute; width:300px;height:300px; z-index:999999; background-color:black;`
async function popUp(){

  await getPets().then(data=>{
    cards.forEach(element => {
      element.addEventListener("click", function(){
        document.body.appendChild(pop);
      })
    });
  })
}

popUp();