import { useEffect, useState } from 'react';
import './App.css';
import Products from './Components/Products';
import Navbar from './Components/Navbar';

function App() {

  const [data,setData]=useState([])

  useEffect(()=>{
    fetch("https://fakestoreapi.com/products/")
      .then((res) => res.json())
      .then((d) => {
        console.log(d)
        setData(d)
      })
      .catch((error)=>{
        throw alert(error)
      })
  },[])


  return (
    <div className='cont'>
      <Navbar />
      <div className="data">
      {data && <Products data={data}/>}
      </div>
    </div>
  );
}

export default App;
