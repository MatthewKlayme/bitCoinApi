const getPriceBtn = document.getElementById('get-bitcoin-price');
getPriceBtn.addEventListener(`click`, getPriceOfBitcoin);

const revealPrice = document.getElementById('price-shown');

const lernAboutMeBtn = document.getElementById('my-api-about-me');
lernAboutMeBtn.addEventListener(`click`, showMe);

function getPriceOfBitcoin(){
    let tender = document.getElementById(`selected-tender`).value;
    let html = "";
    fetch(`https://api.coindesk.com/v1/bpi/currentprice.json`)
    .then(res => res.json())
    .then(data => {
        if(tender == "USD"){
            html = `
                <div>
                    <h2>${data.time.updated}</h2>
                    <h3>The price of bitcoin in ${tender} is $${data.bpi.USD.rate}</h3>
                </div>`;
        }
        else if(tender == "GBP"){
            html = `
                <div>
                    <h2>${data.time.updated}</h2>
                    <h3>The price of bitcoin in ${tender} is $${data.bpi.GBP.rate}</h3>
                </div>`;
        }
        else if(tender == "EUR"){
        html = `
            <div>
                <h2>${data.time.updated}</h2>
                <h3>The price of bitcoin in ${tender} is $${data.bpi.EUR.rate}</h3>
            </div>`;
        }
        else if(tender == "All"){ 
            html = `
                <div>
                    <h2>${data.time.updated}</h2>
                    <h3>The price of bitcoin in USD currency is $${data.bpi.USD.rate}</h3>
                    <h3>The price of bitcoin in GBP currency is $${data.bpi.GBP.rate}</h3>
                    <h3>The price of bitcoin in EUR currency is $${data.bpi.EUR.rate}</h3>
                </div>`;

        }
        revealPrice.innerHTML = html;
    });
    
}

function showMe(){
    let html = "";
    fetch('http://localhost:3000/api/hello')
    .then(res => res.json())
    .then(data => {
        html = `
        <div>
            <h3>${data.name}</h3>
            <h3>${data.bday}</h3>
        </div>
        `
    })
}