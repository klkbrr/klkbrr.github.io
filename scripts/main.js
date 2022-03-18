let miImage = document.querySelector('img');

miImage.onclick = function () {
    let miSrc = miImage.getAttribute('src');
    if (miSrc === 'imagen/firefox.jpg') {
        miImage.setAttribute('src', 'images/firefox2.jpg');
    } else {
        miImage.setAttribute('src', 'imagen/firefox2.jpg')
    }
}


let miBoton = document.querySelector('button');
let miTitulo = document.querySelector('h1');

function estableceNombreUsuario() {
    let miNombre = prompt('Introduzca su nombre.');
    if(!miNombre) {
      estableceNombreUsuario();
    } else {
      localStorage.setItem('nombre', miNombre);
      miTitulo.innerHTML = 'Este pana es un Mamabicho:, ' + miNombre;
    }
  }


if (!localStorage.getItem('nombre')) {
    estableceNombreUsuario();
}
else {
    let nombreAlmacenado = localStorage.getItem('nombre');
    miTitulo.textContent = 'Este pana es un mamabicho:' + nombreAlmacenado;
}

miBoton.onclick = function() {
    estableceNombreUsuario();
}



