document.querySelector('#Broma').addEventListener('click',function(){
    mostrarBroma();
})

function mostrarBroma(){
    let url = 'http://api.icndb.com/jokes/random/joke';

    const broma = new XMLHttpRequest();
    broma.open('GET',url,true);
    broma.send();

    broma.onreadystatechange = function(){
        if(this.status == 200 && this.readyState == 4){
            
            let datos = JSON.parse(this.responseText);
            
            let resultado = document.querySelector('#resultado');

            resultado.innerHTML = datos.value.joke;
            
        }
    }
}