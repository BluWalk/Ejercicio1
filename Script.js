
function load() {
        let num1 = 0;
        let num2 = 1;
        let intermediario = 0;
        let resultado ="<div>Serie fibonacci :<br>[ ";
   
        for (let i =0; i <= 10; i++) {
            resultado+= intermediario +" ";

            intermediario = num1 + num2;
            num2 = num1;
            num1 = intermediario;
          
        }
        document.body.innerHTML= resultado +"]";
   
}
document.addEventListener("DOMContentLoaded",load,false);