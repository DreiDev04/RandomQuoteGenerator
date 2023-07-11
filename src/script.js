

const setQuote = (theQuote) => { 
   $("#text").text(theQuote);

};

const setAuthor = (theAuthor) => {
   $("#author").text("- " + theAuthor);

};

const setBG_color = () => {
  const arrColor = ["#331D2C", "#F1C93B", "#1D5B79", "#EF6262", "#45CFDD", "#A76F6F", "#FF9EAA"];
  const randomInteger = Math.floor(Math.random() * arrColor.length);
  
  $(".bg").css("background-color", arrColor[randomInteger]);
  $(".text").css("color", arrColor[randomInteger]);
  $(".button").css("background-color", arrColor[randomInteger]);
};

const getQuote = () => {
  fetch("https://api.quotable.io/random")
    .then((response) => response.json())
    .then((data) => {
      setQuote(data.content);
      setAuthor(data.author);
      setBG_color();
    });
  
  // console.log("color changes");
};

$(document).ready(function() {
  getQuote();
  $("#new-quote").on('click', getQuote);
});
