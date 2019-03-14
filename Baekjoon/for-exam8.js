const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.on('Month', function line(month){
    const Month = month;
    rl.close();
});

rl.on('Day', function line1(day){
    const Day = day;
    rl.close();
});

function solution(Month, Day){
    let week = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'];
    let year = '2007';
    let month = Month;
    let day = Day;
    let dayOfWeek = week[new Date(year+'-'+month+'-'+day).getDay()];
    console.log(dayOfWeek);
}