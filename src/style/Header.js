import styled from 'styled-components'

export const MainDiv = styled.div`
    display: flex;
    flex-direction: column;
    background-color: black;
    margin: none;
    border: 10px;
    border-color: gray;
`

export const NavButtons = styled.button`
    background-color: black;
    border: none;
    border-radius: 2rem;
    margin-left: 1rem;
    height: 2.8rem;

    &:hover{
          background: #2b2a2a
        }
        a{
            text-decoration: none;
            color: white;
            font-size: 20px;
            height: 10px;
            box-sizing: border-box;
        }

 


`
export const Tittle = styled.h1`
    color: lightblue;
    margin-left: 10px;
    font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
`
export const Nav = styled.nav`
    display: flex;
    flex-direction: row;
    align-items: center;
    height: 70px;
    width: 100%;

`
export const DivInputs = styled.div`
    display: flex;
    align-items: row;
    width: 35%;
    height: 50%;
    margin-left: 90px;
    border: 1px solid white;
    border-radius: 30px;
    overflow: hidden;
    background-color: black;
    svg{
        color: white;
        border: 1rem;
        border-color: white;
    }
`

export const SearchInput = styled.input`
    border: none;
    width: 90%;
    font-size: large;
    font-weight: 600;
    outline: none;
    :focus{
        outline: none;
    }
`
export const SearchButtom = styled.button`
    background-color: #030303;
    width: 10%;
    height: 100%;
    padding: 0;
    animation: alternate 2;
    border: none;
    &:hover{
        background-color: #1c1c1c;
        cursor: pointer;
    }
`
