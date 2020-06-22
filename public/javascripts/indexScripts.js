
    let fox = document.querySelector('.fox');
    
    fox.innerHTML = 'PREPARATE'

    let i = 10;
    let cuentaRegresiva = setInterval(() => {
        fox.innerHTML = i;
        i--
        if (i < 0){
            clearInterval(cuentaRegresiva);
            fox.innerHTML = 'Empeza a navegar por el mejor sitio de peliculas'
        }
    },1000)


