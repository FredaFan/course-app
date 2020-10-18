import React from "react"
import Course from "./components/course"
import "./App.css"
import witCrest from "./wit_crest.png"

const App = () => {
   // Use your module names here.
   const modules = [
    {
        name: "Agile Software",
        noLectures: 2,
        noPracticals: 3
    },
    {
        name: "Web App Development",
        noLectures: 3,
        noPracticals: 4
    },
      {
        name: "Buiness Analytics",
        noLectures: 1,
        noPracticals: 5
    },
    {
        name: "Enterprise Systems Architechure",
        noLectures: 6,
        noPracticals: 4
    },
    {
        name: "English as foreign language",
        noLectures: 2,
        noPracticals: 3
    }
   ];
  const name = "HDip Computer Systems" // Replace

  return (
    <>
      <header className="App-header">
        <img className="center" src={witCrest} alt="logo" />
      </header>
      <div className="course">
        <Course title={name} modules={modules} />
      </div>
    </>
  );
};

export default App