import { withTheme } from '@material-ui/core';
import Styled from 'styled-components';

export const Form = withTheme(Styled.form`
    display:flex;
    flex-direction: column;
    max-width:100vw;
    padding:10px;
    justify-content:center;
    .MuiFormControl-root{
        margin-bottom: 10px;
    }
    p{
        font-size: 12px;
        margin: auto;
        margin-top: 10px;
        cursor: pointer;

    }

    @media only screen and (min-width: 780px) {
        max-width: 540px;
        margin: auto;
            
          }

    a{
        margin-left:5px;
    }      
`);

export const Image = Styled.img`
padding: 10px;
`;
