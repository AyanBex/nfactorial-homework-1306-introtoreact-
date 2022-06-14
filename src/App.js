import ph1 from './ph1.jpeg';
import ph2 from './ph2.jpg';
import ph3 from './ph3.jpeg';
import ph4 from './ph4.jpeg';
import ph5 from './ph5.jpeg';
import logo from './facebook.png'
import './App.css';

const picture = () => {
  return (
    <div className="App">
  <div className='img img1'>
        <div className='alt'>HEY</div>
      </div>
      <div className='img img2'>
        <div className='alt'>LETS</div>
      </div>
      <div className='img img3'>
        <div className='alt'>GIVE</div>
      </div>
      <div className='img img4'>
        <div className='alt'>ALL</div>
      </div>
      <div className='img img5'>
        <div className='alt'>YOU CAN</div>
      </div>
      
    </div>
  ) 
}

    const navbar = () => {
      const current = new Date();
      const date = `${current.getDate()}/${current.getMonth()+1}/${current.getFullYear()}`;
      return(
        <div className='navbar'>
          <div className='logo'><img className='logol' src={logo} /></div>
          <div className='block'></div>
          <div className="data"> Current date is {date}</div>
        </div>
      ) }

      function App() {
        return (
          <div>
            <div>{navbar()}</div>
            <div>{picture()}</div>
          </div>
        );
      }
      

export default App;
