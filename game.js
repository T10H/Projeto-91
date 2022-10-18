var question_turn = "player1";
var question_answer = "player2"; 
var playerScore1 = 0;
var playerScore2 = 0;
 
    name_player1 = localStorage.getItem("player1_name");
    name_player2 = localStorage.getItem("player2_name");
    document.getElementById("player1_name").innerHTML = name_player1;
    document.getElementById("playerScore1").innerHTML =  playerScore1;
    document.getElementById("player2_name").innerHTML = name_player2;
    document.getElementById("playerScore2").innerHTML = playerScore2;


function enviar() {
  var  numero1 = document.getElementById("numero1").value;
   var numero2 = document.getElementById("numero2").value;
     actual_answer = parseInt(numero1) * parseInt(numero2);

     question_number = "<h4>" + numero1 + "X" + numero2 + "</h4>";
     input_box = "<br>Resposta : <input type='text' id='input_check_box'>";
    check_button = "<br><br><button class'btn btn-info' onclick='check()'>Checar</button";
    row = question_number + input_box + check_button;
    document.getElementById("output").innerHTML = row;
    document.getElementById("numero1").value = "";
    document.getElementById("numero2").value = "";
}
function check() {
    resposta = document.getElementById("input_check_box").value;
    if(resposta == actual_answer)
    {
        if(question_answer == "player1")
        {
            playerScore1 = playerScore1 + 1;
            document.getElementById("playerScore1").innerHTML = playerScore1;
        }
        else{
            playerScore2 = playerScore2 + 1;
            document.getElementById("playerScore2").innerHTML = playerScore2;
        }
    }
    if(question_turn == "player1")
    {
        question_turn = "player2";
        document.getElementById("question_turn").innerHTML = name_player2;
    }
    else{
        question_turn = "player1"
        document.getElementById("question_turn").innerHTML = name_player1;
    }


    if(question_answer == "player1"){

        question_answer = "player2";
        document.getElementById("answer_turn").innerHTML = name_player2;
    }
    else{
        question_answer = "player1";
        document.getElementById("answer_turn").innerHTML = name_player1;
    }
    document.getElementById("output").innerHTML = "";
}