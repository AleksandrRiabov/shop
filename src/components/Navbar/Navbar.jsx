import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { mobile, tablet } from '../../responsive';
import Badge from '@mui/material/Badge';
import SearchIcon from '@mui/icons-material/Search';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';

const Container = styled.div`
 height: 60px;
 ${mobile({ height: '50px' })};
`;

const Wrapper = styled.div`
 padding: 10px 20px;
 display: flex;
 justify-content: space-between;
 ${mobile({ padding: '10px 0' })};
`;

const Left = styled.div`
 flex: 1;
 display: flex;
 align-items: center;
`;

const Language = styled.span`
 cursor: pointer;
 font-size: 14px;
 ${mobile({ display: 'none' })};
`;

const SearchContainer = styled.div`
 display: flex;
 align-items: center;
 border: 1px solid #eee;
 padding: 5px;
 margin-left: 25px;
 ${mobile({ marginLeft: '10px' })};
`;

const Input = styled.input`
 border: none;
 outline: none;
 ${tablet({ width: '50px' })};
`;

const Center = styled.div`
 flex: 1;
`;

const Logo = styled.h1`
 font-weight: bold;
 text-align: center;
 ${mobile({ fontSize: '24px' })};
 flex: 1;
`;

const Right = styled.div`
 flex: 1;
 display: flex;
 justify-content: flex-end;
 align-items: center;
 ${tablet({ flex: 2, justifyContent: 'center' })};
`;

const MenuItem = styled.div`
 font-size: 14px;
 cursor: pointer;
 margin-left: 25px;
 ${mobile({ fontSize: '12px', marginLeft: '5px' })};
`;

const Navbar = () => {
 return (
  <Container>
   <Wrapper>
    <Left>
     <Language>EN</Language>
     <SearchContainer>
      <Input placeholder='Search' />
      <SearchIcon style={{ color: 'grey', fontSize: '18px' }} />
     </SearchContainer>
    </Left>
    <Center>
     <Logo>Rocks</Logo>
    </Center>
    <Right>
     <Link to='/register'>
      <MenuItem>REGISTER</MenuItem>
     </Link>
     <Link to='/login'>
      <MenuItem>SIGN IN</MenuItem>
     </Link>
     <MenuItem>
      <Badge badgeContent={4} color='primary'>
       <ShoppingCartOutlinedIcon color='action' />
      </Badge>
     </MenuItem>
    </Right>
   </Wrapper>
  </Container>
 );
};

export default Navbar;
