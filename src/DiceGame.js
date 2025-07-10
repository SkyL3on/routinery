import React, { useState, useEffect } from 'react';
import RollDice from './RollDice';
// import Timer from './Timer';
// import Dice from './Dice';
import './DiceGame.css';

{}
const DiceGame = ( { setChampionActivity = () => {}, options = [], setRolling = () => {} ,} ) => {
  const [userInput, setUserInput] = useState(0);
  const [diceResults, setDiceResults] = useState("Let's Roll");
  const [diceNewResults, setDiceNewResults] = useState(0);
  const [rolledNumbers, setRolledNumbers] = useState(new Set());
  const [timerId, setTimerId] = useState(null);
  const [currentDate, setCurrentDate] = useState(new Date);
  const [randomObject, setRandomObject] = useState(
      {
        routine: "-----------------Meditate-----------------",
        weight: 1,
        displayDetails: 0,
        activity: [
          { activityname: "Let's Roll", duration: 1, rollEvent: 1, activityimage: require('./assetsdice/dice.png')},
        ]
      }
  );
  const [rollTimes, setRollTimes] = useState();
  const [clickedOnRoll, setclickedOnRoll] = useState(0);

  useEffect(() => {
    // const storedNumbers = localStorage.getItem('rolledNumbers');
    // if (storedNumbers) {
    //   setRolledNumbers(new Set(JSON.parse(storedNumbers)));
    // }

    // Clear timer on unmount
    // return () => clearTimeout(timerId);
    handleRoll();
  }, []);

  const weightedRandomObject = (options) => {
    // Calculate the total weight
    const totalWeight = options.reduce((sum, option) => sum + option.weight, 0);

    // Generate a random number between 0 and the total weight
    let randomNum = Math.random() * totalWeight;

    // Iterate through the options and subtract weights
    for (let i = 0; i < options.length; i++) {
      randomNum -= options[i].weight;
      if (randomNum < 0) {
        return options[i];
      }
    }
  }

  // Example usage
  // const options = [
  //   { key: 1, activity: "Let's get Reading", weight: 15, image: require('./assets/books.jpeg') },
  //   { key: 2, activity: "Meditate and Pranayam", weight: 10, image: require('./assets/meditate.jpeg') },
  //   { key: 3, activity: "It's RockOn Time !!", weight: 15, image: require('./assets/guitar.jpeg') },
  //   { key: 4, activity: "Binge'O Clock", weight: 10, image: require('./assets/binge.jpeg') },
  //   { key: 5, activity: "Balcomfy", weight: 7, image: require('./assets/balcony.jpeg') },
  //   { key: 6, activity: "Let's Snooz for a while", weight: 3, image: require('./assets/nap.jpeg') },
  //   { key: 7, activity: "Gimme Gimme Gimme some Music", weight: 7, image: require('./assets/music.jpeg') },
  //   { key: 8, activity: "Push Pull...Push Pull ", weight: 10, image: require('./assets/exercise.jpeg') },
  //   { key: 9, activity: "Dil Garden Garden Ho Gaya", weight: 7, image: require('./assets/garden.jpeg') },
  //   { key: 10, activity: "Coffee and Boo", weight: 10, image: require('./assets/coffee.jpeg') },
  //   { key: 11, activity: "Write Fire on Water", weight: 3, image: require('./assets/write.jpeg')},
  //   { key: 12, activity: "Ping the OGs", weight: 3, image: require('./assets/og.jpeg')},
  //   { key: 13, activity: "Oh Cleano and Organizo thy Roomo", weight: 3, image: require('./assets/clean.jpeg')},
  // ];




  const handleRoll = () => {
    // if (rolledNumbers.size === 6) {
    //   setDiceNewResults(1);
    //   return;
    // }
    console.log("Handle roll called:");
    setUserInput(1);
    console.log("edwed", userInput)

    const randomObject = weightedRandomObject(options);
    setRandomObject(randomObject);
    console.log("Random object selected:", randomObject);

    // let newRoll = Math.floor(Math.random() * 6) + 1; // Generate random number (1-6)
    // while (rolledNumbers.has(newRoll)) {
    //   newRoll = Math.floor(Math.random() * 6) + 1
    // }
    // setRolledNumbers(rolledNumbers.add(newRoll));

    // let result;
    // switch (newRoll) {
    //   case 1:
    //     result = 'Meditate, Pranayam, Yoga, Exercise';
    //     break;
    //   case 2:
    //     result = 'Play Guitar';
    //     break;
    //   case 3:
    //     result = 'Take A Nap';
    //     break;
    //   case 4:
    //     result = "It's Binge a Clock"
    //     break;
    //   case 5:
    //     result = 'Play some music';
    //     break;
    //   case 6:
    //     result = "It's Reading Time";
    //     break;
    //   default:
    //     result = 'Unexpected error!';
    // }

    //const timestamp = new Date().toLocaleString(); // Capture timestamp
    //   setDiceResults([...diceResults, { result, timestamp }]);
    console.log("huya ", randomObject)
    setDiceResults(randomObject.activity[0].activityname)
    
    // localStorage.setItem('rolledNumbers', JSON.stringify([...rolledNumbers])); // Update local storage
  };

  const handleOnClick = () => {
    setclickedOnRoll(clickedOnRoll+1)
  } 
 
  const handleReset = () => {
    setUserInput(0);
    setDiceNewResults(0);
    setRolledNumbers(new Set());
    setDiceResults("Let's Roll")
    setRandomObject({ key: 0, activity: "Let's Roll", weight: 60, image: require('./assetsdice/dice.png') });
    //localStorage.removeItem('rolledNumbers'); // Clear local storage on reset
  };
  // const getWeightedFace = () => {
  //   const chosenOption = weightedRandomObject(options);
  //   return chosenOption.key;
  // };

  return (
    <div className="div-2">
      {/* <input type="text" value={userInput} onChange={handleInputChange} /> */}
      <div className="welcome" >
        {rollTimes ?

          <div className="logo is-animetion">
            <span>R</span>
            <span>o</span>
            <span>l</span>
            <span>l</span>
            <span>i</span>
            <span>n</span>
            <span>g</span>
            <span>&nbsp;</span>
            <span>&nbsp;</span>
            <span>i</span>
            <span>n</span>
            <span>&nbsp;</span>
            <span>&nbsp;</span>
            <span>t</span>
            <span>h</span>
            <span>e</span>
            <span>&nbsp;</span>
            <span>&nbsp;</span>
            <span>d</span>
            <span>e</span>
            <span>e </span>
            <span>p</span>
          </div>
          :
          <div className="welcometext" onClick={handleOnClick}>
            {diceResults}
          </div>}
      </div>
      <div className="dice2"  >
        <RollDice handleRoll={handleRoll} randomObject={randomObject} options={options} rollTimes={rollTimes} setRollTimes={setRollTimes} clickedOnRoll={clickedOnRoll} setChampionActivity={setChampionActivity} />
      </div>
      {/* <div className="div-4">
        <button  className="but-4" onClick={handleRoll}><div className="but-5">Roll</div></button>
        <button className="but-4"onClick={handleBye}>Bye</button>
      </div> */}

      {/*<button className="but-4" onClick={handleReset}><div className="but-5">Reset</div></button>*/}
    </div>

  );
};

export default DiceGame;
