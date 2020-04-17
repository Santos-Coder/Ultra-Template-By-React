import React from 'react';
import { AboutSec , AboutAnch , AboutInfo , AboutP , AboutTit , AboutTit2 , AboutTitSpn } from './style.js';

const About = () => {
    return (
        <AboutSec>
        <div class="container">
            <AboutInfo>
                <AboutTit><AboutTitSpn>This is</AboutTitSpn> Me</AboutTit>
                <AboutTit2>Front-End Developer</AboutTit2>
                <AboutP>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim est <AboutAnch href="#">explicabo</AboutAnch> maxime quibusdam quaerat nihil aliquid aperiam deleniti, repellendus dolorum. Possimus nisi cupiditate ad veritatis?
                </AboutP>
                <AboutP>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim est explicabo maxime quibusdam quaerat nihil aliquid aperiam deleniti, repellendus dolorum. Possimus nisi cupiditate ad veritatis?
                </AboutP>
            </AboutInfo>
        </div>
    </AboutSec>
    )
}

export default About;