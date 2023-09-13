import { Component } from 'react';
import Navbar from './components/Navbar'
import  MainLayout from './components/MainLayout';

class App extends Component {
  render()  {
    
    return (
      <div className="App" >
        <div className='navbar'>
          <MainLayout/>
          <Navbar/>
        </div>
      </div>
)
}
}
export default App;