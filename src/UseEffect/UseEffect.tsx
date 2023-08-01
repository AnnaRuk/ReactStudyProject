import { useEffect, useState } from "react";


///https://www.boredapi.com/api/activity
///{"activity":"Learn how to write in shorthand","type":"education","participants":1,"price":0,"link":"","key":"6778219","accessibility":0.1}
///Используя хуки useState и useEffect реализовать компонент, который получает и отображает даннве с сервера https://www.boredapi.com/api/activity

export default function UseEffect():JSX.Element{



//let url:string ='';
const[url,setUrl] = useState("");
const serviseUrl:string = 'https://dog.ceo/api/breeds/image/random';
function setImageUrl():void{
fetch(serviseUrl)
.then((res:Response)=>res.json())
.then((resultObj)=> {
      const message = resultObj.message;
      setUrl(message);
      
} );


}

useEffect(()=>{setImageUrl()}, []);


    return(
<>

<img style={{width:"100px"}} src={url} alt="Dog"></img>
</>

    );
}