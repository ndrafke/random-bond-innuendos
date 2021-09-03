import React, {useState, useEffect} from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';


function SleazyBond() {

  const quotes= [
    {quote: "Honey: Are you looking for shells too?   Bond: No, I'm just looking.", author: "- Dr. No (1962)"},
    {quote: "Tatiana: Thank you, but I think my mouth is too big.   Bond: No, it's the right size... for me, that is.", author: "- From Russia With Love (1963)"},
    {quote: "Pussy Galore: My name is Pussy Galore.   Bond: I must be dreaming...", author: "- Goldfinger (1964)"},
    {quote: "Fiona: \(sees Bond walk into the bathroom while she is bathing\) Aren't you in the wrong room, Mr. Bond?     Bond: Not from where I'm standing.", author: "- Thunderball (1965)"},
    {quote: "Moneypenny: James, how will you recognize her?     Bond: Can't miss. She has two moles on her left thigh.", author: "- Thunderball (1965)"},
    {quote: "Helga Brandt: I've got you now. \(Bond is tied to a chair\)    Bond: Well, enjoy yourself.", author: "- You Only Live Twice (1967)"},
    {quote: "Bond: That's quite a nice little nothing you're almost wearing. I approve.", author: "- Diamonds Are Forever (1971)"}, {quote: "Tiffany Case: Which do you prefer \(blondes or brunettes\)?    Bond: Well, as long as the collar and the cuffs match...", author: "Diamonds Are Forever (1971)"}, {quote: "Rosie Carver: Oh, I should have never gotten into any of this! I'm going to be completely useless to you.   Bond: Well, I'm sure we'll be able to lick you into shape.", author: "- Live and Let Die (1973)"}, {quote: "Bond: Miss Anders... I didn't recognize you with your clothes on.", author: "- The Man With The Golden Gun (1974)"}, {quote: "Mary Goodnight: I'll keep the wine properly chilled.    Bond: And everything else warm, I trust.", author: "- The Man With The Golden Gun (1974)"}, {quote: "Bond: I approve of your uniform. Tight in all the right places, not too many buttons.", author: "- The Man With The Golden Gun (1974)"},
    {quote: "\(Bond and Anya are caught making love\) Minister of Defense: Bond! What do you think you're doing!?   Bond: Keeping the British end up, sir.", author: "- The Spy Who Loved Me (1977)"},{quote: "Anya: It's getting cold.   Bond: I say, is there anything I can do to warm you up?", author: "- The Spy Who Loved Me (1977)"}, {quote: "Bond: Now put your clothes back on and I'll buy you an ice cream.", author: "- For Your Eyes Only (1981)"}, {quote: "Magda: You have a very good memory for faces.   Bond: ...And figures.",  author: "- Octopussy (1983)"}, {quote: "Magda: It's for my scrapbook, I collect memories.    Bond: Well, let's get on with making a few.", author: "- Octopussy (1983)"}, {quote: "Jenny Flex: \(speaking of horseriding\) I love an early morning ride!   Bond: I'm an early riser myself...", author: "- A View To A Kill (1985)"},{quote: "Zorin: You slept well?   Bond: A little restless, but I got off eventually.", author: "- A View To A Kill (1985)"}, {quote: "Bond: I'll do anything for a woman with a knife.", author: "Licence To Kill (1989)"}, {quote: "Bond: She always did enjoy a good squeeze.", author: "- Goldeneye (1995)"},{quote: "Xenia: You don't need the gun, commander.    Bond: That depends on your definition of safe sex.", author: "- Goldeneye (1995)"},{quote: "Moneypenny: You always were a cunning linguist, James.", author: "- Tomorrow Never Dies (1997)"},{quote: "Moneypenny: \(phoning\) Where are you James?    Bond: \(\in bed with a Danish professor) Oh, Moneypenny. Um. I'm just up here at Oxford, brushing up on a little Danish.", author: "- Tomorrow Never Dies (1997)"},{quote: "Bond: \(to Christmas Jones\) I thought Christmas only came once a year.", author: "- The World Is Not Enough (1999)"},{quote: "Julieta: Would you like to check my figures?     Bond: Oh I'm sure they're perfectly rounded.", author: "- The World Is Not Enough (1999)"},{quote: "Christmas Jones: I gotta get it back or someone's gonna have my ass.    Bond: First things first.", author: "- The World Is Not Enough (1999)"},{quote: "Verity: I see you handle your weapon well.    Bond: I've been known to keep my tip up.", author: "- Die Another Day (2002)"},{quote: "Vesper Lynd: Makes me feel reborn.    Bond: If you had just been born, wouldn't you be naked?", author: "- Casino Royale (2006)"},{quote: "Vesper Lynd: I'm the money.    Bond: Every penny.", author: "- Casino Royale (2006)"},{quote: "Mathis: I think she has handcuffs.    Bond: I hope so.", author: "- Quantum Of Solace (2008)"}
  ];


const [quote, setQuote] = useState("");
const [author, setAuthor] = useState("");

useEffect(() =>{
  newQuote();
}, []);

const getIndex = (list) => {
  return Math.floor(Math.random() * list)
} 

const newQuote = () => {
let randomIndex = getIndex(quotes.length);
setQuote(quotes[randomIndex].quote);
setAuthor(quotes[randomIndex].author);
}


const Content = (props) => {  
  return (
    <div>
      <blockquote id="text">
      <span className="quote">{props.quote}</span>
      </blockquote>
      <figcaption id="author">
      <p>{props.author}</p>
      </figcaption> 
    </div>
  );
}

const TwitterLink = (props) => {
  return (
     <a id="tweet-quote" className="btn btn-primary" href={"https://twitter.com/intent/tweet?text=" + props.quote + " -" + props.author} target="_blank">Tweet!</a>
   );
  }

  return (
    <div className="card text-center bg-light text-dark" id="quote-box">
        <div className="headline card-header">
          <h2>Sleazy James Bond Movie Quotes</h2></div>
        <div className="card-main card-body">
          <div className="bond-quote row bg-light text-dark justify-content-center align-items-center">
            <Content quote={quote} author={author} />
          </div>
          <div className="foot card-footer row align-items-center">
            <div className="col">
              <TwitterLink author={author} quote={quote} />
            </div>
            <div className="col">
              <button id="new-quote" onClick={newQuote} className="btn btn-success target">Next!</button>
            </div>
          </div>
        </div>
      </div>
  );
}

export default SleazyBond;
