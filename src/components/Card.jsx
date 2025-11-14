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
                <div className="card mb-3" style={{ maxWidth: "940px" }} >
                    <div className="row g-0">
                        <div className="col-md-4">
                            <img src="https://i.pinimg.com/736x/5f/c2/08/5fc208cf051c99275f286ec2aeeb6d92.jpg" className="img-fluid rounded-start" alt="..." />
                        </div>
                        <div className="col-md-8">
                            <div className="card-body">
                                <h1 className="card-title"><i class="far fa-laugh-wink"></i> NOMBRE: {informacion.name}</h1>
                                <p className="card-text"><i class="fas fa-phone"></i> TELEFONO: {informacion.phone}</p>
                                <p className="card-text"><i class="fas fa-map-marker-alt"></i> DIRECCION: {informacion.address}</p>
                                <p className="card-text"><i class="fas fa-envelope"></i> CORREO: {informacion.email}</p>
                                <Link to={'/edit/' + informacion.id}>
                                    <button><i class="far fa-edit"></i></button>
                                </Link>
                                <button onClick={() => deleteContact(informacion.id)}><i class="far fa-trash-alt"></i></button>
                            </div>
                        </div>
                    </div>
                </div>
            </h1>
        </div>
    )
}
export default Card

