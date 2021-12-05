import styled from 'styled-components';
import { mobile } from '../../responsive';
import SendIcon from '@mui/icons-material/Send';

const Container = styled.div`
 height: 60vh;
 background: #fcf5f5;
 display: flex;
 justify-content: center;
 align-items: center;
 flex-direction: column;
`;
const Title = styled.h2`
 font-size: 70px;
 margin-bottom: 20px;
 ${mobile({ fontSize: '60px' })};
`;
const Description = styled.p`
 font-size: 24px;
 font-weight: 300;
 margin-bottom: 20px;
 ${mobile({ textAlign: 'center' })};
`;
const InputContainer = styled.div`
 width: 50%;
 height: 40px;
 background: #fff;
 display: flex;
 justify-content: space-between;
 align-items: cneter;
 border: 1px solid #eee;
 ${mobile({ width: '80%' })};
`;
const Input = styled.input`
 border: none;
 padding-left: 20px;
 flex: 8;
`;
const Button = styled.button`
 flex: 1;
 border: none;
 background: teal;
 color: #fff;

 ${mobile({ flex: '2' })};
`;

const Newsletter = () => {
 return (
  <Container>
   <Title>Newsletter</Title>
   <Description>Get timely updates from your favorite products.</Description>
   <InputContainer>
    <Input placeholder='Your email' />
    <Button>
     <SendIcon />
    </Button>
   </InputContainer>
  </Container>
 );
};

export default Newsletter;
