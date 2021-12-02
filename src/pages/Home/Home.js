import React, { useState } from "react";
import { randomConfetti } from "../../utils/actions";
import InputBar from "../../components/InputBar/index";
import PopUp from "../../components/PopUp/index";
import Buttons from "../../components/Buttons/index";
import "./Home.scss";

export default function Home() {
  const [userInput, setUserInput] = useState("");
  const [name, setName] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setName(userInput);
    randomConfetti();
  };
  return (
    <div className="home">
      <PopUp name={name} />
      <form className="home__form" onSubmit={handleSubmit}>
        <h1 className="home__title">This is Doge Page!</h1>
        <label className="home__form-label">
          Type In Your Name
          <InputBar setUserInput={setUserInput} userInput={userInput} />
        </label>
        <Buttons />
      </form>
    </div>
  );
}
