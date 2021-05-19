import React from 'react';
import logo from './logo.svg';
import * as CryptoCharts from 'cryptocharts';
import './App.css';

function App() {
  CryptoCharts.roiComparison({
    chart_id: 'mychart',
    cryptocompare_tickers: ['BTC', 'ETH'],
    iconomi_tickers: ['BLX', 'CAR'],
    last_days: 90,
  });
  return (
    <div className='App'>
      <div id='mychart'></div>
    </div>
  );
}

export default App;
