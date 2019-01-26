import React, { Component } from 'react';
import Buttons from './Bottons'

class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <div>
                <p>Rahmat</p>
                <Buttons/>

            </div>
         );
    }
}
 
export default Header;