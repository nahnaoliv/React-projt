import { useState } from "react";
import Button from "../button";

const Card = () => {

    const [valor, setvalor] = useState(0);

    function Adicionar() {
        setvalor(valor + 1);
    }
    function Remover() {
        setvalor(valor - 1);
    }

    return (
        <div className="card">
            <div className="card-header">
                Meu primeiro Card
            </div>
            <div className="card-body">
                <Button className="btn btn-success" onClick={Adicionar}>
                    Adicionar
                </Button>
                <Button className="btn btn-danger" onClick={Remover}>
                    Remover
                </Button>
                <h1>{valor}</h1>
            </div>
        </div>
    )
}

export default Card;