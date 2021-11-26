import Imageslider from '../../components/carousel/Imageslider';
import Container from '../../components/Container/Container';
import Card from '../../components/Card/Card';
import axios from 'axios';
import { useState, useEffect } from 'react';
import './Home.css';

export default function Home() {

    const [games, setGames] = useState([]);
    const [mounted, setMounted] = useState(false);

    const getData = async () => {
        await axios.get('/game/findMany')
        .then(response => {
            if(mounted) {
                setGames(response.data)
            }
        })
    }

    useEffect(() => {
        setMounted(true)
        getData()
    }, [mounted])

    return (
        <div className="home">
            <Imageslider />
            <Container title="Games Gallery">
            {
                games.map(game => (
                    <Card 
                    id={game.id}
                    image={game.image} 
                    title={game.name}
                    key={game.id}
                    />
                ))
            }
            </Container>
        </div>
    )
}