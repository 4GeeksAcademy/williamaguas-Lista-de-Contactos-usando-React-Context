import React from "react";
import { Link } from "react-router-dom";
const Card = ({informacion,refrescar}) => {

    const deleteContact = async (contactId) => {
        try {
            await fetch(`https://playground.4geeks.com/contact/agendas/william/contacts/${contactId}`, {
                method: "DELETE",
                headers: { "Content-Type": "application/json" },
            })
            refrescar()
        }
        catch (error) {
            console.error("errorAlEliminar", error);
        }
    }
    return (
        <div>
            <h1>
                <div className="card mb-3" style={{ maxWidth: "540px" }} >
                    <div className="row g-0">
                        <div className="col-md-4">
                            <img src="https://i.pinimg.com/1200x/6e/59/95/6e599501252c23bcf02658617b29c894.jpg" className="img-fluid rounded-start" alt="..." />
                        </div>
                        <div className="col-md-8">
                            <div className="card-body">
                                <h5 className="card-title">nombre: {informacion.name}</h5>
                                <p className="card-text">telefono: {informacion.phone}</p>
                                <p className="card-text">direccion: {informacion.address}</p>
                                <p className="card-text">correo: {informacion.email}</p>
                                <Link to={'/edit/' + informacion.id}>
                                    <button><i class="far fa-edit"></i></button>
                                </Link>
                                <button onClick={() => deleteContact(informacion.id)}><i class="fas fa-trash"></i></button>
                            </div>
                        </div>
                    </div>
                </div>
            </h1>
        </div>
    )
}
export default Card

