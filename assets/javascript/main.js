
//numeri casuali
let numeri = [];
for (let i = 0; i < 5; i++) {
    let num;
    do {
        num = Math.floor(Math.random() * 100) + 1; 
    } while (numeri.includes(num)); 
    numeri.push(num); 
}

// Mostriamo i numeri nella pagina
const numSelected = document.querySelectorAll('.num');
for (let i = 0; i < numSelected.length; i++) {
    numSelected[i].textContent = numeri[i];
}


// Timer di 30 secondi
setTimeout(function() {
    for (let element of numSelected) {
        element.style.display = 'none'; 
    }
    document.getElementById('form').style.display = 'block'; 
}, 30000);


// Gestione del modulo
document.getElementById('form').addEventListener('submit', function(e) {
    e.preventDefault();
    const inputs = Array.from(this.querySelectorAll('input')).map(input => parseInt(input.value));
    const corretti = inputs.filter(num => numeri.includes(num));
    const messaggio = `Hai indovinato ${corretti.length} numeri: ${corretti.join(', ')}`;
    document.getElementById('result').textContent = messaggio;
});
