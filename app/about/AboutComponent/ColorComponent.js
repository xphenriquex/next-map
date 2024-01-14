"use client";

import { useState } from "react";

export default function ColorComponent() {
  const [chonseColor, setChonseColor] = useState('green');
  function ToggleColor() {
    setChonseColor(chonseColor === 'green'? 'blue' : 'green');
  }

  return (
    <div>
      <h1 style={{ color: chonseColor, fontSize: '2rem' }}>This is the page About</h1>
      <button onClick={ToggleColor} className="bg-black text-white">Change Color</button>
    </div>
  )
}
