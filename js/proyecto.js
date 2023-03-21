
function ver(n) {
         document.getElementById("subseccion"+n).style.display="block"
          }
function ocultar(n) {
         document.getElementById("subseccion"+n).style.display="none"
         }

function openwindow() {
           m=window.open("Menú_Desplegable.html");

         }


function mensajes(estado,elemento) {//parametros recibidos
	var intervalo=0;//varibles de tiempo
	var tiempo=0;
	mensaje = document.getElementById(elemento);//recepcion del elemento
if(estado == "mostrar" ) {//comparacion para mostrar
    mensaje.style.background='';//inicializacion de color
	mensaje.style.display = 'block';//mostrar
        for(tiempo=0;tiempo<3;tiempo++){//ciclo de tiempo enciende/apaga
            intervalo += 200;//valor de intervalo
                setTimeout("mensaje.className = '"+elemento+2+"';",intervalo);//llamada a la clase 2
            intervalo += 200;
                setTimeout("mensaje.className = '"+elemento+"';",intervalo);//llamada a la clase normal
                                       }
} else {

for (tiempo=0;tiempo<15;tiempo++) {//ciclo para cerrar
cerrando=tiempo * 100;//tiempo para desbanecer
setTimeout('mensaje.style.background = "#'+[tiempo]+[tiempo]+[tiempo]+'";', cerrando);//estilo del color mientras cierra
       }
        intervalo=intervalo+1;//tiempo para cerrar
            setTimeout("mensaje.style.display = 'none';",1000); //ocultar
        }
	}
/**
 * Función para obtener una cookie
 * @param  {String} name Recibe el nombre de la cookie
 * @return {String}      Devuelve el valor de la cookie en un string o null
 */
 function getCookie(name){
    var cname = name + "=";
    var dc = document.cookie;
    if (dc.length > 0) {
        begin = dc.indexOf(cname);
        if (begin != -1) {
            begin += cname.length;
            end = dc.indexOf(";", begin);
            if (end == -1) end = dc.length;
            return decodeURIComponent(dc.substring(begin, end));
        }
    }
    return null;
}

/**
 * Establece una cookie mediante los parámetros pasados a la función
 * @param {String} name     Nombre de la cookie.
 * @param {String} value    Valor de las cookies.
 * @param {Date} expires  Fecha de caducidad de la cookie (por defecto, el
 *                          final de la sesión).
 * @param {String} path     Camino donde se aplica esta cookie, por defecto
 *                          el dominio del documento que realiza la llamada.
 * @param {String} domain   Dominio para el cual la cookie es válida (por
 *                          defecto, el del documento que hace la llamada).
 * @param {Bool} secure     Indica si la trasnmisión de la cookie requiere una
 *                          transmisión segura (HTTPS).
 */
function setCookie(name, value, expires, path, domain, secure) {
    // TOFIX → toGMTString() is deprecated, use toUTCString()
    document.cookie = name + "=" + encodeURIComponent(value) +
    ((expires == null) ? "" : "; expires=" + expires.toGMTString()) +
    ((path == null) ? "" : "; path=" + path) +
    ((domain == null) ? "" : "; domain=" + domain) +
    ((secure == null) ? "" : "; secure");
}

/**
 * Borrar Cookie con pasando el nombre, path y domain. Estos dos últimos
 * se considerarán null si no se han pasado.
 * @param  {String} name   Nombre de la cookie.
 * @param  {String} path   Camino de la cookie, el mismo camino que el
 *                         especificado al crear la cookie).
 * @param  {String} domain Dominio de la cookie, el mismo dominio que el
 *                         especificado al crear la cookie)
 */
function delCookie (name,path,domain) {
  if (getCookie(name)) {
    document.cookie = name + "=" +
    ((path == null) ? "" : "; path=" + path) +
    ((domain == null) ? "" : "; domain=" + domain) +
    "; expires=Thu, 01-Jan-70 00:00:01 GMT";
  }
}
window.onload = function () {
    var c = getCookie('contador');

    if (c === null) {
        setCookie('contador', 1);
    } else {
        setCookie('contador', ++c);
    }

    var pintar = document.getElementById('resultado');
    pintar.innerHTML = ' Contador de Visitas →  ' + c;
}

function muestraOculta(id){
    var elemento= document.getElementById('contenidos_'+id);
    var enlace = document.getElementById('enlace_'+id);

    if (elemento.style.display=="" || elemento.style.display=="block"){
        elemento.style.display="none";
        enlace.innerHTML='Mostrar contenido';
    }
    else{
        elemento.style.display="block";
        enlace.innerHTML='Ocultar contenido';
    }
}