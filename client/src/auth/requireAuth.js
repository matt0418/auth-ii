import React from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

axios.defaults.baseURL = 'http://localhost:5000/api'

axios.interceptors.request.use(
    function(options) {
        options.headers.authorization = localStorage.getItem('jwt')
        return options
    },
    function(err) {
        return Promise.reject(err)
    }
)

export default function(Component1) {
    return class Authenticated extends React.Component {
        render() {
            const token = localStorage.getItem('jwt')
            const notLoggedIn = <div>
                <h1>Please Login</h1>
                <Link to='/login'>Login</Link>
                
                </div>
            return(
                <div>
                    {token ? <Component1 {...this.props}/> : notLoggedIn}
                </div>
            )
        }
    }
}