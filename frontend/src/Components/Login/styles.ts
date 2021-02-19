import { withTheme } from '@material-ui/core';
import Styled from 'styled-components';

export const Form = withTheme(Styled.form`
    display:flex;
    flex-direction: column;
    max-width: 500px;
    margin:auto;
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
`);

export const Image = Styled.img`
padding: 10px;
`;
