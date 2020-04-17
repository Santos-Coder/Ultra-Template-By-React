import styled from 'styled-components';

export const Navdiv = styled.div`
    padding: 20px 0;
    overflow: hidden;
    background: #fff;
    position: relative;
    border-bottom: 1px solid #000
    `

export const navLogo = styled.div`
    width: 50%;
    float: left;

    @media (max-width: 991px) {
            width: 100%;
            float: none;
        }
    `

export const NavTit = styled.h2`
    font-size: 30px;
    font-weight: bold
    display: inline-block;
    float: left
    `
export const NavUl = styled.ul`
    width: 50%;
    float: right;
    list-style: none;
    padding: 0;
    padding-top: 12px;

    @media (max-width: 991px) {
        width: 100%;
        float:  none;
        margin-top: 20px;
        display: none
    }
    `

export const UlItem = styled.li`
    display: inline-block;

    @media (max-width: 991px) {
        display: block;
        text-align: center;
    }
    `

export const Anch = styled.a`
    display: block;
    color: #222;
    text-decoration: none;
    padding: 10px 15px;
    font-weight: bold;

    &:hover {
        color: #eb5424
    }
    `