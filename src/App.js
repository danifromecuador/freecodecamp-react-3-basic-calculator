import './App.css';
import Button from './components/Button';

function App() {
  return (
    <div className="App">
      <div className='display'></div>
      <Button value="+"/>
      <Button value="-"/>
      <Button value="x"/>
      <Button value="/"/>
      <Button value="%"/>

      <Button value="1"/>
      <Button value="2"/>
      <Button value="3"/>
      <Button value="4"/>
      <Button value="5"/>


      <Button value="6"/>
      <Button value="7"/>
      <Button value="8"/>
      <Button value="9"/>
      <Button value="0"/>


      <Button value="AC"/>
      <Button value="."/>
      <Button value="="/>
    </div>
  );
}

export default App;
