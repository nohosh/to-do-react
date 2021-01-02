import { Button, Pane, Textarea } from 'evergreen-ui';
import React from 'react';


export default class CreateTD extends React.Component {
    state = {
        button: false,
        text: ""
    };

    handleClick = () => { console.log(this.state.text) }

    handleTextarea = (event) => {
        let value = event.target.value;
        if (value === "") {
            this.setState({
                button: false,
                text: value,
            }); return;
        }
        this.setState({
            text: value,
            button: true
        });
    }

    handleSubmit = (e) => {
        e.preventDefault();
        if (this.state.text) {
            this.props.callBack(this.state.text);
            this.setState({ text: "" })
        }
    }

    render() {
        return (
            <Pane
                display="flex"
                flexDirection="row"
                justifyContent="center"
                alignItems="center">
                <Textarea
                    width={500}
                    autoFocus={true}
                    float="left"
                    onKeyDown={(e) => { (e.keyCode.toString() === "13") ? this.handleSubmit(e) : console.log(); }}
                    marginRight={20}
                    onChange={this.handleTextarea}
                    value={this.state.text}
                    placeholder="What to do.." />
                <Button disabled={!this.state.button} float="right" onClick={this.handleClick}>add</Button>
            </Pane >

        );
    }
}