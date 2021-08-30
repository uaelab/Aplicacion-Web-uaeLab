
window.onload = () => {


  document.querySelector(".menu-btn").addEventListener("click", () => {
    document.querySelector(".nav-menu").classList.toggle("show");
  })




  const stringToHTML = (s) => {
    const parser = new DOMParser();
    const doc = parser.parseFromString(s, 'text/html');
    return doc.body.firstChild;
  }

  const renderItem = (item) => {


    const elemento = stringToHTML(`<div id="${item._id}">
                                    <h2> ${item.nombre} </h2>  
                                    <p> ${item.categoria} </p>
                                   </div>`);

    
      
      elemento.addEventListener("click", () => {
        

        Swal.fire({
          title: `${item.nombre}`,
          showDenyButton: true,
          showCancelButton: true,
          showCloseButton: true,
          confirmButtonText: `Editar`,
          denyButtonText: `Eliminar`,
          cancelButtonText: 'Cancelar',
          footer: `<a class="url" href="${item.url}" target="_blank">Ver Matrial</a>`,
        }).then((result) => {
          console.log(result);
          /* Read more about isConfirmed, isDenied below */
          if (result.isConfirmed) {
            window.open(`../html/materialBiblioteca.html?material=${item._id}`, "_self")
          } else if (result.isDenied) {
            Swal.fire('Material eliminado', '', 'info')
          } 
        })

      })
                                   
    return elemento;
  }



  const submit = document.getElementById("aceptar");

  submit.addEventListener("click", () => {
    const valores = document.getElementById("busc").value;
    window.open(`../html/bibliotecabuscar.html?nombre=${valores}`, "_self");
  });


  fetch(`https://serverless-julio458h-gmailcom.vercel.app/api/biblioteca/`)
    .then(response => response.json())
    .then(data => {

      const biblio = document.getElementById('cardsID');
      const template = data.map(renderItem);
      template.forEach(element => {

        biblio.appendChild(element)

      });

      
      

    })

    


}