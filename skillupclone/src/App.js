import './App.css';
import {NavBar}  from "./components"
import {useEffect } from 'react';
function App() {
 
  
  useEffect(()=>{
    // loops through the animations of the 3 images the css version of this doesnt allow me to use forward 
    let sidePic1 =document.querySelector('.List-container li:nth-child(1)'),
      sidePic2= document.querySelector('.List-container li:nth-child(2)'),
      sidePic3= document.querySelector('.List-container li:nth-child(3)');
    let sidePics= [[sidePic1,2000],[sidePic2,2200],[sidePic3,2400]]; 
  for(let value of sidePics){
    console.log(value);
    setTimeout(()=>{
      value[0].style.animation = "popIn 1s ease-in  "
    }, value[1])
    setTimeout(()=>{
      value[0].style.opacity = "1"
    },value[1]+500);
  } 
    
    
    // array of the paragraphs class names to animation and the delay before they are animated
    let Paragraph =[['.Paragraph',1000],['.Para-inner',2500]]
    //for loop to iterate through the different className with faded in word by word animations
    for(let value of Paragraph){
      let sentencesForFading = document.querySelectorAll(value[0]);
      sentencesForFading.forEach(sentence=>{
        sentence.innerHTML = sentence.textContent.split(' ').map(word=>'<p class="faded-word">'+word+'</p>').join(' ');
      });
      const wordsForFading = document.querySelectorAll('.faded-word');
      wordsForFading.forEach(word=>{
        word.addEventListener('transitionend', startNextWordAnimation);
        
      });
      
      //either show the next word, or start the next sentence
      function startNextWordAnimation(e){
        console.log(e)
        const nextWord = e.target.nextElementSibling;
        console.log(nextWord);
        if( nextWord ){  
            nextWord.classList.add('faded-activated');
            e.target.removeEventListener('transitionend', startNextWordAnimation);
        } else {
          const nextSentence = e.target.parentElement.nextElementSibling;
          if( nextSentence && nextSentence.classList.contains('Paragraph') ){
            startSentence(nextSentence);			
          } else {
            console.log('last sentence complete');
          }
        }
      }
      
      function startSentence(sentenceElement){
        if(!sentenceElement){
          return;
        }
        setTimeout(()=>{
          sentenceElement.querySelector('.faded-word').classList.add('faded-activated');	
        }, value[1])
      }
      
      //querySelector grabbing the first matching queried element
      startSentence(document.querySelector(value[0]));
    }
  
  },[]);

  return (
    <div className="App">
      <div className="Container">
        <NavBar/>
         <div className="Grid-container">
          <div className="Img-main"></div>
          <div className="Title"><span className="Order-1"> Learn </span> <span className="Order-2"> new </span> <span className="Order-3">skills. </span><span className="Order-4">Easily </span> </div>
          <p className="Paragraph" > We give you unlimited access to best courses from best specialist to learn thousands of practical lessons in a 
          multitude of fields.  </p>
          <form>
          <input type="text" placeholder="Find your passion right now"/>
          <svg width="90" height="90" viewBox="0 0 90 90" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle id="Ellipse 1" cx="45" cy="45" r="45" fill="#D9D9D9"/>
          <path id="Arrow 1" d="M75.0607 46.0607C75.6464 45.4749 75.6464 44.5251 75.0607 43.9393L65.5147 34.3934C64.9289 33.8076 63.9792 33.8076 63.3934 34.3934C62.8076 34.9792 62.8076 35.9289 63.3934 36.5147L71.8787 45L63.3934 53.4853C62.8076 54.0711 62.8076 55.0208 63.3934 55.6066C63.9792 56.1924 64.9289 56.1924 65.5147 55.6066L75.0607 46.0607ZM15 46.5H74V43.5H15V46.5Z" fill="black"/>
            </svg>
          </form>
          <ul className="List-container">
            <li>img1</li>
            <li>Img2</li>
            <li>Img3</li>
          </ul>
          <div className="Container-inner">
            <div className="Stat"><h1>100+</h1>
              <p>FIELDS OF STUDY</p></div>
              <div><h2 className="Sub-title">Choose what you <span>want</span> to learn </h2>
              <p className="Para-inner" >The best specialists from all over the world are waiting to share their knowledge with you .Don't put it off</p></div>
          </div>
         </div>
      </div>
    </div>
  );
}

export default App;
