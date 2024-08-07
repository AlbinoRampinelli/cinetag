import { useContext } from 'react';
import Banner from '../../componetes/Banner';
import Card from '../../componetes/Card';
import Titulo from '../../componetes/Titulo';
import { useFavoritoContext } from '../../contextos/Favoritos';
import styles from './Favoritos.module.css';

function Favoritos() {
    const { favorito } = useFavoritoContext();
    return (
        <>
            <Banner imagem='favoritos' />
            <Titulo>
                <h1>Meus Favoritos</h1>
            </Titulo>
            <section className={styles.container}>
                {favorito.map((fav) => {
                    return <Card {...fav} key={fav.id} />
                })}
            </section>

        </>
    )
}

export default Favoritos;