import { Button, Pane, Textarea } from 'evergreen-ui';
import React from 'react';

export default class CreateTD extends React.Component {
    state = {
        button: false,
        text: ""
    };
    __handle

    handleClick = () => { console.log(this.state.text) }

    handleTextarea = (event) => {
        let value = event.target.value;
        if (value === "") {
            this.setState({
                button: false,
                text: value,
            });
            return;
        }
        this.setState({
            text: value,
            button: true
        });

    }
    render() {

        return (
            <Pane
                display="flex"
                flexDirection="row"
                justifyContent="center"
                alignItems="center"
            >
                <Textarea width={500} autoFocus={true} float="left" onKeyDown={(e) => { (e.keyCode == "13") ? console.log('yay') : console.log('na.') }} marginRight={20} onChange={this.handleTextarea} value={this.state.text} placeholder="What to do.."></Textarea>
                <Button disabled={!this.state.button} float="right" onClick={this.handleClick}>add</Button>
            </Pane>
        );
    }
}