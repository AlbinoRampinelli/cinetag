import { Outlet } from "react-router-dom";
import Cabecalho from "../../componetes/Cabecalho";
import Container from "../../componetes/Container";
import Rodape from "../../componetes/Rodape";
import FavoritosProvider from "../../contextos/Favoritos";



function PaginaBase(){
    return (
    <main>
        <Cabecalho />
        <FavoritosProvider>
            <Container>
                <Outlet />
            </Container>
        </FavoritosProvider>
        <Rodape />
    </main>

    )
}

export default PaginaBase;
