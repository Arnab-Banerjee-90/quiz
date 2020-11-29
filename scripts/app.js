let html_string = '';
let questions_answered = [];
let answerd_values = [];
let marks = 0;
let result_string = '';
let counter_sec = 1080;

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
        question: "What is the name of the Lake between Godavari and Krishna deltaic region?",
        option1: "A. Kolleru Lake",
        option2: "B. Pulicat Lake",
        option3: "C. Chilika Lake",
        option4: "D. Loktak Lake",
        correct: "a"
    },
    {
        question: "The source of the Narmada River lies in ?",
        option1: "A. Amarkantak Plateau",
        option2: "B. Vindhya Range",
        option3: "C. Maikhal Range",
        option4: "D. Palni Hills",
        correct: "a"
    },
    {
        question: "Somasila Dam is located In which Indian State?",
        option1: "A. Madhya Pradesh",
        option2: "B. Karnataka",
        option3: "C. Andhra Pradesh",
        option4: "D. Maharashtra",
        correct: "c"
    },
    {
        question: "Where is Vansda National Park Located?",
        option1: "A. Uttar Pradesh",
        option2: "B. Gujarat",
        option3: "C. Rajasthan",
        option4: "D. Madhya Pradesh",
        correct: "b"
    },
    {
        question: "The Fedchenko, Biafo and Hispar are the names of Himalayan",
        option1: "A. Glaciers",
        option2: "B. Lakes",
        option3: "C. Hill Stations",
        option4: "D. Trees",
        correct: "a"
    },
    {
        question: "The Patkoi bum forms the boundary between",
        option1: "A. Arunachal Pradesh and Myanmar",
        option2: "B. Manipur and Nagaland",
        option3: "C. Assam and Meghalaya",
        option4: "D. Meghalaya and Nagaland",
        correct: "a"
    },
    {
        question: "The fertile Bari Doab lies between?",
        option1: "A. The Beas and the Sutlej rivers",
        option2: "B. The Beas and the Ravi rivers ",
        option3: "C. The Beas and the Chenub rivers",
        option4: "D. none of the above",
        correct: "b"
    },
    {
        question: "Varanasi is located in",
        option1: "A. Lower Ganaga plain",
        option2: "B. Middle Ganga Plain",
        option3: "C. Upper Ganga Plain",
        option4: "D. Ganga-Sutlej interfluence",
        correct: "b"
    },
    {
        question: "Which one of the following is an inland river? (ontorbahi)",
        option1: "A. Pennar",
        option2: "B. Luni",
        option3: "C. Narmada",
        option4: "D. Jamuna",
        correct: "b"
    },
    {
        question: "Where do the Bhagirathi and the Alakananda meet at?",
        option1: "A. Karnaprayag",
        option2: "B. Rudraprayag",
        option3: "C. Haridwar",
        option4: "D. Devaprayag",
        correct: "d"
    },
    {
        question: "Which one of the following is the junction point of the Eastern Ghats and Western Ghats?",
        option1: "A. Javadi",
        option2: "B. Anaimalai",
        option3: "C. Nilgiri",
        option4: "D. Shevaroy",
        correct: "c"
    },
    {
        question: "Who assumed the title of ‘Haindava Dharmoddharak’?",
        option1: "A. Guru Ramdas",
        option2: "B. Shivaji",
        option3: "C. Baji Rao I",
        option4: "D. Balaji Baji Rao",
        correct: "b"
    },
    {
        question: "Who wrote Kitab-ul-Hind?",
        option1: "A. Al-Masudi",
        option2: "B. Al-Biruni",
        option3: "C. Sulaiman",
        option4: "D. Firdausi",
        correct: "b"
    },
    {
        question: "Who completed the Qutab Minar?",
        option1: "A. Qutab-ud-Din Bakhtiyar Kaki",
        option2: "B. Nasiruddin Qubacha",
        option3: "C. Iltutmish",
        option4: "D. Qutbuddin Aibak",
        correct: "c"
    },
    {
        question: "‘Sati’ of Hindu women was prohibited during the reign of which Mughal emperor?",
        option1: "A. Jahangir",
        option2: "B. Shah Jahan",
        option3: "C. Akbar",
        option4: "D. Aurangzeb",
        correct: "d"
    }
	{
        question: "The Sikh Guru executed by the Mughal emperor Auranagazeb was",
        option1: "A. Tegh Bahadur",
        option2: "B. Nanak",
        option3: "C. Govind Singh",
        option4: "D. Arjun Dev",
        correct: "a"
    }
	{
        question: " The centre of Portuguese power in India was",
        option1: "A. Cochin",
        option2: "B. Calicut",
        option3: "C. Bijapur",
        option4: "D. Goa",
        correct: "d"
    }
	{
        question: "During whose reign Mughal army seized Hooghly from the Portuguese",
        option1: "A. Akbar",
        option2: "B. Jahangir",
        option3: "C. Shahjahan",
        option4: "D. Aurangzeb",
        correct: "c"
    }
	{
        question: "Who assumed the title of ‘Gangaikondachola’?",
        option1: "A. Rajendra I",
        option2: "B. Rajaraja I",
        option3: "C. Rajadhiraja I",
        option4: "D. Kulotunga I",
        correct: "a"
    }
	{
        question: "Which King founded the Vikramaslla University  ?",
        option1: "A. Dharmapala",
        option2: "B. Dhruva",
        option3: "C. Devapala",
        option4: "D. Ballal Sen",
        correct: "a"
    }
	{
        question: "Who wrote ‘Rajatarangini",
        option1: "A. Megasthenes",
        option2: "B. Kalhana",
        option3: "C. Al-Beruni",
        option4: "D. Herodotus",
        correct: "b"
    }
	{
        question: " When was the first battle of Tarain fought?",
        option1: "A. 1175 A.D",
        option2: "B. 1191 A.D",
        option3: "C. 1192 A.D",
        option4: "D. 1206 A.D",
        correct: "b"
    }
	{
        question: "The decline of the Nandas at the hands of Kautilya and Chandragapta Maurya has been vividly portrayed in the Sanskrit Play",
        option1: "A. Mrichhakatika",
        option2: "B. Devi Chandragupta",
        option3: "C. Mattavilasa",
        option4: "D. Mudrarakshasa",
        correct: "d"
    }
	{
        question: "In which year did Muhammad-bin-Qasim conquer Sind?",
        option1: "A. 712 A.D",
        option2: "B. 715 A.D",
        option3: "C. 718 A.D",
        option4: "D. 721 A.D",
        correct: "a"
    }
	{
        question: " The author of ‘Kadambari‘ was",
        option1: "A. Kshemendra",
        option2: "B. Kalhana",
        option3: "C. Bhababhuti",
        option4: "D. Banabhatta",
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
