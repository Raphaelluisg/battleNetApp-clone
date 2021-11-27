import React, { Component } from 'react';
import { Navbar, Nav, NavDropdown, Form, FormControl, Button, Container } from 'react-bootstrap';
import diablo2 from '../../assets/logo-d2r.png';
import logo from '../../assets/Blizzard_Logo.svg.png';
import overwatch2 from '../../assets/over2-logo.png';
import overwatch from '../../assets/logo-ow.png';
import wow from '../../assets/logo-wow.png';
import hs from '../../assets/logo-hs.png';
import heroes from '../../assets/logo-heroesst.png';
import d3 from '../../assets/logo-d3.png';
import star from '../../assets/logo-sc2.png';
import d4 from '../../assets/logo-d4.png';
import war3 from '../../assets/logo-w3r.png';

export default class Header extends Component {
    render() {
        return (
            <div>
                <Navbar bg="black" variant='dark' expand="lg" className="navbar navbar-expand-md navbar-dark bg-dark">
                    <Container fluid>
                        <Navbar.Brand href="/">
                            <img className="navbar-logo" src={logo} alt="Blizzard logo" width="90"/>
                        </Navbar.Brand>
                        <Navbar.Toggle aria-controls="navbarScroll" />
                        <Navbar.Collapse id="navbarScroll">
                        <Nav
                            className="me-auto my-2 my-lg-0"
                            style={{ maxHeight: '100px' }}
                            navbarScroll
                        >
                            <NavDropdown title="GAMES" classname="navbarScrollingDropdown Navbar-modalContent">
                                <NavDropdown.Item href="https://diablo2.blizzard.com/pt-br/">Diablo II<img src={diablo2} alt="diablo 2 logo" className="Navbar-gameLogoImage" width="50"/></NavDropdown.Item>
                                <NavDropdown.Item href="https://overwatch2.playoverwatch.com/pt-br/trailer">Overwatch 2<img src={overwatch2} alt="overwatch 2 logo" className="Navbar-gameLogoImage" width="50"/></NavDropdown.Item>
                                <NavDropdown.Item href="https://playoverwatch.com/pt-br/">Overwatch<img src={overwatch} alt="overwatch logo" className="Navbar-gameLogoImage" width="50"/></NavDropdown.Item>
                                <NavDropdown.Item href="https://worldofwarcraft.com/pt-br/">World of Warcraft<img src={wow} alt="world of warcraft logo" className="Navbar-gameLogoImage" width="50"/></NavDropdown.Item>
                                <NavDropdown.Item href="https://playhearthstone.com/pt-br">Heartstone<img src={hs} alt="heartstone logo" className="Navbar-gameLogoImage" width="50"/></NavDropdown.Item>
                                <NavDropdown.Item href="https://heroesofthestorm.com/pt-br/">Heroes of the Storm<img src={heroes} alt="heroes of the storm logo" className="Navbar-gameLogoImage" width="50"/></NavDropdown.Item>
                                <NavDropdown.Item href="#action1.7">Diablo III<img src={d3} alt="diablo 3 logo" className="Navbar-gameLogoImage" width="50"/></NavDropdown.Item>
                                <NavDropdown.Item href="#action1.8">StarCraft 2<img src={star} alt="heroes of the storm logo" className="Navbar-gameLogoImage" width="50"/></NavDropdown.Item>
                                <NavDropdown.Item href="https://diablo4.blizzard.com/pt-br/">Diablo IV<img src={d4} alt="diablo IV logo" className="Navbar-gameLogoImage" width="50"/></NavDropdown.Item>
                                <NavDropdown.Item href="https://playwarcraft3.com/pt-br/">Warcraft 3<img src={war3} alt="warcraft 3 logo" className="Navbar-gameLogoImage" width="50"/></NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item href="https://us.forums.blizzard.com/en/blizzard/">
                                    Forum
                                </NavDropdown.Item>
                            </NavDropdown>
                            <Nav.Link href="https://us.shop.battle.net/pt-br">STORE</Nav.Link>
                            <Nav.Link href="https://news.blizzard.com/pt-br">NEWS</Nav.Link>
                            <NavDropdown title="ESPORTS" id="navbarScrollingDropdown">
                                <NavDropdown.Item href="https://overwatchleague.com/en-us">Overwatch League</NavDropdown.Item>
                                <NavDropdown.Item href="https://overwatchleague.com/en-us/overwatch-world-cup">Overwatch World Cup</NavDropdown.Item>
                                <NavDropdown.Item href="https://playhearthstone.com/en-us/esports/">Heartstone Masters</NavDropdown.Item>
                                <NavDropdown.Item href="https://pro.eslgaming.com/tour/sc2/">StarCraft 2 WCS</NavDropdown.Item>
                                <NavDropdown.Item href="https://worldofwarcraft.com/pt-br/esports/arena">WOW ARENA CHAMPIONSHIP</NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item href="https://communitytournaments.blizzardesports.com/pt-br/">
                                Community Tournaments
                                </NavDropdown.Item>
                            </NavDropdown>
                            <Nav.Link href="#">
                            SUPPORT
                            </Nav.Link>
                        </Nav>
                        <Nav
                            className="ml-auto my-2 my-lg-0"
                            style={{ maxHeight: '100px' }}
                            navbarScroll
                        >
                        <NavDropdown title="My Account" id="navbarScrollingDropdown">
                                <NavDropdown.Item href="/login">Log In</NavDropdown.Item>
                                <NavDropdown.Item href="#action5.1">Account Settings</NavDropdown.Item>
                                <NavDropdown.Item href="/register">Create a Free Account</NavDropdown.Item>
                            </NavDropdown>
                        </Nav>
                        <Form className="d-flex">
                            <FormControl
                            type="search"
                            placeholder="Search"
                            className="me-2"
                            aria-label="Search"
                            />
                            <Button variant="outline-success">Search</Button>
                        </Form>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
            </div>
        )
    }
}
