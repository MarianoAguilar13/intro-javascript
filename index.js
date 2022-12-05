import heroes from "./heroes.js";
import fetch from "node-fetch";

function puntoUno() {
  const getHeroeByIdAsync = (id) =>
    new Promise((resolve, reject) => {
      //con el verificador voy a evaluar se resolvio o no la promesa
      //si hubo un error seguira en falso y voy a devolver el error
      //en el catch
      const verificador = false;
      for (const heroe of heroes) {
        if (heroe.id == id) {
          resolve({
            error: false,
            value: heroe,
          });
          verificador = true;
        }
      }

      if (verificador == false) {
        reject({
          error: true,
          message: "No se encontro el heroe con el id evaluado",
        });
      }
    });

  console.log(
    "Busqueda con el id correcto (3) y el segundo con un id incorrecto (8):"
  );
  getHeroeByIdAsync(3)
    .then((result) => console.log("Héroe encontrado: ", result.value))
    .catch((err) => console.error("ocurrió un error: ", err.message));

  getHeroeByIdAsync(8)
    .then((result) => console.log("Héroe encontrado: ", result.value))
    .catch((err) => console.error("ocurrió un error: ", err.message));
}

function puntoDos() {
  //npm install node-fetch porque tengo la version 16
  const promesa = fetch("https://api.github.com/users/manishmshiva");

  promesa.then((res) => {
    res
      .json()
      .then((resultado) => {
        console.log("resultado de la respuesta al fetch: ", resultado);
      })
      .catch((err) => {
        console.log(err);
      });
  });
}

function puntoTres() {
  const getName = async () => {
    const promise = fetch("https://api.github.com/users/manishmshiva");

    await promise.then((res) => {
      res
        .json()
        .then((resultado) => {
          console.log("nombre del usuario: ", resultado.name);
        })
        .catch((err) => {
          console.log(err);
        });
    });
  };

  getName();
}

function main() {
  puntoUno();
  puntoDos();
  puntoTres();
}

main();
