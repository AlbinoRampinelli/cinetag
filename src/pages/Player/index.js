import { screen } from '@testing-library/react';
import { useParams } from 'react-router-dom';
import Banner from '../../componetes/Banner';
import Titulo from '../../componetes/Titulo';
import styles from './Player.module.css'
import { useEffect, useState } from 'react';
import NaoEncontrada from '../NaoEncontrada';


function Player() {
    const [video, setVideo] = useState();

    const parametros = useParams();
    useEffect(() => {
        fetch(`https://my-json-server.typicode.com/AlbinoRampinelli/cinetag-api/videos?id=${parametros.id}`)
        .then(resposta => resposta.json())
        .then(dados => {
            setVideo(...dados)
        })
    }, [])

    if (!video) {
        return <NaoEncontrada /> 
    }

    return (
        <>
        <Banner imagem="player"/> 
        <Titulo>
            <h1>Player</h1>
        </Titulo>
        <section className={styles.container}>
            <iframe
                width="100%"
                height="100%"
                src={video.link}
                title={video.titulo}
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </section>
        </>


    )
}

export default Player;