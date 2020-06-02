import React from "react";
import ContactCard from "./contactCard"
import "./App.css";

function App() {
  return (
    <>
      <ContactCard
        name="Ross"
        mobile="7188888888"
        work="5555555555"
        email="ross@example.com"
      />
    
    
      <ContactCard
        name="Chandler"
        mobile="11111111111"
        work="3472222222"
        email="chandler@example.com"
      />
      <ContactCard
        name="Jill"
        mobile="3333333333"
        work="4444444444"
        email="jill@example.com"
      />
    </>
  );
}

export default App;
