
/*DETECTING BUTTON PRESS*/ 
for (var i=0 ; i< document.querySelectorAll(".drum").length ; i++){
    
    document.querySelectorAll("button")[i].addEventListener("click",function(){
        var buttonInnerHTML = this.innerHTML;
        makeSound(buttonInnerHTML);
        buttonAnimation(buttonInnerHTML);
    });

}


/*DETECTING KEYBOARD PRESS*/ 
document.addEventListener("keydown", function(event){
    makeSound(event.key);
    buttonAnimation(event.key);
});


/*FUNCTION RESPONDING TO KEY AND BUTTON STROKES*/ 
function makeSound(key){

    switch (key) {
        case 'w':
            new Audio('sounds/tom-1.mp3').play();
            break;
        case 'a':
            new Audio('sounds/tom-2.mp3').play();
            break;
        case 's':
            new Audio('sounds/tom-3.mp3').play();
            break;
        case 'd':
            new Audio('sounds/tom-4.mp3').play();
            break;
        case 'j':
            new Audio('sounds/snare.mp3').play();
            break;
        case 'k':
            new Audio('sounds/crash.mp3').play();
            break;
        case 'l':
            new Audio('sounds/kick-bass.mp3').play();
            break;
    
        default:
            break;
    }

}


//ADDING ANIMATION TO STROKES/PRESSES

function buttonAnimation(currentKey){

    var activeButton = document.querySelector("."+currentKey);
    //to ADD A CLASS
    activeButton.classList.add("pressed");

    //to REMOVE A CLASS
    setTimeout(function(){
        activeButton.classList.remove("pressed");
    }, 100);

}