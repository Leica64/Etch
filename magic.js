const ship = document.getElementsByClassName("ship");

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
    const boxes = document.querySelectorAll("#box");  
    boxes.forEach(box => {
      console.log(parseInt((1/shlongus)*100));
      box.setAttribute(
        'style',
        `height: ${parseInt((1/shlongus)*100)}vh`)
    });
}

function clearGrid(){
  const containers = document.querySelectorAll(".container");
  containers.forEach(container => {
    container.remove();
  })
 }