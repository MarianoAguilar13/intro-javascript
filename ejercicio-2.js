function puntoUno() {
  let celular = {
    marca: "Samsung",
    color: "Azul",
    precio: 19000,
    anio_creacion: 2020,
  };

  console.log("precio: ", celular.precio);

  celular.stock = true;

  celular.anio_creacion = 2017;

  //elimino la key marca
  delete celular.marca;

  //me guardo los valores de las keys para mostrar
  const valuesOfKeys = [];

  for (const keys of Object.keys(celular)) {
    valuesOfKeys.push(celular[keys]);
  }
  console.log(valuesOfKeys);
}

function puntoDos() {
  const arreglo = [1, 2, 3, 4];
  //spread operator ...
  let arreglo_dos = [...arreglo, 5];
  console.log("arreglo dos: ", arreglo_dos);

  let arreglo_tres = arreglo_dos.map((number) => {
    return number * 5;
  });
  console.log("arreglo tres: ", arreglo_tres);
}

function puntoTres() {
  const person = {
    name: "pepe",
    age: 26,
    hobbies: ["chess", "running", "basket"],
  };

  const { name: nombre } = person;
  const { age: edad } = person;

  console.log("nombre: ", nombre);
  console.log("persona nombre: ", person.name);
  console.log("edad: ", edad);
  console.log("persona edad: ", person.age);
}

function main() {
  puntoUno();
  puntoDos();
  puntoTres();
}

main();
