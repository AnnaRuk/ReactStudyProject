import { useState } from "react";

export default function Pizza():JSX.Element {

    const[counterTomato,setCounterTomato] = useState(0);
    function addTomato():void{
     setCounterTomato(counterTomato+1);
    }

    const[counterCheese,setCounterCheese] = useState(0);
    function addCheese():void{
     setCounterCheese(counterCheese+1);
    }

    
    const[counterSalamy,setCounterSalamy] = useState(0);
    function addSalamy():void{
     setCounterSalamy(counterSalamy+1);
    }


    type Pizza = {
        tomato: number,
        cheese: number,
        salamy: number
    }
   
function createPizza(counterTomato:number, counterCheese:number, counterSalamy:number){

    let pizza:Pizza  = {
        tomato: counterTomato,
        cheese: counterCheese,
        salamy: counterSalamy
    }
   console.log(pizza);
    return pizza;

}

let pizzaMargaritta:Pizza  = createPizza(counterTomato, counterCheese, counterSalamy);



return (
    <>
    <h2>Create Pizza:</h2>
    <button type="button" onClick={addTomato}>Add tomato</button>
    <h2>Tomato quality: {counterTomato}</h2>
    <button type="button" onClick={addCheese}>Add cheese</button>
    <h2>Cheese quality: {counterCheese}</h2>
    <button type="button" onClick={addSalamy}>Add salamy</button>
    <h2>Salamy quality: {counterSalamy} </h2>

    <p> 'Your pizza Margarita with additional: Tomato {pizzaMargaritta.tomato} pieces, Cheese 
{pizzaMargaritta.cheese} pieces Salamy {pizzaMargaritta.salamy} pieces;</p>
<span>{}</span>
   
</>
);
}






// Разработать страницу заказа пиццы. На странице должно быть несколько кнопок типа 
// “Добавить колбасу”, “Добавить томат”, “Добавить сыр” и т.д. На странице должна
//  выводится строка с текущим содержанием пиццы.

// * Для тех кому хочется посложнее: 
// должен создаваться объект “пицца” {размер, [ингредиент 1, ингредиент 2, ингредиент 3] , цена}
