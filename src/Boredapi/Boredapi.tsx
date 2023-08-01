
///{"activity":"Learn how to write in shorthand","type":"education","participants":1,"price":0,"link":"","key":"6778219","accessibility":0.1}
///Используя хуки useState и useEffect реализовать компонент, который получает и отображает даннве с сервера https://www.boredapi.com/api/activity

import { useEffect, useState } from "react";



export default function Boredapi():JSX.Element{

    const[action,setUrl] = useState("");
    const serviseUrl:string = "https://www.boredapi.com/api/activity";

    function setBoredapi():void{

        fetch(serviseUrl)
        .then((response:Response)=>response.json())
        .then((res)=>
        {
            const activity = res.activity;
        setUrl(activity);
    });

    }





    useEffect(()=>{setBoredapi()}, []);

    return (

<>
<h1>Do this: {action}</h1>
</>

    );
}