const answerContainer = document.querySelector("#answer-container");
const questionInput = document.querySelector("#questionInput");
const paragraphQuestion = document.querySelector("#paragraphQuestion");
const headingAnswear = document.querySelector("#headingAnswer");
const getName = prompt('Olá, bem vindo(a)!\nDigite seu nome logo abaixo.')
const answers = [
  "Certeza!",
  "Não tenho tanta certeza.",
  "É decididamente assim.",
  "Não conte com isso.",
  "Sem dúvidas!",
  "Pergunte novamente mais tarde.",
  "Sim, definitivamente!",
  "Minha resposta é não.",
  "Você pode contar com isso.",
  "Melhor não te dizer agora.",
  "A meu ver, sim.",
  "Minhas fontes dizem não.",
  "Provavelmente.",
  "Não é possível prever agora.",
  "Perspectiva boa.",
  "As perspectivas não são tão boas.",
  "Sim.",
  "Concentre-se e pergunte novamente.",
  "Sinais apontam que sim.",
];

function getQuestionAndShowAnswer() {
  if(!questionInput.value.endsWith('?')) {
    questionInput.value = ''
    questionInput.classList.add('errorInput')
    questionInput.placeholder = 'Acrescente "?" no final da pergunta!'
    questionInput.style.backgroundColor = '#111'
    return
  } else {
    questionInput.classList.remove('errorInput')
    questionInput.placeholder = ' Digite sua pergunta...'
    questionInput.style.color = ''
    questionInput.style.backgroundColor = ''
  }

  paragraphQuestion.innerHTML = questionInput.value;

  const answerTotal = answers.length;
  const randomAnswer = Math.floor(Math.random() * answerTotal);

  headingAnswear.innerHTML = answers[randomAnswer];

  questionInput.value = "";

  answerContainer.style.opacity = 1;
  answerContainer.style.display = "block";
  clearResult();
  clearContainer();
}

function clearResult() {
  setTimeout(() => {
    answerContainer.style.opacity = 0;
  }, 2500);
}

function clearContainer() {
  setTimeout(() => {
    answerContainer.style.display = "none";
  }, 3000);
}
