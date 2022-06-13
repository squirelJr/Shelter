let header =document.getElementById("header");
window.addEventListener('scroll',function(){
  if(scrollY>100){
    header.style.backgroundColor='white';
  }else{
    header.style.backgroundColor='';
  }


})

//burger menu with animations
let burger = document.getElementById("burger");

let ul = document.getElementsByClassName("unorderedList");
let sections = document.querySelectorAll("section");
let hr = document.getElementsByClassName("hr");
let ulById =document.getElementById("ul");
burger.style.zIndex = "999";
document.body.zIndex = "1";
ul[0].style.zIndex = "99";
const slideIn= [{ transform: 'translateX(320px)' }];
const slideInConfig={duration:500,iteration:1}
const rotateHalf = [{ transform: 'rotate(90deg)' }];
const rotateFull = [{ transform: 'rotate(180deg)' }];
const rotateConfig = { duration: 500, iteration: 1 };

let dark= document.createElement("div");
dark.style.cssText=`width:100%;height:100%;background-color:black;opacity:0.6;position:absolute;top:0;display:none;`
document.body.append(dark);
let bool = false;
burger.addEventListener("click", function (event) {
  bool = !bool;
  ul[0].classList.toggle("burgerOpen", bool);
  if (bool) {
    document.body.classList.add("stop-scrolling");
    burger.animate(rotateHalf, rotateConfig);
    burger.style.animationFillMode = "forwards";
    dark.style.display="block"
    // startScreen.style.cssText = `backgoround-color:black;opacity:0.4;`;
    
    dark.addEventListener("click", function () {
      if(ul[0].classList.contains("burgerOpen")){
      burger.animate(rotateFull, rotateConfig)
       dark.style.display="none"
      };      
      
      ulById.animate(slideIn,slideInConfig);
      setTimeout( ()=>{ul[0].classList.toggle("burgerOpen", false)},500);
      console.log(bool)
      document.body.classList.remove("stop-scrolling");
    }
    
    );
    
  } else {
    burger.animate(rotateFull, rotateConfig)
    setTimeout( ()=>{ul[0].classList.toggle("burgerOpen", false)},500);
    ulById.animate(slideIn,slideInConfig);
    dark.style.display="none"
    document.body.classList.remove("stop-scrolling");
  }

});




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




const slideRight = [{ transform: 'translateX(100vw)' }];
const slideFromLeft = [{ transform: 'translateX(-100vw)' }];
const slideRightTiming = { duration: 500, iterations: 1 };
let pageCount =document.getElementById("page")
let right = document.getElementById("right");
var count=1;


// slider right
let j = 0;
let ranNums = [];
let emptyArray=[];
function getrandom(){
let nums = [0,1,2,3,4,5,6,7];

    let i = nums.length;
  
    for(let a=i;a>0;a--) {
    j = Math.floor(Math. random() * (i));
    ranNums.push(nums[j]);
    }
    return ranNums;
}


right.addEventListener("click", function changeCards() {
  let cards = document.querySelectorAll(".cat-card");
  
  
  getPets().then(data => {
 
    
   
    const petImages = document.getElementsByClassName("cat");
    const petNames = document.getElementsByClassName("petName");
    if(count<6){
    cards.forEach(element => {
      element.animate(slideRight, slideRightTiming);
    })
   
    getrandom();

    for (let k = 0; k < petImages.length; k++) {
        let access=ranNums[k];



      
      petNames[k].innerHTML = ``;
      petImages[k].src = `${data[access].img}`;
      petNames[k].innerHTML = `${data[access].name}`;
     
    }
    ranNums = ranNums.splice(1,8);
   
count=count+1;
pageCount.innerText=`${count}`;

    // if(j>2){
    //   j=1;
    // }

}
  })
});
//j==1;
//slider left

left.addEventListener("click", function changeCards() {
    let cards = document.querySelectorAll(".cat-card");
    
    
    getPets().then(data => {
   
      
     
      const petImages = document.getElementsByClassName("cat");
      const petNames = document.getElementsByClassName("petName");
      if(count>1){
          left.addEventListener("mouseover", function hover(event){
left.style.cssText='background-color:#F1CDB3;color:black;cursor:pointer;'
          })
      cards.forEach(element => {
        element.animate(slideRight, slideRightTiming);
      })
     
      getrandom();
   
      for (let k = 0; k < petImages.length; k++) {
          let access=ranNums[k];
        
        petNames[k].innerHTML = ``;
        petImages[k].src = `${data[access].img}`;
        petNames[k].innerHTML = `${data[access].name}`;
       
      }
      ranNums = ranNums.splice(1,8);
  
  count--;
  pageCount.innerText=`${count}`;
  
      // if(j>2){
      //   j=1;
      // }
  
    }else{
        left.removeEventListener("mouseover",  event)
    }   
    })

  });

