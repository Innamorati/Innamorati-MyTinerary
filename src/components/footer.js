import React, { Fragment } from "react";
import {Contenedor, Navegacion, Navegacioncont, Redes, Mapa, Navegacionbutones, Redesiconos} from "../style/Footer.elements";
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
                <Mapa>
                    
                </Mapa>
            </Contenedor>

            
        </div>
    )
}