const Alpaca = require('@alpacahq/alpaca-trade-api')
const { response } = require('express')
const config = require('./alpaca/config.json')
const https = require('https')


    
const alpaca = new Alpaca({
    keyId: config.keyId,
    secretKey: config.secretKey,
    paper: true
})

async function bars(pac){
    
    let resp = pac.getBarsV2(
        "AAPL",
        {
            start: "2021-02-01",
            end: "2021-02-10",
            limit: 2,
            timeframe: "1Day",
            adjustment: "all",
        },
        pac.configuration
    );
    const bars = [];
    console.log(resp)

}

bars(alpaca);
