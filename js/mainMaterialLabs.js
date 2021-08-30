document.querySelector(".arrow-btn").addEventListener("click", () => {
  window.open(`../html/labs.html?asignatura=${asignatura}`, "_self");
});

window.onload = () => {


  //Obteniendo valores de la url     
  const valores = window.location.search;

  //Creamos la instancia
  const urlParams = new URLSearchParams(valores);

  //Accedemos a los valores
  window.asignatura = urlParams.get('asignatura');


  guardar.addEventListener("click", () => {


    const nombre = document.getElementById('nombre').value;
    const guardar = document.getElementById('guardar')

    if (nombre != '') {

      fetch('http://localhost:3000/api/laboratorios/', {
        method: 'POST',
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          "asignatura_id": asignatura,
          "nombre": nombre
        })
      }).then(response => response.json())
        .then(data => {
          window.open(`../html/labs.html?asignatura=${asignatura}`, '_self');
        })
        .catch(error => console.log(error));

    } else {
      alert("Completar los campos correspondientes!")
    }


  })

}