import React, { useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import { addUser } from './firebase/firestore';
import { MyRoutes } from './components/MyRouter/indx';

function App() {
  useEffect(()=>{
    // addUser({name:"anna", surname:"Anyan", age:15, email:"aa"})
    // .then(console.log)
    // .catch(console.warn)
  }, [])
  return (
    <div>
      <MyRoutes/>
    </div>

  );
}

export default App;
