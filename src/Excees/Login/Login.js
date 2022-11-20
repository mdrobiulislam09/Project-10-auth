import { GithubAuthProvider, GoogleAuthProvider } from 'firebase/auth';
import React from 'react';
import { useContext } from 'react';
import { Button } from 'react-bootstrap';
import { AuthContext } from '../../AuthProvider/AuthProvider';
import Form from 'react-bootstrap/Form';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { FaGithub, FaGoogle } from 'react-icons/fa';

const Login = () => {
    const { loginAccount, githubLogin, logIn } = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || '/'

    const googleProvider = new GoogleAuthProvider()
    const githubProvider = new GithubAuthProvider()

    const handlegoogle = () => {
        loginAccount(googleProvider)
            .then(result => {
                const users = result.user
                console.log(users)
                navigate(from , {replace: true})
            })
            .catch(error => {
                console.error(error)
            })
    }

    const handleLogIn= (event) => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        logIn(email, password)
        .then(result => {
            const users = result.user
            console.log(users)
            form.reset()
            navigate(from , {replace: true})
        })
        .catch(error => {
            console.error(error)
        })
    }

    const handleGithub = () => {
        githubLogin(githubProvider)
            .then(result => {
                const users = result.user
                console.log(users)
                navigate(from , {replace: true})
            })
            .catch(error => {
                console.error(error)
            })
    }
    return (
        <div>
            <Form onSubmit={handleLogIn}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control name='email' type="email" placeholder="Enter email" required />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control name='password' type="password" placeholder="Password" required />
                </Form.Group>

                <Button variant="primary" type="submit">
                    LogIn
                </Button>
                <Link to='/register'>Register</Link>
            </Form>
            <br />
            <br />
            <br />
            <Button onClick={handlegoogle}><FaGoogle></FaGoogle> google</Button>
            <Button onClick={handleGithub}><FaGithub></FaGithub> github</Button>
        </div>
    );
};

export default Login;