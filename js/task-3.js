function checkForSpam(message) {
  let rezult= false;
  
  if ((message.toLowerCase().indexOf("spam") != -1) || (message.toLowerCase().indexOf("sale") != -1)) {
   rezult= true; 
  } 
  
  return rezult;
}


console.log(checkForSpam("Latest technology news")); // false
console.log(checkForSpam("JavaScript weekly newsletter")); // false
console.log(checkForSpam("Get best sale offers now!")); // true
console.log(checkForSpam("Amazing SalE, only tonight!")); // true
console.log(checkForSpam("Trust me, this is not a spam message")); // true
console.log(checkForSpam("Get rid of sPaM emails. Our book in on sale!")); // true
console.log(checkForSpam("[SPAM] How to earn fast money?")); // true