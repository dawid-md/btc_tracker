import btclogo from './btc.svg'
import ethlogo from './eth.svg'

import './App.css';
import { useState } from 'react';
import { useEffect } from 'react';

function App() {

  const [btcPrice, setbtcPrice] = useState(null)
  const [ethPrice, setethPrice] = useState(null)

  const fetchBitcoinPrice = async () => {
    try {
      const response = await fetch('https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=usd', {
      })
      const data = await response.json();
      setbtcPrice(data.bitcoin.usd)
      console.log('Current Bitcoin price (USD):', data.bitcoin.usd);
    } catch (error) {
      console.error('Error fetching Bitcoin price:', error);
    }
  };

  const fetchEtherPrice = async () => {
    try {
      const response = await fetch('https://api.coingecko.com/api/v3/simple/price?ids=ethereum&vs_currencies=usd', {
      })
      const data = await response.json();
      setethPrice(data.ethereum.usd)
      console.log('Current Ethereum price (USD):', data.ethereum.usd);
    } catch (error) {
      console.error('Error fetching Ethereum price:', error);
    }
  };
  
  useEffect(() => {
    fetchBitcoinPrice()
    fetchEtherPrice()
    }, []
  )

  return (
    btcPrice ? 
    <div className='App'>
      <div className='card'>{`$ ${btcPrice}`} <img className='btcimage' src={btclogo} style={{ height: 50, width: 50 }} /></div>
      <div className='card'>{`$ ${ethPrice}`} <img className='btcimage' src={ethlogo} style={{ height: 50, width: 50 }} /></div>
    </div>
    : <h3>waiting</h3>
  );
}

export default App;
