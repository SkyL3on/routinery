import React, { useState, useEffect, useRef } from 'react';
import ActiveRoutine from './ActiveRoutine';
import'./ActivityItem.css';

const ActivityItem = ({ activity, isRunning, elapsedTime, displayTime, onPause, onResume, onMoveToLast, onCompleteActivity, onSkipActivity }) => {
    const totalSeconds = Math.floor(elapsedTime / 1000);
    const expectedSeconds = activity?.duration * 60 || 0;
    const extraTime = totalSeconds > expectedSeconds ? totalSeconds - expectedSeconds : 0;
    const warning = useRef(0);
    const [speechText, setSpeechText] = useState(0);
    
    
    
  return (
      <div className="activityClass" >
          <div className="activityBlock" >
              <div className="activityName" >
                  <div className="activityMains neone">{activity.activityname}
                      <span>{activity.activityname}</span>
                      <span>{activity.activityname}</span>
                      <span>You can do It</span>
                  </div>
              </div>
          </div>
          <div className="gifClass" >
              <img src={activity?.activityimage || require('./activityimages/meditation.gif')} alt="React Image" className="gifImage" />
          </div>
          <div className="timeClass">
              <div className="runningTime button-52" role="button">
                  {extraTime > 0 ? (
                      <div className="neon-text" style={{ color: 'red' }}>
                          (+{Math.floor(extraTime / 60)}m {extraTime % 60}s extra)
                      </div>
                  ) : (
                      displayTime
                  )}
              </div>
                
          </div>
          <div className="lastClass" onClick={onMoveToLast}>
              <img src={require('./assets/last.png')} alt="React Image" className="functions" />
          </div>
          <div className="functionClass">
              {/*{isRunning ? (*/}
              {/*    <div className="activityFunction" onClick={onPause}>*/}
              {/*        <img src={require('./assets/pause.png')} alt="React Image" className="functions" />*/}
              {/*    </div>*/}
              {/*) : (*/}
              {/*    <div className="activityFunction" onClick={onResume}>*/}
              {/*        <img src={require('./assets/play.jpeg')} alt="React Image" className="functions" />*/}
              {/*    </div> // You might want to implement resume functionality*/}
              {/*)}*/}
       
              <div className="activityFunction done"onClick={onCompleteActivity}>
                  <img src={require('./assets/done.png')} alt="React Image" className="functions" />
              </div>
              <div className="activityFunction" onClick={onSkipActivity}>
                  <img src={require('./assets/skip.png')} alt="React Image" className="functions" />
              </div>
          </div>
          
      </div>
  );
}

export default ActivityItem;
