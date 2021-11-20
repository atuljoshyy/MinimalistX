async function app() {
  main = document.getElementById('main')
  options = document.getElementById('options')
  titleMain = document.getElementById('titleMain')
  titleSub = document.getElementById('titleSub')
  creditName = document.getElementById('credit')

    const getNewQuote = async () =>
    {
        //api for quotes
        var url="https://type.fit/api/quotes";    
    
        // fetch the data from api
        const response = await fetch(url);
        //convert response to json and store it in quotes array
        const allQuotes = await response.json();
    
        // Generates a random number between 0 and the length of the quotes array
        const quoteIndx = Math.floor(Math.random()*allQuotes.length);
    
        //Store the quote present at the randomly generated index
        const quote = allQuotes[quoteIndx].text;
    
        //Store the author of the respective quote
        const auth = allQuotes[quoteIndx].author;
    
        if(auth == null)
        {
            author = "Anonymous";
        }
    
        //function to dynamically display the quote and the author
        titleMain.innerHTML = quote;
        titleSub.innerHTML = auth;
        var colors = ['#FF7878', '#F9F3DF','FFC4E1','#C1FFD7', '#F0D9FF', '#F2E1C1',]
        function randomColor(){
          //randomly generate a color from the colors array
          var color = colors[Math.floor(Math.random()*colors.length)];
          titleSub.style.color = color;
          creditName.style.color = color;

          console.log(color);
        }
        randomColor();
    }
    getNewQuote();
}

app()
