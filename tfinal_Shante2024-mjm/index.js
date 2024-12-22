let shante = document.getElementById("shante");
let animacion = setInterval(cambiar_imagen, 50);
let gravedad = setInterval(caer, 50);
let velocidadCaida = 2;
let num_imagen = 0;
let x = 0;
let y = 0;

function cambiar_imagen() {
  num_imagen = num_imagen + 1;
  let direc;
  if (num_imagen > 15) {
    num_imagen = 1;
  }
  direc = "img/shante/Shante_" + num_imagen + ".png";
  shante.setAttribute("src", direc);
}

document.addEventListener("keydown", mover);
function mover(event) {
  console.log(event.keyCode);

  const shanteWidth = shante.offsetWidth;
  const shanteHeight = shante.offsetHeight;

  if (event.keyCode == 68) {
    if (x + shanteWidth < window.innerWidth) {
      console.log("Me moveré 5 pixeles a la derecha");
      x = x + 5;
    }
  }
  if (event.keyCode == 65) {
    if (x > 0) {
      console.log("Me moveré 5 pixeles a la izquierda");
      x = x - 5;
    }
  }
  if (event.keyCode == 83) {
    if (y + shanteHeight < window.innerHeight) {
      console.log("Me moveré 5 pixeles a la abajo");
      y = y + 5;
    }
  }
  if (event.keyCode == 87) {
    if (y > 0) {
      console.log("Me moveré 5 pixeles a la arriba");
      y = y - 8;
    }
  }
  shante.style.left = x + "px";
  shante.style.top = y + "px";
}


function caer() {
    const shanteHeight = shante.offsetHeight;


    if (y + shanteHeight < window.innerHeight) {
        y = y + velocidadCaida;
    } else {
        y = window.innerHeight - shanteHeight;
    }


    shante.style.top = y + "px";
}
