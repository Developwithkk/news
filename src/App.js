
import './App.css';
import Footer from './Components/Footer';
import Navbar from './Components/Navbar';
import NewsContainer from './Components/NewsContainer';

function App() {
  return (
    <div className='justify-evenly'>
      <Navbar/>
      <NewsContainer />
      <Footer/>
    </div>
  );
}

export default App;
