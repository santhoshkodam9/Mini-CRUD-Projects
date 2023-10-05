import React, { useState } from 'react';

function DropdownForm() {
  // Your code will go here
  const [firstDropdownValue, setFirstDropdownValue] = useState('');
  const [secondDropdownValue, setSecondDropdownValue] = useState('');
  const [secondDropdownOptions, setSecondDropdownOptions] = useState([]);

  const firstDropdownOptions = ['Option 1', 'Option 2', 'Option 3'];

  const handleFirstDropdownChange = (event) => {
    const selectedValue = event.target.value;
    setFirstDropdownValue(selectedValue);

    // Update second dropdown options based on selected value
    if (selectedValue === 'Option 1') {
      setSecondDropdownOptions(['Option A', 'Option B']);
      setSecondDropdownValue('Option A'); // Reset second dropdown value
    } else if (selectedValue === 'Option 2') {
      setSecondDropdownOptions(['Option X', 'Option Y']);
      setSecondDropdownValue('Option X'); // Reset second dropdown value
    } else if (selectedValue === 'Option 3') {
      setSecondDropdownOptions(['Option M', 'Option N']);
      setSecondDropdownValue('Option M'); // Reset second dropdown value
    }
  };

        const handleSecondDropdownChange = (event) => {
            setSecondDropdownValue(event.target.value);
        };

  return (
    <div className='form-container'>
      <h2>Dropdown Form</h2>
      <div>
        <label htmlFor="firstDropdown">First Dropdown:</label>
        <select
          id="firstDropdown"
          value={firstDropdownValue}
          onChange={handleFirstDropdownChange}
        >
          <option value="">Select an option</option>
          {firstDropdownOptions.map((option, index) => (
            <option key={index} value={option}>
              {option}
            </option>
          ))}
        </select>
      </div>
      <div>
        <label htmlFor="secondDropdown">Second Dropdown:</label>
        <select
          id="secondDropdown"
          value={secondDropdownValue}
          onChange={handleSecondDropdownChange}
        >
          <option value="">Select an option</option>
          {secondDropdownOptions.map((option, index) => (
            <option key={index} value={option}>
              {option}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
}

export default DropdownForm;