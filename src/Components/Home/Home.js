import React from 'react';

import { HomDiv , HomInfo , HomTit , HomTit2 , HomP , HomSpn , HomBtn} from './style'

const Home = () => {
    return (
        <HomDiv>
        <div className="container">
            <HomInfo>
                <HomTit>Mahmoud Ahmed</HomTit>
                <HomTit2>Front-End Developer</HomTit2>
                <HomP>
                    Iam a professional <HomSpn>UI/UX Designer</HomSpn> and Front-End Developer creating modern and resposive designs to Web and Mobile. Let us work together. Thank you. 
                </HomP>
                <HomBtn>Let's Begin</HomBtn>
            </HomInfo>
        </div>
    </HomDiv>
    
    )
}

export default Home;