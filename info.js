const alice = {
  firstName:'Alice',
  lastName:'Liddell',
  age: 28,
  languages: ['C', 'Klingon']
}

const bob = {
  firstName:'Bob',
  lastName:'Lemon',
  age: 30,
  languages: ['JavaScript', 'COBOL', 'Galka']
}

const charlie = {
  firstName:'Charlie',
  lastName:'Charlot',
  age: 8,
  languages: ['C#', 'HTML', 'Hume']
}

const printInfo = (person) => {
  
  console.log(`first name: ${person.firstName}`)
  console.log(`last name: ${person.lastName}`)
  console.log(`age: ${person.age}`)
  console.log(`languages:`)
  person.languages.forEach((elem) => {
    console.log(`\t${elem}`)
  })
}

const canVote = (person) => {
  if(person.age < 18){
    return false;
  }
  else{
    return true;
  }

}
const mostSkilledDev = (person, person2) => {
  if(person.languages.length > person2.languages.length){
    return person.firstName;
  }
  if(person.languages.length < person2.languages.length){
    return person2.firstName;
  }
  if(person.languages.length === person2.languages.length){
    return "draw";
  }

}

printInfo(alice)
printInfo(bob)
printInfo(charlie)

canVote(alice)
canVote(bob)
canVote(charlie)

