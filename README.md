# project9
In this project, I had to create a program checks if credit cards are valid. The verification process was created using JS functions and loops to handle multiple credit cards at a time.  The full description of the tast is in the .txt file of the repo.


Task 1:
Create a function, validateCred() that has a parameter of an array.
The purpose of validateCred() is to return true when an array contains digits of a valid credit card number and false when it is invalid.
This function should NOT mutate the values of the original array.

To find out if a credit card number is valid or not, use the Luhn algorithm. Generally speaking, an algorithm is a series of steps that solve a problem — 
the Luhn algorithm is a series of mathematical calculations used to validate certain identification numbers, e.g. credit card numbers.
The calculations in the Luhn algorithm can be broken down as the following steps:

   1 Starting from the farthest digit to the right, AKA the check digit, iterate to the left.
   2 As you iterate to the left, every other digit is doubled (the check digit is not doubled). If the number is greater than 9 after doubling, subtract 9 from its value.
   3 Sum up all the digits in the credit card number.
   4 If the sum modulo 10 is 0 (if the sum divided by 10 has a remainder of 0) then the number is valid, otherwise, it’s invalid.

Task 2:

Create another function, findInvalidCards() that has one parameter for a nested array of credit card numbers.
The role of findInvalidCards() is to check through the nested array for which numbers are invalid, and return another nested array of invalid cards.  

Task 3: 
After finding all the invalid credit card numbers, it’s also necessary to identify the credit card companies that have possibly issued these faulty numbers.
Create a function, idInvalidCardCompanies() that has one parameter for a nested array of invalid numbers and returns an array of companies.

  Currently, there 4 accepted companies which each have unique first digits. The following table shows which digit is unique to which company:
  3 	    -      Amex (American Express)
  4 	    -     Visa 
  5 	    -     Mastercard
  6 	    -     Discover

  If the number doesn’t start with any of the numbers listed, print out a message like: “Company not found”.

idInvalidCardCompanies() should return an array of companies that have mailed out cards with invalid numbers.
This array should NOT contain duplicates, i.e. even if there are two invalid Visa cards, "Visa" should only appear once in the array.
