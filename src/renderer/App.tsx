import { Dispatch, SetStateAction, useEffect, useState } from 'react';
import './App.scss';
import { Hello } from "main/screens/Intro";
import { Test } from "main/screens/Screen2";
import { createContext } from "react";
import sunny_day from '../../assets/sounds/morning.mp3';
export const levels = {
  hello: <Hello />,
  test: <Test />
}

export interface ILevelProvider {
  setCurrentLevel: Dispatch<SetStateAction<JSX.Element>>;
}

export const LevelContext = createContext({});

export default function App() {
  const [currentLevel, setCurrentLevel] = useState(levels.hello)
  const currentSound = new Audio(sunny_day);

  useEffect(() => {
    currentSound.play();
    // return function cleanup() { currentSound.pause() }
  }, [currentSound])

  return (
    <LevelContext.Provider value={{ setCurrentLevel }}>
      {currentLevel}
    </LevelContext.Provider>
  );
}
