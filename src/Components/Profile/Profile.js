import React , { useState , useEffect } from 'react';
import { Prof , ProfSec , ProfSpn , ProfSpnWb , ProfTit , ProfTitSpn , ProfUl , ProfUlLi , SkillBar , SkillP , SkillParent , SkillParentSpn , SkillSpn , SkillTit , Skills } from './style.js'
import axios from 'axios';
const Profile = () => {

    const [ SkillBr , SetSkillBr ] = useState([]);

    useEffect( () => {
        axios.get('js/data.json').then( res => { SetSkillBr(res.data.profile) } )
    }, [] )

    const skillBarData = SkillBr.map( (barItem) => {
        return (
        <SkillBar key={barItem.id}>
            <SkillTit>{barItem.title}</SkillTit>
            <SkillSpn>{barItem.Perc}</SkillSpn>
            <SkillParent>
                <SkillParentSpn no={barItem.id}></SkillParentSpn>
            </SkillParent>
         </SkillBar>    
        )
    })
    return (
        <ProfSec>
        <div class="container">
            <Prof>
                <ProfTit><ProfTitSpn>My </ProfTitSpn>Profile</ProfTit>
                <ProfUl>
                    <ProfUlLi>
                        <ProfSpn>Name</ProfSpn>
                        Mahmoud Ahmed
                    </ProfUlLi>
                    <ProfUlLi>
                        <ProfSpn>Birthday</ProfSpn>
                        9/6/1985
                    </ProfUlLi>
                    <ProfUlLi>
                        <ProfSpn>Address</ProfSpn>
                        Marj - Emam Ali St.
                    </ProfUlLi>
                    <ProfUlLi>
                        <ProfSpn>Phone</ProfSpn>
                        0 11 22 33 44 55
                    </ProfUlLi>
                    <ProfUlLi>
                        <ProfSpn>Email</ProfSpn>
                        mail@mail.com
                    </ProfUlLi>
                    <ProfUlLi>
                        <ProfSpn>Website</ProfSpn>
                        <ProfSpnWb>www.google.com</ProfSpnWb>
                    </ProfUlLi>
                </ProfUl>
            </Prof>
            
            <Skills>
                <ProfTit>Some <ProfTitSpn>skills</ProfTitSpn></ProfTit>
                <SkillP>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos praesentium blanditiis esse cupiditate, omnis similique.
                </SkillP>
                {skillBarData}           
            </Skills>
            
        </div>
    </ProfSec>
    )
}

export default Profile;