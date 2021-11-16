let balance = 0;
let ok = 1;
let code_activated = 0;
const balance_p = document.getElementById("balance");
const seconds_left_h1 = document.getElementById("seconds_left");
const play_p = document.getElementById("play");
const moto_div = document.getElementById("m");
const blacky_div = document.getElementById("b");
const result_div = document.querySelector(".result > p");

function code_detect(){ /// aceasta functie este apelata direct in codul html
  var str = document.getElementById("code").value;
  console.log(str);
  if(str == "MOTO10" && code_activated == 0){
    balance += 10;
    code_activated = 1;
    balance_p.innerHTML = balance + "$";
    balance_p.style.backgroundColor = 'green';
    setTimeout(function(){balance_p.style.backgroundColor = 'grey'}, 500);
  }
}

function timer(i){
  setTimeout(function(){
    i++;
    seconds_left_h1.innerHTML = "Moto or Blacky?(PLACE YOUR BET NOW!) - " + (10 - i) + " seconds left";
    console.log(i);
    if(i < 10){
      timer(i);
    }
  }, 1000)
}

function handle_win(key){
  result_div.innerHTML = key + " was correct. Congrats!";
  balance += 10;
  balance_p.innerHTML = balance + "$";
  balance_p.style.backgroundColor = 'green';
  setTimeout(function(){balance_p.style.backgroundColor = 'grey'}, 500);
}

function handle_lose(key){
  result_div.innerHTML = key + " was incorrect. You lose!";
  balance -= 10;
  balance_p.innerHTML = balance + "$";
  balance_p.style.backgroundColor = 'red';
  setTimeout(function(){balance_p.style.backgroundColor = 'grey'}, 500);
}

function handle_choice(key){
  if (ok == 1){
    choices = ["moto", "blacky"];
    computer_choice = choices[Math.floor(Math.random() * 2)];
    if(computer_choice == key){
      console.log("You win");
      handle_win(key);
    }else{
      console.log("You lose!");
      handle_lose(key);
    }
  }
  ok = 0;
}

function handle_bet(){
  let i = 0;
  timer(i);
  moto_div.addEventListener('click', function(){
    handle_choice("moto");
  })
  blacky_div.addEventListener('click', function(){
    handle_choice("blacky");
  })
}

function main(){

    play_p.addEventListener('click', function(){
      ok = 1;
      handle_bet();
    })
}

main();
