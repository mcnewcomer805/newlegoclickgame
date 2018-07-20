import React, {Component} from "react";
import characters from "./characters.json"
import Characters from "./components/legocharacters";
import Header from "./components/Header";
import Footer from "./components/Footer";
// import "./App.css"


class App extends Component{
  state={
    characters,
    score:0,
    highscore:"",
    clickedArray:[],
  }


  grabId=(id)=>{
    //make sure ID is grabbed
    console.log(id)
   
   //have characters re-shuffle thru the randomizer everytime
    var hasMatch=false;
    if(this.state.clickedArray.indexOf(id) === -1){
      this.state.clickedArray.push(id);
      this.setState({score:this.state.score+1, highscore:this.state.highscore})}
                                        
      else{console.log("try again")}
     // if(this.state.clickedArray.length >= 2)
    

      }
  

  //shuffle array method
   shuffleArray(array){
    let i=array.length-1;
    for(;i >0;i--){
      const j=Math.floor(Math.random()*(i+1))
      const temp=array[i];
      array[i]=array[j];
      array[j]=temp;
    }
    return array;
  }

render(){
  // randomize the character array
  var mixedCharacters=this.shuffleArray(this.state.characters)
  return(

    <div>
      <Header score={this.state.score}
              highscore={this.state.highscore} />
              <div className='container'>
               <div className='row'>
  
      {mixedCharacters.map(character=>(
        <Characters image={character.image}
                    key={character.id}
                    id={character.id}
                    grabId={this.grabId} />

      ))}
       </div>
      </div>
      <Footer/>
      </div>
  )
}
}

export default App;


