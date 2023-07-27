import { log } from "console";
import { useState } from "react";
 

export default function Counter(): JSX.Element {

   const[counter,setCounter] = useState(0);
   const[str,setStr] = useState("a");
   

   function addCount():void{
    setCounter(counter+1);
    setStr(str+'a');

   }

   // let counter: number = 0;

    // function addCount():void{
    //     counter++
    //     console.log(counter);
    // }

    return (
        <>
            <button id="buttonCounter" type="button" onClick={addCount}>Click Me</button>
            <h2>Counter value: {counter}</h2>
            <h2>Str value: {str}</h2>
        </>

    );

}
