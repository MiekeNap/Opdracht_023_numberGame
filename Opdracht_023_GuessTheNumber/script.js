
const name = prompt("Welkom! Wat is je naam?");
alert("Hey " + name + ".");

const min = +prompt("Wat is het kleinste getal dat je wilt raden?", 2);
const max = +prompt("Wat is het grootste nummer dat je wilt raden?", 20);
alert("Je koos " + min + " als kleinste getal en " + max + " als grootste getal om te raden. Je range waaruit je kan kiezen is dus " + min + " tot en met " + max);


function guessNumber(){

    // generating a random integer between min and max: 0 - 25
    //const min = 0;
    //const max = 25;
    const rand = min - 0.5 + Math.random() * (max - min + 1);
        
    // prompt user for a guess
    const guess = parseInt(prompt("Voer een nummer in van " +  min +  " tot " + max + " om te beginnen met raden...", 3));

    // blijf raden tot het juiste nummer is geraden
    while (guess !== rand) {
        guess = parseInt(prompt("Dat is niet correct! Probeer nog een keer te raden.", 3));
        guessNumber();
        guess++;
    }
    if (guess === rand){
        alert ("Gefeliciteerd, je hebt gewonnen! Dag " + name + ". Tot de volgende keer.");
    
    } 
}   
guessNumber();
     
 /*
//Bonus
for (i = 0; i < 5; i++){
    if (i <= 0) {
        return 'nog 4 pogingen';
    } else if (i <= 1) {
        return 'nog 3 pogingen';
    } else if (i <= 2) {
        return 'nog 2 pogingen';
    } else if (i <= 3) {
        return 'nog 1 poging';
    } else {
        return 'alle pogingen verspeeld';
    }
}

    console.log("Je hebt " + guesses(i));
}

*/