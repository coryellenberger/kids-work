/**
 * if the age is under 4 return false
 * if the age is over 18 return false
 * else the age is over 4 and under 18 return true
 */
function canHavePhone (age) {
  if (age > 18)
    return false
  if (age > 3)
    return true
  if (age < 3)
    return false
}













/**
 * DO NOT CHANGE - THIS IS THE TEST TO RUN AND VERIFY 'canHavePhone' IS WORKING
 */
let x = 1
let passed = true
while (x < 21) {
  const canHave = canHavePhone(x)
  console.log(`My ${x} year old ${canHave ? 'can' : 'cannot'} have a phone`)

  if ((x < 4 && canHave) || (x > 18 && canHave)) {
    passed = false
  }
  if ((x >= 4 && !canHave) && (x <= 18 && !canHave)) {
    passed = false
  }
  x++
}

if (passed) {
  console.log('PASSED')
} else {
  console.log('FAILED')
}