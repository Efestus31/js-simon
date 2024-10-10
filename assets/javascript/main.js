
//numeri casuali
let numeri = [];
for(let i = 0; i < 5; i++);{
    numeri.push(Math.floor(Math.random() * 100));
}

//mostriamo i numeri nella pagina
const numSelected = document.querySelectorAll('.num');
numSelected.forEach((element, index) => {
    element.textContent = numeri[index];
});

//timer di 30 sec
setTimeout(() => {
// Nascondi i numeri
    numSelected.forEach(element => element.style.display = 'none');
     // Mostra il form
    document.getElementById('form').style.display = 'block'; 
}, 30000);



