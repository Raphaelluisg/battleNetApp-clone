import React, { useState, useEffect } from "react";
import { Carousel } from 'react-bootstrap';
import './Imagesliders.css';
import axios from 'axios';

export default function Imageslider(props) {

    const [game, setGame] = useState([]);
    const [mounted, setMounted] = useState(false);

    const getData = async () => {
        await axios.get(`/game/find/${props.id}`)
        .then(response => {
            if(mounted) {
                setGame(response.data)
            }
        })
    }

    useEffect(() => {
        setMounted(true)
        getData()
    }, [mounted])

    return (
        <div className="container-fluid">
            <Carousel className="carousel slide" id="mainSlider">
                <Carousel.Item className="carousel-item active slider-carousel" fade={true}>
                    <img
                    className="d-block w-100"
                    src='https://musicnonstop.uol.com.br/wp-content/uploads/2021/08/diablo-ii-resurrected.jpg'
                    alt={game.name}
                    />
                    <Carousel.Caption>
                    <h3>Diablo II</h3>
                    <p>Prepare-se para aventurar-se novamente em tristan para derrotar o mal novamente.</p>
                    </Carousel.Caption>                    
                </Carousel.Item>
                <Carousel.Item className="carousel-item active slider-carousel" fade={true}>
                    <img
                    className="d-block w-100"
                    src='https://live.staticflickr.com/65535/49130857867_1dbc292190_k.jpg'
                    alt={game.name}
                    />
                    <Carousel.Caption>
                    <h3>Overwatch</h3>
                    <p>Prepare-se para aventurar-se novamente em tristan para derrotar o mal novamente.</p>
                    </Carousel.Caption>                    
                </Carousel.Item>
            </Carousel>
        </div>
    )
}