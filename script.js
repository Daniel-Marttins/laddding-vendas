const menuSize = '800px';

let open = true;

document.querySelector('.btnOpen').addEventListener('click', e =>{
    document.querySelector('.navbar').style.display = 'flex';
    open = !open;
    toggleMenu();
});



function toggleMenu(){

    if(open){
        document.querySelector('.navbar').style.marginLeft = 0;
        return;
    }

    document.querySelector('.navbar').style.marginLeft = `-${menuSize}`;
}


document.querySelector('.card_1').addEventListener('click', e => {
    window.location.href = "planos.html";
});

document.querySelector('.card_2').addEventListener('click', e => {
    window.location.href = "planos.html";
});

document.querySelector('.card_3').addEventListener('click', e => {
    window.location.href = "planos.html";
});

function closePlans(){
     window.location.href = 'planos.html';
}