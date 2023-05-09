import React from 'react';
import './App.css';
import Button from './components/Button';
import { useState } from 'react';

function App() {
  const [currentDisplay, setCurrentDisplay] = useState('0');
  const [pointPressed, setPointPressed] = useState(false);

  const showCurrentNumber = (character) => {
    if (character === '.') setPointPressed(true);  
    if (currentDisplay === '0' && character !== '.') {
      setCurrentDisplay(character);
    } else if (pointPressed && character === '.') {
      return;
    } else {
      setCurrentDisplay(currentDisplay + character);
    }  
    setPointPressed(pointPressed || character === '.');
  };
  

  const clear = () => {
    setCurrentDisplay('0');
    setPointPressed(false);
  };


  return (
    <div className="App">
      <div className='display'>{currentDisplay}</div>
      <Button className="button " value="%" />
      <Button className="button " value="/" />
      <Button className="button " value="-" />
      <Button className="button " value="+" />
      <Button className="button " value="x" />
      <Button fn={() => showCurrentNumber("1")} className="button " value="1" />
      <Button fn={() => showCurrentNumber("2")} className="button " value="2" />
      <Button fn={() => showCurrentNumber("3")} className="button " value="3" />
      <Button fn={() => showCurrentNumber("4")} className="button " value="4" />
      <Button fn={() => showCurrentNumber("5")} className="button " value="5" />
      <Button fn={() => showCurrentNumber("6")} className="button " value="6" />
      <Button fn={() => showCurrentNumber("7")} className="button " value="7" />
      <Button fn={() => showCurrentNumber("8")} className="button " value="8" />
      <Button fn={() => showCurrentNumber("9")} className="button " value="9" />
      <Button fn={() => showCurrentNumber("0")} className="button " value="0" />
      <Button fn={() => clear()} className="button AC" value="AC" />
      <Button fn={() => showCurrentNumber(".")} className="button " value="." />
      <Button className="button equal" value="=" />
    </div>
  );
}

export default App;
