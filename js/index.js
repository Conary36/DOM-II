// Your code goes here
let navBackGround = document.querySelector('.container');
let linkBtn = document.getElementsByTagName('a');
let bus = document.querySelectorAll('.intro p');
const dest = document.querySelectorAll('.destination');

navBackGround.addEventListener('click', (event)=>{
    navBackGround.style.color = 'red';
});
navBackGround.addEventListener('mouseleave',(event)=>{
    navBackGround.style.color = 'green';
});
/*******************Mouseover a Tags to turn purple********/
for(let i = 0; i < linkBtn.length; i++){
linkBtn[i].addEventListener('mouseover', (event) =>{
    linkBtn[i].style.color = 'purple';
    console.log(Array.from(linkBtn));
});
}
/***********Toggle words to be large or normal with Wheel event swipe******/
 bus[0].addEventListener('wheel', (event) => {
    bus[0].classList.toggle('onAndOff');//onAndOff is located in index.css
     alert('Bigger Text!');  
 });

/*****Resize for Window**************************************/
 window.addEventListener('resize', (event)=>{
     alert(`The height is: ${window.innerHeight} and The width: ${window.innerWidth}`);
 });
/*****Used forEach to iterate over divs and create hover effect upon double click**** */
 dest.forEach(shadow => {
     shadow.addEventListener('dblclick', (event) =>{
         console.log('fire');
         event.target.style.boxShadow = '50px 30px 50px teal';
     });
 });
 
/******KeyDown and Key Up*********/
document.addEventListener('keydown', (event) => {
    const keyName = event.key;

    if (keyName === 'Control') {
        // do not alert when only Control key is pressed.
        return;
    }

    if (event.ctrlKey) {
        // Even though event.key is not 'Control' (e.g., 'a' is pressed),
        // event.ctrlKey may be true if Ctrl key is pressed at the same time.
        alert(`Combination of ctrlKey + ${keyName}`);
    } else {
        alert(`Key pressed ${keyName}`);
    }
}, false);

document.addEventListener('keyup', (event) => {
    const keyName = event.key;

    // As the user releases the Ctrl key, the key is no longer active,
    // so event.ctrlKey is false.
    if (keyName === 'Control') {
        alert('Control key was released');
    }
}, false);
/*************FOCUS*******************/
const focusTest = document.getElementById('testing');

function pause() {
    document.body.classList.add('.focus');
    focusTest.textContent = 'FOCUS LOST!';
}

function play() {
    document.body.classList.remove('.focus');
    focusTest.textContent = 'This document has focus. Click outside the document to lose focus.';
}



window.addEventListener('blur', pause);
window.addEventListener('focus', play);

/**********************SELECT EVENT*************************/
const input = document.querySelector('input');
input.addEventListener('select', logSelection);


function logSelection(event) {
    const inputTest = document.getElementById('testing');
    const selection = event.target.value.substring(event.target.selectionStart, event.target.selectionEnd);
    inputTest.textContent = `You selected: ${selection}`;
}


