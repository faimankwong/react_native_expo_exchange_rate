import React, { Component } from 'react';
import { Button } from 'semantic-ui-react'


export default class addButton extends Component {



    render() {
        const{date,currencyName,ChangeCurrency,ChangeCurrencyMonthly}=this.props;


        return (
            <div className="setMargin">
                <Button inverted color='violet'
                        onClick={()=>ChangeCurrency(date,currencyName)}>Add</Button>

                <Button inverted color='violet'
                        onClick={()=>ChangeCurrencyMonthly(date,currencyName)}>Last 30 Days</Button>

            </div>

        )
    }
}

