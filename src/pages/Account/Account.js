import { useState, useEffect } from 'react';
import axios from 'axios';
import './Account.css';

export default function Account(props) {

    const [user, setUser] = useState({});
    const [mounted, setMounted] = useState(false);
    const [notLogged, setNotLogged] = useState(true);


    useEffect(() => {
        setMounted(true)

        if(localStorage.token) {
            const token = localStorage.token;

            const config = {
                headers: { Authorization: `Bearer ${token}` }
            }

            axios.get('/auth/me', config)
            .then(response => {
                setNotLogged(false)
                setUser(response.data)
            })
        }
    }, [mounted])

    return (
        <div className="account">
            <div className="account-img">
                <img className="imgAccount" src="https://3.bp.blogspot.com/-rWYSVLDYqfg/W43XH9TzJXI/AAAAAAAAC7c/WRw9B31HQakeAtbg19LcQvGHugdRyQJmgCLcBGAs/s1600/imagem2.jpg" alt='Mario'>Comming Soon</img>
            </div>
            {
                !notLogged ? (
                    <>
                        <h2>{user.name}</h2>
                        <span>Email: {user.email}</span>
                        <span>Membro desde: {user.createdAt}</span>
                    </>
                ) : (
                    <h2>Sem dados do perfil, faça login.</h2>
                )
            }
        </div>
    )
}