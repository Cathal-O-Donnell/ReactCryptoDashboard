import React from "react";

import CurrencyCard from './components/UI/CurrencyCard';
import CryptoChart from './components/Chart/CryptoChart';
import InfoContainer from './components/UI/InfoContainer';
import Price from './components/UI/Price';
import PriceCard from './components/UI/PriceCard';
import SectionTitle from './components/UI/SectionTitle';
import TimelineSelector from './components/UI/TimelineSelector';
import TotalBalance from './components/UI/TotalBalance';

import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const timeLineOptions = [
    { text: 'All', value: 1 },
    { text: '1M', value: 2 },
    { text: '6M', value: 3 },
    { text: '1Y', value: 4 },
    { text: 'YTD', value: 5 }
  ];

  return (
    <div className="container margin-top-20">
      <div className="row">

        {/* Left Column */}
        <div className="col-md-2 padding-side-10">
          <div className="row margin-bottom-20">
            <SectionTitle title="Your Porfolio"></SectionTitle>
          </div>

          <div className="row margin-bottom-20">
            <TotalBalance curencySymbol="$" totalBalance="63411.00"></TotalBalance>
          </div>

          <div className="row">
            <CurrencyCard title="Bitcoin" cryptoAmount="0.000242" currencyShortName="BTC" fiatAmount="0.125" fiatCurrencyShortName="USD"></CurrencyCard>
            <CurrencyCard title="Litecoin" cryptoAmount="0.000242" currencyShortName="LTE" fiatAmount="0.125" fiatCurrencyShortName="USD"></CurrencyCard>
            <CurrencyCard title="Ripple" cryptoAmount="0.000242" currencyShortName="XRP" fiatAmount="0.125" fiatCurrencyShortName="USD"></CurrencyCard>
            <CurrencyCard title="Dash" cryptoAmount="0.000242" currencyShortName="XRP" fiatAmount="0.125" fiatCurrencyShortName="USD"></CurrencyCard>
          </div>
        </div>

        {/* Middle Column */}
        <div className="col-md-8 padding-side-10">
          <div className="row">
            <div className="col-md-6">
              <Price></Price>
            </div>

            <div className="col-md-6">
              <TimelineSelector selectedValue={1} options={timeLineOptions} />
            </div>
          </div>

          <div className="row margin-bottom-20">
            <CryptoChart></CryptoChart>
          </div>

          <div class="container">
            <div class="row margin-bottom-20">
              <InfoContainer title="24hr Volume" body="$1236548.325"></InfoContainer>
              <InfoContainer title="Market Cap" body="19B USD"></InfoContainer>
              <InfoContainer title="Circulating Supply" body="294M BTC"></InfoContainer>
              <InfoContainer title="All Time High" body="19.783.06 USD"></InfoContainer>
            </div>

            <div class="row margin-bottom-20">
              <InfoContainer title="Typical hold time" body="98 days"></InfoContainer>
              <InfoContainer title="Trading activity" body="Active"></InfoContainer>
              <InfoContainer title="Popularity" body="#1 most held"></InfoContainer>
              <InfoContainer title="Popularity" body="#1 most held"></InfoContainer>
            </div>
          </div>
        </div>

        {/* Right Column */}
        <div className="col-md-2 padding-side-10">
          <div className="row margin-bottom-20">
            <SectionTitle title="Follow"></SectionTitle>
          </div>

          <div className="row">
            <PriceCard title="Bitcoin" amount="1254.36" increasePercentage="0.6" fiatCurrencyShortName="USD"></PriceCard>
            <PriceCard title="Litecoin" amount="1254.36" increasePercentage="0.6" fiatCurrencyShortName="USD"></PriceCard>
            <PriceCard title="•Ethereum" amount="1254.36" increasePercentage="0.6" fiatCurrencyShortName="USD"></PriceCard>
            <PriceCard title="Ripple" amount="1254.36" increasePercentage="0.6" fiatCurrencyShortName="USD"></PriceCard>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;