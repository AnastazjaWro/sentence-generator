const sentences = document.querySelectorAll('.sentence');
const randomBtn = document.querySelector('.random-btn');
let current;

sentences.forEach((sentence,index) =>{
    sentence.classList.add(`S${index}`);
    toggleSentence(sentence);
});

randomBtn.addEventListener('click', () =>{
  randomSentence();
});

function randomSentence(){
  if(current) toggleSentence(current);
  const  number = Math.floor(Math.random()*sentences.length);
  const present = document.querySelector(`.S${number}`);
  current = present
  toggleSentence(current);
}

function toggleSentence(sentence){
  sentence.classList.toggle('hidden');
}
