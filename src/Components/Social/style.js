import styled from 'styled-components'

export const SocialSec = styled.div`
    height: auto;
    overflow: hidden
`

export const SocialDiv = styled.div`
    width: 33.33%;
    float: left;
    box-sizing: border-box;
    padding: 100px 0 100px 60px;
    background: ${props => props.soc === 1 ? '#3b5998' : props.soc === 2 ? '#498cbf' : '#cc2127'};
    
    @media (max-width:991px) {
        width: 100%;
        float: none;
    }
`
export const SocialIco = styled.i`
    width: 50px;
    height: 50px;
    background: #fff;
    text-align: center;
    line-height: 50px;
    color: #888;
    float: left;
    margin-right: 10px
`

export const SocialP = styled.p`
    font-weight: bold;
    text-transform: uppercase;
    font-size: 20px;
    color: #fff
`

export const SocialSpn = styled.span`
    display: block;
    margin-bottom: 8px
`

export const SocialSpn2 = styled.span`
    font-weight: normal
`