import { withTheme,
} from '@material-ui/core';
import Styled from 'styled-components';


export const Container = withTheme(Styled.div`
height: 50px;
display: flex;
padding: 5px;
align-content: center;
align-items:center;
box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
justify-content: space-between;
background-color: ${props => props.theme.palette.primary.main};
p{
    color: #FFF;
    font-weight: 700;
}
`);


export const UserMenuContainer = withTheme(Styled.div`
width: auto;
display: flex;
padding: 5px;
cursor: pointer;
align-content: center;
align-items:center;
justify-content: space-between;

.MuiAvatar-root  {
    margin-right: 10px;
}

`);

