//================================================================

const api_url = 'https://api.quotable.io/random'; //uses quote API

const quote = document.getElementById('quote');
const author = document.getElementById('author');

const getquote = async (url) => {
  //grabs a quote from api url
  const response = await fetch(url);
  let data = await response.json(); //stores quote in variabe
  quote.innerHTML = data.content; //displays quote
  author.innerHTML = data.author; //displays author
};

const tweet = () => {
  window.open(
    'https://twitter.com/intent/tweet?text=' +
      quote.innerHTML +
      '--- by' +
      author.innerHTML,
    'Tweet Window',
    'width=600, height=300'
  );
};

const copyQuote = () => {
  let quoteElement = document.getElementById('quote');

  // Check if the element exists
  if (!quoteElement) {
    console.error('An error occured! the element could not be found.');
    return;
  }

  // Create a range to select the text
  let range = document.createRange();
  range.selectNode(quoteElement);

  // Select the text in the range
  window.getSelection().removeAllRanges();
  window.getSelection().addRange(range);

  try {
    // Copy the selected text to the clipboard
    document.execCommand('copy');
    alert(`Text copied: ${quoteElement.innerText}`);
  } catch (err) {
    // Handle errors
    console.error('Unable to copy text: ', err);
  }

  // Clear the selection
  window.getSelection().removeAllRanges();
};

getquote(api_url); //call back to function

//================================================================
