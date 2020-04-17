import styled from 'styled-components'

export const ProfSec = styled.div`
    padding: 50px 0;
    overflow: hidden;
`

export const Prof = styled.div`
    width: 50%;
    float: left;
    
    @media (max-width:768px) {
        width: 100%;
        float: none;
        margin-bottom: 20px
    }
`

export const ProfUl = styled.ul`
    list-style: none
`

export const ProfUlLi = styled.li`
    margin-bottom: 8px
`

export const ProfSpn = styled.span`
    display: inline-block;
    width: 100px;
    font-weight: bold
`

export const ProfSpnWb = styled.span`
    font-weight: normal;
    color: #eb5424
`

export const Skills = styled.div`
    width: 50%;
    float: left;
    
    @media (max-width:768px) {
        width: 100%;
        float: none;
    }
`

export const SkillP = styled.p`
    font-size: 15px;
    color: #888;
    line-height: 1.5;
    margin-bottom: 20px
`

export const SkillBar = styled.div`
    overflow: hidden;
    padding: 10px 0;
    margin-bottom: 10px
`

export const SkillTit = styled.span`
    float: left;
`

export const SkillSpn = styled.span`
    float: right;
    margin-right: 0
`

export const SkillParent = styled.div`
    height: 2px;
    clear: both;
    background: #f8f8f8;
    position: relative;
    top: 5px
`

export const SkillParentSpn = styled.span`
    background: #eb5424;
    position: absolute;
    display: block;
    top: 0;
    left: 0;
    bottom: 0;
    width: ${props => props.no === 1 ? '100%' : props.no === 2 ? '80%' : '65%' };
`
export const ProfTit = styled.h2`
    font-size: 40px; 
    margin-bottom: 20px
`

export const ProfTitSpn = styled.span`
    font-weight: normal;
`