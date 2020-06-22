window.addEventListener('load', () => {
    
    let formulario = document.querySelector('.crear');
    
    formulario.addEventListener('submit', (e) => {
        
        let errores = [];
        
        let titulo = document.querySelector('input.titulo');
        let rating = document.querySelector('input.rating');
        ratingNumero = Number(rating.value) //recibo un string y si es numerico lo hago number
        let duracion = document.querySelector('input.duracion');
        duracionNumero = Number(duracion.value) //recibo un string y si es numerico lo hago number
        let premios = document.querySelector('input.premios');
        premiosNumero = Number(premios.value) //recibo un string y si es numerico lo hago number
        let genero = document.querySelector('select.genero');
        
        /* comprobacion titulo */
        if (titulo.value == '') {
            errores.push('El campo titulo debe contener un titulo');
        } else if (titulo.value.length < 3){
            errores.push('El titulo debe tener un  minimo de 3 caracteres');
        }
        /* comprobacion rating */
        if (!rating.value) {
            errores.push('El campo rating debe contener un valor');
        }
        if (isNaN(ratingNumero)) { //isNaN devuelve true si No es un numero
            errores.push('El valor de rating debe ser un numero');
        }
        /* comprobacion duracion */
        if (!duracion.value) {
            errores.push('El campo duracion debe contener un valor');
        }
        if (isNaN(duracionNumero)) { //isNaN devuelve true si No es un numero
            errores.push('El valor de duracion debe ser un numero');
        }
        /* comprobacion premios */
        if (!premios.value) {
            errores.push('El campo premios debe contener un valor');
        }
        if (isNaN(premiosNumero)) { //isNaN devuelve true si No es un numero
            errores.push('El valor de premios debe ser un numero');
        }
        /* comprobacion categoria */
        if (genero.value == '0') {
            errores.push('Debes selecionar un genero');
        }
        
        if (errores.length > 0){
            e.preventDefault();
            
            let divErrores = document.querySelector('div.errores')
            
            divErrores.style.display = 'block'
            
            let ulErrores = document.querySelector('div.errores ul');
            
            for (let i = 0; i < errores.length; i++) {
                ulErrores.innerHTML += '<li class="list-group-item">' + errores[i] + '</li>' //ver como centrar los li
            }
            console.log(errores);
            
            
        }
        
        
    });
    
});