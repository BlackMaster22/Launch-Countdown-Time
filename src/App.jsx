import { useState, useEffect } from 'react'
import './index.css'
import { CountdownCard } from './assets/components/CountdownCard';
import { SocialLinks } from './assets/components/SocialLinks';

export const App = () => {
  const [days, setDays] = useState(14);
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      if (seconds > 0) {
        setSeconds(seconds - 1);
      } else {
        if (minutes > 0) {
          setMinutes(minutes - 1);
          setSeconds(59);
        } else {
          if (hours > 0) {
            setHours(hours - 1);
            setMinutes(59);
            setSeconds(59);
          } else {
            if (days > 0) {
              setDays(days - 1);
              setHours(23);
              setMinutes(59);
              setSeconds(59);
            } else {
              clearInterval(interval); 
            }
          }
        }
      }
    }, 1000);

    return () => clearInterval(interval); 
  }, [days, hours, minutes, seconds]);

  return (
    <div className="bg-[url(./assets/images/bg-stars.svg)] bg-cover bg-center bg-no-repeat w-full h-screen flex flex-col justify-around items-center ">
      <div className='h-3/4 flex w-full  flex-col  justify-center '>
        <div className='text-white text-3xl font-bold uppercase text-center px-4 mb-8' > We're launching soon </div>
        <div className="flex space-x-6 justify-center">
          <CountdownCard label="Days" value={days}></CountdownCard>
          <CountdownCard label="Hours" value={hours} />
          <CountdownCard label="Minutes" value={minutes} />
          <CountdownCard label="Seconds" value={seconds} />
        </div>
      </div>
      <div className='h-1/4 w-full flex flex-col justify-center items-center bg-[url(./assets/images/pattern-hills.svg)]'>
        <SocialLinks></SocialLinks>
      </div>
      
    </div>
  )
}
