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
        question: "Bhur of Upper Ganga Plain of India is",
        option1: "A. Undulating, aeolian sandy deposit",
        option2: "B. Older alluvium",
        option3: "C. Newer alluvium",
        option4: "D. Muddy areas",
        correct: "a"
    },
    {
        question: "In India the maximum area is covered by the",
        option1: "A. Laterite soil",
        option2: "B. Red Soil",
        option3: "C. Black Soil",
        option4: "D. Alluvial Soils",
        correct: "d"
    },
    {
        question: "The most ideal region for the cultivation of cotton in India is",
        option1: "A. Deccan Trap Region",
        option2: "B. The Brahmaputra Valley",
        option3: "C. Indo-Gangetic Plain",
        option4: "D. Rann of Kutch",
        correct: "a"
    },
    {
        question: "Rain in cold weather, season is due to",
        option1: "A. Norwesters",
        option2: "B. Western disturbances",
        option3: "C. Cold waves",
        option4: "D. Arabian Sea depressions",
        correct: "b"
    },
    {
        question: "Where is saffron cultivated in India?",
        option1: "A. Dun Valley.",
        option2: "B. Chambal Valley",
        option3: "C. Karewa Terrace",
        option4: "D. Duars Plain",
        correct: "c"
    },
    {
        question: "The longest border of India is with",
        option1: "A. Nepal",
        option2: "B. Bhutan",
        option3: "C. Afghanistan",
        option4: "D. Bangladesh",
        correct: "d"
    },
    {
        question: "Muzaffarnagar in.Uttar Pradesh is famous for production of?",
        option1: "A. Millet",
        option2: "B. Cotton",
        option3: "C. Sugarcane",
        option4: "D. none of the above",
        correct: "c"
    },
    {
        question: "Bangladesh access the enclaves in Cooch Behar through the __________ corridor",
        option1: "A. Teen Bigha",
        option2: "B. Darjeeling",
        option3: "C. Jalpaiguri",
        option4: "D. none of the above",
        correct: "a"
    },
    {
        question: "Blue revolution is aimed at increasing the production of ——",
        option1: "A. Milk",
        option2: "B. Poultry",
        option3: "C. Shrimp",
        option4: "D. Indigo",
        correct: "c"
    },
    {
        question: "Bamboo, rags, rice bran are the main raw materials of  —— industry",
        option1: "A. Chemical",
        option2: "B. Fertilizer",
        option3: "C. Cotton",
        option4: "D. Paper",
        correct: "d"
    },
    {
        question: "Which state in India has the largest coal reserve",
        option1: "A. Orissa",
        option2: "B. Jharkhand",
        option3: "C. Chattishgarh",
        option4: "D. West bengal",
        correct: "c"
    },
    {
        question: "Which of the Act made the governor of Bengal as Governor General of India?",
        option1: "A. Pitt’s India Act, AD 1784",
        option2: "B. The charter Act, 1813 AD",
        option3: "C. Charter Act, 1793 AD",
        option4: "D. The Regulating Act, AD 1773",
        correct: "b"
    },
    {
        question: "The ambassador of Emperor James I, who reached in the court of Jahangir in 1615 was __:",
        option1: "A. Sir James Hay",
        option2: "B. Sir Thomas Roe",
        option3: "C. Sir Thomas Howard",
        option4: "D. Sir John Digby",
        correct: "b"
    },
    {
        question: "Which among the following travelers has recorded his experiences in “Kitab-i-Rehla”?",
        option1: "A. Amir Khusro",
        option2: "B. Ibn Battuta",
        option3: "C. Malik Murtaza",
        option4: "D. Al-Bayhaqi",
        correct: "b"
    },
    {
        question: "The pioneers of Ocean trade with India were______",
        option1: "A. Dutch",
        option2: "B. Portuguse",
        option3: "C. British",
        option4: "D. French",
        correct: "b"
    },
	{
        question: "First English factory in India was biult in?",
        option1: "A. Bombay",
        option2: "B. Surat",
        option3: "C. Sutanuti",
        option4: "D. Madras",
        correct: "b"
    },
	{
        question: "Battle of Carnatic (karnataker Juddho) was fought between?",
        option1: "A. French EIC and English EIC",
        option2: "B. French EIC and Dutch EIC",
        option3: "C. Dutch and the Portuguese",
        option4: "D. None of the above",
        correct: "a"
    },
	{
        question: " Who wrote ‘Rajatarangini’?",
        option1: "A. Megasthenes",
        option2: "B. Kalhana",
        option3: "C. Herodotus",
        option4: "D. Al-Beruni",
        correct: "b"
    },
	{
        question: "When the Hindu College was founded??",
        option1: "A. 1800",
        option2: "B. 1850",
        option3: "C. 1817",
        option4: "D. 1857",
        correct: "c"
    },
	{
        question: "Who was the Governor General during the annulment of ‘Sati’ ?",
        option1: "A. Lord Bentinck",
        option2: "B. Lord Hastings",
        option3: "C. Lord Dalhousie ",
        option4: "D. Lord Canning",
        correct: "a"
    },
	{
        question: "Kabuliyat and Patta as instruments of settlement were introduced by",
        option1: "A. Sher-Shah",
        option2: "B. Humayun",
        option3: "C. Akbar",
        option4: "D. Ibrahim Lodi",
        correct: "a"
    },
	{
        question: "The Asiatic Society of Bengal was founded by",
        option1: "A. William Marshal",
        option2: "B. Rammohan Roy",
        option3: "C. Sir William Jones",
        option4: "D. C.F Andrews",
        correct: "c"
    },
	{
        question: "Malik Kafur was general of",
        option1: "A. Firuz Shah Tughlag",
        option2: "B. Chandragupta Maurya",
        option3: "C. Bimbisara",
        option4: "D. Alauddin Khilji",
        correct: "d"
    },
	{
        question: " When did Vasco-da-Gama come to India ?",
        option1: "A. 1498 A.D",
        option2: "B. 1490 A.D",
        option3: "C. 1492 A.D",
        option4: "D. 1495 A.D",
        correct: "a"
    },
	{
        question: "Second Anglo-Maratha war was fought during?",
        option1: "A. 1810-1812",
        option2: "B. 1815-1816",
        option3: "C. 1802-1805",
        option4: "D. None of the above",
        correct: "c"
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
},1080*1000)
document.querySelector('fieldset').innerHTML = html_string;

document.querySelector('button').addEventListener('click',() => {
    marksCalculation();
});
