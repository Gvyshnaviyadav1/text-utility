
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/textform';
import About from './components/About';

function App() {
  return (
    <>
   
<Navbar title="TextReframe"/>
<div className='container my-3' ><TextForm heading="Enter the required text"/></div>
<About/>
   </>
   
  );
}

export default App;
