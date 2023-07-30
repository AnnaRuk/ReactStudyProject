import PetRecord from "../PetRecord/PetRecord";


export default function PetShow():JSX.Element{

    type Pet = {
        id: number,
        petName: string,
        additionalInfo: string,
        dysplayInfo: boolean
    }; 

  let cat:Pet={
      id: 1,
      petName: "Murka",
      additionalInfo: "Vegetarian_domestic",
      dysplayInfo: true
  }

  let dog:Pet={
    id: 2,
    petName: "Sharik",
    additionalInfo: "playful_stray",
    dysplayInfo: false
}

let bird:Pet={
    id: 3,
    petName: "Kesha",
    additionalInfo: "endangered_species",
    dysplayInfo: true
}

    return(
        <>
        <h1>Show pets</h1>
        <PetRecord 
        id={cat.id} 
        petName={cat.petName} 
        additionalInfo={cat.additionalInfo}
        dysplayInfo={cat.dysplayInfo} />

        <PetRecord 
        id={dog.id} 
        petName={dog.petName} 
        additionalInfo={dog.additionalInfo}
        dysplayInfo={dog.dysplayInfo} />

        <PetRecord 
        id={bird.id} 
        petName={bird.petName} 
        additionalInfo={bird.additionalInfo}
        dysplayInfo={bird.dysplayInfo} />
        </>
    );
}