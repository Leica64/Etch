
function makeNewDiv() {
   let input = prompt('grid size');
   while (input){ 
     const element = document.createElement('div');
     element.setAttribute(
      'style',
      'background-color: red; width: 20px; height: 20px;' 
     )
     console.log(input);
     input--;
    }
}