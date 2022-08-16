// Write your code in this file!
const currentUser ='Bucky Roberts';
let welcomeMessage =`Welcome to Flatbook, ${currentUser}!`;
const excitedWelcomeMessage = `WELCOME TO FLATBOOK,   ${currentUser.toUpperCase()}!`;
// const excitedWelcomeMessage = 'WELCOME TO FLATBOOK, ' + currentUser.toUpperCase() +'!';
// const shortGreeting =`Welcome, ${currentUser[0]}!`;
// console.log(currentUser.length);
// const shortGreeting =`Welcome, ${currentUser.charAt(0)}!`;
const shortGreeting =`Welcome, ${currentUser.slice(0,1)}!`;
console.log(`${currentUser.slice(0,1)}`)


