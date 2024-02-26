function greeting(name){
    //var name=prompt("your name please");
    alert(`Hi! ${name} nice to meet you`);
}

greeting('hauket');

var button =document.querySelector('button');
button.innerHTML='click me';
button.style.background = 'blue';
button.style.color='white';
button.style.cursor='pointer';

var btnQuer2 =() =>console.log(this.button);

function btnQuer(){
    console.log(this.button)
}
button.addEventListener('click',btnQuer2);






































































