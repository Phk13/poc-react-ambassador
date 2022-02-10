import React, { Dispatch, useEffect, useState } from 'react'
import { Navigate, useLocation } from 'react-router-dom'
import { setUser } from '../redux/actions/setUserAction';
import { connect } from 'react-redux';
import axios from 'axios';
import Header from './Header'
import Nav from './Nav'
import { User } from '../models/user';

const Layout = (props: any) => {
    const location = useLocation();

    useEffect(() => {
        (
            async () => {
                try {
                    const { data } = await axios.get('user');
                    props.setUser(data);
                } catch (e) {
                    console.log(e);
                }
            }
        )();
    }, []);

    let header;

    if (location.pathname === '/' || location.pathname === '/backend') {
        header = <Header />;
    }

    return (
        <div>
            <Nav />

            <main>
                {header}

                <div className="album py-5 bg-light">
                    <div className="container">

                        {props.children}

                    </div>
                </div>

            </main>
        </div>
    )
}

const mapStateToProps = (state: { user: User }) => ({
    user: state.user
})

const mapDispatchToProps = (dispatch: Dispatch<any>) => ({
    setUser: (user: User) => dispatch(setUser(user))
})

export default connect(mapStateToProps, mapDispatchToProps)(Layout);
