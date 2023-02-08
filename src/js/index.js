import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../css/styles.css';
import Triangle from './triangle.js';
import Square from '../square';
import Pentagon from '../pentagon';


function handleTriangleForm (event) {
  event.preventDefault ();
  document.querySelector ('#response').innerText = null;
  const length1 = parseInt (document.querySelector ('#length1').value);
  const length2 = parseInt (document.querySelector ('#length2').value);
  const length3 = parseInt (document.querySelector ('#length3').value);
  const triangle = new Triangle (length1, length2, length3);
  const response = triangle.checkType ();
  console.log(response);
  const pTag = document.createElement ('p');
  pTag.append(response);
  document.querySelector ('#response').append (pTag);
  document.querySelector("div#hidden").removeAttribute("class", "hidden");
  console.log(response);
}


function handleSquareForm (event) {
  event.preventDefault();
    document.querySelector('div#response').innerText = null;
    const length1 = parseInt (document.querySelector ('#squareLength1').value);
    const length2 = parseInt (document.querySelector ('#squareLength2').value);
    const length3 = parseInt (document.querySelector ('#squareLength3').value);
    const length4 = parseInt (document.querySelector ('#squareLength4').value);
    const square = new Square (length1, length2, length3, length4);
    const squareResult = square.checkType ();
    const pTag = document.createElement ('p');
    pTag.append(squareResult);
    document.querySelector ('#response').append (pTag);
    document.querySelector("div#hidden").removeAttribute("class", "hidden");

  }


function handlePentForm (event) {
event.preventDefault();
const length1 = parseInt(document.querySelector ('#length1').value);
console.log(length1);
const length2 = parseInt(document.querySelector ('#length2').value);
const length3 = parseInt(document.querySelector ('#length3').value);
const length4 = parseInt(document.querySelector ('#length4').value);
const length5 = parseInt(document.querySelector ('#length5').value);
const pentagon = new Pentagon (length1, length2, length3, length4, length5);
const pentResult = pentagon.checkType();
pTag.append(pentResult)
document.querySelector ('#response').append (pTag);
document.querySelector("div#hidden").removeAttribute("class", "hidden");

  }



 function handleWhatForm() {
  event.preventDefault();
  const chooseThree = 
  const chooseFour = 
  const chooseFive = 
 } 


window.addEventListener('load', function () {
  document.querySelector ('form#triangle-checker-form').addEventListener ('submit', handleTriangleForm);
  document.querySelector('form#square-checker-form').addEventListener ('submit', handleSquareForm);
  document.querySelector('form#pentagon-checker-form').addEventListener ('submit', handlePentForm);

});



