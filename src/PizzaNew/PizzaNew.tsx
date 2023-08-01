
import { useState } from 'react';
import styles from './PizzaNew.module.css';
import pizzaPictures from './pizza.jpg';


export default function PizzaNew():JSX.Element {
    const init = "";

 let[ingredient,setPizzaString] = useState<string>(init);
 console.log(ingredient);

    function tomatoAdd():void{
        setPizzaString(`${ingredient}, tomato`);
    }
    console.log(ingredient);

    function salamyAdd():void{
        setPizzaString(ingredient + ', salamy');
    }
    console.log(ingredient);

    function cheeseAdd():void{
        setPizzaString(`${ingredient}, cheese`);
    }
    console.log(ingredient);

  


   function createPizza():void{
    const pizzaString = ingredient;
   }
 ///TODO otobrazit na ekran
   function clearOrder():void{
    ingredient = init;
    console.log(ingredient);
   
   }
   
    return (

<>
<img className={styles.pizzaPictures} src={pizzaPictures} alt="pictures of pizza" />
<button type="button" onClick={tomatoAdd}>Tomato</button>
<button type="button" onClick={salamyAdd}>Salamy</button>
<button type="button" onClick={cheeseAdd}>Cheese</button>

<div>
    <button type="button" onClick={createPizza}>Create Pizza</button>
<p id="pizzaString">Your pizza: {ingredient}</p>
<button type="button" onClick={clearOrder}>Clear Order</button>
<p id="pizzaString">Your pizza: </p>
</div>

</>

    );

}