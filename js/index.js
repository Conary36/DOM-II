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
    bus[0].style.fontSize = '8rem';
     alert('Yellow Bus');  
 });
