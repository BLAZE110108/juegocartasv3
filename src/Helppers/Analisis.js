const Analisis = ({ cartas }) => {
  console.log("Analisando...");
  console.log(`Tamaño json: ${cartas.length}`);
  const arrayDeck = [
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "ACE",
    "QUEEN",
    "JACK",
    "KING",
  ];
  let fase1 = [];
  let availableNumbers = [];
  let findNumbers = [];
  let baseFindNumbers = [];
  let deleteable = 0;

  if (cartas !== undefined) {
    for (let index = 0; index < 13; index++) {
      fase1 = cartas.filter((carta) => carta.value == arrayDeck[index]);
      if (fase1.length == 0) {
        availableNumbers.push(arrayDeck[index]);
      } else {
        findNumbers.push(arrayDeck[index]);
      }
    }
    baseFindNumbers = findNumbers;

    console.log("****************CONJUNTO 1***********************");
    const [conjunto1, findNumbers1] = ciclo(findNumbers, { cartas });
    findNumbers = findNumbers1;
   
    console.log(conjunto1);
    console.log("****************CONJUNTO 2***********************");
    console.log(findNumbers);
    const [conjunto2, findNumbers2] = ciclo(findNumbers, { cartas });
    findNumbers = findNumbers2;
    console.log(conjunto2);
    console.log("****************CONJUNTO 3***********************");
    console.log(findNumbers);
    const [conjunto3, findNumbers3] = ciclo(findNumbers, { cartas });
    findNumbers = findNumbers3;
    console.log(conjunto3);
    console.log("Saliendo del analisis...");

    if(findNumbers.length === 0){
        findNumbers.splice(0, findNumbers.length);
        for (let index = 0; index < baseFindNumbers.length; index++) {
            fase1 = cartas.filter((carta) => carta.value === baseFindNumbers[index]);
            if (fase1.length < 3) {
              findNumbers.push(baseFindNumbers[index]);
            }
        }
    }
    
    console.log("FindNumber.......");
    console.log(findNumbers);

    let x = Math.floor(Math.random() * findNumbers.length);
    deleteable = findNumbers[x];
    console.log(
      `deleteable: ${deleteable} Position: ${x} tamaño: ${findNumbers.length}`
    );
    let pjCount = conjunto1.length + conjunto2.length + conjunto3.length;

    const tempCard = [
      { name: "conjunto1", value: conjunto1.map((p) => p) },
      { name: "conjunto2", value: conjunto2.map((p) => p) },
      { name: "conjunto3", value: conjunto3.map((p) => p) },
      { name: "Deleteable", value: deleteable },
      { name: "Winner", value: pjCount },
    ];

    console.log(tempCard);
    return new Promise((resolve, reject) => {
      resolve(tempCard);
    });
  } else {
    let msg = "Error de ejecucion, posiblemente no hay cartas";
    console.log(msg);
    return new Promise((resolve, reject) => {
      reject(msg);
    });
  }
};

const ciclo = (findNumbers, { cartas }) => {
  console.log("desde el ciclo");
  let fase1 = [];
  let contLen = 1;
  let valueToDelete = "-1";
  let conjunto = [];
  console.log(findNumbers);
  for (let index = 0; index < findNumbers.length; index++) {
    fase1 = cartas.filter((carta) => carta.value === findNumbers[index]);
    console.log(
      `VISUALIZADOR- tamañoF1: ${fase1.length}, contLen: ${contLen}, valores disponibles ${findNumbers[index]}`
    );
    if (fase1.length > contLen) {
      conjunto = cartas
        .filter((carta) => carta.value === findNumbers[index])
        .map((carta) => carta.code);
      contLen = fase1.length;
      valueToDelete = findNumbers[index];
    }
  }
  console.log(`Valor a eliminar ${valueToDelete}`);
  if (valueToDelete !== "-1") {
    findNumbers = findNumbers.filter(function (item) {
      return item !== valueToDelete;
    });
  }
  return [conjunto, findNumbers];
};

export default Analisis;
