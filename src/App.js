import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
        เครดิตฟรีล่าสุด<code>แจกไม่อั้น</code>กดรับได้ทันที.
        </p>
        <Button
        onPress={onPressLearnMore}
        title="Learn More"
        color="#841584"
        accessibilityLabel="Learn more about this purple button"
      />
      </header>
    </div>
  );
}

export default App;
