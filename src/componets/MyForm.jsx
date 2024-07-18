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
        const formData = {
            email,
            password,
            address,
            city,
            country,
            acceptRules: acceptRules.toString()
        };
        this.state({submitted: true, formData});
    };

    handleBack = () => {
        this.setState({submitted: false});
    };

    render() {
        const {email, password, address, city, country, acceptRules, submitted, formData} = this.state;
        const formFields = Object.keys(formData).sort();

        if (submitted){
            return(
                <div>
                    <button type="button" className="btn btn-primary" onClick={this.handleBack}>Back</button>
                    <table className="table">
                        <tbody>
                        {formFields.map((field) => (
                            <tr key={field}>
                                <td>{field}</td>
                                <td>{formData[field]}</td>
                            </tr>
                        ))}
                        </tbody>
                    </table>
                </div>
            );
        }

        return (
            <form name="myForm" onSubmit={this.handleSubmit}>
                <div className="col-md-6 mb-3">
                    <label htmlFor="email" className="col-form-label">Email</label>
                    <input type="email" name="email" className="form-control" id="email" placeholder="Email"
                    value={email} onChange={this.handleChange}/>
                </div>

        )
    }
}

export default MyForm