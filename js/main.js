'use strict';

const handleClick = () => 
{
    for(let button of document.querySelectorAll('body button.button'))
        button.addEventListener('click', ()=>{console.log(button.innerText);});
}

/*
const handleClick = () => 
{
    for(let button of document.querySelectorAll('body button.button'))
    {
        let textToWrite = button.innerText;
        button.addEventListener('click', ()=>{console.log(textToWrite);});
    }
}
*/