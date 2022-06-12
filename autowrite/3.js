const text= 'HUSTLE UNTIL YOUR NAME NO LONGER NEEDS AN INTRODUCTION';

let index=0;

function writeText(){
    document.body.innerText= text.slice(0,index);
    index++;
    if (index > text.length-1) {
        index=0;
    }
}
setInterval(writeText,75);