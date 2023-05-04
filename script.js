// 1. step start from here 

const setOfWord = [
    "I am learning web development for better future",
    "Now me learning the program of front end developer",
    "In future i will be full stack developer",
    "I will do something for me and for my country",
    "I Love my country people and hate dirty politics"
];
var msg = document.getElementById("msg");
var textArea = document.getElementById("textarea");
var startBtn = document.getElementById("startbtn");

let startTime, endTime;
// 1. step end here 

// 2.step start from here 
startBtn.addEventListener("click",function () {
    if (this.innerText == "Start") {
        textArea.disabled == false;
        palyGame();
//  4.step start from here 
    }else if(this.innerText == "Done") {
        textArea.disabled == true;
        startBtn.innerText = "Start";
        endGame();
 //  4.step start end here 
    }
});
// 2.step end here 

// 3.step start from here 
const  palyGame = () => {
    let randomNumber = Math.floor(Math.random()*setOfWord.length);
    msg.innerText = setOfWord[randomNumber];
    let date = new Date();
    startTime = date.getTime();
    startBtn.innerText = "Done";
}
// 3.step end here

// 5.step start from here 
const endGame =()=> {
    let date = new Date();
    endTime = date.getTime();
    let totalTime = ((endTime - startTime)/1000);
    
    let totalStr = textArea.value;
    let totalWords = wordCounter(totalStr);

// 7.step start from here 
    let speed = Math.round((totalWords/totalTime)*60);

    let finalMsg = "You type total " + speed + " words per minutes " ;
    
    finalMsg += compareWords(msg.innerText,totalStr);

    msg.innerText = finalMsg;
// 7.step ends here 
}
// 5.step ends here 
// 8.step start from here 
const compareWords = (str1,str2) => {
    let word1 = str1.split(" ");
    let word2 = str2.split(" ");
    let cnt = 0;

   word1.forEach(function(item,index){
       if (item == word2[index]) {
           cnt++ ;
       };
   });

    let errorWord = (word1.length - cnt ) ;
    return (cnt + " correct out of " + word1.length + " words and total number of error are " + errorWord + ".");

}
// 8.step ends her

// 6.step start from here 
const wordCounter = (str) => {
    let response = str.split(" ").length;
    return response ;
}
// 6.step ends here 


