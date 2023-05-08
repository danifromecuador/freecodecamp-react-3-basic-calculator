import './App.css';
import Button from './components/Button';

function App() {
  return (
    <div className="App">
      <div className='display'>0</div>
      <Button className="button " value="%"/>
      <Button className="button " value="/"/>
      <Button className="button " value="-"/>
      <Button className="button " value="+"/>
      <Button className="button " value="x"/>
      <Button className="button " value="1"/>
      <Button className="button " value="2"/>
      <Button className="button " value="3"/>
      <Button className="button " value="4"/>
      <Button className="button " value="5"/>
      <Button className="button " value="6"/>
      <Button className="button " value="7"/>
      <Button className="button " value="8"/>
      <Button className="button " value="9"/>
      <Button className="button " value="0"/>
      <Button className="button AC" value="AC"/>
      <Button className="button " value="."/>
      <Button className="button equal" value="="/>
    </div>
  );
}

export default App;
