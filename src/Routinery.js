import React, { useState, useEffect } from 'react';
import ActiveRoutine from './ActiveRoutine';
import DiceGame from "./DiceGame";
import'./Routinery.css';


const Routinery = () => {
  const [activeRoutine, setActiveRoutine] = useState({});
  const [isHomePage, setIsHomePage] = useState(true);
  const [rolling, setRolling] = useState(true);
  const [currentMode, setCurrentMode] = useState("homepage");
  const [rollList, setRollList] = useState([]);
  
  console.log(activeRoutine, "active routine")
  
  
  useEffect(() => {
    setCurrentMode("homepage")
  },[]);
  
  function getRandomNumber(max) {
    // Ensure max is a positive integer for valid random number generation.
    // Although for this specific request, max is fixed at 100.
    if (max < 1 || !Number.isInteger(max)) {
      console.error("Error: 'max' must be an integer greater than or equal to 1.");
      return NaN; // Return Not-a-Number to indicate an error
    }
    return Math.floor(Math.random() * max) + 1;
  }

  /**
   * Generates a string for a motivation image URL with a random number.
   * The random number will be between 1 and a predefined maximum of 100.
   *
   * @returns {string} The formatted image URL string, e.g., './activityimages/motivation57.gif'.
   */
  function generateMotivationImageURL() {
    // Define the maximum value for the random number.
    // This value is fixed as per your request.
    const MAX_MOTIVATION_IMAGES = 21;

    // Generate a random number between 1 and MAX_MOTIVATION_IMAGES.
    const randomNumber = getRandomNumber(MAX_MOTIVATION_IMAGES);

    // Construct the URL string using a template literal.
    // This inserts the randomNumber directly into the string.
   // return require(imagePath) ;
    return require(`./motivation/motivation${randomNumber}.gif`);
    //${randomNumber}
  }

  const rollRoutines = [
    {
      routine: "-----------------Meditate-----------------",
      weight: 10,
      displayDetails: 0,
      activity: [
        { activityname: "Stand Up", activityDescription:"" ,duration: 1, activityimage: generateMotivationImageURL()},
        { activityname: "Small prep Step for Meditation", activityDescription:"Maybe Use DownDog App, Timer, Candles or Simple Sit on the Aasan" ,duration: 1, activityimage: generateMotivationImageURL()},
        { activityname: "Just Start Meditation", activityDescription:"" ,duration: 5, activityimage: generateMotivationImageURL()},
      ]
    },
    {
      routine: "-----------------Yoga-----------------",
      weight: 10,
      displayDetails: 0,
      activity: [
        { activityname: "Stand Up", activityDescription:"" ,duration: 1, activityimage: generateMotivationImageURL()},
        { activityname: "Put the Chair Inside and expand Yoga Mat", activityDescription:", " ,duration: 1, activityimage: generateMotivationImageURL()},
        { activityname: "Just Start with simple Stretches", activityDescription:"Maybe Use DownDog App, or just do wall slides" ,duration: 5, activityimage: generateMotivationImageURL()},
      ]
    },
    {
      routine: "-----------------Exercise----------------------------------",
      weight: 10,
      displayDetails: 0,
      activity: [
        { activityname: "Stand Up", activityDescription:"" ,duration: 1, activityimage: generateMotivationImageURL()},
        { activityname: "Put the Chair Inside", activityDescription:", " ,duration: 1, activityimage: generateMotivationImageURL()},
        { activityname: "Just Start with a quick Resistance Band Routine", activityDescription:"Maybe Use DownDog App, or just do wall slides" ,duration: 5, activityimage: generateMotivationImageURL()},
      ]
    },
    {
      routine: "-----------------Guitar----------------------------------",
      weight: 10,
      displayDetails: 0,
      activity: [
        { activityname: "Stand Up", activityDescription:"" ,duration: 1, activityimage: generateMotivationImageURL()},
        { activityname: "Put the Chair Inside", activityDescription:", " ,duration: 1, activityimage: generateMotivationImageURL()},
        { activityname: "Just Start Playing the Guitar", activityDescription:"" ,duration: 5, activityimage: generateMotivationImageURL()},
      ]
    },
    {
      routine: "-----------------Books----------------------------------",
      weight: 10,
      displayDetails: 0,
      activity: [
        { activityname: "Pick a Book Right Now", activityDescription:"" ,duration: 1, activityimage: generateMotivationImageURL()},
        { activityname: "Just Read 2 Pages", activityDescription:", " ,duration: 1, activityimage: generateMotivationImageURL()},
      ]
    },
    {
      routine: "-----------------Postures-----------------",
      weight: 10,
      displayDetails: 0,
      activity: [
        { activityname: "Wall slides" , activityDescription:", " ,duration: 2, activityimage: generateMotivationImageURL()},
        { activityname: "Anulom Vilom", activityDescription:"" ,duration: 1, activityimage: generateMotivationImageURL()},
      ]
    },
  ];
  
  const Routines = [
    // {
    //   routine: "-----------------Lucky Box-----------------", // base case for multiple weighted routines
    //   rollEvent: 1,
    //   routineType: 'rolling',
    //   activity:  [
    //     {
    //       routine: "-----------------Meditate-----------------",
    //       weight: 10,
    //       displayDetails: 0,
    //       activity: [
    //         { activityname: "Stand Up", activityDescription:"" ,duration: 1, activityimage: generateMotivationImageURL()},
    //         { activityname: "Small prep Step for Meditation", activityDescription:"Maybe Use DownDog App, Timer, Candles or Simple Sit on the Aasan" ,duration: 1, activityimage: generateMotivationImageURL()},
    //         { activityname: "Just Start Meditation", activityDescription:"" ,duration: 5, activityimage: generateMotivationImageURL()},
    //       ]
    //     },
    //     {
    //       routine: "-----------------Yoga-----------------",
    //       weight: 10,
    //       displayDetails: 0,
    //       activity: [
    //         { activityname: "Stand Up", activityDescription:"" ,duration: 1, activityimage: generateMotivationImageURL()},
    //         { activityname: "Put the Chair Inside and expand Yoga Mat", activityDescription:", " ,duration: 1, activityimage: generateMotivationImageURL()},
    //         { activityname: "Just Start with simple Stretches", activityDescription:"Maybe Use DownDog App, or just do wall slides" ,duration: 5, activityimage: generateMotivationImageURL()},
    //       ]
    //     },
    //     {
    //       routine: "-----------------Exercise----------------------------------",
    //       weight: 10,
    //       displayDetails: 0,
    //       activity: [
    //         { activityname: "Stand Up", activityDescription:"" ,duration: 1, activityimage: generateMotivationImageURL()},
    //         { activityname: "Put the Chair Inside", activityDescription:", " ,duration: 1, activityimage: generateMotivationImageURL()},
    //         { activityname: "Just Start with a quick Resistance Band Routine", activityDescription:"Maybe Use DownDog App, or just do wall slides" ,duration: 5, activityimage: generateMotivationImageURL()},
    //       ]
    //     },
    //     {
    //       routine: "-----------------Guitar----------------------------------",
    //       weight: 10,
    //       displayDetails: 0,
    //       activity: [
    //         { activityname: "Stand Up", activityDescription:"" ,duration: 1, activityimage: generateMotivationImageURL()},
    //         { activityname: "Put the Chair Inside", activityDescription:", " ,duration: 1, activityimage: generateMotivationImageURL()},
    //         { activityname: "Just Start Playing the Guitar", activityDescription:"" ,duration: 5, activityimage: generateMotivationImageURL()},
    //       ]
    //     },
    //     {
    //       routine: "-----------------Books----------------------------------",
    //       weight: 10,
    //       displayDetails: 0,
    //       activity: [
    //         { activityname: "Pick a Book Right Now", activityDescription:"" ,duration: 1, activityimage: generateMotivationImageURL()},
    //         { activityname: "Just Read 2 Pages", activityDescription:", " ,duration: 1, activityimage: generateMotivationImageURL()},
    //       ]
    //     },
    //     {
    //       routine: "-----------------Postures-----------------",
    //       weight: 10,
    //       displayDetails: 0,
    //       activity: [
    //         { activityname: "Wall slides" , activityDescription:", " ,duration: 2, activityimage: generateMotivationImageURL()},
    //         { activityname: "Anulom Vilom", activityDescription:"" ,duration: 1, activityimage: generateMotivationImageURL()},
    //       ]
    //     },
    //   ]
    // },
    {
      routine: "Need a Kick", // base case for single weighted action
      rollEvent: 1,
      routineType: 'rolling',
      activity:  [
          {weight: 10, activity: [{ activityname: "Pride or Shame" ,duration: 1, activityimage: generateMotivationImageURL()}]},
          {weight: 10, activity: [{ activityname: "JUST BEGIN" ,duration: 1, activityimage: generateMotivationImageURL()}]},
          {weight: 10, activity: [{ activityname: "JUST Show up for the class" ,duration: 1, activityimage: generateMotivationImageURL()}]},
          {weight: 10, activity: [{ activityname: "How will this impact my Journey ?" ,duration: 1, activityimage: generateMotivationImageURL()}]},
          {weight: 10, activity: [{ activityname: "Remember Everyday is the Same" ,duration: 1, activityimage: generateMotivationImageURL()}]},
        {weight: 10, activity: [{ activityname: "Go One Morw" ,duration: 1, activityimage: generateMotivationImageURL()}]},
        {weight: 10, activity: [{ activityname: "Panaromic Vision" ,duration: 1, activityimage: generateMotivationImageURL()}]},
        {weight: 10, activity: [{ activityname: "Seize the Day" ,duration: 1, activityimage: generateMotivationImageURL()}]},
        {weight: 10, activity: [{ activityname: "If I had six hours to chop down a tree, I would spend the first four hours sharpening the axe. - Abraham Lincoln (19th Century)" ,duration: 1, activityimage: generateMotivationImageURL()}]},
        {weight: 10, activity: [{ activityname: "Amateurs sit and wait for inspiration, the rest of us just get up and go to work. - Stephen King " ,duration: 1, activityimage: generateMotivationImageURL()}]},
        {weight: 10, activity: [{ activityname: "You may delay, but time will not - Benjamin Franklin (18th Century)" ,duration: 1, activityimage: generateMotivationImageURL()}]},
        {weight: 10, activity: [{ activityname: "We are what we repeatedly do. Excellence, then, is not an act, but a habit. - Aristotle " ,duration: 1, activityimage: generateMotivationImageURL()}]},
        {weight: 10, activity: [{ activityname: "You don't have to be Great to start but you have to start to be Great" ,duration: 1, activityimage: generateMotivationImageURL()}]},
        {weight: 10, activity: [{ activityname: "Be the Eminence in the Shadow : Focus on the MoonLit Only" ,duration: 1, activityimage: generateMotivationImageURL()}]},
        {weight: 10, activity: [{ activityname: "When mere Crawling is the Definition of Success" ,duration: 1, activityimage: generateMotivationImageURL()}]},
        {weight: 10, activity: [{ activityname: "\"If you spend too much time thinking about a thing, you'll never get it done.\" - Bruce Lee" ,duration: 1, activityimage: generateMotivationImageURL()}]},
        {weight: 10, activity: [{ activityname: "The most efficient way to live reasonably is every morning to make a plan of one's day and every night to examine the results obtained.\" - Alexis Carrel (20th Century)" ,duration: 1, activityimage: generateMotivationImageURL()}]},    
        {weight: 10, activity: [{ activityname: "\"Done is better than perfect.\" - Sheryl Sandberg (21st Century)y" ,duration: 1, activityimage: generateMotivationImageURL()}]},
        {weight: 10, activity: [{ activityname: "Don't count the days, make the days count.\" - Muhammad Ali (20th/21st Century)" ,duration: 1, activityimage: generateMotivationImageURL()}]},
        {weight: 10, activity: [{ activityname: "काम-रूपेण कौन्तेय दुष्पुरेणनलेना च" ,duration: 1, activityimage: generateMotivationImageURL()}]},
        {weight: 10, activity: [{ activityname: "Look at your Family Picture !!" ,duration: 1, activityimage: generateMotivationImageURL()}]},
          
      ]
    },
    {
      routine: "30 min - Tell me WhhaaaTTTT", // base case for single weighted action
      rollEvent: 1,
      routineType: 'rolling',
      activity:  [
        {weight: 10, activity: [{ activityname: "Learn and Practice Guitar" ,duration: 1, activityimage: generateMotivationImageURL()}]},
        {weight: 10, activity: [{ activityname: "Read Bhagwat Geeta" ,duration: 1, activityimage: generateMotivationImageURL()}]},
        {weight: 10, activity: [{ activityname: "Read a Book ?" ,duration: 1, activityimage: generateMotivationImageURL()}]},
        {weight: 10, activity: [{ activityname: "Write Mantra in Ram Book" ,duration: 1, activityimage: generateMotivationImageURL()}]},
        {weight: 10, activity: [{ activityname: "Need a Fidget ? Portal, MyNoise, Coffee Break, Llama Nap, Ruizo Music, Light a Candle ?" ,duration: 1, activityimage: generateMotivationImageURL()}]},
        {weight: 10, activity: [{ activityname: "Do the StandUp Routine" ,duration: 1, activityimage: generateMotivationImageURL()}]},
        {weight: 10, activity: [{ activityname: "Do the Sitting Routine" ,duration: 1, activityimage: generateMotivationImageURL()}]},
        {weight: 10, activity: [{ activityname: "Do the Resistance Band Routine" ,duration: 1, activityimage: generateMotivationImageURL()}]},
        {weight: 10, activity: [{ activityname: "Do the Lying Routine" ,duration: 1, activityimage: generateMotivationImageURL()}]},
        {weight: 10, activity: [{ activityname: "Hevy on Dumbell Routine ",duration: 1, activityimage: generateMotivationImageURL()}]},
        {weight: 10, activity: [{ activityname: "DownDog Chair Yoga" ,duration: 1, activityimage: generateMotivationImageURL()}]},
            {weight: 10, activity: [{ activityname: "DownDog a Active Yoga Session" ,duration: 1, activityimage: generateMotivationImageURL()}]},
            {weight: 10, activity: [{ activityname: "DownDog a Active Dumbell Session" ,duration: 1, activityimage: generateMotivationImageURL()}]},
            {weight: 10, activity: [{ activityname: "It's Yoga Nidra Time" ,duration: 1, activityimage: generateMotivationImageURL()}]},
            {weight: 10, activity: [{ activityname: "Guided Meditation" ,duration: 1, activityimage: generateMotivationImageURL()}]},
            {weight: 10, activity: [{ activityname: "Trataka" ,duration: 1, activityimage: generateMotivationImageURL()}]},
            {weight: 10, activity: [{ activityname: "Aum Meditation" ,duration: 1, activityimage: generateMotivationImageURL()}]},
            {weight: 10, activity: [{ activityname: "A Peaceful Nap" ,duration: 1, activityimage: generateMotivationImageURL()}]},
            {weight: 10, activity: [{ activityname: "Procreate some Sketching ?" ,duration: 1, activityimage: generateMotivationImageURL()}]},
            {weight: 10, activity: [{ activityname: "Anulom Vilom, KapalBhati, Bhastrika, Box Breathing" ,duration: 1, activityimage: generateMotivationImageURL()}]},
      ]
    },
      
    {
      routine: "HyperFocuss OUT ROUTINE",
      routineType: 'motivation',
      activity: [
        { activityname: "Close whatever you are doing", duration: 1, activityimage: require('./activityimages/shutitdown.gif')},
        { activityname: "Take a Deep Breath", duration: 5, activityimage: require('./activityimages/llama.gif')},
        { activityname: "Stand Up from your desk", duration: 1, activityimage: require('./activityimages/standup.gif')},
        { activityname: "Turn the Lights On", duration: 2, activityimage: require('./activityimages/matrix.gif')},
        { activityname: "Make Coffee, Balcony, Ruizu,  Candles, Portal, MyNoise or Next ", duration: 20, activityimage: require('./activityimages/creative.gif')},
        { activityname: "Just Begin", duration: 1, activityimage: require('./activityimages/hunt.gif')},
      ]
    },
    // {
    //   routine: "Get Going ROUTINE",
    //   activity: [
    //     { activityname: "Take a Deep Breath", duration: 1, activityimage: require('./activityimages/deepbreath.gif')},
    //     { activityname: "Turn on the Lights", duration: 5, activityimage: require('./activityimages/turnonlight.gif')},
    //     { activityname: "Boost Dopamine - DopaMenu, Coffee, Candles, Portal, myNoise, Ruizu Only MOtivational ", duration: 1, activityimage: require('./activityimages/turbo.gif')},
    //     { activityname: "See Your Today's schedule and pick any one Task", duration: 20, activityimage: require('./activityimages/beanpick.gif')},
    //     { activityname: "Just pick the smallest sub sub subset of the task, which will be a very Big Success", duration: 2, activityimage: require('./activityimages/smalltask.jpeg')},
    //     { activityname: "Start Focus Timer/Focus Traveller/Forest/Casio any of which you like", duration: 1, activityimage: require('./activityimages/climb.gif')},
    //     { activityname: "No Pressure for that teeny tiny task and you are done !!", duration: 20, activityimage: require('./activityimages/nopressure.gif')},
    //     { activityname: "Congratulations on this victory", duration: 20, activityimage: require('./activityimages/congratsbigstep.gif')},
    //   ]
    // },
    {
      routine: "Motivation ROUTINE",
      routineType: 'motivation',
      activity: [
        { activityname: "You spend around 3 whole days per month on Digital Consumption", activityDescription: "You spend around 3 whole days per month on Digital Consumption", duration: 1, activityimage: require('./activityimages/consumes.gif')},
        { activityname: "It will never be Enough", activityDescription:"It will never be Enough", duration: 5, activityimage: require('./activityimages/neverenough.gif')},
        { activityname: "The Pain of Discipline or Pain of Regret", activityDescription:"The Pain of Discipline or Pain of Regret", duration: 1, activityimage: require('./activityimages/tough.gif')},
        { activityname: "Guilt or Pride", activityDescription:"Guilt or Pride", duration: 20, activityimage: require('./activityimages/guiltorpride.gif')},
        { activityname: "Your ageing Grandparents, Parents, Your Friends and Family, Your hopes and Dreams", activityDescription:"Your ageing Grandparents, Parents, Your Friends and Family, Your hopes and Dreams", duration: 2, activityimage: require('./activityimages/biggestfan.gif')},
        { activityname: "Remember Time is a zero Sum Game, Opportunities knock for limited time only", activityDescription:"Remember Time is a zero Sum Game, Opportunities knock for limited time only", duration: 1, activityimage: require('./activityimages/eminem-lose-yourself.gif')},
        { activityname: "Somebody Somewhere is working to get that Seat and There are only 70 ", activityDescription:"Somebody Somewhere is working to get that Seat and There are only 70", duration: 20, activityimage: require('./activityimages/ias.gif')},
        { activityname: "It's a Game of survival !! HUnt Or be Hunted", activityDescription:"It's a Game of survival !! HUnt Or be Hunted", duration: 20, activityimage: require('./activityimages/survival.gif')},
        { activityname: "Listen to the Eye of the Eagle, Just Begin, cry but begin, crawl but move, Nothing else matters", activityDescription:"Listen to the Eye of the Eagle, Just Begin, cry but begin, crawl but move, Nothing else matters", duration: 20, activityimage: require('./activityimages/eagle.gif')},
      ]
    },
    {
      routine: "-----------------EveryDay-----------------",
      activity: [
        { activityname: "Take a Deep Breath", duration: 1, activityimage: require('./activityimages/deepbreath.gif')},
      ]
    },
    {
      routine: "Wake Up Routine",
      activity: [
        //{ activityname: "Drink Water", duration: 1, activityimage: require('./activityimages/drinkwater.gif')}, 
        // { activityname: "KapalBhati and Bhastrika", duration: 2, activityimage: require('./activityimages/pranayama.gif')},
        // { activityname: "Rub your palms", duration: 1, activityimage: require('./activityimages/palms.gif')},
        // { activityname: "Wash Your Face", duration: 2, activityimage: require('./activityimages/washface.gif')},
        //{ activityname: "Freshen Up, Remove your Phone and come back", duration: 20, activityimage: require('./activityimages/freshenup.gif')},
        { activityname: "Wear a watch ?", duration: 2, activityimage: generateMotivationImageURL()},
        { activityname: "Go see Some Sunlight and have a walk", duration: 20, activityimage: require('./activityimages/sunlight.gif')},
         { activityname: "Skipping Time ( 5 Times )", duration: 1, activityimage: generateMotivationImageURL()},
         // { activityname: "Meditate using App", duration: 15, activityimage: require('./activityimages/pranayama.gif')},
        { activityname: "Check Reminders, Calender -  Pencil Pro/Pocket", duration: 15, activityimage: generateMotivationImageURL()},
        // { activityname: "Breakfast at 12 PM", duration: 1, activityimage: require('./activityimages/getstarted.gif')},
        { activityname: "MIlk, Makhane, Nuts, Seeds, SeaCod, Biscuits", duration: 20, activityimage: generateMotivationImageURL()},
        { activityname: "Just Begin with the Class", duration: 15, activityimage: generateMotivationImageURL()},
      ]
    },
      
    {
      routine: "Lunch Routine",
      activity: [
        //{ activityname: "Start a 30 Min Timer", duration: 20, activityimage: require('./activityimages/timer.gif')},
        { activityname: "Start a 2 hour Long Journey in the Focus Travellor", duration: 5, activityimage: generateMotivationImageURL()},
       { activityname: "Have Lunch and watch Firspost", duration: 60, activityimage: generateMotivationImageURL()},
        { activityname: "Read Newspaper ", duration: 30, activityimage: generateMotivationImageURL()},
        { activityname: "File appropriately from FirstPost, Newspaper, Grok, Telegram ", duration: 60, activityimage: generateMotivationImageURL()},
        { activityname: "Watch Sunset or Coffee ?", duration: 15, activityimage: generateMotivationImageURL()},
        { activityname: "Enjoy your Free Time", duration: 1, activityimage: generateMotivationImageURL()},
       // { activityname: "Call for Breakfast", duration: 2, activityimage: require('./activityimages/calldinner.gif')},
      //  { activityname: "Respect the Timer and Enjoy the Breakfast ", duration: 1, activityimage: require('./activityimages/respect.gif')},
      ]
    },
    // {
    //   routine: "Evening Routine",
    //   activity: [
    //    { activityname: "Yoga Nidra and Make Coffee", duration: 20, activityimage: generateMotivationImageURL()},
    //    { activityname: "Do Yoga if Possible,Postures, Keep it Simple", duration: 10, activityimage: generateMotivationImageURL()},
    //    { activityname: "Watch Sunset, Surbhi, Music, Trataka", duration: 15, activityimage: generateMotivationImageURL()},
    //    { activityname: "Back By 8 PM", duration: 2, activityimage: generateMotivationImageURL()},
    //   ]
    // },
    // {
    //   routine: "Dinner Routine",
    //   activity: [
    //    { activityname: "Exercise using App", duration: 5, activityimage: generateMotivationImageURL()}, 
    //     { activityname: "Review Your Day and Plan Next", duration: 10, activityimage: require('./activityimages/dayreview.gif')},
    //     // { activityname: "Plan your Next Day", duration: 5, activityimage: require('./activityimages/plannext.gif')},
    //     // { activityname: "Diary", duration: 2, activityimage: require('./activityimages/diary.gif')},
    //     { activityname: "Step By Step Updates in Digital Dairy", duration: 5, activityimage: require('./activityimages/updatesstep.gif')},
    //     // { activityname: "Push Ups", duration: 2, activityimage: require('./activityimages/pushups.gif')},
    //     // { activityname: "Squats", duration: 2, activityimage: require('./activityimages/squats.gif')},
    //     // { activityname: "Call for Dinner", duration: 1, activityimage: require('./activityimages/dinnercall.gif')},
    //     { activityname: "Reminder - Fill water Bottles, Guitar, Youtube, Search List, Books, Shower, Triphala and Hot waterbottle ", duration: 2, activityimage: generateMotivationImageURL()},
    //     // { activityname: "Dinner Time", duration: 45, activityimage: require('./activityimages/dinnertime.gif')},
    //     // { activityname: "Check Habitica, Crossy and Forest", duration: 20, activityimage: require('./activityimages/habitica.gif')},
    //     { activityname: "Remember to Sleep By 12:00 AM", duration: 1, activityimage: require('./activityimages/bedtimeready.gif')},
    //   ]
    // },
    // {
    //   routine: "Night Routine",
    //   activity: [
    //     { activityname: "Turn Off Electronics", duration: 1, activityimage: require('./activityimages/shutdown.gif')},
    //     { activityname: "Warm Water", duration: 5, activityimage: require('./activityimages/warmwater.gif')},
    //     { activityname: "Triphala", duration: 10, activityimage: require('./activityimages/triphala.gif')},
    //     { activityname: "Clean the desk", duration: 1, activityimage: require('./activityimages/cleandesk.gif')},
    //     { activityname: "Set Up First Thing Tomorrow and Plan if not Already", duration: 5, activityimage: require('./activityimages/plantomorrow.gif')},
    //     { activityname: "Massage Foot", duration: 10, activityimage: require('./activityimages/massagefoot.gif')},
    //     { activityname: "Brush, Set Alarm and Check Back Here", duration: 15, activityimage: require('./activityimages/brush.gif')},
    //     { activityname: "Good Night !! Have Gratitude, Be Proud of your efforts Today", duration: 1, activityimage: require('./activityimages/night.gif')},
    //   ]
    // },
  ];


  const resetActiveRoutine = () => {
    console.log()
    setActiveRoutine({});
    setRollList([])
    setCurrentMode("homepage")
  }
  const handleRoutineClick = (routine) => {
    if ( routine.rollEvent == 1 ) 
        {
            setCurrentMode("rolling")
          setRollList(routine?.activity)
          console.log("passed here", rolling)
    } 
  else
    {
      setCurrentMode("activeRoutine")
      setActiveRoutine(routine);
      console.log("passed there", rolling)
    }
  }
  
  const setChampionActivity = (activity) => {
    console.log("champions called", activity)
    setActiveRoutine(activity);
    setCurrentMode("activeRoutine")
  }
  const luckyActivity = (routine) => {
    setActiveRoutine(routine)
  }
// "start": "react-scripts start",
  return (
    <div className="rootdivision">
        { currentMode === "homepage"   ? 
          Routines.map((select, index) => (
              <div   className={`routines button-30 ${select?.routineType}`} key={index} onClick={() => handleRoutineClick(select)}>
                  {select.routine}
              </div> )
          )
            :  currentMode === "activeRoutine"  ?
                <ActiveRoutine activeRoutine={activeRoutine} resetActiveRoutine={resetActiveRoutine} />
                :
                <DiceGame setChampionActivity = {setChampionActivity} options = {rollList}    />
        }  
    </div>

  );
};


export default Routinery;
