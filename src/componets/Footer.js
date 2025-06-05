import { H3, MainDiv, RightsDiv, H4, SocialDiv, Ul, Li, SvgDiv } from '../style/Footer'
import { Link } from "react-router-dom";
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import XIcon from '@mui/icons-material/X';

function Footer() {

    return (
        <MainDiv>
            <RightsDiv>
                <Ul>
                    <Li><Link>Privacy Notice</Link></Li>
                    <Li><Link>Terms of Service</Link></Li>
                    <Li><Link>Contact</Link></Li>
                    <Li><Link>FAQ</Link></Li>
                    <Li><Link>Status</Link></Li>
                </Ul>
            </RightsDiv>
            <SocialDiv>
                <H4>Follow us</H4>
                <SvgDiv>
                    <FacebookIcon />
                    <InstagramIcon />
                    <YouTubeIcon />
                    <LinkedInIcon />
                    <XIcon />
                </SvgDiv>
            </SocialDiv>
        </MainDiv>

    )
}

export default Footer;