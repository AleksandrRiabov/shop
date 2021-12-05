import styled from 'styled-components';
import {mobile} from '../../responsive';
import { Link } from 'react-router-dom';
import Navbar from '../../components/Navbar/Navbar';
import Announcement from '../../components/Announcement/Announcement';
import Footer from '../../components/Footer/Footer';

const Container = styled.div``;

const FormContainer = styled.div`
 width: 100vw;
 height: 100vh;
 background: linear-gradient(rgba(255, 255, 255, 0.5), rgba(255, 255, 255, 0.5)),
  url('https://www.theladders.com/wp-content/uploads/shopping_190409.jpg');
 background-size: cover;
 background-repeat: no-repeat;
 display: flex;
 justify-content: center;
 align-items: center;
`;

const Wrapper = styled.div`
 padding: 20px;
 width: 30%;
 background: #fff;
 ${mobile({width: "80%"})}
`;

const Title = styled.h2`
 text-transform: uppercase;
 font-size: 24px;
 font-weight: 400;
`;

const Form = styled.form`
 display: flex;
 flex-direction: column;
`;

const Input = styled.input`
 flex: 1;
 min-width: 40%;
 margin: 10px 0;
 padding: 10px;
`;

const Button = styled.button`
 width: 40%;
 border: none;
 padding: 15px 20px;
 background: teal;
 color: #fff;
 text-transform: uppercase;
 cursor: pointer;
 margin-bottom: 10px;
`;

const Anchor = styled.p`
 text-transform: uppercase;
 font-size: 12px;
 margin: 5px 0;
 text-decoration: underline;
`;

const Login = () => {
 return (
  <Container>
   <Navbar />
   <Announcement />
   <FormContainer>
    <Wrapper>
     <Title> Sign In</Title>
     <Form>
      <Input
       id='UserName'
       type='text'
       name='UserName'
       placeholder='User Name'
      />
      <Input
       id='password'
       type='password'
       name='password'
       placeholder='Password'
      />
      <Button>Login</Button>
      <Link to='/'>
       <Anchor>Forgot Your Password?</Anchor>
      </Link>
      <Link to='/register'>
       <Anchor>Create a New Account</Anchor>
      </Link>
     </Form>
    </Wrapper>
   </FormContainer>
   <Footer />
  </Container>
 );
};

export default Login;