import React from 'react';
import './Pulse.css';

interface CustomStyle extends React.CSSProperties {
  '--i'?: string; // Custom property '--i' of type string
}

export default function Pulse({onClick, title}: {onClick: () => void, title: string}) {

  return (
    <div>
        <h1 className="title">{title}</h1>
        <div className="pulse">
          {[...Array(10)].map((_, index) => (
          <span onClick={onClick}
            key={index}
            style={{ '--i': `${index}` } as CustomStyle} // Cast style to CustomStyle
          >
          </span>
        ))}
        </div>
        
    </div>
    

  );
}
