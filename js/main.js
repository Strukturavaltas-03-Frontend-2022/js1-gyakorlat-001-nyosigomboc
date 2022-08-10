'use strict';

const handleClick = () => 
{
    for(let button of document.querySelectorAll('body button.button'))
        button.addEventListener('click', ()=>{console.log(button.innerText);});
}

