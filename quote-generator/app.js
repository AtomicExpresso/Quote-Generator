const api_url = "https://api.quotable.io/random"; //uses quote API

const quote= document.getElementById("quote");
const author= document.getElementById("author");

async function getquote(url){ //grabs a quote from api url
  const response = await fetch(url);
  var data = await response.json(); //stores quote in variabe
  console.log(data); //logs quote in console, can be removed
  quote.innerHTML = data.content; //displays quote
  author.innerHTML = data.author; //displays author
}

function tweet(){
  window.open("https://twitter.com/intent/tweet?text=" + quote.innerHTML + "--- by" + author.innerHTML, "Tweet Window", "width=600, height=300");
}

function copyQuote() {
  var quoteElement = document.getElementById("quote");

  // Check if the element exists
  if (!quoteElement) {
    console.error("Element with ID 'quote' not found.");
    return;
  }

  // Create a range to select the text
  var range = document.createRange();
  range.selectNode(quoteElement);

  // Select the text in the range
  window.getSelection().removeAllRanges();
  window.getSelection().addRange(range);

  try {
    // Copy the selected text to the clipboard
    document.execCommand("copy");
    alert("Text copied: " + quoteElement.innerText);
  } catch (err) {
    // Handle errors
    console.error("Unable to copy text: ", err);
  }

  // Clear the selection
  window.getSelection().removeAllRanges();
}

getquote(api_url); //call back to function