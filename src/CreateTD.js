import { Button, Pane, Textarea } from 'evergreen-ui';
import React from 'react';
import shortid from 'shortid';
import { Form } from "react-bootstrap";
export default class CreateTD extends React.Component {
    state = {
        text: ""
    };

    handleClick = () => { console.log(this.state.text) }

    handleChange = (event) => {
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
            this.props.callBack({
                id: shortid.generate(),
                text: this.state.text,
                complete: false
            });
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
                <Form onSubmit={this.handleSubmit}>
                    <Textarea
                        name="text"
                        width={500}
                        autoFocus={true}
                        float="left"
                        onKeyDown={(e) => { (e.keyCode.toString() === "13") ? this.handleSubmit(e) : console.log(); }}
                        marginRight={20}
                        onChange={this.handleChange}
                        value={this.state.text}
                        placeholder="What to do.." />
                    <Button disabled={!this.state.button} float="right" type="submit">add</Button>
                </Form>
            </Pane >

        );
    }
}