function creacion() {
    let longitud = document.getElementById('triangulo').value;
    let res = ' ';
    let piramide = ' ';

    for (i = 0; i < longitud; i++) {
        piramide += "#";
        res += "<p>" + piramide + "</p>";
    }
    document.getElementById("linea").innerHTML = res;
}