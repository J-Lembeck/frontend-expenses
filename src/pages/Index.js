import { Link } from "react-router-dom";


const Index = () => {

    return (
        <>
            <h1>Tela principal</h1>

            <Link to='/categories' > <h1> Categorias </h1></Link>
            <Link to='/expenses' > <h1> Despesas </h1></Link>
        </>
    )
}

export default Index;