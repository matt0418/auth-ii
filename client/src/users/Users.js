import React from 'react'
import axios from 'axios'

import requireAuth from '../auth/requireAuth'
import { withRouter } from 'react-router-dom'

class Users extends React.Component {

    state = {
        users: []
    }

    componentDidMount() {
        axios.get('http://localhost:5000/api/users')
            .then(res => {
                this.setState({ users: res.data })
            })
            .catch(error => {
                console.log(error)
            })
    }

    render() {
        if (localStorage.getItem('jwt')) {
            return(
                <div>
                    <h2>List of Peeps</h2>
                    <div>
                        {this.state.users.map(user => (
                            <div key={user.id}>
                                <p>{user.username}</p>
                            </div>
                        ))}
                    </div>
                </div>
            )
        } else {
            this.props.history.push('/login')
        }
            
    }
}

export default requireAuth(withRouter(Users))