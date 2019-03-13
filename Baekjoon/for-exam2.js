const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.on('line', function solution(number){
    for(i=number; i>0; i--){
        console.log(i);
    }
    rl.close();
});

