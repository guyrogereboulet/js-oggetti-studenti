$(document).ready(function () {

  // Creare un oggetto che descriva uno studente con le
  // seguenti proprietà: nome, cognome e età. Stampare a
  // schermo attraverso il for in tutte le proprietà

  var studente = {
    "nome" : "Guy",
    "cognome" : "Eboulet",
    "eta" : "32",
  };

  for (var key in studente) {
    console.log(studente[key]);
  }

  // Creare un array di oggetti di studenti. Ciclare su tutti gli
  // studenti e stampare per ognuno nome e cognome

  var studenti = [
    {
      "nome" : "Guy",
      "cognome" : "Eboulet",
      "eta" : "32",
    },
    {
      "nome" : "Anna",
      "cognome" : "Barbieri",
      "eta" : "30",
    },
    {
      "nome" : "Jessica",
      "cognome" : "Defusco",
      "eta" : "26",
    },
    {
      "nome" : "Giacomo",
      "cognome" : "Anselmi",
      "eta" : "25",
    },
    {
      "nome" : "Enzo",
      "cognome" : "Panni",
      "eta" : "32",
    },
  ]

  // Dare la possibilità all’utente attraverso 3 prompt di
  // aggiungere un nuovo oggetto studente inserendo
  // nell’ordine: nome, cognome e età.

  var nome = prompt("Inserisci il tuo nome");
  var cognome = prompt("Inserisci il tuo cognome");
  var eta = prompt("Inserisci la tua eta");

  var studenteVuoto = {
    "nome" : nome,
    "cognome" : cognome,
    "eta" : eta,
  };

  studenti.push(studenteVuoto);
  console.log(studenti);


  for (var i = 0; i < studenti.length; i++) {
    var result = studenti[i];
    console.log(result);
  }

  $(".text").append(studenti.toString());




});
