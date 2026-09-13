const questions =[
    {
        question: "1. what does HTML stand for?",
        options:["Hyper Text Markup Language","High Text Machine Language","Hyper Transfer Markup Language","Home Tool Markup Language"],
        answer:"Hyper Text Markup Language"
    },

    {
        question: "2. Which HTML tag is used to create a hyperlink?",
        options:["<link>","<a>","<href>","<url>"],
        answer:"<a>"
    },
    {
        question:"3. Which CSS property is used to change text color?",
        options:["font-color","text-color","color","background-color"],
        answer:"color"
    },

    {
        question:"4. Which CSS property is used to make a flex container?",
        options:["display:block","display:inline","display:flex","position:flex"],
        answer:"display:flex"
    },
    {
        question:"5. Which symbol is used for comments in JavaScript?",
        options :["<!-- -->","/* */","//","##"],
        answer:"//"
    },
    {
        question:"6. Which Keyword is used to declare a constant in JavaScript?",
        options:["var","let","const","static"],
        answer:"const"
    },
    {
        question:"7. Which method is used to print output in javascript?",
        options:["print()","console.log()","echo()","printf()"],
        answer:"console.log()"
    },
    {
        question:"8. Which HTML tag is used to insert an image?",
        options:["<picture>","<img>","<image>","<src>"],
        answer:"<img>"
    },
    {
        question:"9. Which CSS property is used to add space inside an element?",
        options:["margin","padding","spacing","border"],
        answer:"padding"
    },
    {
        question:"10. Which JavaScript event occurs when a button is clicked?",
        options :["onhover","onchange","onclick","onsubmit"],
        answer:"onclick"
    },
    {
        question:"11. Which HTML tag is used to create an unordered list?",
        options :["<ol>","<ul>","<li>","<list>"],
        answer:"<ul>"
    },
    {
        question:"12. Which CSS property is used to round the corners of an element?",
        options :["border-style","border-radius","border-width","radius"],
        answer:"border-radius"
    },
    {
        question:"13. Which JavaScript function displays a popup message?",
        options :["message()","prompt()","alert()","popup()"],
        answer:"alert()"
    },
    {
        question:"14. Which HTML tag is used for the largest heading?",
        options:["<h6>","<heading>","<head>","<h1>"],
        answer:"<h1>"
    },
    {
        question:"15. Which CSS property changes the background color of an element?",
        options:["color","background-color","bg-color","background-image"],
        answer:"background-color"
    }
];

let currentQuestion =0;
let score=0;

const questionText=document.querySelector("h3");
const optionButtons=document.querySelectorAll(".options button");
const nextBtn=document.querySelector(".next-btn");

function loadQuestion() {
    questionText.innerText=questions[currentQuestion].question;
    optionButtons.forEach((btn,index)=>{
        btn.innerText=questions[currentQuestion].options[index];
        btn.classList.remove("correct","wrong");
        btn.disabled=false;
    });
}
loadQuestion();

optionButtons.forEach(button =>{
    button.addEventListener("click",() => {
        optionButtons.forEach(btn => btn.disabled=true);
        if (button.innerText === questions[currentQuestion].answer)
        {
            button.classList.add("correct");
            score++;
        }else {
            button.classList.add("wrong");
            optionButtons.forEach(btn =>{
                if(btn.innerText === questions[currentQuestion].answer)
                {
                    btn.classList.add("correct");
                }
            });
        }
    });
});

nextBtn.addEventListener("click",() => {
    currentQuestion++;
    if (currentQuestion < questions.length){
        loadQuestion();
    }else {
        localStorage.setItem("score",score);
        window.location.href="result.html";
    }
});

if(window.location.pathname.includes("result.html")){
    document.getElementById("score").innerText=localStorage.getItem("score")+"/15";
}

