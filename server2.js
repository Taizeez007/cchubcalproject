var getNumberOfPersons =document.getElementById('count-el');

var getEntries =document.getElementById("entries")
let count =0;


//initialize the count as 0
//listen to clicks on increment button
//incremet the count variable
//change the count-el in the html to reflect the new count

function increment(){
    count+=1;
    getNumberOfPersons.textContent=count;
    
}

function saveBtn(){
     let countStr= count + ' - '

     getEntries.textContent += countStr;
     getNumberOfPersons.textContent=0;
     count =0;

     //mdn an altrnative to innerText
     //innerText struggles with spacing hence we use textContent
    }