import styled from "styled-components";


export const Div = styled.div`
  color: red;
  font-size: 30px;
  font-weight: bold;
  
  &:hover {
    color: blue;
    cursor: pointer;
  }
`

export const Button = styled.button`
  background-color: green;  
    color: white;
    padding: 10px 20px;
    border: none;
    border-radius: 5px;
    font-size: 16px;    
    &:hover {
      background-color: darkgreen;
        cursor: pointer;
    }

    ${props => props.revan && `
      background-color: red;
      font-size: 18px;
        &:hover {
            background-color: darkred;
        }
    `}

`
export const Button2 = styled.button`
  background-color: blue;  
    color: white;
    padding: 10px 20px;
    border: none;
    border-radius: 5px;
    font-size: 16px;    
    &:hover {
      background-color: darkblue;
        cursor: pointer;
    }
`