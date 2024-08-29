let pronoun = ['the', 'our'];
let adj = ['great', 'big'];
let noun = ['jogger', 'racoon'];

let extenciones = [".com ", ".net ", ".us", ".io"];
let generator = [];


for (let i = 0; i < pronoun.length; i++) {
  for (let j = 0; j < adj.length; j++) {
    for (let k = 0; k < noun.length; k++) {
      for (let p = 0; p < extenciones.length; p++) {

        let combination = pronoun[i] + adj[j] + noun[k] + extenciones[p];
        generator.push(combination)
      }

    }
  }
}
console.log(generator)

