const ship = document.getElementsByClassName("ship");
const colours = ['lightcyan','lavenderblush','darkseagreen','darkolivegreen','lightpink','azure','mediumorchid','navy','aqua','mistyrose','mediumturquoise'];

function makeNewDiv() {
   let input = prompt('grid size');
   let shlongus = parseInt(input,10);
   let gridSize = shlongus * shlongus;
   let rowOfBoxes = [];

   while (gridSize){ 
     let element = document.createElement('div');
     element.setAttribute('id','box');
     rowOfBoxes.push(element);

      if ((gridSize -1) % shlongus === 0){
       const container = document.createElement('div');
       container.setAttribute('class','container');
       rowOfBoxes.forEach(box => {
        container.appendChild(box);
       }
       );

       ship[0].appendChild(container);
       rowOfBoxes = [];
     }
     gridSize--;
    }

  const containers = document.querySelectorAll(".container");  
  containers.forEach(container => {
    container.setAttribute(
      'style',
      `height: ${parseInt(900/shlongus)}px`)
  });
  hoverEffect();
}

function hoverEffect(){
  const boxes = document.querySelectorAll("#box");  
  boxes.forEach(box => {
    box.addEventListener("mouseover",(event)=>{
      const randomColour = colours[Math.floor(Math.random()*colours.length)];
      event.target.style.backgroundColor=randomColour;
    })
  })
}

function clearGrid(){
  const containers = document.querySelectorAll(".container");
  containers.forEach(container => {
    container.remove();
  })
 }