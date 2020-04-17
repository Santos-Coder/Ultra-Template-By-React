import styled from 'styled-components';

export const AboutSec = styled.div`
    height: 500px;
    background: url('images/creative/about-bg.jpg');
    background-size: cover;
    background-position: center;
    background-attachment: fixed;

    @media (max-width:991px) {
            height: auto;
        }
`

export const AboutInfo = styled.div`
    width: 50%;
    float: right;

    @media (max-width:991px) {
        width: 100%;
        padding-top: 10px;
        float: none
    }
`

export const AboutTit = styled.h2`
    font-weight: bold;
    font-size: 50px
`

export const AboutTitSpn = styled.span`
    font-weight: normal
`

export const AboutTit2 = styled.h4`
    font-size: 40px;
    color: #eb5424;
    margin-bottom: 20px

    @media (max-width:991px) {
        font-size: 30px
    }
`

export const AboutP = styled.p`
    color: #000;
    margin-bottom: 15px;
    line-height: 1.8
`

export const AboutAnch = styled.a`
    text-decoration: none
`