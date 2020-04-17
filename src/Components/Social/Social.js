import React, { Component } from 'react';
import { SocialSec , SocialDiv , SocialIco , SocialP , SocialSpn , SocialSpn2 } from './style.js'
import axios from 'axios';

class Social extends Component {
    state = {
        SocialMed: []
    }
componentDidMount () {
    axios.get('js/data.json').then( res => {this.setState({SocialMed: res.data.social})})
}
    render() {
        const {SocialMed} = this.state;

        const SocialMedSec = SocialMed.map ( (socialItem) => {
            return (
            <SocialDiv soc={socialItem.id} key={socialItem.id}>
                <SocialIco className={socialItem.icon}></SocialIco>
                <SocialP>
                    <SocialSpn>{socialItem.title}</SocialSpn>
                    <SocialSpn2>{socialItem.body}</SocialSpn2>
                </SocialP>
            </SocialDiv>
            )
        })
    return (
        <SocialSec>
            {SocialMedSec}
        </SocialSec>
    )
}
}
export default Social;