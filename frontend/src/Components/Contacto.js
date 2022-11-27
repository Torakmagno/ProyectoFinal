import React, { Fragment, useState } from 'react';

const Formulario = () => {


    const [datos, setDatos] = useState({
        nombre: '',
        apellido: '',
        email: '',
        comentario: ''
    })
    const handleSubmit = () => {
        alert = "Formulario envíado correctamente!"
    }
    const handleInputChange = (event) => {
        // console.log(event.target.name)
        // console.log(event.target.value)
        setDatos({
            ...datos,
            [event.target.name]: event.target.value
        })
    }

    const enviarDatos = (event) => {
        event.preventDefault()
        console.log('enviando datos...' + datos.nombre + ' ' + datos.apellido + ' ' + datos.email)
    }

    return (
        <Fragment>
            <h1 class="mt-5 text-center">Formulario de contacto</h1>
            <><img
                class="d-block mb-3 rounded-2"
                src="https://images.squarespace-cdn.com/content/53528f90e4b0768cad09d33b/1421840020171-36GV12ST44GI4A5VVNTC/blog_Jose_Email-deliverability.jpg?content-type=image%2Fjpeg" />
                <div class="d-flex flex-column align-content center text-center">
                    <form onSubmit={enviarDatos}>
                        <div className="col-md-3 ">
                            <label for="nombre">Nombre</label>
                            <input
                                type="text"
                                className="form-control"
                                onChange={handleInputChange}
                                name="nombre" />
                        </div>
                        <div className="col-md-3">
                            <label class="col-lg-offset-2" for="apellido">Apellidos</label>
                            <input
                                type="text"
                                className="form-control"
                                onChange={handleInputChange}
                                name="apellido" />
                        </div>
                        <div className="col-md-3">
                            <label class="col-lg-offset-2" for="mail">Email</label>
                            <input
                                type="text"
                                className="form-control"
                                onChange={handleInputChange}
                                name="email" />
                        </div>
                        <div className="col-md-3">
                            <label class="col-lg-offset-2" for="coment">Comentario</label>
                            <textarea
                                className="form-control"
                                onChange={handleInputChange}
                                name="comentario" />
                        </div>
                        <button type="submit" onClick={handleSubmit} className="btn btn-dark mt-5 ">Enviar</button>
                    </form>
                </div></>
        </Fragment>
    );
}




            export default Formulario;