import './App.css';
import Header from './Header/Header';
import Tinder from './Cards/Tinder';
import Swipe from './Swipe/Swipe';

function App() {
  return (
    <div className="app">
      {/*Header*/}
      <Header />
      {/*Cards*/}
      <Tinder />
      {/*Swipe*/}
      <Swipe />
    </div>
  );
}

export default App;
