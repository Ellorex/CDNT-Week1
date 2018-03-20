const hello = "Hello world";
console.log(hello);
// var myName = prompt("mon nom :");
// document.getElementById("myname").innerHTML = myName;


function sauvAuto(){
    let sauvegarde = "je dois faire une sauvegarde régulière de mes fichiers";
    for (var i = 0; i < 200; i++) {
        console.log(sauvegarde);
      }
}
function countToMore() {
    for (let i =0; i < 200 ; i++) {
        if(i % 2 )console.log(i);
    }
}
function mutiplyBy13() {
    for (let i = 0; i<20; i++) {
        console.log(13*i);
    }
}
function exo05() {
    var nbr = prompt ("Veuillez entrer un nombre");
    if (nbr % 2) {
        console.log("Le nombre " + nbr + " est impair");
    }
    else {
        console.log("Le nombre " + nbr + " est pair");
    }
}
function exo06() {
    var nbr = parseInt(prompt ("Veuillez entrer un nombre entre 10 et 20"));
    if (nbr > 20) {
        console.log("Calmos, t'es parti trop loin");
        exo06();
    } else if(nbr < 10) {
        console.log("Sois un peu plus généreux stp");
        exo06();
    } else {
        alert("bien ouej");
    }
}
function exo07() {
    var nbr = prompt ("Un nombre au pif");
    for(var i = 0; i<10; i++) {
        nbr++;
        console.log(nbr);
    }
}
function exo08() {
    var nbr = parseInt(prompt("Veuillez entrer un nombre"));
    for(var i = 0; i <11 ; i++) {
        console.log(nbr * i);
    }
}
function exo09() {
    var nbr = parseInt(prompt("Veuillez entrer un nombre"));
    var total = 0;
    for(var i =0; i<= nbr; i++) {
        total = total + i;
    }
    console.log(total);
}

function exo10() {
    var art = prompt("Combien d'articles avez-vous ?");
    var price = prompt("Combien vaut chaque article ?");
    var totalttc = art * price;
    var tva = (art * price / 100 * 20); 
    var totalht = totalttc - tva;

    console.log("nombre d'articles : " + art);
    console.log("Total hors taxes : " + totalht);
    console.log("Total TTC : " + totalttc);
}


// TO DO LIST 

function addToList(e) {
    var task = document.getElementsByClassName("task").value;
    localStorage.setItem('monChat', 'Tom');
}
var task = document.getElementsByClassName("task").value;

document.addEventListener('submit', addToList);



// function playSound(e){
//     const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
//     const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);

//     if(!audio) return;
//     audio.currentTime = 0;
//     audio.play();    
//     key.classList.add('playing');   
// }


// const keys = document.querySelectorAll('.key');
// keys.forEach(key => key.addEventListener('transitionend', removeTransition));

// window.addEventListener('keydown', playSound);
