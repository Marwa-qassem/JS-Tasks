var qouteOutPut = document.getElementById("qoute");
var authorOutPut = document.getElementById("authorQout");

var qouteArr = [
    {
        data : "“Be yourself; everyone else is already taken.”" ,
        author : "― Oscar Wilde"
    },
    
    {
        data : "“Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.”" ,
        author : "― Albert Einstein"
    },
    {
        data : "“If you want to know what a man's like, take a good look at how he treats his           inferiors, not his equals.”" ,
        author : "― J.K. Rowling, Harry Potter and the Goblet of Fire"
    },
    {
        data : "“In three words I can sum up everything I've learned about life: it goes on.”" ,
        author : "― Robert Frost"
    },
    {
        data : "“A friend is someone who knows all about you and still loves you.”" ,
        author : "― Elbert Hubbard"
    },
    {
        data : "“I've learned that people will forget what you said, people will forget what you did, but people will never forget how you made them feel.”" ,  
        author : "― Maya Angelou"
    },
    {
        data : "“To live is the rarest thing in the world. Most people exist, that is all.”" ,
        author : "― Oscar Wilde"
    },
    {
        data : "“It is better to be hated for what you are than to be loved for what you are not.”" ,
        author : "― Andre Gide"
    },
]


function changQout(){
    var temp =""
    temp = qouteArr[Math.floor(Math.random() * qouteArr.length)]
    
    qouteOutPut.innerHTML = temp.data;
    authorOutPut.innerHTML = temp.author;
  
    console.log(temp.data , temp.author);
}

