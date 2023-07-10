import React from 'react'
import './App.css';
import BasicInfo from './components/basicinfo';

// Very Easy

  // class App extends React.Component {
  //   render(){
  //   return (
  //     <div className="App">
  //      <p>Julian</p>
  //      <p>999</p>
  //      <p>09-19-1999</p>
  //      <p>Necromancer</p>
  //     </div>
  //   );
  // }

  

// Easy

  // class App extends React.Component {
  //   constructor(props){
  
  //   super(props);
  //   this.state = {
  //   person: {}
  //    };
 //    }
  //   render(){
  //   return (
  //     <div className="App">
  //      <p>Julian</p>
  //      <p>999</p>
  //      <p>09-19-1999</p>
  //      <p>Necromancer</p>
  //     </div>
  //   );
  // }

// Medium + Hard

 class App extends React.Component {
   constructor(props){
  
   super(props);
   this.state = {
   people: [
    {
    name: 'Julian', 
    num: '999',
    dob: '09-19-1996',
    job: 'Necromancer'
   },
   {
    name: 'Krystal', 
    num: '777',
    dob: '12-13-1998',
    job: 'Princess'
   },
   {
    name: 'Norman', 
    num: '8',
    dob: '02-28-1968',
    job: 'Warden'
   },
   {
    name: 'Josh', 
    num: '2',
    dob: '10-22-1990',
    job: 'Apothecary'
   },
   {
    name: 'Malik', 
    num: '956',
    dob: '03-07-1994',
    job: 'Videographer'
   },
  ]
    };
   }
   render() {
    const {people} = this.state
    return (
     <>
     {people.map((person, index) => (
          <BasicInfo key={index} person={person} />
        ))}
     </>
   );
  }
 }




export default App;
