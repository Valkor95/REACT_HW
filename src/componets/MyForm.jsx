import React from "react";

class MyForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '',
            address: '',
            city: '',
            country: '',
            acceptRules: false,
            submitted: false,
            formData: {},
        };
    }

    handleChange = (event) => {
        const {name, value, type, checked} = event.target;
        this.state({
            [name]: type === 'checkbox' ? checked : value
        })
    }

    handleSubmit = (event) => {
        event.preventDefault();
        const {email, password, address, city, country, acceptRules} = this.state;
    }
    render() {
        return <h1>Hello</h1>
    }
}

export default MyForm