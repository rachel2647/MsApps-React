import { Provider } from 'react-redux';
import store from './Redux/store';
import ToggleOnIcon from '@mui/icons-material/ToggleOn';
import './App.css'; 
import ChooseCategory from './Components/chooseCategory'; 
import { useState } from 'react';
function App() {
  const [isClicked, setIsClicked] = useState(false); 
  
  const handleClick = () => { 
    setIsClicked(true); 
  }
  
  return (
    <div>
      <Provider store={store}> 
        {isClicked ? <ChooseCategory /> : 
          <div id="app-div">
            <button onClick={handleClick}>
              Click me to select category
              {<ToggleOnIcon></ToggleOnIcon>} 
            </button>
          </div>}
      </Provider>
    </div>
  );
}

export default App;
