import React from 'react';

function Awards(){
    return(
        <div className='container mt-5'>
            <div className='row'>
                <div className='col-6 p-3'>
                    <img src='/media/images/largestBroker.svg' alt='largest Broker'/>
                </div>
                <div className='col-6 p-4 mt-5'>
                    <h1>Largest stock broker in India</h1>
                    <p className='mt-3'>2+ million Zerodha clients contribute to over 15% of all volumes in India daily by trading and investing in:</p>

                    <div className='row'>
                        <div className='col-6 mt-4'>
                        <ul>
                            <li><p>Future and Options</p></li>
                            <li><p>Commodity derivatives</p></li>
                            <li><p>Currency derivatives</p></li>
                        </ul>
                        </div>

                        <div className='col-6 mt-4'>
                        <ul>
                            <li><p>Stocks & IPOs</p></li>
                            <li><p>Direct Mutual Funds</p></li>
                            <li><p>Bonds and Govt.securities</p></li>
                        </ul>
                        </div>
                    </div>

                    <img src='/media/images/pressLogos.png' alt='Press Logos'  style={{width:"80%"}}/>
                    
                </div>

            </div>

        </div>

    );

}
export default Awards;