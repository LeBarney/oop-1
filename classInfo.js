class Person{
  constructor(firstName, lastName, age, languages){
    this.firstName = firstName
    this.lastName = lastName
    this.age = age
    this.languages = languages
  }
  printInfo(){                                     // méthode pour afficher l'identité
    console.log(`first name: ${this.firstName}`)
    console.log(`last name: ${this.lastName}`)
    console.log(`age: ${this.age}`)
    console.log(`languages:`)
    person.languages.forEach((elem) => {
    console.log(`\t${elem}`)
  })
  }
  canVote(){                                        // méthode pour établir la majorité ou non
    if(this.age < 18){
    return false;
  }
  else{
    return true;
  }
  }
  mostSkilledDev(person){                             // méthode pour établir qui connaît le plus de languages
  if(this.languages.length > person.languages.length){
    return this.firstName;
  }
  if(this.languages.length < person.languages.length){
    return person.firstName;
  }
  if(this.languages.length === person.languages.length){
    return "draw";
  }
  }
}

const alice = new Person('Alice', 'Liddell', 28, ['C', 'Klingon'])
const bob = new Person('Bob', 'Lemon', 30, ['JavaScript', 'COBOL', 'Galka'])
const charlie = new Person('Charlie', 'Charlot', 8, ['C#', 'HTML', 'Hume'])

