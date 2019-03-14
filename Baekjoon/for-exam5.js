const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.on('line', function solution(number){
    for(i=0; i<number; i++){
        var string = "";
        for(j=0; j<(number-1)-i; j++){
            string = string + " ";
        }
            for(k=0; k<i+1; k++){
                string = string + "*";
            }
        console.log(string);
    }
    rl.close();
});