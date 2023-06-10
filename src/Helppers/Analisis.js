
const Analisis = ({cartas}) =>{
    console.log("Analisando...");
    console.log(cartas);
    const arrayDeck = [1,2,3,4,5,6,7,8,9,10,'ACE','QUEEN','JACK','KING']
    let fase1 = [];
    let availableNumbers = [];
    let findNumbers = [];
    let tempCard = [];
    let terna1 =[]
    let terna2 =[]
    for (let index = 0; index < 14; index++) {
        fase1 = cartas.filter((carta)=> carta.value == arrayDeck[index]);
        if (fase1.length == 0){
            availableNumbers.push(arrayDeck[index]);
        }else{
            findNumbers.push(arrayDeck[index]);
        }
        //const element = array[index]; 
    }
    if(terna1.length < 3){
        for (let index = 0; index < findNumbers.length; index++) {
            fase1 = cartas.filter((carta)=> carta.value == findNumbers[index]);
            if (fase1.length > 1){
                terna1 = cartas
                    .filter((carta)=> carta.value == findNumbers[index])
                    .map((carta) => carta.code);
                //setTerna1([...terna1, tempCard]);
            }
        }
    }
    if(terna2.length < 3){
        for (let index = 0; index < findNumbers.length; index++) {
            fase1 = cartas.filter((carta)=> carta.value == findNumbers[index]);
            if (fase1.length > 1){
                terna2 = cartas
                    .filter((carta)=> carta.value == findNumbers[index])
                    .map((carta) => carta.code);
                //setTerna1([...terna1, tempCard]);
            }
        }
    }
    
    console.log("Saliendo...");
    console.log(availableNumbers);
    console.log(findNumbers);
    console.log(terna1);
    console.log(terna2);
  
}








export default Analisis;