import React from "react";
import radio from '../assets/icon/radio.png';
import { Image } from "semantic-ui-react";

class Radio extends React.Component {
    render() {
        return (
            <div>
                <a href="/radio">
                    <Image src={radio} centered size='small'/>
                </a>
            </div>
        );
    }
}

export default Radio