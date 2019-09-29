let quoteString = '"Failure is simply the opportunity to begin again this time more intelligently".'

let upperCaseString = quoteString.toUpperCase()

console.log(`Upper case string is: ${upperCaseString}`)

 

let authorString = "Henry Ford"

let completeString = quoteString + "-" + " " + authorString

console.log(completeString)

 

let secondQuote = ' Talent is cheaper than table salt. What separates the talented individual from the successful one is a lot of hard work. - Stephen King'

let lowerCaseString = secondQuote.toLowerCase()

console.log(`Lower case string is: ${lowerCaseString}`)

 

let letter = secondQuote.charAt(3)

console.log(`Character in quote at location 3 is: ${letter}`)


let findString = secondQuote.slice(36,121)

console.log(`The new string is: ${findString}`)