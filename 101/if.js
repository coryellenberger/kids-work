const name = 'ryan'
const age = 16
const hairColor = 'red'
const eyeColor = 'blue'

console.log(`${name} is ${age} years old and has ${hairColor} hair color with ${eyeColor} eye color.`)

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