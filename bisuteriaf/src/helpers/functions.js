const convertUppercaseFunction = (phrase) => {
   
    let splitPhrase = phrase.split(' ');
 
    let firstCapitalLetter = splitPhrase.filter((word) => word).map(palabra => {
       
       return `${palabra[0].toUpperCase()}${palabra.slice(1)} `;
 
    });
 
    return firstCapitalLetter.join('');
 
 }
 
 
 const functionToCutASentence = (phrase) => {
    const lengthPhrase = phrase.length ; 
 
    if( lengthPhrase > 28){
       
       return `${phrase.slice(0,28)}...`
       
    }
 
    return `${phrase}`;
 }
 
 
 const simplifyFirstAndLastName = (firtsName='', lastName='') => {
    const getFirstName = firtsName.split(" ");
 
    const getFirstLastName = lastName.split(" ");
 
    const getName = `${getFirstName[0][0]?.toUpperCase()}${getFirstName[0]?.substring(1)} ${getFirstLastName[0][0]?.toUpperCase()}${getFirstLastName[0]?.substring(1)}`;
 
    return getName;
 }
 
 
 export {
 
    convertUppercaseFunction,
    functionToCutASentence,
    simplifyFirstAndLastName,
 
 }
 