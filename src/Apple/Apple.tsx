import { useState } from "react";

export default function Apple():JSX.Element{


    const[apple, setApple] = useState<string>('apple');
    const[appleButton, setAppleButton] = useState<string>('APPLE CLICK');
    
    function eatApple():void{

        if(apple == 'apple'){
            setApple('stub');
        setAppleButton('DONE');
        } else {
            setApple('apple');
            setAppleButton('APPLE CLICK');
        }
        
    }


    return (
        <>
            <button type="button" onClick={eatApple}>{appleButton}</button>
            <h2>{apple}</h2>
           
        </>
    );

}