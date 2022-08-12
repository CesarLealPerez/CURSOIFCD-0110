
async function inserta(){
    let header = await fetch('header.html');
    let html = await header.text();

   document.getElementById('navegador').innerHTML = html;

}