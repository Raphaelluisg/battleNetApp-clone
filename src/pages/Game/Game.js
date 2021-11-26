import { useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { FaRegHeart } from 'react-icons/fa';
import axios from 'axios';

export default function Game() {

    const state = useLocation()
    const id = state.state;

    const [game, setGame] = useState({})
    const [mounted, setMounted] = useState(false)

    const getData = async () => {
        await axios.get(`/game/find/${id}`)
        .then(response => {
            if(mounted) {
                setGame(response.data)
                console.log(game)
            }
        })
    }

    useEffect(() => {
        setMounted(true)
        getData()
    }, [mounted])

    return (
        <div className="games">
            <div className="header">
                <img src={game.image} alt={game.name} />
            </div>

            <div className="gameWish">
                <h2>{game.name}</h2>
                <div className="gameLike">
                    <a href="!#"></a>
                </div>
            </div>
            <h3>{game.year}</h3>
            <p>{game.storyline}</p>
        </div>
    )
}