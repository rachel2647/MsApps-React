import { Provider } from 'react-redux'; // Importing the Provider component from react-redux
import store from './Redux/store'; // Importing the Redux store
import ToggleOnIcon from '@mui/icons-material/ToggleOn'; // Importing the ToggleOnIcon component from @mui/icons-material
import './App.css'; // Importing the CSS file for the App component
import ChooseCategory from './Components/chooseCategory'; // Importing the ChooseCategory component
import { useState } from 'react'; // Importing the useState hook from react

function App() {
  const [isClicked, setIsClicked] = useState(false); // Setting up state using the useState hook - a boolean indicating if the button was clicked or not
  
  const handleClick = () => { // Event handler function for the button click
    setIsClicked(true); // Updating the state to indicate that the button was clicked
  }
  
  return (
    <div>
      <Provider store={store}> {/* Wrapping the application with the Provider component and providing the Redux store */}
        {isClicked ? <ChooseCategory /> : //Conditional rendering based on the isClicked state
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
