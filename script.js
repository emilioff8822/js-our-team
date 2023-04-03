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
];

// MILESTONE 1: Stampa su console delle informazioni di nome, ruolo e foto

for (let member of team) {

  console.log(`Nome: ${member.nome}, Ruolo: ${member.ruolo}, Immagine: ${member.immagine}`);


}