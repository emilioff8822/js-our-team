//  milestone 0 Creazione dell'array 'team' contenente gli oggetti che rappresentano i membri del team
const team = [
  {
    nome: "wayne barnett",
    ruolo: "founder & ceo",
    immagine: "wayne-barnett-founder-ceo.jpg"
  },
  {
    nome: "angela caroll",
    ruolo: "chief editor",
    immagine: "angela-caroll-chief-editor.jpg"
  },
  {
    nome: "walter gordon",
    ruolo: "office manager",
    immagine: "walter-gordon-office-manager.jpg"
  },
  {
    nome: "angela lopez",
    ruolo: "social media manager",
    immagine: "angela-lopez-social-media-manager.jpg"
  },
  {
    nome: "scott estrada",
    ruolo: "developer",
    immagine: "scott-estrada-developer.jpg"
  },
  {
    nome: "barbara ramos",
    ruolo: "graphic designer",
    immagine: "barbara-ramos-graphic-designer.jpg"
  }
]

//bonus

const teamContainer = document.getElementById("team-container");

  // creo di un elemento <div> per la card del membro e aggiungo la classe 'member-card'

for (let member of team) {
  const memberCard = document.createElement("div");
  memberCard.classList.add("member-card");
  


  // creo degli elementi <p>  e img

  const memberName = document.createElement ("p");
  const memberRole = document.createElement ("p");
  const memberImage = document.createElement ("img");

  // inserisco al loro interno i dati dell'array team

  memberName.innerHTML= 'Nome: ' + member.nome ;
  memberRole.innerHTML= 'Ruolo: ' + member.ruolo;
  memberImage.src = 'img/' + member.immagine;

//aggiungo p e img alla card del membro

memberCard.appendChild(memberName);
memberCard.appendChild(memberRole);
memberCard.appendChild(memberImage);

  // Aggiungo della card del membro al container nel DOM

  teamContainer.appendChild(memberCard);



}















/*

// MILESTONE 1: Stampa su console delle informazioni di nome, ruolo e foto

for (let member of team) {

  console.log(`Nome: ${member.nome}, Ruolo: ${member.ruolo}, Immagine: ${member.immagine}`);


}

// MILESTONE 2: Stampa delle informazioni su DOM sotto forma di stringhe

const teamContainer = document.getElementById("team-container");

for (let member of team) {

  const memberInfo = document.createElement("p");
  memberInfo.innerHTML = ' Nome :' + member.nome + ', Ruolo :' + member.ruolo + ' , Immagine : <img src"' +member.immagine + '"alt"' +member.nome +'">';

teamContainer.appendChild((memberInfo));

}



*/



