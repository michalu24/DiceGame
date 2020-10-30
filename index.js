function getDice(){
    var array=["<p><i class='fas fa-dice-one fa-10x'></i></p>",
            "<p><i class='fas fa-dice-two fa-10x'></i></p>",
            "<p><i class='fas fa-dice-three fa-10x'></i></p>",
            "<p><i class='fas fa-dice-four fa-10x'></i></p>",
            "<p><i class='fas fa-dice-five fa-10x'></i></p>",
            "<p><i class='fas fa-dice-six fa-10x'></i></p>"]

    document.getElementById("firstDice").innerHTML=array[randomNumber()];
    document.getElementById("secondDice").innerHTML=array[randomNumber()];

}

function randomNumber(){

    var output = Math.floor((Math.random() * 6));

    return output;
}