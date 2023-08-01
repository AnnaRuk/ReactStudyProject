
import styles from './PetRecord.module.css';


type Props = {
    id: number,
    petName: string,
    additionalInfo: string,
    dysplayInfo: boolean
    color?:string
};



// interface Pet = {
//     id: number,
//     petName: string,
//     additionalInfo: string,
//     dysplayInfo: boolean
//     color?:string
// };

export default function PetRecord(props:Props):JSX.Element{
const{id,petName,additionalInfo,dysplayInfo,color} = props;

let additionalInfoAboutPet = "";

// eslint-disable-next-line @typescript-eslint/no-unused-expressions
(dysplayInfo)?additionalInfo:"sorry error";

// if (dysplayInfo){

//    additionalInfoAboutPet = additionalInfo;

// } else 
// {additionalInfoAboutPet = "sorry error";
// }

    return(

<>
<div className={styles.title}>
<h1 >Pet {id}</h1>
<h2 style={{backgroundColor:color,fontSize:'30px'}}>{petName}</h2>
<h3>{additionalInfoAboutPet}</h3>
</div>

</>

    )
}