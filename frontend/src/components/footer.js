import React from "react";
import {Contenedor, 
Navegacion, 
Navegacioncont, 
Redes, 
Contacto, 
Navegacionbutones, 
Redesiconos, 
Contactotitulo,
Contactocontenido,
ContactoMail,
IconoEnviar,
Politicas,
PoliticasTitulo,
PoliticasLista,
PoliticasItems,} from "../style/Footer.elements";
import {Link as LinkRouter} from "react-router-dom"
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import TwitterIcon from '@mui/icons-material/Twitter';



export default function Piepagina(){


    return(
        <div>
            <Contenedor>
                <Navegacion>
                    <h3>Navigate</h3> 
                    <Navegacioncont>
                        <Navegacionbutones>
                        <LinkRouter to="Cities" >Cities</LinkRouter>
                        </Navegacionbutones>
                        <Navegacionbutones>
                            <LinkRouter to="*" >Home</LinkRouter>
                        </Navegacionbutones>
                    </Navegacioncont>

                </Navegacion>
                <Redes>
                    <Redesiconos>
                        <FacebookIcon/>
                        <InstagramIcon/>
                    </Redesiconos>
                    <Redesiconos>
                        <TwitterIcon/>
                        <MailOutlineIcon/>
                    </Redesiconos>
                </Redes>
                <Contacto>
                    <Contactotitulo>
                        ¡Receive all offers! 
                    </Contactotitulo>
                    <Contactocontenido>
                        <input type="text" placeholder="First name"></input>
                        <input type="text" placeholder="Last name"></input>
                    </Contactocontenido>
                    <ContactoMail>
                        <input type="mail" placeholder="example@mail.com"></input>
                    </ContactoMail>
                    <IconoEnviar>
                        Send
                    </IconoEnviar>
                </Contacto>
                    
            <Politicas>
                <PoliticasTitulo>
                    Police
                </PoliticasTitulo>
                    <PoliticasLista>
                <PoliticasItems>
                    Legal Warning
                </PoliticasItems>
                <PoliticasItems>
                    Privacy Policy
                </PoliticasItems>
                <PoliticasItems>
                    Cookies Policy
                </PoliticasItems>
                <PoliticasItems>
                    Quality Policy
                </PoliticasItems>
                </PoliticasLista>
                </Politicas>
            </Contenedor>
            
        </div>
    )
}