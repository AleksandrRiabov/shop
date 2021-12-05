import styled from 'styled-components';
import {mobile} from '../../responsive';
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
 width: 40%;
 background: #fff;
  ${mobile({width: "90%"})}
`;

const Title = styled.h2`
 text-transform: uppercase;
 font-size: 24px;
 font-weight: 400;
`;

const Form = styled.form`
 display: flex;
 flex-wrap: wrap;
`;

const Input = styled.input`
 flex: 1;
 min-width: 40%;
 margin: 20px 10px 0 0;
 padding: 10px;
`;

const Agreement = styled.span`
 font-size: 12px;
 margin: 20px 0;
`;

const Button = styled.button`
 width: 40%;
 border: none;
 padding: 15px 20px;
 background: teal;
 color: #fff;
 text-transform: uppercase;
 cursor: pointer;
`;

const Register = () => {
 return (
  <Container>
   <Navbar />
   <Announcement />
   <FormContainer>
    <Wrapper>
     <Title> Create an account</Title>
     <Form>
      <Input id='name' type='text' name='name' placeholder='First Name' />
      <Input
       id='lastName'
       type='text'
       name='lastName'
       placeholder='Last Name'
      />
      <Input
       id='UserName'
       type='text'
       name='UserName'
       placeholder='User Name'
      />
      <Input id='email' type='email' name='email' placeholder='Email' />
      <Input
       id='password'
       type='password'
       name='password'
       placeholder='Password'
      />
      <Input
       id='confirmPassword'
       type='password'
       name='confirmPassword'
       placeholder='Confirm Password'
      />
      <Agreement>
       By creating an account, I consent to the processing of my personal data
       in accordance with the <b>PRIVACY POLICY</b>{' '}
      </Agreement>
      <Button>Create</Button>
     </Form>
    </Wrapper>
   </FormContainer>
   <Footer />
  </Container>
 );
};

export default Register;