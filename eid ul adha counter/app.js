const day = document.getElementById('day');
const hour = document.getElementById('hour');
const minute = document.getElementById('minutes');
const second = document.getElementById('second');

function eidUlAdha(){
    let sec =  1000;
    let min =  sec * 60;
    let hr =   min * 60;
    let dy =   hr * 60;

    let countDown = new Date('august 12, 2021, 00:00:00').getTime();
    let today = new Date().getTime();
    let gap = countDown - today;
    



    let d = Math.floor(gap / (dy));
    let h = Math.floor(gap % (dy) / (hr));
    let m = Math.floor(gap % (hr) / (min));
    let s = Math.floor(gap % (min) / (sec));


    day.innerHTML = d;
    hour.innerHTML = h;
    minute.innerHTML = m;
    seconds.innerHTML = s;



}


setInterval( () => {
    eidUlAdha();
}, 1000)
