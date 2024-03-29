import styled from "styled-components";


 export const Button = styled.button `
font-size: 16px;
padding: 10px 18px;
color: white;
min-width: 220px;
border: none;
background: black;
border-radius: 5px;
border: 1px solid transparent;
transition: 0.4s background ease-in;
cursor: pointer;
&:hover{
    background-color:white ;
    border: 1px solid black;
    color: black;
    transition: 0.3s background ease-in;
}
`;


