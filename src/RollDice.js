import './RollDice.css';
import React, { useState, useEffect } from 'react';



const RollDice = ({handleRoll = () => {}, randomObject = {}, rollTimes = 100, setRollTimes= () => {}, clickedOnRoll=0, setChampionActivity = ()=> {} }) => {
  const faces = 6;
  const maxRollTimes = 25;


  const [intrvl, setIntrvl] = useState();
  const [diceFace, setDiceFace] = useState(1);
  const [btnDisabled, setBtnDisabled] = useState(false);

  useEffect(() => {
    if (rollTimes === 0) {
      clearInterval(intrvl);
      setChampionActivity(randomObject);
      setBtnDisabled(false);
    }
  });
  

  

  const RolldiceFunction = () => {
    handleRoll();
    setBtnDisabled(true);
    clearInterval(intrvl);
    // let counter = Math.floor((Math.random() * maxRollTimes) + 1);
    let counter = maxRollTimes;
    setRollTimes(counter);
    const interval = setInterval(() => {
      setDiceFace(Math.floor(Math.random() * faces) + 1);
      counter--;
      setRollTimes(counter);
     if (counter <= 0 ) {
       console.log("randomObject", randomObject)
     };
    }, 200);
    console.log("qsdqdef",randomObject?.image )
    setIntrvl(interval);
  }

  useEffect(() => {
    if(clickedOnRoll) {
      console.log("trigger", clickedOnRoll)
      RolldiceFunction()
    }

  },[clickedOnRoll]);

  
  useEffect(() => {
    RolldiceFunction();
  },[]);
  
  
  const dice = (
    <div className="dice-container" onClick={RolldiceFunction} > 
      <div className={`dice face-${rollTimes ? diceFace : 0}`}>
              {rollTimes ? 
                  <>
                
                          <div className="face-1">
                            {/* <div className="dot-container">
                              <div className="dot"></div>
                            </div> */}
                             <img src={require('./assetsdice/3xhumed-Mega-Games-Pack-31-Dragon-Age-Origins-new-4.256.png')} alt="React Image" className="img-1" />
                          </div>
                          <div className="face-3">
                            {/* <div className="dot-container">
                              <div className="dot"></div>
                              <div className="dot"></div>
                              <div className="dot"></div>
                            </div> */}
                            <img src={require('./assetsdice/Iconarchive-Cute-Animal-Cute-Tiger.512.png')} alt="React Image" className="img-1" />
                          </div>
                          <div className="face-4">
                            {/* <div className="dot-container">
                              <div className="dot"></div>
                              <div className="dot"></div>
                              <div className="dot"></div>
                              <div className="dot"></div>
                            </div> */}
                            <img src={require('./assetsdice/Iconarchive-Cute-Animal-Cute-Monkey.512.png')} alt="React Image" className="img-1" />
                          </div>
                          <div className="face-2">
                            {/* <div className="dot-container">
                              <div className="dot"></div>
                              <div className="dot"></div>
                            </div> */}
                            <img src={require('./assetsdice/Iconarchive-Cute-Animal-Cute-Dog.512.png')} alt="React Image" className="img-1" />
                          </div>
                          <div className="face-5">
                            {/* <div className="dot-container">
                              <div className="dot"></div>
                              <div className="dot"></div>
                              <div className="dot"></div>
                              <div className="dot"></div>
                              <div className="dot"></div>
                            </div> */}
                            <img src={require('./assetsdice/Iconarchive-Cute-Animal-Cute-Panda.512.png')} alt="React Image" className="img-1" />
                          </div>
                          <div className="face-6">
                            {/* <div className="dot-container">
                              <div className="dot"></div>
                              <div className="dot"></div>
                              <div className="dot"></div>
                              <div className="dot"></div>
                              <div className="dot"></div>
                              <div className="dot"></div>
                            </div> */}
                            <img src={require('./assetsdice/Iconarchive-Cute-Animal-Cute-Whale.512.png')} alt="React Image" className="img-1" />
                          </div>
                </> : 
                        <div className="face-final">
                          <img src={randomObject?.activity[0].activityimage} alt="React Image" className="img-2" />
                        </div>
              }

        </div>
    </div >
      );
 
      const rollButton = (
      <button className="dan-btn dan-btn--default" disabled={btnDisabled} onClick={RolldiceFunction}>
        {btnDisabled}
        Roll Dice
      </button>
      );

      return (
      <div className="main-container" >
        <div className="main-dice-container">
          {dice}
        </div>
        {/* <div className="button-container">
          {rollButton}
        </div> */}
      </div>
      )
}

      export default RollDice;