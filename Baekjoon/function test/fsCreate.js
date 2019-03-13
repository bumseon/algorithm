const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.on('line', function solution(answer){
    for(i=0; i<answer; i++){
        console.log(i+1);
    }
    rl.close();
});