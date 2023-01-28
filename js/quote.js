const quotes = [
  {
    quote:
      "Stay positive in every situation and everything you do, never stop trying, have faith don't stop due to failure",
    author: "Anurag Prakash Ray",
  },
  {
    quote:
      "Do NOT pray for an easy life, pray for the strength to endure a difficult one.",
    author: "Bruce Lee",
  },
  {
    quote:
      "You are not alone. You are not weak. You are brass and blood and stronger than this disease. You are",
    author: "Callie Bowld",
  },
  {
    quote:
      "Believe in yourself. You are braver than you think, more talented than you know, and capable of more than you imagine.",
    author: "Roy T. Bennett",
  },
  {
    quote:
      "Positive thinking is a valuable tool that can help you overcome obstacles, deal with pain, and reach new goals.",
    author: "Amy Morin",
  },
  {
    quote:
      "Don't alow your self to br victim. Take control of your life. Let go of people who serve you no good. Start doing things to make you happy.",
    author: "Reyna Biddy",
  },
  {
    quote:
      "If you spend too much time thinking about a thing, you'll never get it done.",
    author: "Bruce Lee",
  },
  {
    quote:
      "You don't have to control your thoughts. You just hae to stop letting them control you.",
    author: "Dan Millman",
  },
  {
    quote:
      "Isn't it nice to think that tomorrow is a new day with no mistake in it yet?",
    author: "L.M.Montgomery",
  },
  {
    quote: "Investment in travel is an investment in yourself.",
    author: "Matthew Karsten",
  },
];

const quote = document.querySelector(".quote");
const author = document.querySelector(".author");
const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;
