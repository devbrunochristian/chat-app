import { withTheme } from '@material-ui/core';
import Styled from 'styled-components';

export const Container = withTheme(Styled.div`
    display:flex;
    flex-direction: column;
    max-width: 500px;
    margin:auto;
    justify-content:center;
    
    p{
        font-size: 24px;
        text-align: center;
        margin: 10px;
        color: ${(props) => props.theme.palette.secondary.main}
    }
    button{
        margin-top: 10px;
    }
`);

export const Image = Styled.img`
padding: 10px;
`;
