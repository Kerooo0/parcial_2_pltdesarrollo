
//Funcion para mostrar el signo seleccionado
function mostrarSigno() {
    var signoSeleccionado = document.getElementById("signo_zodiacal").value;
    var signoEncontrado = signos.find(signo => signo.nombre === signoSeleccionado);
    var listaSignos = document.getElementById("signos-lista");
    listaSignos.innerHTML = "";   //limpio la lista

    if (signoEncontrado) {
        var li = document.createElement("li");
        li.innerHTML = "<h2>" + signoEncontrado.nombre + "</h2><ul><li>Fecha: " + signoEncontrado.fecha + "</li><li>Elemento: " + signoEncontrado.elemento + "</li><li>Regente: " + signoEncontrado.regente + "</li><li>Compatibilidad: " + signoEncontrado.compatibilidad + "</li><li>Descripcion: " + signoEncontrado.descripcion + "</li></ul>";
        listaSignos.appendChild(li);

    } else {
        var li = document.createElement("li");
        li.innerHTML = "<h2> Signo no encontrado </h2>";
        listaSignos.appendChild(li);
    }
}

// Función para mostrar el mes seleccionado
function mostrarMes() {
    var mesSeleccionado = document.getElementById("mes_nacimiento").value;
    var mesEncontrado = meses.find(mes => mes.nombre === mesSeleccionado);
    var listaMeses = document.getElementById("meses-lista");
    listaMeses.innerHTML = "";   //limpio la lista 

    if (mesEncontrado) {
        var li = document.createElement("li");
        li.innerHTML = "<h2>" + mesEncontrado.nombre + "</h2>" + "<h3> Dato Historico: </h3>" + "<ul><li>" + mesEncontrado.dato + "</li></ul>";
        listaMeses.appendChild(li);
    } else {
        var li = document.createElement("li");
        li.innerHTML = "<h2> Mes no encontrado <h2>";
        listaMeses.appendChild(li);
    }
}

// Función para seleccionar un país
var paisSeleccionado = ""; //Usamos una variable para almacenar el país seleccionado   

function seleccionarPais(img) {

    // Eliminar la imagen seleccionada anteriormente
    var banderas = document.querySelectorAll('.banderas img');
    banderas.forEach(bandera => bandera.classList.remove('selected'));

    // Agregar la imagen seleccionada
    img.classList.add('selected');
    paisSeleccionado = img.alt.toLowerCase();

    // Modificar el campo de texto   
    document.getElementById("pais").value = paisSeleccionado;

}

// Función para mostrar la información del país seleccionado
function mostrarPais() {
    var paisForm = document.getElementById("pais").value.toLowerCase();
    var paisEncontrado = paises_sudamericanos.find(pais => pais.nombre.toLowerCase() == paisForm);
    var listaPais = document.getElementById("paises-lista");
    listaPais.innerHTML = "";   //limpio la lista 


    if (paisEncontrado && paisEncontrado.ubicacion) {
        var li = document.createElement("li");
        li.innerHTML = "<h2>" + paisEncontrado.nombre + "</h2><ul><li>Superficie: " + paisEncontrado.superficie + "</li><li>Habitantes: " + paisEncontrado.habitantes + "</li><li>Capital: " + paisEncontrado.capital + "</li><li>Idioma: " + paisEncontrado.idioma + "</li><li>Moneda: " + paisEncontrado.moneda + "</li><li>Hora: " + paisEncontrado.hora + "</li><li>Dominio: " + paisEncontrado.dominio + "</li></ul>";

        // Crear el iframe y añadirlo al elemento de la lista
        var iframe = document.createElement("iframe");
        iframe.src = paisEncontrado.ubicacion;
        iframe.width = "";
        iframe.height = "";
        iframe.style.border = "";
        iframe.allowFullscreen = "";
        iframe.loading = "lazy";
        iframe.referrerPolicy = "no-referrer-when-downgrade";
        

        li.appendChild(iframe);
        listaPais.appendChild(li);
    } else {
        var li = document.createElement("li");
        li.innerHTML = "<h2> Pais no encontrado </h2>";
        listaPais.appendChild(li);
    }






}

