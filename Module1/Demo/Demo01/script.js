console.log('Element du script.js');

document.addEventListener('DOMContentLoaded', (e)=>{
    console.log('DOM chargé');

document.querySelector('h1').addEventListener('click', ()=>{
    alert('Vous avez cliqué sur le titre');
    }); 
});