import React, { useEffect, useMemo, useState } from 'react';

const ControllComponentForm=()=> {

  const [formData, setFormData] = useState({
    textInput: '',
    textareaInput: '',
    radioOption: '',
    checkboxes: {
      option1: false,
      option2: false,
    },
    dropdown: '',
  });

  useEffect(()=>{

   console.log('calling') 
  },[formData.textInput])


  const complexCalculation=()=>{

    console.log('call each time when component rerender')

    const array=[];

    for (let index = 0; index < 1000; index++) {
      array.push(index)
      
    }
    return array;
  }

  const calculatedData=useMemo(()=>{
   
    return complexCalculation();
  },[formData.textInput])

 

  // Handle change for all input types
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    console.log({name,value,type,checked})

    

    if (type === 'checkbox') {
      setFormData((prevState) => ({
        ...prevState,
        checkboxes: {
          ...prevState.checkboxes,
          [name]: checked,
        },
      }));
    } else {
      setFormData({
        ...formData,
        [name]: value,
      });
    }
 };

  // Handle form submission
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('Form submitted with data:', formData);
  };

  return (
    <>
    <h2>Controlled Component Form</h2>
    <h2>{calculatedData}</h2>
    <form onSubmit={handleSubmit}>
      {/* Text Input */}
      <div>
        <label>
          Text Input:
          <input 
            type="text" 
            name="textInput" 
            value={formData.textInput}
            onChange={handleChange}
          />
        </label>
      </div>

      {/* Textarea Input */}
      <div>
        <label>
          Textarea Input:
          <textarea 
            name="textareaInput" 
            value={formData.textareaInput} 
            onChange={handleChange} 
          />
        </label>
      </div>

      {/* Radio Buttons */}
      <div>
        <label>
          Radio Options:
          <input 
            type="radio" 
            name="radioOption" 
            value="option1" 
            checked={formData.radioOption === 'option1'} 
            onChange={handleChange} 
          />
          Option 1
          <input 
            type="radio" 
            name="radioOption" 
            value="option2" 
            checked={formData.radioOption === 'option2'} 
            onChange={handleChange} 
          />
          Option 2
        </label>
      </div>

      {/* Checkboxes */}
      <div>
        <label>
          Checkboxes:
          <input 
            type="checkbox" 
            name="option1" 
            checked={formData.checkboxes.option1} 
            onChange={handleChange} 
          />
          Option 1
          <input 
            type="checkbox" 
            name="option2" 
            checked={formData.checkboxes.option2} 
            onChange={handleChange} 
          />
          Option 2
        </label>
      </div>

      {/* Dropdown / Select */}
      <div>
        <label>
          Dropdown:
          <select 
            name="dropdown" 
            value={formData.dropdown} 
            onChange={handleChange}
          >
            <option value="">Select an option</option>
            <option value="value1">Value 1</option>
            <option value="value2">Value 2</option>
            <option value="value3">Value 3</option>
          </select>
        </label>
      </div>

      {/* Submit Button */}
      <div>
        <button type="submit">Submit</button>
      </div>
    </form>
    </>
  );
}

export default ControllComponentForm;
