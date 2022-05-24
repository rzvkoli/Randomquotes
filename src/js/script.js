var $ = document;
var author = $.getElementById("author");
var quote = $.getElementById("quote");
var quotesArray = [
  {
    quoteText: "All our dreams can come true if we have the courage to pursue them",
    quoteWriter: "Walt Disney",
  },
  {
    quoteText: "You must expect great thing of yourself before you can do them",
    quoteWriter: "Micheal Jordan"
  },
  {
    quoteText: "Dont let yesterday take up much of today",
    quoteWriter: "Will Rongers"
  }
];

setInterval(function() {
  var randomIndex = Math.floor(Math.random() * quotesArray.length)
  var mainQoute = quotesArray[randomIndex]
  quote.innerHTML = mainQoute.quoteText
  author.innerHTML = mainQoute.quoteWriter
} , 10000)
