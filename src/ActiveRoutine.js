import React, { useState, useEffect, useRef } from 'react';
import ActivityItem from './ActivityItem';
import'./ActiveRoutine.css';

console.log("routine")
const ActiveRoutine = ( {activeRoutine= {}, resetActiveRoutine = () => {} } ) => {
    const [currentActivityIndex, setCurrentActivityIndex] = useState(0);
    const [elapsedTime, setElapsedTime] = useState(0);
    const [isRunning, setIsRunning] = useState(true); // Start automatically
    const [startTime, setStartTime] = useState(Date.now()); // Initialize start time
    const [activityTimes, setActivityTimes] = useState({});
    const timerRef = useRef(null);
    const [routine, setRoutine] = useState( activeRoutine );
    const [activateCelebration, setActivateCelebration] = useState( 0 );
    const [ currentActivity,  setCurrentActivity ] = useState( (routine?.activity?.[currentActivityIndex]) ?? 0)
    //const currentActivity = routine.activity[currentActivityIndex];

   
    useEffect(() => {
        if (isRunning && startTime) {
            timerRef.current = setInterval(() => {
                setElapsedTime(Date.now() - startTime);
            }, 1000);
        } else {
            clearInterval(timerRef.current);
        }

        return () => clearInterval(timerRef.current); // Cleanup on unmount
    }, [isRunning, startTime]);

    const handlePause = () => {
        setIsRunning(false);
    };
    const handleResume = () => {
        setIsRunning(true);
    };

    const handleMoveToLast = () => {
        const lastActivity = routine.activity[currentActivityIndex];
        console.log("lastActivity", lastActivity, currentActivityIndex)
        const remainingActivities = routine.activity.slice(0, currentActivityIndex).concat(routine.activity.slice(currentActivityIndex + 1));
        console.log("remainingActivities", remainingActivities)
        const newRoutine = { ...routine, activity: [...remainingActivities, lastActivity] };
        console.log("newRoutine", newRoutine, currentActivityIndex)
        setCurrentActivity(newRoutine.activity[currentActivityIndex])
        setRoutine(newRoutine)
        //setCurrentActivityIndex(0); // Reset to the beginning of the reordered list
        setElapsedTime(0);
        setIsRunning(true); // Continue automatically after reorder
        setStartTime(Date.now());
        // You might want to update the parent component or state if the routine order needs to be persisted
    };

    const handleCompleteActivity = () => {
        setIsRunning(false);
        clearInterval(timerRef.current);
        const timeTaken = Math.floor(elapsedTime / 1000);
        setActivityTimes(prevTimes => ({
            ...prevTimes,
            [currentActivity.activityname]: timeTaken,
        }));

        if (currentActivityIndex < routine.activity.length - 1) {
            setCurrentActivity(routine.activity[currentActivityIndex+1])
            setCurrentActivityIndex(currentActivityIndex + 1);
            setElapsedTime(0);
            setStartTime(Date.now());
            setIsRunning(true); // Start next automatically
        } else {
            // Last activity completed
            setActivateCelebration(true);
        }
    };

    const handleSkipActivity = () => {
        setIsRunning(false);
        clearInterval(timerRef.current);

        if (currentActivityIndex < routine.activity.length - 1) {
            setCurrentActivity(routine.activity[currentActivityIndex+1])
            setCurrentActivityIndex(currentActivityIndex + 1);
            setElapsedTime(0);
            setStartTime(Date.now());
            setIsRunning(true); // Start next automatically
        } else {
            // Last activity skipped
            setActivateCelebration(true);
        }
    };

    const getDisplayTime = () => {
        const totalSeconds = Math.floor(elapsedTime / 1000);
        const expectedSeconds = currentActivity.duration * 60 || 0; // Assuming duration is in minutes
        const remainingOrExtraSeconds = currentActivity.counttype === 'down' ? expectedSeconds - totalSeconds : totalSeconds - expectedSeconds;
        const sign = remainingOrExtraSeconds < 0 ? '-' : '';
        const absRemainingOrExtraSeconds = Math.abs(remainingOrExtraSeconds);
        const minutes = Math.floor(absRemainingOrExtraSeconds / 60);
        const seconds = absRemainingOrExtraSeconds % 60;
        return `${sign}${minutes}:${seconds.toString().padStart(2, '0')}`;
    };

    useEffect(() => {
        if (isRunning && currentActivity.duration && currentActivity.counttype === 'down' && Math.floor(elapsedTime / 1000) >= currentActivity.duration * 60) {
            // Time completed announcement
            if (typeof window !== 'undefined' && 'speechSynthesis' in window) {
                const utterance = new SpeechSynthesisUtterance(`Time for ${currentActivity.activityname} is up!`);
                window.speechSynthesis.speak(utterance);
            } else {
                alert(`Time for ${currentActivity.activityname} is up!`);
            }
        }
    }, [isRunning, elapsedTime, currentActivity]);


    
    
    return (
        <div>
            { activateCelebration ? (
                <div className="activate-celebration">
                    <div className="confetti"></div>
                    <div className="confetti"></div>
                    <div className="confetti"></div>
                    <div className="confetti"></div>
                    <div className="confetti"></div>
                    <div className="confetti"></div>
                    <div className="confetti"></div>
                    <div className="confetti"></div>
                    <div className="confetti"></div>
                    <div className="confetti"></div>

                    <div className="breathe-animation congrats"> Congratulations </div>
                    <button type="button" className="onwards" onClick={resetActiveRoutine}>
                        <div className="button-top">Onwards</div>
                        <div className="button-bottom"></div>
                        <div className="button-base"></div>
                    </button>
                    
                </div>
            ) : (
                <div className="activeRoutine">
                    <div className="routineName">
                        
                        <span className="tooltip">{routine.routine}<span className="tooltip-text">{currentActivity?.activityDescription ?? "Just Begin"}</span></span>
                        {/*<span className="tooltip"*/}
                        {/*      data-tooltip={currentActivity?.activityDescription ?? "Just Begin"}>?</span>*/}
                    </div>
                    {/*<div id="anim">*/}
                    {/*    <span className="tooltip" data-tooltip = {currentActivity?.activityDescription ?? "Just Begin"} >?</span>*/}
                    {/*</div>*/}
                    {currentActivity && (
                        <ActivityItem
                            activity={currentActivity}
                            activeRoutine={activeRoutine}
                            isRunning={isRunning}
                            elapsedTime={elapsedTime}
                            displayTime={getDisplayTime()}
                            onPause={handlePause}
                            onResume={handleResume}
                            onMoveToLast={handleMoveToLast}
                            onCompleteActivity={handleCompleteActivity}
                            onSkipActivity={handleSkipActivity}
                        />
                    )}
                </div>

            )}
            {activateCelebration ?
                <div className="activityReport">
                <div className="marquee">
                    <div className="marqueeblur" aria-hidden="true">
                        <p className="marqueetext">Activity Logs:</p>
                    </div>
                    <div className="marqueeclear">
                        <p className="marqueetext">Activity Logs:</p>
                    </div>
                </div>
                <div className="activityObjects">
                    {Object.entries(activityTimes).map(([name, time]) => (
                        <div className="objects whitebutton " key={name}>{name}: {Math.floor(time / 60)}m {time % 60}s</div>
                    ))}
                </div>
            </div> :  null}
        </div>

    );
};


export default ActiveRoutine;
