import React from "react";

const style={
     header:{
         backgroundColor:'blue',
         color:'white',
     }
}
const Header=(props)=>{
    return(
        <div className='col-md-12' style={style.header}><h1>Lego Click Game</h1><h3 className='scores'> Score:{props.score}| HighScore:{props.highscore}</h3></div>

    )
}

export default Header