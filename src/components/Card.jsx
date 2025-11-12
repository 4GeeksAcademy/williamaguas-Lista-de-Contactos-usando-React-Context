import React from "react";
import { Link } from "react-router-dom";
const Card = (props) => {
    return (
        <div>
            <h1>
                <div className="card mb-3" style={{maxWidth: "540px"}} >
                    <div className="row g-0">
                        <div className="col-md-4">
                            <img src="https://i.pinimg.com/1200x/6e/59/95/6e599501252c23bcf02658617b29c894.jpg" className="img-fluid rounded-start" alt="..."/>
                        </div>
                        <div className="col-md-8">
                            <div className="card-body">
                                <h5 className="card-title">nombre: {props.informacion.name}</h5>
                                <p className="card-text">telefono: {props.informacion.phone}</p>
                                <p className="card-text">direccion: {props.informacion.address}</p>
                                <p className="card-text">correo: {props.informacion.email}</p>
                                <Link to={'/edit/'+props.informacion.id}>
                                <button>edit</button>
                                </Link>
                                

                                <button>borrar</button>
                            </div>
                        </div>
                    </div>
                </div>
            </h1>
        </div>
    )
}
export default Card

