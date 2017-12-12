// user can interact with three buttons
//user can input rock paper or scissors
//there will be an invisible span that will appear
//span will tell you if you win or lose
//Rock>Paper>Scissors
document.getElementById('rock').onclick= rock
document.getElementById('paper').onclick=paper
document.getElementById('scissors').onclick=scissors

function rock(){
  let CPU= Math.random()
  if(CPU>0 && CPU<.33) document.getElementById('result').innerHTML="Draw. Rock does not beat itself."
    else if(CPU >=.33 && CPU<.66) document.getElementById('result').innerHTML="Victory. Rock breaks Scissors."
    else if(CPU >=.66 && CPU<.99) document.getElementById('result').innerHTML="Defeat. Rock gets wrapped by Paper."
}

function paper(){
  let CPU= Math.random()
  if(CPU>0 && CPU<.33) document.getElementById('result').innerHTML="Victory. Paper wraps Rock."
    else if(CPU >=.33 && CPU<.66) document.getElementById('result').innerHTML="Defeat. Paper gets cut by Scissors."
    else if(CPU >=.66 && CPU<.99) document.getElementById('result').innerHTML="Draw. Paper does not beat itself."
}

function scissors(){
  let CPU= Math.random()
  if(CPU>0 && CPU<.33) document.getElementById('result').innerHTML="Defeat. Scissors gets broken by Rock."
    else if(CPU >=.33 && CPU<.66) document.getElementById('result').innerHTML="Draw. Scissors does not beat itself."
    else if(CPU >=.66 && CPU<.99) document.getElementById('result').innerHTML="Victory. Scissors cuts Paper"
}
