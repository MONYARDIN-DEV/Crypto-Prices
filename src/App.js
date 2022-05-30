import { useEffect, useState } from 'react';
import './App.css';
import axios from 'axios'
import TableCoins from './components/TableCoins';
import Clock from './components/Clock';

function App() {

  const [coins, setCoins] = useState([]);
  const [search, setSearch] = useState('');
  const getData = async () => {
    const res = await axios.get('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1');

    // console.log(res.data)
    setCoins(res.data)
  }

  useEffect(() => {
    getData()
  }, [])

  return (
    <div className="container">
      <div className="row">
        <h1 className='text-center mt-4'>Precios de las criptomonedas según la capitalización de mercado </h1>
        <hr/>
        <input type="text" placeholder='Search a Coin' className='form-control bg-dark text-light text-center border-0 mt-4 text-center' onChange={e=> setSearch(e.target.value)}/>
        <Clock/>
        <TableCoins coins={coins} search={search}/>
      </div>
    </div>
  );
}

export default App;
