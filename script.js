const newQuoteButton = document.querySelector("button");
const quotePara = document.querySelector(".quote");
const authorPara = document.querySelector(".author");

let quoteAPI = `https://api.quotable.io/quotes?maxLength=100&minLength=75`;
let quotesList;
let currentIndex = 0;
async function fetchQuoteList() {
  const responce = await fetch(quoteAPI);
  const data = await responce.json();
  quotesList = data.results;
  updateQuote();
}
fetchQuoteList();

function updateQuote() {
  currentIndex = currentIndex == quotesList.length - 1 ? 0 : currentIndex + 1;
  console.log(currentIndex);
  quotePara.innerHTML = quotesList[currentIndex].content;
  authorPara.innerHTML = quotesList[currentIndex].author;
}

newQuoteButton.addEventListener("click", updateQuote);
