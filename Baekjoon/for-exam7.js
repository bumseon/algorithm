const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.on('line', function solution(number){
    for(i=0; i<number; i++){
        var string = "";
        for(j=0; j<i; j++){
            string = string + " ";
        }
        for(j=0;j<number-i;j++){
            string = string + "*";
        }
        console.log(string);
    }
    rl.close();
});