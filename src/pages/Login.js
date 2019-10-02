import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            user: '',
            pass: '',
            redirect: false

        }
        this.handleLogin = this.handleLogin.bind(this);
        this.handleUsername = this.handleUsername.bind(this);
        this.handlePassword = this.handlePassword.bind(this);
    }
    handleUsername(e) {
        this.setState({
            user: e.target.value
        })
    }
    handlePassword(e) {
        this.setState({
            pass: e.target.value
        })
    }

    handleLogin(e) {
        let username = "admin";
        let password = "123456";
        e.preventDefault();

        if (this.state.user === username && password === this.state.pass) {
            alert('sucessful');
            this.setState({ redirect: true })
        } else {
            alert('Invalid username and password');
        }
    }
    render() {
        const { redirect } = this.state;
        if (redirect) {
            return <Redirect to='/Member' />;
        }
        return (
            <div className="container">
                <div className="row">
                    <div className="col-12" style={{ marginTop: 250 }}>
                        <form>
                            <div className="form-group">
                                <label for="username">Username</label>
                                <input type="text" className="form-control" id="username" aria-describedby="emailHelp" placeholder="Username" onChange={this.handleUsername} />
                                <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
                            </div>
                            <div className="form-group">
                                <label for="exampleInputPassword1">Password</label>
                                <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password" onChange={this.handlePassword} />
                            </div>
                            <button type="submit" className="btn btn-primary" onClick={this.handleLogin}>Submit</button>
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}
export default Login;