import styled from 'styled-components';

export const ContSec = styled.div`
    padding: 30px 0;
    text-align: center
`

export const ContTit = styled.h2`
    font-size: 60px;
    margin-bottom: 30px;

    @media (max-width:575px) {
            font-size: 40px;
        }
`

export const ContTitSpn = styled.span`
    font-weight: normal
`

export const ContFrm = styled.form`
    width: 70%;
    margin: auto;

    @media (max-width:575px) {
        width: 90%;
    }
`

export const ContInp = styled.input`
    box-sizing: border-box;
    outline: 0;
    padding: 5px;
    margin-bottom: 10px;
`

export const ContFrmDiv = styled.div`
    overflow: hidden
`

export const ContInpTxt = styled(ContInp)`
    float: left;
    width: 49%;

    @media (max-width:575px) {
        width: 100%;
    }
`

export const ContInpMail = styled(ContInp)`
    float: right;
    width: 49%;

    @media (max-width:575px) {
        width: 100%;
    }
`

export const ContInpSub = styled(ContInp)`
    width: 100%;
`

export const ContTxt = styled.textarea`
    width: 99%;
    outline: 0;
    background: #eee;
    padding: 5px
`

export const ContInpSmt = styled(ContInp)`
    width: 60%;
    background: #fff;
    border: 1px solid #ccc;
    color: #888;
    cursor: pointer;

    &:hover {
        background: #444;
        color: #fff;
    }
`
