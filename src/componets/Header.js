import { Link } from "react-router-dom";
import Swal from 'sweetalert2'
import { MainDiv, NavButtons, Tittle, Nav, SearchInput, DivInputs, SearchButtom, DivSearch } from "../style/Header";
import SearchIcon from '@mui/icons-material/Search';

function Header() {

    let token = localStorage.getItem('token')
    function Modal() {
        Swal.fire({
            title: 'Log in!',
            text: 'Please log in first to view this page',
            icon: 'info',
            confirmButtonText: 'Cool'
        })
    }

    return (
        <MainDiv>
            <header>
                <Nav>
                    <Tittle >Movie time</Tittle>

                    <NavButtons><Link to='listado' >Home</Link></NavButtons>
                    <NavButtons><Link to='/listado' >Listado</Link></NavButtons>
                    <NavButtons><Link to='/contacto' >Contacto</Link></NavButtons>

                    <DivInputs>
                        <SearchInput type="text"></SearchInput>
                        <SearchButtom><SearchIcon color="action" /></SearchButtom>
                    </DivInputs>

                </Nav>
            </header>
        </MainDiv >
    )
}

export default Header;