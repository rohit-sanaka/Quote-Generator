const newQuoteButton = document.querySelector("button");
const quotePara = document.querySelector(".quote");
const authorPara = document.querySelector(".author");

async function updateQuote() {
  await fetch(
    `https://api.quotable.io/random?maxLength=100&minLength=75&author="buddha"`,
    {
      method: "GET",
    }
  )
    .then((response) => response.json())
    .then((data) => {
      quotePara.innerHTML = data.content;
      authorPara.innerHTML = "- " + data.author;
    });
}

newQuoteButton.addEventListener("click", updateQuote);

updateQuote();
