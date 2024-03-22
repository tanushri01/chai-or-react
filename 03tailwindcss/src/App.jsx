import { useState } from 'react';
import './App.css';
import Card from './components/Card';


function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <h1 className='bg-green-400 text-black p-4 rounded-xl mb-10'>Tailwind CSS</h1>
     <Card username = "Tanu" btnText = "Visit Tanu" />
     <Card username = "Kartikey" btnText = "Visit Kartikey" />
     <Card />
     <Card />
     <Card />


    </>
  );
}

export default App;
