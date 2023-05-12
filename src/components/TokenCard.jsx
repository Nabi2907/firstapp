import React, { useState, useEffect } from 'react'

const TokenCard = ({ id }) => {
    const [tokenData, setTokenData] = useState(null);
    const [isLoading, setIsLoading] = useState(false);


    useEffect(() => {
        setIsLoading(true);

        fetch(`https://api.coingecko.com/api/v3/coins/${id}`)
            .then((respone) => respone.json())
            .then(data => {
              setTokenData(data);
              setIsLoading(false);
            })
            .catch(error => console.log(error));
  }, []);

if (isLoading) {
  return (
    <div>Loading</div>
  )
}

  return <div className="token-container">
    {tokenData && (
    <div className="token-info">
    <img className="token-logo" src={tokenData.image.small} />
    <div className="token-title-container">
      <span className="token-title">
        {tokenData.name}
      nooc</span>
      <span className="token-title-long">
        {tokenData.assets_platform_id}
      </span> 
    </div>
    <div className="token-amout-container">
      <div className="token-amout">10</div>
      <div className="token-amout-long">
      <div className="token-price">
        {tokenData.market_data.current_price.usd}
        </div>
      </div>
    </div>
  </div>
  )}
  </div>;
}; 

export default TokenCard;
