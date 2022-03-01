/*
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
*/

// index.js
import React, { Component } from 'react'
import ReactDom from 'react-dom'
import './App.css';
// import validator from 'validator';

const countryOptions = [
  {
    value: '',
    label: '-- Select Country--',
  },
  {
    value: 'Finland',
    label: 'Finland',
  },
  {
    value: 'Sweden',
    label: 'Sweden',
  },
  {
    value: 'Norway',
    label: 'Norway',
  },
  {
    value: 'UAE',
    label: 'UAE',
  },
]

const skillsArr = [
  {
    value: 'html',
    label: 'HTML'
  },
  {
    value: 'css',
    label: 'CSS'
  },
  {
    value: 'javascript',
    label: 'JavaScript'
  }
]

const skillsObj = Object.assign({}, ...(skillsArr.map(item => ({ [item.value]: false }))));

class App extends Component {
  state = {
    firstName: '',
    lastName: '',
    email: '',
    tel: '',
    weight: 0,
    color: '#0c7936',
    country: 'UAE',
    gender: 'male',
    skills: skillsObj,
    bio: '',
    file: ''
  };

  handleChange = (e) => {
    const {name, value, checked, type} = e.target;
    if (type === 'checkbox') { // OR if(name === 'skills') {
      this.setState({skills : {...this.state.skills, [value]: checked}});
    } else if(type === 'file') {
      this.setState({'file': e.target.files[0]});
    } else {
      this.setState({[name]: value});
    }
  }

  handleSubmit = (e) => {
    e.preventDefault();
    // Get state
    console.log(this.state);
    // Reset state
    this.setState({
      firstName: '',
      lastName: '',
      email: '',
      tel: '',
      weight: 0,
      color: '#0c7936',
      country: 'UAE',
      gender: 'male',
      skills: skillsObj,
      bio: '',
      file: ''
    })
  }

  render() {
    // accessing the state value by destrutcturing the state
    const {
      firstName,
      lastName,
      email,
      tel,
      date,
      color,
      weight,
      country,
      gender,
      skills,
      bio
    } = this.state;

    return (
      <form onSubmit={this.handleSubmit}>
        <div className='form-control'>
          <label htmlFor='firstName'>First Name : </label>
          <input id='firstName' type='text' name='firstName' value={firstName} onChange={this.handleChange} />
        </div>
        <div className='form-control'>
          <label htmlFor='lastName'>Last Name : </label>
          <input id='lastName' type='text' name='lastName' value={lastName} onChange={this.handleChange} />
        </div>
        <div className='form-control'>
          <label htmlFor='email'>Email : </label>
          <input id='email' type='email' name='email' value={email} onChange={this.handleChange} />
        </div>
        <div className='form-control'>
          <label htmlFor='tel'>Telephone : </label>
          <input id='tel' type='tel' name='tel' value={tel} onChange={this.handleChange} />
        </div>
        <div className='form-control'>
          <label htmlFor='date'>Date of Birth : </label>
          <input id='date' type='date' name='date' value={date} onChange={this.handleChange} />
        </div>
        <div className='form-control'>
          <label htmlFor='color'>Color : </label>
          <input id='color' type='color' name='color' value={color} onChange={this.handleChange} />
        </div>
        <div className='form-control'>
          <label htmlFor='weight'>Weight : </label>
          <input id='weight' type='number' name='weight' value={weight} onChange={this.handleChange} />
        </div>
        <div className='form-control'>
          <label htmlFor='country'>Country : </label>
          <select id='country' name='country' value={country} onChange={this.handleChange}>
            {
              countryOptions.map(({value, label}) => <option key={value} value={value}>{label}</option>)
            }
          </select>
        </div>
        <div className='form-control'>
          <label htmlFor='gender'>Gender : </label>
          <div id='gender' className='form-control'>
            <div>
              <input id='male' type='radio' name='gender' value='male' checked={gender === 'male'} onChange={this.handleChange} />
              <label htmlFor='male'>Male</label>
            </div>
            <div>
              <input id='female' type='radio' name='gender' value='female' checked={gender === 'female'} onChange={this.handleChange} />
              <label htmlFor='female'>Female</label>
            </div>
          </div>
          <div className='form-control'>
            <label htmlFor='skills'>Skills : </label>
            <div className='form-control' id='skills'>
              {
                skillsArr.map(({value, label}) => (
                  <div className='form-control' key={value}>
                    <input id={value} type='checkbox' name='skills' value={value} checked={skills[value] === true} onChange={this.handleChange} />
                    <label htmlFor={value}>{label}</label> 
                  </div>
                ))
              }
            </div>
          </div>
          <div className='form-control'>
            <label htmlFor='bio'>Bio : </label>
            <textarea id='bio' name='bio' rows='3' value={bio} onChange={this.handleChange}></textarea>
          </div>
          <div className='form-control'>
            <label htmlFor='file'>Upload File : </label>
            <input type='file' id='file' name='file' onChange={this.handleChange} />
          </div>
          <div className='form-control'>
            <button type='submit'>Submit</button>
          </div>
        </div>
      </form>
    )
  }
}

ReactDom.render(<App />, document.getElementById('root'))