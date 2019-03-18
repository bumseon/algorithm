const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.setPrompt('> ');
rl.prompt();
rl.on('line', function line(input){
    const [month, day] = input.split(' ');
    let week = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'];
    let year = '2007';
    let dayOfWeek = week[new Date(year+'-'+month+'-'+day).getDay()];
    console.log(dayOfWeek);
    rl.close();
});

// function solution(Month, Day){
//     let week = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'];
//     let year = '2007';
//     let month = Month;
//     let day = Day;
//     let dayOfWeek = week[new Date(year+'-'+month+'-'+day).getDay()];
//     return dayOfWeek;
// }

// console.log(solution(1, 1));