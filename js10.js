// All valid credit card numbers
const valid1 = [4, 5, 3, 9, 6, 7, 7, 9, 0, 8, 0, 1, 6, 8, 0, 8];
const valid2 = [5, 5, 3, 5, 7, 6, 6, 7, 6, 8, 7, 5, 1, 4, 3, 9];
const valid3 = [6, 0, 1, 1, 1, 4, 4, 3, 4, 0, 6, 8, 2, 9, 0, 5];
const valid4 = [4, 5, 3, 9, 4, 0, 4, 9, 6, 7, 8, 6, 9, 6, 6, 6];

// All invalid credit card numbers
const invalid1 = [4, 5, 3, 2, 7, 7, 8, 7, 7, 1, 0, 9, 1, 7, 9, 5];
const invalid2 = [5, 7, 9, 5, 5, 9, 3, 3, 9, 2, 1, 3, 4, 6, 4, 3];
const invalid3 = [3, 7, 5, 7, 9, 6, 0, 8, 4, 4, 5, 9, 9, 1, 4];
const invalid4 = [6, 0, 1, 1, 1, 2, 7, 9, 6, 1, 7, 7, 7, 9, 3, 5];
const invalid5 = [5, 3, 8, 2, 0, 1, 9, 7, 7, 2, 8, 8, 3, 8, 5, 4];
const invalid6 = [3, 7, 1, 6, 1, 2, 0, 1, 9, 9, 8, 5, 2, 3, 6];

// Can be either valid or invalid
const mystery1 = [3, 4, 4, 8, 0, 1, 9, 6, 8, 3, 0, 5, 4, 1, 4];
const mystery2 = [5, 4, 6, 6, 1, 0, 0, 8, 6, 1, 6, 2, 0, 2, 3, 9];
const mystery3 = [6, 0, 1, 1, 3, 7, 7, 0, 2, 0, 9, 6, 2, 6, 5, 6, 2, 0, 3];
const mystery4 = [4, 9, 2, 9, 8, 7, 7, 1, 6, 9, 2, 1, 7, 0, 9, 3];
const mystery5 = [4, 9, 1, 3, 5, 4, 0, 4, 6, 3, 0, 7, 2, 5, 2, 3];

// An array of all the arrays above
const batch = [valid1, valid2, valid3, valid4, invalid1, invalid2, invalid3, invalid4, invalid5, invalid6, mystery1, mystery2, mystery3, mystery4, mystery5];


// Add your functions below:

const validateCred = arr => {
  let sumArr = 0; // variable for even-index numbers before being multiplied * 2
  let even = 0; // variable for even-index numbers bigger than 9
  let odd = 0; // variable for all the odd numbers
  let smallerEven = 0; //variable for even-index numbers that are smaller than 9 
  let sumAll = 0;
  for (let i = arr.length - 1 ; i >= 0 ; i--){
       if(i % 2 === 0) {
           sumArr = (arr[i]) * 2;
           if( sumArr > 9 ){
           sumArr = sumArr - 9;
           even = even + sumArr; 
           }else {
             smallerEven = smallerEven + sumArr; 
           }         
         }else {
          odd = odd + arr[i]; 
       }   
    }
     
     sumAll = odd + even + smallerEven; // sumAll is the variable that will hold sum of all the digits in the credit card number;

     if(sumAll % 10 === 0){ 
        return true;
     }else{
        return false;
     } // if the module of the sumAll is not = 0 , then the card number is invalid 
}

console.log(validateCred(valid1));

const findInvalidCards = arr => {
  let newArr = [];
  let countArr = 0;
  for (let i = 0; i < arr.length ; i++){ 
     if(validateCred(arr[i]) === false){
        countArr++;
        newArr.push(arr[i]);
     }
   }
   console.log(`There are ${countArr} invalid cards at the moment`); 
   return newArr;
} // this function checks if each element from the batch array is false and if it is, a newArray of only the invalid card elements is returned 

console.log(findInvalidCards(batch)); 


const idInvalidCompanies = arr => {
   let newArr = findInvalidCards(arr); // this array will store the result of calling the findInvalidCards function on the batch array
   let companyArr = []; // this array will store the names of all the banks that issued faulty cards
   for(let i = 0 ; i < newArr.length; i++){
     for(let j = 0; j < newArr[i].length ; j++){
        if(newArr[i][0] === 3){
            companyArr.push('American Express');
        }else if(newArr[i][0] === 4){
          companyArr.push('Visa');
        }else if(newArr[i][0] === 5){
          companyArr.push('Mastercard');
        }else if(newArr[i][0] === 6){
          companyArr.push('Discorver');
        }else {
          console.log('Company not found');
        }    
     }
   }
   /* the first for loop loops through each element in the batch array and since each element is an array itself the second for loop loops through the elements of each nested array
    depending if the condition is true or not, a bank's name will be added to companyArr array if they issued an invalid card */

   let unique = [];
  companyArr.forEach(element =>{
    if (!unique.includes(element)) {
          unique.push(element);
    }
  })   
// Using the .forEach method we check if there are any bank names repeated as elements in the companyArr array (stores all the names of the banks that issued the faulty cards)
  return unique;         
}

console.log(idInvalidCompanies(batch));