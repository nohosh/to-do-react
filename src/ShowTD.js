import React from 'react';
import ItemTD from './I~`temTD';
export default class ShowTD extends React.Component {
    items = [];
    componentDidUpdate() {
        console.log('sowTD', this.props.list);

    }
    render() {
        return (

            < div className="show-td" >
                <p>show td</p>
                {this.props.list.map((v, i) => { return <ItemTD key={i} text={v} /> })}
            </div >
        );
    }
}
