import { useEffect, useState } from 'react';
import './App.css';
import Products from './Components/Products';
import Navbar from './Components/Navbar';
import Loading from './Loading';
import Categorybox from "./Components/Categorybox";
import Login from './Components/Login';



function App() {

  const [data, setData] = useState([])

  const [items, setItem] = useState([]);
  const [Caterogy, setcategory] = useState("");



  const [loginstatus, setlogstatus] = useState(false);
  const [homestatus, sethomestatus] = useState(true);
  const [loading, setloading] = useState(false)

  console.log(window.outerWidth)
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
        setloading(true)
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
    setcategory(false)
    setItem([])
  }

  const Canceotpverification=()=>{
    sethomestatus(true)
    setlogstatus(!loginstatus)
  }


  return (
    <div className='cont'>

      <div className='navbar'>
        {loginstatus &&<Login Canceotpverification={Canceotpverification}/>}
        <Navbar HomaPage={HomaPage} changingData={changingData} Canceotpverification={Canceotpverification} loginstatus={loginstatus} />
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
