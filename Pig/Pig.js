/*
  Author:  Kevin Kot
  Class:   Software Engineering 
  Project: Pig
  Description: Sprint 2 Dice Rolling project called Pig. User rolls dice and as long as they don't roll a 1, they can continue rolling to accumulate points. 
*/

/*Rolls the Dice between the values of 1-6
//If the value is 1, someone loses a turn and bank value is set to 0
Otherwise, points are added to the bank. */
function RollDice() {
    document.getElementById("uDice").value = Math.floor(Math.random()*6)+1;
    if(document.getElementById("uDice").value == 1){
        if (document.getElementById("plt1").checked == true){
            document.getElementById("plt1").checked = false;
            document.getElementById("plt2").checked = true;
            document.getElementById("bank").value = 0;
        }
        else if (document.getElementById("plt2").checked == true){
            document.getElementById("plt1").checked = true;
            document.getElementById("plt2").checked = false;
            document.getElementById("bank").value = 0;
        }
    }
    else {
        AddPoints();
    }
}

//Keeps track of the points inside the bank
function AddPoints() {
    curr = document.getElementById("bank").value
    rolled = document.getElementById("uDice").value;
    curr = Number(curr);
    rolled = Number(rolled);
    document.getElementById("bank").value = curr + rolled;
}

/*Player ends their turn and resets some of the values.
Player gets whatever points are inside the bank. 
It checks which radiobox is checked so that points go to the appropriate player. 
There is also a check to see if a player reached 100 points so that a winner is declared 
*/
function EndTurn(){
    if (document.getElementById("plt1").checked == true){
        u1 = document.getElementById("p1").value;
        cashin = document.getElementById("bank").value;
        u1 = Number(u1);
        cashin = Number(cashin)
        document.getElementById("p1").value = u1 + cashin;
        CheckPoints();
        document.getElementById("bank").value = 0;
        document.getElementById("uDice").value = 0;
        document.getElementById("plt1").checked = false;
        document.getElementById("plt2").checked = true;
        document.getElementById("diceroll").focus();
    }
    else {
        u2 = document.getElementById("p2").value;
        cashin = document.getElementById("bank").value;
        u2 = Number(u2);
        cashin = Number(cashin)
        document.getElementById("p2").value = u2 + cashin;
        CheckPoints();
        document.getElementById("bank").value = 0;
        document.getElementById("uDice").value = 0;
        document.getElementById("plt1").checked = true;
        document.getElementById("plt2").checked = false;
        document.getElementById("diceroll").focus();
    }
}

//Resets all values and buttons in the game
function NewGame(){
    document.getElementById("p1").value = "0";
    document.getElementById("p2").value = "0";
    document.getElementById("bank").value=0;
    document.getElementById("uDice").value = 0;
    document.getElementById("plt1").checked = true;
    document.getElementById("plt2").checked = false;
    document.getElementById("diceroll").disabled = false;
    document.getElementById("endturn").disabled = false;
    document.getElementById("winner").innerHTML = "";
    document.getElementById("diceroll").focus();
}

//Starts the first roll
function StartGame(){
    document.getElementById("p1").value = "0";
    document.getElementById("p2").value = "0";
    document.getElementById("bank").value=0;
    turn = document.getElementById("plt1").checked = true;
    RollDice();
}

/*Checks the points of both players to see if any one of them has gotten to 100 points
Two of the buttons get disabled so that the textboxes don't get overloaded by a huge number
*/
function CheckPoints(){
    pts1 = document.getElementById("p1").value;
    pts2 = document.getElementById("p2").value;
    pts1 = Number(pts1);
    pts2 = Number(pts2);

    if (pts1 >= 100){
        document.getElementById("diceroll").disabled = true;
        document.getElementById("endturn").disabled = true;
        document.getElementById("winner").innerHTML = "Player One Wins!";
    }
    else if (pts2 >= 100){
        document.getElementById("diceroll").disabled = true;
        document.getElementById("endturn").disabled = true;
        document.getElementById("winner").innerHTML = "Player Two Wins!";
    }
}
