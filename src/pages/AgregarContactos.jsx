import React, { useState } from "react";
import useGlobalReducer from "../hooks/useGlobalReducer.jsx";
const AgregarContactos = () => {
    const { store, dispatch } = useGlobalReducer()
    let [data, setData] = useState({
        name: "", email: "", phone: "", address: ""
    }


    )
    const formularioDelImput = (e) => {
        setData({ ...data, [e.target.name]: e.target.value })
    }
    const crear = (e) => {
        e.preventDefault()
        fetch("https://playground.4geeks.com/contact/agendas/william/contacts", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({...data,agenda_slug:"william"})
        })
        
    }
    return (
        <div>
            <form className="row g-3" onSubmit={crear}>
                <div className="col-md-6">
                    <label htmlFor="inputEmail4" className="form-label">Email</label>
                    <input type="email" className="form-control" id="inputEmail4" name="email" onChange={formularioDelImput} value={data.email} />
                </div>
                <div className="col-md-6">
                    <label htmlFor="inputPassword4" className="form-label">Name</label>
                    <input type="text" className="form-control" id="inputPassword4" name="name" onChange={formularioDelImput} value={data.name} />
                </div>
                <div className="col-12">
                    <label htmlFor="inputAddress" className="form-label">Address</label>
                    <input type="text" className="form-control" id="inputAddress" placeholder="1234 Main St" name="address" onChange={formularioDelImput} value={data.address} />
                </div>
                <div className="col-12">
                    <label htmlFor="inputAddress2" className="form-label">Phone</label>
                    <input type="text" className="form-control" id="inputAddress2" placeholder="Apartment, studio, or floor" name="phone" onChange={formularioDelImput} value={data.phone} />
                </div>



                <div className="col-12">
                    <button type="submit" className="btn btn-primary">Agregar Usuario</button>
                </div>
            </form>
        </div>
    )
}
export default AgregarContactos;