let doubleRight=document.getElementById("double-right");

doubleRight.addEventListener("click", function changeCards() {
    count=5;
    let cards = document.querySelectorAll(".cat-card");
    
    
    getPets().then(data => {
   
      
     
      const petImages = document.getElementsByClassName("cat");
      const petNames = document.getElementsByClassName("petName");
     
     if(count<6){
      cards.forEach(element => {
        element.animate(slideRight, slideRightTiming);
      })
     
      getrandom();
  
      for (let k = 0; k < petImages.length; k++) {
          let access=ranNums[k];
  
  
  
        
        petNames[k].innerHTML = ``;
        petImages[k].src = `${data[access].img}`;
        petNames[k].innerHTML = `${data[access].name}`;
       
      }
      ranNums = ranNums.splice(1,8);
     count++;
  console
  pageCount.innerText=`${count}`;
  
      // if(j>2){
      //   j=1;
      // }
    }
  
    })
  });
  let doubleLeft=document.getElementById("double-left");
 
doubleLeft.addEventListener("click", function changeCards() {
    count=2;
    let cards = document.querySelectorAll(".cat-card");
    
    
    getPets().then(data => {
   
      
     
      const petImages = document.getElementsByClassName("cat");
      const petNames = document.getElementsByClassName("petName");
     
     if(count>1){
      cards.forEach(element => {
        element.animate(slideRight, slideRightTiming);
      })
     
      getrandom();
  
      for (let k = 0; k < petImages.length; k++) {
          let access=ranNums[k];
  
  
  
        
        petNames[k].innerHTML = ``;
        petImages[k].src = `${data[access].img}`;
        petNames[k].innerHTML = `${data[access].name}`;
       
      }
      ranNums = ranNums.splice(1,8);
     count--;
  console
  pageCount.innerText=`${count}`;
  
      // if(j>2){
      //   j=1;
      // }
    }
  
    })
  });
//PopUp
let cards = document.querySelectorAll(".cat-card");
console.log(cards);
// let petsSection = document.getElementById("pets")
let pop = document.createElement("div");
pop.className = "popWindow";
pop.style.cssText = `position:absolute;left:auto;right:auto;top:0;text-align:center; width:100%;height:180%; z-index:999999; background-color:black;opacity:0.5;z-index:1;`
let modal = document.createElement("div");
modal.className = "moadl";
modal.style.cssText = `border:2px solid black;display:flex;justify-content:space-between;flex-diirection:row;position:fixed;right:auto;left:20%;top:20%;text-align:center; width:60%;height:40%; z-index:999999; background-color:white;z-Index:22;`
let imageContainer =document.createElement("img");
imageContainer.className="popImage";
imageContainer.style.cssText="width:45%;height:80%;"
let popContent=document.createElement("div");
popContent.className="popContent";
popContent.style.cssText=`width:45%;height:100%;display:flex;flex-direction:column;overflow-y: scroll;text-align: initial;`
let popName=document.createElement("h4");
let popAge =document.createElement("p");
let popBreed =document.createElement("p");
let inoculations =document.createElement("p");
let parasites =document.createElement("p");
let popDesc =document.createElement("p");


let source = "";


async function popUp(event) {

  await getPets().then(data => {
    cards.forEach(element => {

      element.addEventListener("click", function (e) {
        e.preventDefault();
        document.body.classList.add("stop-scrolling");
        document.body.appendChild(modal);
        document.body.appendChild(pop);
        
        let i = element.childNodes;
        source = i[3].innerText;
      
        let a = data.filter(x => x.name === source)
        popName.innerText=`NAME: ${a[0].name}`;
        popAge.innerText=`AGE: ${a[0].age}`;
        popBreed.innerText=`BREED: ${a[0].breed}`;
        inoculations.innerText=`INOCULATIONS: ${a[0].inoculations}`;
        parasites.innerText=`PARASITES:  ${a[0].parasites}`;
        popDesc.innerText=`Descreption: ${a[0].description}`;
        imageContainer.src=a[0].img;
        popContent.append(popName,popAge,popBreed,inoculations,parasites,popDesc);
        modal.appendChild(imageContainer);
        modal.appendChild(popContent);
       
       
      })
    });

  })

}

popUp();

pop.addEventListener("click",function(){
  document.body.removeChild(modal);
  document.body.removeChild(pop);
  document.body.classList.remove("stop-scrolling");
});