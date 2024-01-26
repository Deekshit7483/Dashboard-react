import logo from './logo.svg';
import './App.css';
import SideBar from './Components/SideBar'
import Dashboard from './Components/Dashboard';
import { useState } from 'react';
function App() {
  const [controlSideBar, setControlSideBar] = useState("-left-[200%]");

  return (
    <div className='flex w-full'>
<SideBar
controlSideBar={controlSideBar}
setControlSideBar={setControlSideBar}
/>
<Dashboard
setControlSideBar={setControlSideBar}/>

    </div>
   
  );
}

export default App;
