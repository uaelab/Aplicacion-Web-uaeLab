
window.onload = () => {

  document.querySelector(".arrow-btn").addEventListener("click", () => {
    window.open(`../html/biblioteca.html`, "_self");
  });

  const guardar = document.getElementById("guardar");

  guardar.addEventListener("click", () => {

    const nombre = document.getElementById("nombre").value;
    const categoria = document.getElementById("categoria").value;
    const año = document.getElementById("año").value;
    
    // Select your input type file and store it in a variable
    const input = document.getElementById('fileID');

    const dataFile = new FormData();
    dataFile.append('file', input.files[0]);

    //console.log(nombre)
    if (nombre != '' && categoria != '' && año != '' && input.files[0].name != '') {


      fetch("http://localhost:3000/api/biblioteca/files/add", { // Your POST endpoint
        method: 'POST',
        body: dataFile // This is your file object
      }).then(response => response.json())
        .then(data => {
          console.log('archivo subido a drive');

          fetch("http://localhost:3000/api/biblioteca/", { // Your POST endpoint
            method: 'POST',
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ 'nombre': nombre, 
                                   'categoria': categoria,
                                   'año': año,
                                   'url': data.webViewLink})
          }).then(response => response.json())
            .then(data => {
              window.open('../html/biblioteca.html','_self');
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