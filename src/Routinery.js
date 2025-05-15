import React, { useState, useEffect } from 'react';
import ActiveRoutine from './ActiveRoutine';
import'./Routinery.css';


const Routinery = () => {
  const [activeRoutine, setActiveRoutine] = useState(0)
  
  useEffect(() => {
  }, []);
  
  const Routines = [
    {
      routine: "-----------------Booosters-----------------",
      activity: [
        { activityname: "Take a Deep Breath", duration: 1, activityimage: require('./activityimages/deepbreath.gif')},
      ]
    },
    {
      routine: "HyperWARP ROUTINE",
      activity: [
        { activityname: "Close whatever you are doing", duration: 1, activityimage: require('./activityimages/shutitdown.gif')},
        { activityname: "Take a Deep Breath, and use LLama", duration: 5, activityimage: require('./activityimages/llama.gif')},
        { activityname: "Stand Up from your desk", duration: 1, activityimage: require('./activityimages/standup.gif')},
        { activityname: "Make Coffee, Balcony, Ruizu,  Candles, Portal, MyNoise or Next ", duration: 20, activityimage: require('./activityimages/creative.gif')},
        { activityname: "See DopaMenu and Tether File", duration: 2, activityimage: require('./activityimages/matrix.gif')},
        { activityname: "Just Begin", duration: 1, activityimage: require('./activityimages/hunt.gif')},
      ]
    },
    {
      routine: "Get Going ROUTINE",
      activity: [
        { activityname: "Take a Deep Breath", duration: 1, activityimage: require('./activityimages/deepbreath.gif')},
        { activityname: "Turn on the Lights", duration: 5, activityimage: require('./activityimages/turnonlight.gif')},
        { activityname: "Boost Dopamine - DopaMenu, Coffee, Candles, Portal, myNoise, Ruizu Only MOtivational ", duration: 1, activityimage: require('./activityimages/turbo.gif')},
        { activityname: "See Your Today's schedule and pick any one Task", duration: 20, activityimage: require('./activityimages/beanpick.gif')},
        { activityname: "Just pick the smallest sub sub subset of the task, which will be a very Big Success", duration: 2, activityimage: require('./activityimages/smalltask.jpeg')},
        { activityname: "Start Focus Timer/Focus Traveller/Forest/Casio any of which you like", duration: 1, activityimage: require('./activityimages/climb.gif')},
        { activityname: "No Pressure for that teeny tiny task and you are done !!", duration: 20, activityimage: require('./activityimages/nopressure.gif')},
        { activityname: "Congratulations on this victory", duration: 20, activityimage: require('./activityimages/congratsbigstep.gif')},
      ]
    },
    {
      routine: "Motivation ROUTINE",
      activity: [
        { activityname: "You spend around 3 whole days per month on Digital Consumption", duration: 1, activityimage: require('./activityimages/consumes.gif')},
        { activityname: "It will never be Enough", duration: 5, activityimage: require('./activityimages/neverenough.gif')},
        { activityname: "The Pain of Discipline or Pain of Regret", duration: 1, activityimage: require('./activityimages/tough.gif')},
        { activityname: "Guilt or Pride", duration: 20, activityimage: require('./activityimages/guiltorpride.gif')},
        { activityname: "Your ageing Grandparents, Parents, Your Friends and Family, Your hopes and Dreams", duration: 2, activityimage: require('./activityimages/biggestfan.gif')},
        { activityname: "Remember Time is a zero Sum Game, Opportunities knock for limited time only", duration: 1, activityimage: require('./activityimages/eminem-lose-yourself.gif')},
        { activityname: "Somebody Somewhere is working to get that Seat and There are only 70 ", duration: 20, activityimage: require('./activityimages/ias.gif')},
        { activityname: "It's a Game of survival !! HUnt Or be Hunted", duration: 20, activityimage: require('./activityimages/survival.gif')},
        { activityname: "Listen to the Eye of the Eagle, Just Begin, cry but begin, crawl but move, Nothing else matters", duration: 20, activityimage: require('./activityimages/eagle.gif')},
      ]
    },
    {
      routine: "-----------------EveryDay-----------------",
      activity: [
        { activityname: "Take a Deep Breath", duration: 1, activityimage: require('./activityimages/deepbreath.gif')},
      ]
    },
    {
      routine: "Morning Routine",
      activity: [
        { activityname: "Drink Water", duration: 1, activityimage: require('./activityimages/drinkwater.gif')}, 
        { activityname: "KapalBhati and Bhastrika", duration: 2, activityimage: require('./activityimages/pranayama.gif')},
        { activityname: "Rub your palms", duration: 1, activityimage: require('./activityimages/palms.gif')},
        { activityname: "Wash Your Face", duration: 2, activityimage: require('./activityimages/washface.gif')},
        { activityname: "Freshen Up, Remove your Phone and come back", duration: 20, activityimage: require('./activityimages/freshenup.gif')},
        { activityname: "Go see Some Sunlight", duration: 20, activityimage: require('./activityimages/sunlight.gif')},
        { activityname: "Check Schedule", duration: 10, activityimage: require('./activityimages/schedule.gif')},
        { activityname: "Just Begin and NO Breakfast or Otherwise till 90 minutes session", duration: 1, activityimage: require('./activityimages/getstarted.gif')},
      ]
    },
    {
      routine: "Breakfast Routine",
      activity: [
        { activityname: "Start a 30 Min Timer", duration: 20, activityimage: require('./activityimages/timer.gif')},
        { activityname: "Only MIlk, paneer and Makhane ( Avoid Tea and Other Breakfast )", duration: 1, activityimage: require('./activityimages/milk.gif')},
        { activityname: "Call for Breakfast", duration: 2, activityimage: require('./activityimages/calldinner.gif')},
        { activityname: "Respect the Timer and Enjoy the Breakfast ", duration: 1, activityimage: require('./activityimages/respect.gif')},
      ]
    },
    {
      routine: "Dinner Routine",
      activity: [
        { activityname: "Review Your Day", duration: 5, activityimage: require('./activityimages/dayreview.gif')},
        { activityname: "Plan your Next Day", duration: 5, activityimage: require('./activityimages/plannext.gif')},
        { activityname: "Diary", duration: 2, activityimage: require('./activityimages/diary.gif')},
        { activityname: "Step By Step Updates", duration: 2, activityimage: require('./activityimages/updatesstep.gif')},
        { activityname: "Push Ups", duration: 2, activityimage: require('./activityimages/pushups.gif')},
        { activityname: "Squats", duration: 2, activityimage: require('./activityimages/squats.gif')},
        { activityname: "Call for Dinner", duration: 1, activityimage: require('./activityimages/dinnercall.gif')},
        { activityname: "Fill water Bottles and Check Back", duration: 10, activityimage: require('./activityimages/waterbottles.gif')},
        { activityname: "Dinner Time", duration: 45, activityimage: require('./activityimages/dinnertime.gif')},
        { activityname: "Check Habitica, Crossy and Forest", duration: 20, activityimage: require('./activityimages/habitica.gif')},
        { activityname: "Remember to Sleep By 11:30", duration: 1, activityimage: require('./activityimages/bedtimeready.gif')},
      ]
    },
    {
      routine: "Night Routine",
      activity: [
        { activityname: "Turn Off Electronics", duration: 1, activityimage: require('./activityimages/shutdown.gif')},
        { activityname: "Warm Water", duration: 5, activityimage: require('./activityimages/warmwater.gif')},
        { activityname: "Triphala", duration: 10, activityimage: require('./activityimages/triphala.gif')},
        { activityname: "Clean the desk", duration: 1, activityimage: require('./activityimages/cleandesk.gif')},
        { activityname: "Set Up First Thing Tomorrow and Plan if not Already", duration: 5, activityimage: require('./activityimages/plantomorrow.gif')},
        { activityname: "Massage Foot", duration: 10, activityimage: require('./activityimages/massagefoot.gif')},
        { activityname: "Brush, Set Alarm and Check Back Here", duration: 15, activityimage: require('./activityimages/brush.gif')},
        { activityname: "Good Night !! Have Gratitude, Be Proud of your efforts Today", duration: 1, activityimage: require('./activityimages/night.gif')},
      ]
    },
  ];


  const resetActiveRoutine = () => {
    setActiveRoutine(0);
  }
  const handleRoutineClick = (routine) => {
    setActiveRoutine(routine) ;
  }
// "start": "react-scripts start",
  return (
    <div className="rootdivision">
        { !activeRoutine ? 
          Routines.map((select, index) => (
              <div className="routines button-30" key={index} onClick={() => handleRoutineClick(select)}>
                  {select.routine}
              </div> )
          )
            :  <ActiveRoutine activeRoutine={activeRoutine} resetActiveRoutine={resetActiveRoutine} />
        }
    </div>

  );
};


export default Routinery;
