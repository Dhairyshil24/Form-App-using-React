
import { useState } from 'react';
import './App.css';
import { isVisible } from '@testing-library/user-event/dist/utils';
import './index.css'

function App() {
  const [formData, setFormData] = useState({firstName: "", lastName: "", email: "", address: "", 
                                             mode:"", country: "", city:"", 
                                            zipcode:"",byEmailComments: false, byEmailCandidates: false
                                            ,byEmailOthers: false});

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
        <div>First Name</div>
        <input
        type='text'
        placeholder='first name'
        onChange={changeHandler}
        name='firstName'
        id='firstName'
        value={formData.firstName}
        />
        <br/>
        <br/>
        <div>Last Name</div>
       <input
        type='text'
        placeholder='last name'
        onChange={changeHandler}
        name='lastName'
        value={formData.lastName}
        />
       <br/>
        <br/>
        <div>Email</div>
       <input
        type='email'
        placeholder='x@email.com'
        onChange={changeHandler}
        name='email'
        value={formData.email}
        />
        <br/>
        <br/>
        <div>Which Country do you live</div>
        
        <select
        name='country'
        id='country'
        value={formData.country}
        onChange={changeHandler}
        > 
          <option value="select">Select</option>
          <option value="India">India</option>
          <option value="Dubai">Dubai</option>
          <option value="Austrelia">Austrelia</option>
          <option value="USA">USA</option>

        </select>
  
        <br/>
        <br/>
        <div>Street Address</div>
        <textarea
        placeholder='Dist.Kolhapur'
        onChange={changeHandler}
        name='address'
        value={formData.address}
        />
        <br/>
        <br/>
        <div>City</div>
       <input
        type='text'
        placeholder='Kolhapur/City'
        onChange={changeHandler}
        name='city'
        value={formData.city}
        />
        <br/>
        <br/>
        <div>Zip-Code</div>
       <input
        type='text'
        placeholder='416112'
        onChange={changeHandler}
        name='zipcode'
        value={formData.zipcode}
        />
        <br/>
        <br/>
        <div>By Email</div>
        <input
        type='checkbox'
        name='byEmailComments'
        id='byEmailComments'
        onChange={changeHandler}
        checked={formData.byEmailComments}
        />
        <label htmlFor='byEmailComments'>Tick to get comments by email</label>
        <br/>
        <br/>
        <input
        type='checkbox'
        name='byEmailOthers'
        id='byEmailOthers'
        onChange={changeHandler}
        checked={formData.byEmailOtherse}
        />
        <label htmlFor='byEmailOthers'>byEmailOthers</label>
        <br/>
        <br/>
        <input
        type='checkbox'
        name='byEmailCandidates'
        id='byEmailCandidates'
        onChange={changeHandler}
        checked={formData.byEmailCandidates}
        />
        <label htmlFor='byEmailCandidates'>By Email Candidates</label>
        <br/>
        <br/>
        <div>Push Notifications</div>
       <legend>Notifications</legend>

 
        <input
        type='radio'
        onChange={changeHandler}
        name='mode'
        value="everything"
        id='everything'
        checked = {formData.mode === "everything"}
        />
        <label htmlFor='everything'>Everything</label>

        <br></br>
        
        <input
        type='radio'
        onChange={changeHandler}
        name='mode'
        value="sameAsEmail"
        id='sameAsEmail'
       checked = {formData.mode === "sameAsEmail"}
        />
        <label htmlFor='sameAsEmail'>sameAsEmail</label>
        <br></br>
        <input
        type='radio'
        onChange={changeHandler}
        name='mode'
        value="noPushNotifications"
        id='noPushNotifications'
       checked = {formData.mode === "noPushNotifications"}
        />
        <label htmlFor='noPushNotifications'>noPushNotifications</label>

        <br/>
        <br/>



        <button>Save</button>
        

    

      </form>
    </div>
  );
}

export default App;
