// Importing required packages and modules
import CurrentItems from './currentItems';
import { useState } from 'react';
import '../css/chooseCategory.css';
import Select from 'react-select';

// Define the ChooseCategory component
function ChooseCategory() {

  // Setting up state variables
  const [isChooseCtegory, setIsChooseCategory] = useState(false);
  const [category, setCategory] = useState('');

  // Handle change in category selection
  const handleChange = (e) => {
    setIsChooseCategory(true);
    setCategory(e.value);
  };

  // Define options for the category select dropdown
  const options = [
    { value: 'sports', label: 'Sports' },
    { value: 'etc', label: 'Etc' },
    { value: 'work', label: 'Work' },
    { value: 'flowers', label: 'Flowers' },
    { value: 'animals', label: 'Animals' },
    { value: 'colors', label: 'Colors' }
  ];

  return (
    <div>
      {/* Conditional rendering based on category selection */}
      {isChooseCtegory ?
        <CurrentItems category={category}></CurrentItems> :
        <Select options={options}
          placeholder="select category"
          onChange={handleChange} />
      }
    </div>
  );
}

// Export the ChooseCategory component as the default export
export default ChooseCategory;