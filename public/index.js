let title = ['Work', 'Play', 'Study', 'Exercise', 'Social', 'Self Care'];
let daily = [
    {
        time: '5hrs',
        prev: '7hrs'
    },
    {
        time: '1hr',
        prev: '2hrs'
    },
    {
        time: '0hrs',
        prev: '1hr'
    },
    {
        time: '1hr',
        prev: '1hr'
    },
    {
        time: '1hr',
        prev: '3hrs'
    },
    {
        time: '0hrs',
        prev: '1hr'
    }

];
let weekly = [
    {
        time: '32hrs',
        prev: '36hrs'
    },
    {
        time: '10hrs',
        prev: '8hrs'
    },
    {
        time: '4hrs',
        prev: '7hrs'
    },
    {
        time: '4hrs',
        prev: '5hrs'
    },
    {
        time: '5hrs',
        prev: '10hrs'
    },
    {
        time: '2hrs',
        prev: '2hrs'
    }

];
let monthly = [
    {
        time: '103hrs',
        prev: '128hrs'
    },
    {
        time: '23hrs',
        prev: '29hrs'
    },
    {
        time: '13hrs',
        prev: '19hrs'
    },
    {
        time: '11hrs',
        prev: '18hrs'
    },
    {
        time: '21hrs',
        prev: '23hrs'
    },
    {
        time: '7hrs',
        prev: '11hrs'
    }

];
load('weekly');
function load(time){
    let contentBlocks = document.getElementsByClassName('content');
    console.log(contentBlocks);
    // let innerHtmls = [];
    if(time === 'weekly')
    for(let i=0;i<6;i++){
        let html = `
        <div class="row"><span class="title">${title[i]}</span><span class="notif">...</span></div>
        <span class="time">${weekly[i].time}</span>
        <span class="prev-time">Last Week - ${weekly[i].prev}</span>
        `
        contentBlocks[i].innerHTML = html;
    }   
    else if(time === 'daily'){
        for(let i=0;i<6;i++){
            let html = `
            <div class="row"><span class="title">${title[i]}</span><span class="notif">...</span></div>
            <span class="time">${daily[i].time}</span>
            <span class="prev-time">Last Day - ${daily[i].prev}</span>
            `
            contentBlocks[i].innerHTML = html;
        }
    }
    else{
        for(let i=0;i<6;i++){
            let html = `
            <div class="row"><span class="title">${title[i]}</span><span class="notif">...</span></div>
            <span class="time">${monthly[i].time}</span>
            <span class="prev-time">Last Month - ${monthly[i].prev}</span>
            `
            contentBlocks[i].innerHTML = html;
        }
    }
}

document.getElementById('Daily').addEventListener('click',function(){
    load('daily')
});

document.getElementById('Weekly').addEventListener('click',function(){
    load('weekly')
});

document.getElementById('Monthly').addEventListener('click',function(){
    load('monthly')
});