'use client';
import React from 'react'
import './Button.css'

export default function Button({children, onClick}: {children: string,
                                                     onClick: () => void}) {
  return (
    <div className="button-container">
        <button onClick={onClick} className="neumorphism-button">
          <span className="button-text">{children}</span>
        </button>
    </div>
  )
}
