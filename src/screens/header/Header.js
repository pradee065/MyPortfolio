import React from 'react'
import './header.css'
import { ReactTyped } from "react-typed";

function Header() {
  return (
    <div className="main-info">
        <h1>Who am I</h1>
      <ReactTyped
        strings={[
          "Frontend Magician",
          "Also known as",
          "Layout Whisperer",
          "or",
          "The One With the Console Logs",
          " ",
          "Making the web less boring"
        ]}
      typeSpeed={40}
      backSpeed={50}
      attr="placeholder"
      loop
    >
      <input type="text" />
    </ReactTyped>
    </div>
  )
}

export default Header
