const name = 'cylus'
const age = 12
const hairColor = 'brown'
const eyeColor = 'brown'

console.log(`${name} is ${age} years old and has ${hairColor} hair color with ${eyeColor} eyes.`)

if (age > 12 && age < 18) {
  console.log(`${name} is a teenager`)
} else if (age > 18) {
  console.log(`${name} is an adult`)
} else {
  console.log(`${name} is still my baby`)
}

if (hairColor === 'red') {
  console.log(`${name} is a ginger`)
} else if (hairColor === 'brown' || hairColor === 'black') {
  console.log(`${name} is a brunette`)
} else if (hairColor === 'blonde') {
  console.log(`${name} is a blonde`)
}