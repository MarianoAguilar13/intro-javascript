import heroes from "./heroes.js";
import fetch from "node-fetch";

function puntoUno() {
  const getHeroeByIdAsync = (id) =>
    new Promise((resolve, reject) => {
      const getHeroeById = (id) => heroes.find((heroe) => heroe.id === id);

      if (getHeroeById(id)) {
        resolve({
          error: false,
          value: getHeroeById(id).name,
        });
      } else {
        reject({
          error: true,
          message: "No se encontro el heroe con el id evaluado",
        });
      }
    });

  console.log("Busqueda con el id correcto (3):");
  getHeroeByIdAsync(3)
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
        console.log(
          "Punto 2 --> resultado de la respuesta al fetch: ",
          resultado
        );
      })
      .catch((err) => {
        console.log(err);
      });
  });
}

//modificando para hacer un commit

function puntoTres() {
  const getName = async () => {
    const promise = fetch("https://api.github.com/users/manishmshiva");

    try {
      const res = await promise;
      //console.log("nombre del usuario: ", resultado.name);
      const resultado = await res.json();
      console.log("Punto 3 --> nombre del usuario: ", resultado.name);
    } catch (err) {
      alert(err);
    }
  };

  getName();
}

function main() {
  puntoUno();
  puntoDos();
  puntoTres();
}

main();
