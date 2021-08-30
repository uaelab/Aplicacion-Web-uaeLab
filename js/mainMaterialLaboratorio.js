document.querySelector(".arrow-btn").addEventListener("click", () => {
  window.open(`../html/laboratorios.html`,"_self");
});

window.onload = () => {


  guardar.addEventListener("click", () => {

    const nombre = document.getElementById("nombre").value;
    const img = document.getElementById("img");
    /*const cbox1 = document.getElementById("cbox1").checked;
    const cbox2 = document.getElementById("cbox2").checked;
    const cbox3 = document.getElementById("cbox3").checked;
    const cbox4 = document.getElementById("cbox4").checked;
    const cbox5 = document.getElementById("cbox5").checked;
    const cbox6 = document.getElementById("cbox6").checked;
    const cbox7 = document.getElementById("cbox7").checked;
    const cbox8 = document.getElementById("cbox8").checked;
    const cbox9 = document.getElementById("cbox9").checked;
    */
    const guardar = document.getElementById("guardar");

    const dataFile = new FormData();
    dataFile.append('file', img.files[0]);

    //Creamos un array que almacenará los valores de los input "checked"
    var checked = [];
    //Recorremos todos los input checkbox con name = Colores y que se encuentren "checked"
    $("input[name='list']:checked").each(function () {
      //Mediante la función push agregamos al arreglo los values de los checkbox
      checked.push(($(this).attr("value")));
    });

    console.log(checked);

    //console.log(nombre)
    if (nombre != '' && img.files[0].name != '') {


      fetch("http://localhost:3000/api/asignaturas/files/add", { // Your POST endpoint
        method: 'POST',
        body: dataFile // This is your file object
      }).then(response => response.json())
        .then(data => {
          console.log('archivo subido a drive');

          fetch("http://localhost:3000/api/asignaturas/", { // Your POST endpoint
            method: 'POST',
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ 'nombre': nombre, 
                                   'carreras': checked,
                                   'img': data.thumbnailLink})
          }).then(response => response.json())
            .then(data => {
              window.open('../html/laboratorios.html','_self');
            }).catch(error => console.l3og(error))

        })
        .catch(
          error => console.log(error) // Handle the error response object
        );

    } else {
      alert('Por favor completar todos los campos!');
    }

    
  });
  
}