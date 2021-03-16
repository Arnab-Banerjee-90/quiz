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
        question: "Which state has the longest border with West Bengal?",
        option1: "A. Jharkhand",
        option2: "B. Orissa",
        option3: "C. Bangladesh",
        option4: "D. None of the above",
        correct: "a"
    },
    {
        question: "Manos Sarovar is in?",
        option1: "A. Karakoram Range",
        option2: "B. Pirpanjal Range",
        option3: "C. Kailash Range",
        option4: "D. Mahabharata Range",
        correct: "c"
    },
    {
        question: "Telengana was Created in?",
        option1: "A. 2014",
        option2: "B. 2013",
        option3: "C. 2012",
        option4: "D. 2011",
        correct: "a"
    },
    {
        question: "Kolleru lake is situated between?",
        option1: "A. Godaveri and Kaveri",
        option2: "B. Godavari and Krishna",
        option3: "C. Krishan and Kaveri",
        option4: "D. None of the above",
        correct: "b"
    },
    {
        question: "Calcutta-Mumbai road via Agra is known as?",
        option1: "A. NH8",
        option2: "B. NH6",
        option3: "C. NH10",
        option4: "D. None of the above",
        correct: "b"
    },
    {
        question: "Who was known as the Liberator of the press?",
        option1: "A. Metcalfe",
        option2: "B. Hastings",
        option3: "C. Macaulay",
        option4: "D. Bentick",
        correct: "a"
    },
    {
        question: "Tattwabodhini Sabha was founded by",
        option1: "A. Debendranath Tagore",
        option2: "B. Sivnath Sastri",
        option3: "C. Keshab Chandra Sen",
        option4: "D. Raja Ramohan Roy",
        correct: "a"
    },
    {
        question: "Why is 1761 is important in Indian history ?",
        option1: "A. The English Company became the Diwan of Bengal",
        option2: "B. Occupation of Delhi by the English Company’s army",
        option3: "C. The Marathas were defeated in Third Battle of Panipat",
        option4: "D. Death of Haider Ali of Mysore",
        correct: "c"
    },
    {
        question: "Who introduced Permanent Settlement (Chirosthayee Bondobosto)",
        option1: "A. Lord Cornwallis",
        option2: "B. Warren Hastings",
        option3: "C. John Shore",
        option4: "D. Lord Bentick",
        correct: "a"
    },
    {
        question: "Who was the Governor-General who decided in favour of Western education in India ?",
        option1: "A. Lord Cornwallis",
        option2: "B. Warren Hastings",
        option3: "C. John Shore",
        option4: "D. Lord Bentick",
        correct: "d"
    },
    {
        question: "Who was the Governor General when the first Anglo-Burmese war started ?",
        option1: "A. George Barlow",
        option2: "B. Lord Hastings ",
        option3: "C. Lord Minto",
        option4: "D. Lord Amherst",
        correct: "d"
    },
    {
        question: "Who among the following annexed Punjab into British Dominion?",
        option1: "A. Elgin",
        option2: "B. Minto",
        option3: "C. Dalhousie",
        option4: "D. Morley",
        correct: "c"
    },
    {
        question: "Which battle dashed the hopes of Dupleix to establish an empire in India?",
        option1: "A. First Carnatic War",
        option2: "B. Third Carnatic War",
        option3: "C. Battle of Plassey",
        option4: "D. Second Carnatic War",
        correct: "d"
    },
    {
        question: "Which of the sea ports have a natural harbor (swavabik potashroy)",
        option1: "A. Chennai",
        option2: "B. Visakhapatnam",
        option3: "C. Haldia",
        option4: "D. New Tuticorin",
        correct: "b"
    },
    {
        question: "In India Petrolium was first discovered in?",
        option1: "A. Surma Valley",
        option2: "B. Digboy",
        option3: "C. Rudrasagar",
        option4: "D. Nahorkatia",
        correct: "b"
    },
	{
        question: "In India, natural rate of increase of population was highest during ____ decade",
        option1: "A. 1961-71",
        option2: "B. 1981-91",
        option3: "C. 1941-51",
        option4: "D. None of the above",
        correct: "a"
    },
	{
        question: "Name the state of India where male-female ratio is adversely tilted against the female?",
        option1: "A. Uttar Pradesh",
        option2: "B. West Bengal",
        option3: "C. Punjab",
        option4: "D. Haryana",
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
        question: " As per Census of 2011 the share of populations below the age of 35 years in India is?",
        option1: "A. 50%",
        option2: "B. 40%",
        option3: "C. 65%",
        option4: "D. 70%",
        correct: "c"
    },
	{
        question: "The lowest female ratio to males among the states is in",
        option1: "A. Arunachal Pradesh",
        option2: "B. Tripura",
        option3: "C. Sikkim",
        option4: "D. Manipur",
        correct: "c"
    },
	{
        question: "The population growth rate in India is",
        option1: "A. Increasing",
        option2: "B. Constant",
        option3: "C. Declining",
        option4: "D. None of the above",
        correct: "c"
    },
	{
        question: "In India the sex ratio according to 2001 census is?",
        option1: "A. 933 females/1000 males",
        option2: "B. 927 females/1000 males",
        option3: "C. 980 females/1000 males",
        option4: "D. 951 females/1000 males",
        correct: "a"
    },
	{
        question: "Asiatic Society was Established by",
        option1: "A. Sir William Jones",
        option2: "B. Warren Hastings",
        option3: "C. Lord Curzon",
        option4: "D. None of the Above",
        correct: "a"
    },
	{
        question: "Kubaliat and Patta was introduced by",
        option1: "A. Akbar",
        option2: "B. Shah Jahan",
        option3: "C. Sher Shah",
        option4: "D. Aurangzeb",
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
