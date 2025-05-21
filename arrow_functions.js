// function mul(a, b) {
//   return a * b;
// }
// console.log(mul(4, 5));

const arrow_multiplication = (a,b) => {
    return a * b;
};

// generally uses for small works

const print_hello = () => {
    console.log("hello");
}
// print_hello will give the definition of the function
// print_hello(); // calling the function and will print the result "hello"

// For single line function we can remove the curly braces and return keyword
const welcome = () => console.log("Welcome to the world of JavaScript");

// Return the number of vowels in a string
function count_vowel(char){
    vowel=0;
    for (let i = 0; i < char.length; i++) {
        if (char[i] == 'a' || char[i] == 'e' || char[i] == 'i' || char[i] == 'o' || char[i] == 'u') {
            console.log("Vowel found: " + char[i]);
            vowel++;
        }
    }

    
    console.log("Number of vowels in the string: " +vowel);
}
count_vowel("Nikhitha")
// Performing the same task using arrow function
const count_vowel_arrow = (char) => {
    vowel=0;
    for(let i = 0; i < char.length; i++) {  
        if (char[i] == 'a' || char[i] == 'e' || char[i] == 'i' || char[i] == 'o' || char[i] == 'u') {
            console.log("Vowel found: " + char[i]);
            vowel++;
        }
    }
         
    console.log("Number of vowels in the string: " +vowel);
   
}