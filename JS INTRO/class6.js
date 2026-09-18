// FUNCTIONS

// A funtion is a reuseable blobk of code that carries out a particular task or group of task

// Reuseable block of code 



function direction(name){
  console.log(name +' enter a bus to gov. college')
  console.log(name +' come down from the bus')
  console.log(name +' enter into the gate')
  console.log(name +' Take thestairs to the first floor')
  console.log(name +' turn right to the first room')
}

direction('Jesse')
direction('Obinna')
direction('Ebube')

// PARAMETER is the value given to a function when making or creating a function

// ARGUMENT is the value given to a function when calling or using the function 

function add(a, b){
  return console.log(a + b)
}

add(10, 40)

function withdraw(balance, amount){
  if (amount <= balance){
    balance = balance - amount
    return console.log(` you have withdrawn ${amount} and your balance is ${balance}`);
  }else{
    return console.log("Insufficcient Funds")
  }
}

withdraw(3000, 5000)

function example(user, score){
  if (score >= 70){
    return console.log(`Dear ${user} your score is${score} and you have A`)
  }
  else if (score <=60){
    return console.log(`Dear ${user} your score is${score} and you have B`)
  }
  else if (score <=49){
    return console.log (`Dear ${user} your score is${score} and you have F`)
  }
}

example('joshua', 55)