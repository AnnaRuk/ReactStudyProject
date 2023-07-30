
type Props = {
    id: number,
    petName: string,
    additionalInfo: string,
    dysplayInfo: boolean
};


export default function PetRecord(props:Props):JSX.Element{
const{id,petName,additionalInfo,dysplayInfo} = props;
let additionalInfoAboutPet = "";
if (dysplayInfo){

   additionalInfoAboutPet = additionalInfo;

} else 
{additionalInfoAboutPet = "sorry error";
}

    return(

<>
<h1>Pet {id}</h1>
<h2>{petName}</h2>
<h3>{additionalInfoAboutPet}</h3>


</>

    )
}