import Container from '../../components/Container/Container';
import Card from '../../components/Card/Card';
import { useState, useEffect } from 'react';
import axios from 'axios';

export default function Wishlist() {

    const [wishlist, setWishlist] = useState([]);
    const [mounted, setMounted] = useState(false)
    const [notLogged, setNotLogged] = useState(true)

    useEffect(() => {
        setMounted(true)

        if(localStorage.token) {
            const token = localStorage.token;

            const config = {
                headers: { Authorization: `Bearer ${token}`}
            }

            axios.get('/game/myWishlist', config)
            .then(response => {
                setNotLogged(false)
                setWishlist(response.data.games)
            })
        }
    }, [mounted])

    return (
        <Container title='Favoritos'>
            {
                wishlist.map(game => (
                    <Card 
                        id={game.id}
                        image={game.image}
                        title={game.name}
                        key={game.id}
                    />
                ))
            }
        </Container>
    )
}