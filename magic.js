function makeNewDiv() {
   let input = prompt('grid size');
   while (input){
     console.dir(container.firstElementChild);  
     const box = document.createElement('div');
     console.log(input);
     input--;
    }
}