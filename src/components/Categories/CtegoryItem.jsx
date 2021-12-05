import styled from 'styled-components';
import { mobile } from '../../responsive';

const Container = styled.div`
 flex: 1;
 margin: 3px;
 position: relative;
`;

const Image = styled.img`
 width: 100%;
 height: 70vh;
 object-fit: cover;
 ${mobile({ height: '30vh' })};
`;

const Info = styled.div`
 position: absolute;
 top: 0;
 left: 0;
 width: 100%;
 height: 100%;
 display: flex;
 justify-content: center;
 align-items: center;
 flex-direction: column;
`;
const Title = styled.h3`
 color: #fff;
 margin-bottom: 20px;
 font-size: 2rem;
`;
const Button = styled.button`
 text-transform: uppercase;
 padding: 10px;
 font-size: 18px;
 font-weight: 500;
 background: #eee;
 color: #00b3b3;
 border: none;
 cursor: pointer;
`;

const CtegoryItem = ({ item }) => {
 return (
  <Container>
   <Image src={item.img} alt='' />
   <Info>
    <Title>{item.title}</Title>
    <Button>Shop Now</Button>
   </Info>
  </Container>
 );
};

export default CtegoryItem;
