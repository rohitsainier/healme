'use client';
import { useState } from 'react';
import Button from "@/components/Button/Button";
import Pulse from '@/components/Pulse/Pulse';
import "@/styles/global.css";
import generateHz, { stopHz } from '@/utils/Audio/audio';

export default function Home() {

  const [pulse, setPulse] = useState(false);
  const [hzTitle, setHzTitle] = useState('');

  const handleRandomPlayClick = () => {
    setPulse(true);
    setHzTitle(generateHz(3000));
  };

  const handleStopClick = () => {
    stopHz();
    setPulse(false);
    setHzTitle('');
  };

  const handleCustomPlayClick = () => {
    setPulse(true);
    setHzTitle(generateHz(3000, 725));
  };

  return (
    <div className='container'>
      {
        pulse ?  <> 
                  <Pulse title ={hzTitle} onClick={handleStopClick}/>
                </>
              :  
                <> 
                  <Button onClick={handleRandomPlayClick}>Play Random Healing Sound</Button>
                  <Button onClick={handleCustomPlayClick}>Play Custom Healing Sound</Button>
                </>
      }
    </div>
  );
}
