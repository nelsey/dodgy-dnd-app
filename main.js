let inputField = document.getElementById("inputField");
let addName = document.getElementById("addName");
let namesContainer = document.getElementById("namesContainer");
let diceRollAll = document.getElementById("diceRollAll");

addName.addEventListener("click", function() {
    // use the click function on button to add a new paragraph i.e 'p'
    var nameParagraph = document.createElement('p');
    // add id to paragraph
    nameParagraph.setAttribute('id', 'nameList');
    // add styling from css
    nameParagraph.classList.add('paragraph-styling');
    // make text = inputfield's value entered by user
    nameParagraph.innerText = inputField.value;
    // append paragraph to To Do container
    namesContainer.appendChild(nameParagraph);
    //reset inputField box
    inputField.value = "";

    
    nameParagraph.addEventListener("click", function() {
        nameParagraph.style.textDecoration = "line-through";
    })
    
    nameParagraph.addEventListener("dblclick", function() {
        namesContainer.removeChild(nameParagraph);
    })
})

// press enter to add in name
inputField.addEventListener("keypress", function(event) {
    if (event.key == "Enter") {
        document.getElementById("addName").click();
    }
})

// dice roll button
diceRollAll.addEventListener("click", function() {
    // Get the element
    var copiedNamesContainer = document.querySelector('#nameList');
    // Create copy of it
    var clone = copiedNamesContainer.cloneNode();
    // Update the ID and add a class
    clone.id = 'newNameList';
    // Inject it into the DOM
    copiedNamesContainer.after(clone);    

})


// Dice 20
var dice20 = {
    sides: 20,
    roll: function () {
      var randomNumber = Math.floor(Math.random() * this.sides) + 1;
      return randomNumber;
    }
  }
  
//Prints dice roll to the page
function printNumber(number) {
    var placeholder = document.getElementById('placeholder');
    placeholder.innerHTML = number;
  }
  
  var button = document.getElementById('diceRollAll');
  
  button.onclick = function() {
    var result = dice20.roll();
    printNumber(result);
  };



/* to pickup next time: 
-figure out how to add the names into the diceRoll div on diceRollAll button click. 
  -on click of button, create new div classes
  ---> https://www.youtube.com/watch?v=sILWThH3RnA&ab_channel=BeforeSemicolon
  ---> https://gomakethings.com/how-to-copy-or-clone-an-element-with-vanilla-js/ 
  ---> https://codepen.io/Pyremell/pen/eZGGXX/ 
-on button click, also roll all the dices for each item
*/