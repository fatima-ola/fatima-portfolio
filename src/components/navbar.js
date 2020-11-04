import React from 'react';
import { NavLink } from 'react-router-dom';

function navbar() {
    return (
        <div>
            <Navbar
                alignLinks="right"
                brand={<a className="brand-logo" href="/">Logo</a>}
                id="mobile-nav"
                menuIcon={<Icon>menu</Icon>}
                options={{
                    draggable: true,
                    edge: 'left',
                    inDuration: 250,
                    onCloseEnd: null,
                    onCloseStart: null,
                    onOpenEnd: null,
                    onOpenStart: null,
                    outDuration: 200,
                    preventScrolling: true
                }}
            >
                <NavLink to="/">
                    Home
                </NavLink>
                <NavLink to="/about">
                    About
                </NavLink>
                <NavLink to="/services">
                    Service
                </NavLink>
                <NavLink to="/portfolio">
                    Portfolio
                </NavLink>
                <NavLink to="/skills">
                    Skills
                </NavLink>
                <NavLink to="/contact">
                    Contact
                </NavLink>
                <NavLink to="/blog">
                    Blog
                </NavLink>
            </Navbar>
        </div>
    )
}

export default navbar
