import { useContext, useEffect, useState } from 'react';
import { Image } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../AuthProvider/AuthProvider';
import './Header.css'
import { FaUser } from 'react-icons/fa';

const Header = () => {
    const { user, logOut } = useContext(AuthContext)
    const [theme, setTheme] = useState("light-mode");

    const toggleTheme = () => {
        if(theme === "dark-mode"){
            setTheme("light-mode")
        }
        else{
            setTheme("dark-mode")
        }
    }

    const handleLogOut = () => {
        logOut()
            .then(() => { })
            .catch(() => {
                console.error('Error logging out')
            })
    }

    useEffect(() => {
        document.body.className = theme;
    }, [theme])

    return (
        <div>
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand>Primary IT Course</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">
                            <Link to='/'>Coures</Link>
                            <Link to='/blog'>Blog</Link>
                            <Link to='/faq'>FAQ</Link>
                            <Link  className='bgcolor' onClick={() => toggleTheme()}>Dark/Light</Link>
                        </Nav>
                        <Nav className='excess'>
                            {
                                user?.uid ? <>
                                    <Image
                                    className='hoverr'
                                    // onClick={user?.displayName}
                                        style={{ height: '30px'}}
                                        roundedCircle
                                        src={user?.photoURL}
                                    ></Image>
                                    <Link onClick={handleLogOut}>LogOut</Link>
                                </> :
                                    <>
                                        <FaUser className='icon'></FaUser>
                                        <Link to='/register'>Register</Link>
                                        <Link to='/login'>Login</Link>
                                    </>
                            }



                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;