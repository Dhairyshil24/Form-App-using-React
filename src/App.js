
import { useState } from 'react';
import './App.css';
import { isVisible } from '@testing-library/user-event/dist/utils';

function App() {
  const [formData, setFormData] = useState({firstName: "", lastName: "", email: "", comments: "", isVisible: false, mode:"", favCar:""});

  const changeHandler = (event) => {
    const {name, value, checked, type} = event.target
    setFormData(prevData => {
      return {

        ...prevData,

        [name]: type === "checkbox" ? checked : value

      }
    })
  }

  console.log(formData);

  const submitHandler = (event) => {

    event.preventDefault();
    console.log("printing the form data");
    console.log(formData);

  }

  
  return (
    <div className="App">
      <form onSubmit={submitHandler}>
        <input
        type='text'
        placeholder='first name'
        onChange={changeHandler}
        name='firstName'
        value={formData.firstName}
        />
        <br/>
        <br/>
       <input
        type='text'
        placeholder='last name'
        onChange={changeHandler}
        name='lastName'
        value={formData.lastName}
        />
       <br/>
        <br/>
       <input
        type='email'
        placeholder='x@email.com'
        onChange={changeHandler}
        name='email'
        value={formData.email}
        />
        <br/>
        <br/>
        <textarea
        placeholder='write your thoughts'
        onChange={changeHandler}
        name='comments'
        value={formData.comments}
        />
        <br/>
        <br/>
        <input
        type='checkbox'
        name='isVisible'
        id='isVisible'
        onChange={changeHandler}
        checked={formData.isVisible}
        />
        <label htmlFor='isVisible'>Am I visible ?</label>
        <br/>
        <br/>
        <fieldset>
          <legend>Mode</legend>

 
        <input
        type='radio'
        onChange={changeHandler}
        name='mode'
        value="Online-mode"
        id='Online-mode'
        checked = {formData.mode === "Online-mode"}
        />
        <label htmlFor='Online-mode'>Online Mode</label>
        
        <input
        type='radio'
        onChange={changeHandler}
        name='mode'
        value="Offline-mode"
        id='Offline-mode'
       checked = {formData.mode === "Offline-mode"}
        />
        <label htmlFor='Offline-mode'>Offline Mode</label>
        </fieldset>

        <select
        name='favCar'
        id='favCar'
        value={formData.favCar}
        onChange={changeHandler}
        > 
          <option value="select">select</option>
          <option value="a">a</option>
          <option value="b">b</option>
          <option value="c">c</option>
          <option value="d">d</option>

        </select>
        <label htmlFor='favCar'>Tell me your favourite letter</label>
        <br/>
        <br/>

        <button>Submit</button>
        

    

      </form>
    </div>
  );
}

export default App;
