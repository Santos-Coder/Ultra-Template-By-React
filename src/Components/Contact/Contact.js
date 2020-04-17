import React from 'react';
import { ContInpSub , ContInpTxt , ContFrmDiv , ContFrm , ContTitSpn , ContTit , ContSec , ContInpMail , ContInpSmt , ContTxt } from './style.js';
import Footer from './../Footer/Footer'
const Contact = () => {
    return(
        <React.Fragment>
        <ContSec>
            <div class="container">
                <ContTit><ContTitSpn>Drop </ContTitSpn>Me A line</ContTit>
                <ContFrm action="">
                    <ContFrmDiv>
                        <ContInpTxt type="text" placeholder="Your Name" />
                        <ContInpMail type="email" placeholder="Your Email" />
                    </ContFrmDiv>
                    <ContInpSub type="text" placeholder="Your Subject" />
                    <ContTxt cols="30" rows="10" placeholder="Your Message"></ContTxt>
                    <ContInpSmt type="submit" value="Send Message" />
                </ContFrm>
            </div>
        </ContSec>
        <Footer />
        </React.Fragment>
    )
}

export default Contact;