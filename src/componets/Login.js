import axios from "axios";
import Swal from 'sweetalert2'
import { useNavigate } from "react-router-dom";


function Login() {

    const navigate = useNavigate();


    const sumitHandler = e => {
        e.preventDefault();
        const email = e.target.email.value
        const password = e.target.password.value
        const regexEmail = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;

        if (email === '' || password === '') {

            Swal.fire({
                title: 'Error!',
                text: 'Debes ingresar un correo y una contraseña',
                icon: 'error',
                confirmButtonText: 'Try again'
            });

            return;
        }
        if (email !== '' && !regexEmail.test(email)) {
            Swal.fire({
                title: 'Error!',
                text: 'Debes escribir una direccion de correo valida',
                icon: 'error',
                confirmButtonText: 'Try again'
            })

            return;
        }
        if (email !== 'challenge@alkemy.org' || password !== 'react') {
            Swal.fire({
                title: 'Error!',
                text: 'Alguno de los datos ingresados son incorrectos',
                icon: 'error',
                confirmButtonText: 'Try again'
            });

            return;
        }

        axios.post('http://challenge-react.alkemy.org', { email, password })
            .then(res => {
                Swal.fire({
                    title: 'success!',
                    text: 'Secion iniciada correctamente',
                    icon: 'success',
                    confirmButtonText: 'Cool'
                })
                const tokenRecibido = res.data.token
                localStorage.setItem('token', tokenRecibido);
                navigate('/listado')

            })
    }

    return (
        <>
            <h2>Please login </h2>
            <form onSubmit={sumitHandler}>
                <label>
                    <span>email</span>
                    <br />
                    <input type="email" name="email"></input>
                </label>
                <br />
                <label>
                    <span>password</span>
                    <br />
                    <input type="password" name="password"></input>
                </label>
                <br />
                <button type="submit">Login</button>
            </form>
        </>
    )
}

export default Login;
