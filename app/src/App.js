import { useEffect, useState } from 'react';
import './App.css';
import Products from './Components/Products';
import Navbar from './Components/Navbar';
import Loading from './Loading';
import Categorybox from "./Components/Categorybox"
// import Login from './Components/Login';



function App() {

  const [data, setData] = useState([])

  const [items, setItem] = useState([]);
  const [Caterogy, setcategory] = useState("");

  const [loginstatus, setlogstatus] = useState(false);
  const [homestatus, sethomestatus] = useState(true);
  const [loading, setloading] = useState(false)

  useEffect(() => {
    setloading(true)
    fetch("https://fakestoreapi.com/products/")
      .then((res) => res.json())
      .then((d) => {
        console.log(d)
        setData(d)
        // setItem(d)
        setloading(false)
      })
      .catch((error) => {
        throw alert(error)
      })
  }, [])




  const changingData = (cat) => {
    sethomestatus(false)
    setcategory(cat)
    const filtereitems = data.filter((x) => {
      return x.category === cat
    })
    // console.log(filtereitems)
    setItem(filtereitems)
  }


  const HomaPage = () => {
    sethomestatus(true)
    setItem([])
  }




  return (
    <div className='cont'>

      <div className='navbar'>
        {/* <Login /> */}
        <Navbar HomaPage={HomaPage} changingData={changingData} />
      </div>
      {!loading && (homestatus ? <div className='h_img'>
        <img alt='home page' src='https://sslimages.shoppersstop.com/sys-master/root/h64/hc6/30154235609118/private-brand_Top-Banner-web_sersxr_434.jpg' /></div> : <Categorybox Caterogy={Caterogy}/>)}

      <div className="data">
        {loading ? <Loading /> : <Products data={items.length !== 0 ? items : data} />}
      </div>
    </div>
  );
}

export default App;
