const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.on('line', function solution(number){
    for(i=1; i<10; i++){
        result = number * i;
        console.log(number + ' * ' + i + ' =', result);
    }
    rl.close();
});