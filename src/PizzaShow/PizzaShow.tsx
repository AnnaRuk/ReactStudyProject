

type Props = {
    msg:string,
    tomato:number
};

 

export default function PizzaShow(p:Props):JSX.Element{

    let res:string;
   if(p.msg == 'hello') {
    res="Empty";
   } else {
    res = p.msg + " " + p.tomato;
    // res=String(p.tomato); 

   }

  console.log(res);
   
   return(<>
    
    <h1>Hello your pizza: {res}</h1>
    
    
    </>);
}