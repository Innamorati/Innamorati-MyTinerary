import styled from "styled-components"

export const MainDiv = styled.div`
    background-color: black;
    height: 40vh;
    padding: 40px 20px 20px 20px;
    display: flex;
    flex-direction: row;

`
export const RightsDiv = styled.div`
    display: flex;
    flex-direction: row;
    width: 80%;
`
export const H3 = styled.h3`
    color: lightblue;
    font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
`
export const H4 = styled.h4`
    color: white;
    
`
export const SocialDiv = styled.div`
    display: flex;
    flex-direction: column;
    width: 20%;
    /* text-align: center; */

    svg{
        color: white;
        cursor : clicker;
        margin: 10px 0 0 10px;
    }
    
`
export const SvgDiv = styled.div`
    display: flex;
    flex-direction: row;
`
export const Ul = styled.ul`
    display: flex;
    flex-direction: row;
`

export const Li = styled.li`
    margin-left: 20px;
    list-style: none;
    a{
        text-decoration: none;
        color: white;
    }
`