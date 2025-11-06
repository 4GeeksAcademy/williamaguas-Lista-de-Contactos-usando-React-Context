import React from "react";
const Card = (props) => {
    return (
        <div>
            <h1>
                <div className="card mb-3" style={{maxWidth: "540px"}} >
                    <div className="row g-0">
                        <div className="col-md-4">
                            <img src="https://marketplace.canva.com/A5alg/MAESXCA5alg/1/tl/canva-user-icon-MAESXCA5alg.png" className="img-fluid rounded-start" alt="..."/>
                        </div>
                        <div className="col-md-8">
                            <div className="card-body">
                                <h5 className="card-title">nombre: {props.informacion.name}</h5>
                                <p className="card-text">telefono: {props.informacion.phone}</p>
                                <p className="card-text">direccion: {props.informacion.address}</p>
                                <p className="card-text">correo: {props.informacion.email}</p>
                                
                            </div>
                        </div>
                    </div>
                </div>
            </h1>
        </div>
    )
}
export default Card

