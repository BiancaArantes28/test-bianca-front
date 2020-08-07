import React, { Component } from 'react';
import { Button, Form } from 'react-bootstrap';


class HomePage extends Component {

    constructor(props) {
        super(props);

        this.state = {
            checks: [],
            disabled: true,
        };

        this.handleCheckbox = this.handleCheckbox.bind(this);
        this.checkButtonDisabled = this.checkButtonDisabled.bind(this);
    }

    handleCheckbox(e) {
        const { checks } = this.state;
        const { names } = this.props;

        

        if(e.target.checked) {
            this.props.selectItem(e.target.value);
        } else {
            this.props.unSelectItem(e.target.value);
        }

        this.checkButtonDisabled();
    }

    checkButtonDisabled() {
        const { checks } = this.state;
        const { names, selecteds } = this.props;

        let namesArrays = [];

        names.map(name => {
            namesArrays.push(name.name);
        });
        console.log(checks.length)
        let filledEveryThing = (selecteds.length === namesArrays.length);

        if(filledEveryThing) {
            this.setState({ disabled: false });
        }
    }

    render() {
        const { helloWorld, names } = this.props;
        const { checks, disabled } = this.state;
        return (
            <div>
                <h1>{helloWorld}</h1>
                {
                    names.map((name) => {
                       return (
                           <div key={name.name}>
                               <Form.Check 
                                    type="checkbox"
                                    id={`default-${name.name}`}
                                    value={name.name}
                                    label={name.name}
                                    onChange={this.handleCheckbox}
                               />
                           </div>
                       )
                    })
                }
                <Button disabled={disabled} variant="primary">Enviar</Button>
            </div>
        );
    }
}

export default HomePage;
