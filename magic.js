
function makeNewDiv() {
   let input = prompt('grid size');
   let shlongus = parseInt(input,10);
   let gridSize = shlongus * shlongus;
   let rowOfBoxes = [];
   const ship = document.getElementsByClassName("ship");

   while (gridSize){ 
     let element = document.createElement('div');
     element.setAttribute('id','box');
     rowOfBoxes.push(element);
      if ((gridSize -1) % shlongus === 0){
       const container = document.createElement('div');
       container.setAttribute('class','container');
       rowOfBoxes.forEach(box => {
        container[0].appendChild(box);
       });
       ship[0].appendChild(container);
       rowOfBoxes = [];
     }
     gridSize--;
    }
}

function clearGrid(){
  const parent = document.getElementsByClassName("box");
while (parent.firstChild) {
    parent.firstChild.remove();
  }
  console.log("Cleared");
}