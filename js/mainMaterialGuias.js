document.querySelector(".arrow-btn").addEventListener("click", () => {
  window.open(`../html/guias.html?asignatura=${asignatura}&lab=${lab}`,"_self");
});

window.onload = () => {

  //Obteniendo valores de la url     
  const valores = window.location.search;

  //Creamos la instancia
  const urlParams = new URLSearchParams(valores);

  //Accedemos a los valores
  window.lab = urlParams.get('lab');

  window.asignatura = urlParams.get('asignatura');

  const guardar = document.getElementById("guardar");

  guardar.addEventListener("click", () => {

    const nombre = document.getElementById("nombre").value;
    
    // Select your input type file and store it in a variable
    const input = document.getElementById('fileID');

    const dataFile = new FormData();
    dataFile.append('file', input.files[0]);

    //console.log(nombre)
    if (nombre != '' && input.files[0].name != '') {


      fetch("http://localhost:3000/api/guias/files/add", { // Your POST endpoint
        method: 'POST',
        body: dataFile // This is your file object
      }).then(response => response.json())
        .then(data => {
          console.log('archivo subido a drive');

          fetch("http://localhost:3000/api/guias/", { // Your POST endpoint
            method: 'POST',
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ 'laboratorio_id': lab,
                                   'nombre': nombre,
                                   'url': data.webViewLink})
          }).then(response => response.json())
            .then(data => {
              window.open(`../html/guias.html?asignatura=${asignatura}&lab=${lab}`,'_self');
            }).catch(error => console.log(error))

        })
        .catch(
          error => console.log(error) // Handle the error response object
        );

    } else {
      alert('Por favor completar todos los campos!');
    }
  });
  
}