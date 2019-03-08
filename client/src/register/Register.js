import React from 'react'
import axios from 'axios'
import { withRouter } from 'react-router-dom'

class Register extends React.Component {
    
    state = {
        username: '',
        password: '',
        department: ''
    }

    handleChanges = e => {
        const { name, value } = e.target
        this.setState({ [name]: value })
    } 

    handleSubmit = e => {
        e.preventDefault()
        const endpoint = 'http://localhost:5000/api/auth/register'
        axios
            .post(endpoint, this.state)
            .then(res => {
                this.setState({
                    username: res.data.username,
                    password: res.date.password,
                    department: res.data.department
                })
            })
            .catch(err => {
                console.log(err)
            })
        this.props.history.push('/login')
        
    }

    render() {
        return(
            <div>
                <h1>Register</h1>
                <form onSubmit={this.handleSubmit}>
                    <label htmlFor="username" />
                    <input 
                    name = "username"
                    id = 'username'
                    value = {this.props.username}
                    onChange = {this.handleChanges}
                    type = "text"
                    />
                    <label htmlFor="password" />
                    <input 
                    name = "password"
                    id = 'password'
                    value = {this.props.password}
                    onChange = {this.handleChanges}
                    type = "text"
                    />
                    <label htmlFor="department"/>
                    <input 
                    name = "department"
                    id = 'department'
                    value = {this.props.department}
                    onChange = {this.handleChanges}
                    type = "text"
                    />
                    <button type="submit">Register</button>
                </form>
            </div>
        )
    }
    
}

export default withRouter(Register)