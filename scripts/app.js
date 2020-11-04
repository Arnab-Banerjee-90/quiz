let html_string = '';
let questions_answered = [];
let answerd_values = [];
let marks = 0;
let result_string = '';
let counter_sec = 600;

function marksCalculation(){
    let q = document.getElementsByTagName('input');
    for (let i=0;i<q.length;i++){
        if(q[i].checked){
            questions_answered.push(q[i].name);
            answerd_values.push(q[i].value);
        }
    }
    for (let j=0;j<questions_answered.length;j++){
       if (answerd_values[j] === questions[questions_answered[j]-1].correct)
       {
           result_string += `<h2>${questions[questions_answered[j]-1].question}, is correctly answered</h2>`;
           marks = marks + 1;
       }
       else{
           marks = marks - 0.33;
       }
    }
    result_string += `<h3>You have obtained ${marks} marks</h3>`
    document.querySelector("button").remove();
    document.querySelector('fieldset').insertAdjacentHTML('beforeend',result_string);

}

questions = [
    {
        question: "Buddhist doctrines are contained in?",
        option1: "A. Jatakas",
        option2: "B. Satapaths",
        option3: "C. Upanishads",
        option4: "D. Dhammapadas",
        correct: "d"
    },
    {
        question: "Which of the following Gods does not belong to the Rigvedic period?",
        option1: "A. Indra",
        option2: "B. Maruts",
        option3: "C. Shiva",
        option4: "D. Aditi",
        correct: "c"
    },
    {
        question: "‘Sabha’ & ‘Samiti’ are two democratic institutaion of?",
        option1: "A. Rigvedic Aryan",
        option2: "B. Dravidans",
        option3: "C. Hilly Tribes of India",
        option4: "D. Indus valley people",
        correct: "a"
    },
    {
        question: "‘Allahabad Pillar’ inscription was penned by?",
        option1: "A. Harisena",
        option2: "B. Ravikirti",
        option3: "C. Rudradaman",
        option4: "D. Banabhatta",
        correct: "a"
    },
    {
        question: "The great Bath was found in?",
        option1: "A. Lothal",
        option2: "B. Harappa",
        option3: "C. Mohen-jo-daro",
        option4: "D. Kalibangan",
        correct: "c"
    },
    {
        question: "In which ancient text you will find the earliest reference to the VarnaSystem",
        option1: "A. Manu Samhita",
        option2: "B. Rigveda",
        option3: "C. Atharva Veda",
        option4: "D. Satapatha Brahmana",
        correct: "b"
    },
    {
        question: "Who among the Gupta rulers was known as ‘Lichchavi-dauhitra’",
        option1: "A. Samudragupta",
        option2: "B. Chandragupta II",
        option3: "C. Kumargupta",
        option4: "D. Skandagupta",
        correct: "a"
    },
    {
        question: "Who issued the Nasik Prasasti (Inscription)?",
        option1: "A. Gautamiputra Satakarni",
        option2: "B. Samudragupta",
        option3: "C. Harshavardhan",
        option4: "D. Dharmapala",
        correct: "a"
    },
    {
        question: "The tropic of cancer does not pass through?",
        option1: "A. Mizoram",
        option2: "B. Tripura",
        option3: "C. Orissa",
        option4: "D. Madhya Pradesh",
        correct: "c"
    },
    {
        question: "Lakshadweep is an island of?",
        option1: "A. Coral island",
        option2: "B. Volcanic island",
        option3: "C. Tectonic island",
        option4: "D. Alluvial island",
        correct: "a"
    },
    {
        question: "Rohilkhand region lies in ?",
        option1: "A. Gujarat plains",
        option2: "B. Western foothill- plains of the Aravalli",
        option3: "C. Northern Uttar Pradesh",
        option4: "D. Bihar",
        correct: "c"
    },
    {
        question: "In term of longitude the easternmost state of India is ?",
        option1: "A. Mizoram",
        option2: "B. Manipur",
        option3: "C. Nagaland",
        option4: "D. Arunachal Pradesh",
        correct: "d"
    },
    {
        question: "Duncan passage lies between ?",
        option1: "A. Andaman and Nicobar Islands",
        option2: "B. South Andaman and Little Andaman",
        option3: "C. Little Andaman and Nicobar",
        option4: "D. Amindivi and Lakshadweep Islands",
        correct: "b"
    },
    {
        question: "What is the capital of Lakshadweep islands",
        option1: "A. Kohima",
        option2: "B. Port Blair",
        option3: "C. Kavaratti",
        option4: "D. None of these",
        correct: "c"
    },
    {
        question: "Coastline of which state is called Coromondal Caost ?",
        option1: "A. Karnataka",
        option2: "B. Kerala",
        option3: "C. Orissa",
        option4: "D. Tamil Nadu",
        correct: "d"
    }
];


for (let i=0;i<questions.length;i++){
    html_string += `<label class="block">${i+1}. ${questions[i].question}
    </label><input type="radio" name="${i+1}" id="q${i+1}_option_1" value="a">
    <label for="q${i+1}_option_1">${questions[i].option1}</label><br>
    </label><input type="radio" name="${i+1}" id="q${i+1}_option_2" value="b">
    <label for="q${i+1}_option_2">${questions[i].option2}</label><br>
    </label><input type="radio" name="${i+1}" id="q${i+1}_option_3" value="c">
    <label for="q${i+1}_option_3">${questions[i].option3}</label><br>
    </label><input type="radio" name="${i+1}" id="q${i+1}_option_4" value="d">
    <label for="q${i+1}_option_4">${questions[i].option4}</label><br><br>`    
}

setInterval(()=>{
    if(counter_sec == 0){
      document.querySelector("main").innerHTML = `<h2>Time is up!!</h2>`
    }
    else if(document.querySelector('fieldset').innerText.includes('obtained')){
        document.querySelector("main").innerHTML = `<h2>User Submitted</h2>`
        counter_sec = -1;
    }
    else{
      document.querySelector("main").innerHTML = `<h2>Seconds Remaining ${counter_sec}</h2>`
      counter_sec--;
    }
  },1000)

setTimeout(()=>{
    marksCalculation();
},600*1000)
document.querySelector('fieldset').innerHTML = html_string;

document.querySelector('button').addEventListener('click',() => {
    marksCalculation();
});

