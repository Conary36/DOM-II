// Your code goes here
let navBackGround = document.querySelector('.container');
let linkBtn = document.getElementsByTagName('a');
let bus = document.querySelectorAll('.intro p');

navBackGround.addEventListener('click', (event)=>{
    navBackGround.style.color = 'red';
});
navBackGround.addEventListener('mouseleave',(event)=>{
    navBackGround.style.color = 'green';
});

for(let i = 0; i < linkBtn.length; i++){
linkBtn[i].addEventListener('mouseover', (event) =>{
    linkBtn[i].style.color = 'purple';
    console.log(Array.from(linkBtn));
});
}

 bus[0].addEventListener('wheel', (event) => {
    bus[0].classList.toggle('onAndOff');
    console.log()
     alert('Bigger Text!');  
 });
//////////////////////////////

 window.addEventListener('resize', (event)=>{
     alert(`The height is: ${window.innerHeight} and The width: ${window.innerWidth}`);
 });


 const dest = document.querySelectorAll('.destination');

 dest.forEach(shadow => {
     shadow.addEventListener('dblclick', (event) =>{
         console.log('fire');
         event.target.style.boxShadow = '50px 30px 50px teal';
     });
 });

