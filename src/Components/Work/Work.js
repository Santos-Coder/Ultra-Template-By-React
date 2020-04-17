import React, { Component } from 'react';
import { WorkIcon , WorkLine , WorkMain , WorkP , WorkPrt , WorkSpn , WorkTit , WorkTit2 } from './style'
import axiox from 'axios';

class Work extends Component  {
    state = {
        works: []
    }

    componentDidMount () {
        axiox.get('js/data.json').then(res => {this.setState({ works: res.data.works })})
    }
    render () {
        const {works} = this.state;

        const workList = works.map ( (workItem) => {
            return (
                <WorkPrt first={workItem.id} key={workItem.id}>
                <WorkIcon className={workItem.icon_name}></WorkIcon>
                <WorkTit2>{workItem.title}</WorkTit2>
                <WorkLine />
                <WorkP>
                    {workItem.body}
                </WorkP>
            </WorkPrt>
            )
        })
    return (
        <WorkMain>
            <div className="container">
                <WorkTit><WorkSpn>My</WorkSpn> Work</WorkTit>
               {workList}
            </div>
        </WorkMain>
    )
}
}

export default Work;