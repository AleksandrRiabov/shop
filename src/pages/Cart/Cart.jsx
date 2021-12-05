import styled from 'styled-components';
import { mobile, tablet } from '../../responsive';
import Navbar from '../../components/Navbar/Navbar';
import Announcement from '../../components/Announcement/Announcement';
import Footer from '../../components/Footer/Footer';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';

const Container = styled.div``;

const Wrapper = styled.div`
 padding: 20px;
 ${tablet({padding: "10px"})};
`;

const Title = styled.h1`
 font-weight: 300;
 text-align: center;
 text-transform: uppercase;
`;

const Top = styled.div`
 display: flex;
 justify-content: space-between;
 align-items: center;
 padding: 20px;
`;

const TopButton = styled.button`
 padding: 10px;
 font-weight: 600;
 cursor: pointer;
 text-transform: uppercase;

 background: ${(props) => (props.type === 'filled' ? '#000' : 'transparent')};
 color: ${(props) => props.type === 'filled' && '#fff'};
 border: ${(props) => props.type === 'filled' && 'none'};
`;

const TopTexts = styled.div`
${tablet({display: "none"})};
`;
const TopText = styled.span`
 text-decoration: underline;
 cursor: pointer;
 margin: 0 10px;
`;

const Bottom = styled.div`
 display: flex;
 justify-content: space-between;
 ${tablet({flexDirection: "column"})};
`;

const Info = styled.div`
 flex: 3;
`;

const Product = styled.div`
 display: flex;
 justify-content: space-between;
 margin: 10px 0;
 ${tablet({flexDirection: "column"})};
`;

const Hr = styled.hr`
 background: #eee;
 height: 1px;
 border: none;
`;
const ProductDetails = styled.div`
 flex: 2;
 display: flex;
`;

const Image = styled.img`
 width: 200px;
`;

const Details = styled.div`
 padding: 20px;
 display: flex;
 flex-direction: column;
 justify-content: space-around;
`;

const ProductName = styled.span``;

const ProductId = styled.span``;

const ProductColor = styled.div`
 width: 20px;
 height: 20px;
 border-radius: 20px;
 background: ${(props) => props.color};
`;

const ProductSize = styled.span``;

const PriceDetail = styled.div`
 flex: 1;
 display: flex;
 flex-direction: column;
 align-items: center;
 justify-content: center;
`;

const ProductAmountContainer = styled.div`
 display: flex;
 align-items: center;
 margin-bottom: 20px;
`;

const ProductAmount = styled.span`
 font-size: 24px;
 margin: 5px;
 ${tablet({padding: " 5px 15px"})};
`;

const ProductPrice = styled.span`
 font-weight: 300;
 font-size: 30px;
  ${tablet({marginBottom: "15px"})};
`;

const Summary = styled.div`
 flex: 1;
 border: 0.5px solid lightgrey;
 border-radius: 10px;
 height: 50vh;
 overflowy: scroll;
 padding: 20px;
`;

const SummaryTitle = styled.h2`
 font-weight: 300;
`;
const SummaryItem = styled.div`
 margin: 30px 0;
 display: flex;
 justify-content: space-between;
 font-size: ${(props) => props.type === 'total' && '24px'};
 font-weight: ${(props) => props.type === 'total' && 500};
`;

const SummaryItemText = styled.span``;

const SummaryItemPrice = styled.span``;

const Button = styled.button`
 width: 100%;
 background: #000;
 color: #fff;
 padding: 15px 10px;
 cursor: pointer;
 border: none;
 text-transform: uppercase;
`;

const Cart = () => {
 return (
  <Container>
   <Navbar />
   <Announcement />
   <Wrapper>
    <Title>Your Bag</Title>
    <Top>
     <TopButton>Continue shopping</TopButton>
     <TopTexts>
      <TopText>Shopping Bag (2)</TopText>
      <TopText>Your Wishlist (0)</TopText>
     </TopTexts>
     <TopButton type='filled'>Checkout now</TopButton>
    </Top>
    <Bottom>
     <Info>
      <Product>
       <ProductDetails>
        <Image
         src='https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcQF7ojlA21_-FvBHjltVsOQmG9VeNUpfJV7KIF4O2P6Cc_11ZOaTrITEBXCSmtMX2isx_qjvZM0jTobL8AEsoiAi4S4dpMCzt6MwppI0WcQjzbYHaUsu9lKUA&usqp=CAE'
         alt=''
        />
        <Details>
         <ProductName>
          <b>Product: </b> Some Coat From Google
         </ProductName>
         <ProductId>
          <b>Id: </b> 134566578
         </ProductId>
         <ProductColor color='#2d3549' />
         <ProductSize>
          <b>Size: </b> M
         </ProductSize>
        </Details>
       </ProductDetails>
       <PriceDetail>
        <ProductAmountContainer>
         <AddIcon />
         <ProductAmount>1</ProductAmount>
         <RemoveIcon />
        </ProductAmountContainer>
        <ProductPrice>£50</ProductPrice>
       </PriceDetail>
      </Product>
      <Hr />

      <Product>
       <ProductDetails>
        <Image
         src='https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcS_fNopDvLXzb9GIAjtUB3FzmsliD3LbxAe894z2APh9hKbbvSgjOLJmOUR0ucP1nMUsFpuswvmFeMToV2XgpW8mCv6xGriSNFbCFcmcgNloqMFmFdsiQttnw&usqp=CAE'
         alt=''
        />
        <Details>
         <ProductName>
          <b>Product: </b> Some Coat From Google
         </ProductName>
         <ProductId>
          <b>Id: </b> 134564564
         </ProductId>
         <ProductColor color='#000' />
         <ProductSize>
          <b>Size: </b> XL
         </ProductSize>
        </Details>
       </ProductDetails>
       <PriceDetail>
        <ProductAmountContainer>
         <AddIcon />
         <ProductAmount>2</ProductAmount>
         <RemoveIcon />
        </ProductAmountContainer>
        <ProductPrice>£30</ProductPrice>
       </PriceDetail>
      </Product>
     </Info>
     <Summary>
      <SummaryTitle> Order Summary</SummaryTitle>
      <SummaryItem>
       <SummaryItemText>Subtotal</SummaryItemText>
       <SummaryItemPrice>£80</SummaryItemPrice>
      </SummaryItem>
      <SummaryItem>
       <SummaryItemText>Estimated Shipping</SummaryItemText>
       <SummaryItemPrice>£5.90</SummaryItemPrice>
      </SummaryItem>
      <SummaryItem>
       <SummaryItemText>Shipping Discount</SummaryItemText>
       <SummaryItemPrice>- £5.90</SummaryItemPrice>
      </SummaryItem>
      <SummaryItem type='total'>
       <SummaryItemText>Total</SummaryItemText>
       <SummaryItemPrice>£80</SummaryItemPrice>
      </SummaryItem>
      <Button>Checkout Now</Button>
     </Summary>
    </Bottom>
   </Wrapper>
   <Footer />
  </Container>
 );
};

export default Cart;