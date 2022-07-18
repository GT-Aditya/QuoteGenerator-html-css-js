let btn = document.querySelector('#new-quote');
let quote = document.querySelector('.quote');
let person = document.querySelector('.person');

const quotes= [{
    quote: "A leader is best when people barely know he exists, when his work is done, his aim fulfilled, they will say: we did it ourselves.",
    person: "Lao Tzu"
},
{
    quote: " I must follow the people. Am I not their leader?",
    person: "Benjamin Disraeli"
},
{
    quote: " Leadership is the capacity to translate vision into reality. ",
    person: "Warren Bennis"
},
{
    quote: "The first responsibility of a leader is to define reality. The last is to say thank you. In between, the leader is a servant.",
    person: "Max DePree"
},
{
    quote: "I do the very best I know how - the very best I can; and I mean to keep on doing so until the end.",
    person: "Abraham Lincoln"
}
];

btn.addEventListener('click', ()=>{
    let random = Math.floor(Math.random()*quotes.length);
    quote.innerText = quotes[random].quote;
    person.innerText = quotes[random].person;
})