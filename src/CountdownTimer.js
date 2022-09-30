import React from 'react';
import { useCountdown } from './hooks/useCountdown';
import DateTimeDisplay from './DateTimeDisplay';

const CountdownTimer = ({ targetDate }) => {
  const [remainingTime, hours, minutes, seconds] = useCountdown(targetDate);
  const current = new Date();
  const date = `${current.getDate()}/${current.getMonth()+1}/${current.getFullYear()}`;
  
  if (hours + minutes + seconds <= 0) {
    return <ExpiredNotice />;
  } else {
    return (
      <ShowCounter
      date={date}
      remainingTime={remainingTime}
        // days={days}
        hours={hours}
        minutes={minutes}
        seconds={seconds}
      />
    );
  }
};
const ExpiredNotice = () => {
    return (
      <div className="expired-notice">
        <span>Expired!!!</span>
        <p>Please select a future date and time.</p>
      </div>
    );
  };
  const ShowCounter = ({ date,remainingTime,hours, minutes, seconds }) => {
    return (
       
      <div className="show-counter">
        {/* <a
          href="https://tapasadhikary.com"
          target="_blank"
          rel="noopener noreferrer"
          className="countdown-link"
        > */}
          <div className='remaining'>  <DateTimeDisplay value={remainingTime} type={'remainingTime'} isDanger={false} />
          </div>
          <div className='time_display'>
         <DateTimeDisplay value={date} type={'Date'} isDanger={date} />
          <p> </p>   
          {/* <DateTimeDisplay value={days} type={'Days'} isDanger={days <= 3} />
          <p>:</p> */}
          
          <DateTimeDisplay value={hours} type={'Hours'} isDanger={false} />
          <p>:</p>
          <DateTimeDisplay value={minutes} type={'Mins'} isDanger={false} />
          <p>:</p>
          <DateTimeDisplay value={seconds} type={'Seconds'} isDanger={false} />
        
        </div>
         </div>
    
     
    );
  };
  export default CountdownTimer; 