// Declare an empty array;
const arr = [];

// Declare an array with more than 5 number of elements
const arr1 = [7, 14, 21, 28, 35, 42];

// Find the length of your array
console.log("length of array: ", arr1.length);

// Get the first item, the middle item and the last item of the array
const mid = Math.round(arr1.length/2);
const last = arr1.length - 1;
console.log("first item: ", arr1[0]);
console.log("middle item: ", arr1[mid]);
console.log("last item: ", arr1[last]);

// Declare an array called mixedDataTypes, put different data types in the array and find the length of the array. The array size should be greater than 5
// const mixedDataTypes = [3, 6.9, "c", "string", true, 9.9999999999999999999999, undefined];
// console.log("mixedDataTypes length: ", mixedDataTypes.length);
const mixedDataTypes = [];
mixedDataTypes.push(3);
mixedDataTypes.push(6.9);
mixedDataTypes.push("c");
mixedDataTypes.push("string");
mixedDataTypes.push(true);
mixedDataTypes.push(9.999999999999);
mixedDataTypes.push(undefined);
console.log("mixedDataTypes length: ", mixedDataTypes.length);

// Declare an array variable name itCompanies and assign initial values Facebook, Google, Microsoft, Apple, IBM, Oracle and Amazon
let itCompanies = []; // Declare an array variable name
let companiesArr = 'Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon'; //adding companies
let companiesStr = companiesArr.split(', '); //splitting
for(i=0; i<companiesStr.length; i++) { // for each company ...
    let init = companiesStr[i].split(''); // splitting into each letter
    itCompanies.push(init[0]); // adding initial letter in itcompanies
}

// Print the array using console.log()
console.log(itCompanies);

// Print the number of companies in the array
console.log(companiesStr.length);

// Print the first company, middle and last company
const midComp = Math.floor(companiesStr.length/2);
const lastComp = companiesStr.length - 1;
console.log("first company: ", companiesStr[0]);
console.log("middle company: ", companiesStr[midComp]);
console.log("last company: ", companiesStr[lastComp]);

// Print out each company
for(i=0; i<companiesStr.length; i++) {
    console.log('company ' + [i+1] + ': ' + companiesStr[i]);
}

// Change each company name to uppercase one by one and print them out
for(i=0; i<companiesStr.length; i++) {
    console.log('company ' + [i+1] + ': ' + companiesStr[i].toUpperCase());
}

// Print the array like as a sentence: Facebook, Google, Microsoft, Apple, IBM,Oracle and Amazon are big IT companies.
let str = '';
for(i=0; i<companiesStr.length-1; i++) {
    str += companiesStr[i] + ", ";
}
str += "and " + companiesStr[companiesStr.length-1] + " are big IT companies.";
console.log(str );

// Check if a certain company exists in the itCompanies array. If it exist return the company else return a company is not found
let companyName = "Facebook";
if(companiesStr.indexOf(companyName) != -1) {
    console.log(companyName)
} else {
    console.log("A company is not found")
}

// Filter out companies which have more than one 'o' without the filter method
count=0;
let twoO = [];
for(i=0; i<companiesStr.length-1; i++) {
    let init = companiesStr[i].split('');
    for(j=0;j<init.length;j++) {
        if(init[j] == "o") {
            count++;
            if(count >= 2) {
                twoO.push(companiesStr[i]);
                break;
            }
            continue;
        } else {
            continue;
        }
    }
}
console.log(twoO);

// Sort the array using sort() method
let sortingArr = [5,3,2,4,0,1];
console.log(sortingArr.sort());

// Reverse the array using reverse() method
console.log(sortingArr.reverse());

// Slice out the first 3 companies from the array
let first3 = companiesStr;
console.log(first3.slice(3,7));

// Slice out the last 3 companies from the array
let last3 = companiesStr;
console.log(first3.slice(0,4));

// Slice out the middle IT company or companies from the array
let midC = companiesStr;
console.log(midC.slice(1,midC.length-1)); // its cuts 1st and last, rem are printed

// Remove the first IT company from the array
let firstIT = companiesStr;
console.log(firstIT.slice(1,7));

// Remove the middle IT company or companies from the array
const midIT = companiesStr;
console.log(firstIT.slice(Math.round(arr1.length/2),Math.round(arr1.length/2)+1));

// Remove the last IT company from the array
let lastIT = companiesStr;
console.log(lastIT.slice(0,6));

// Remove all IT companies
let allIT = companiesStr;
console.log(lastIT.splice());