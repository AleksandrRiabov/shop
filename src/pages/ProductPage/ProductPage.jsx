import styled from 'styled-components';
import { mobile, tablet } from '../../responsive';
import Navbar from '../../components/Navbar/Navbar';
import Announcement from '../../components/Announcement/Announcement';
import Newsletter from '../../components/Newsletter/Newsletter';
import Footer from '../../components/Footer/Footer';
import RemoveIcon from '@mui/icons-material/Remove';
import AddIcon from '@mui/icons-material/Add';

const Container = styled.div``;

const Wrapper = styled.div`
  padding: 50px;
  display: flex;
  ${tablet({padding: "10px", flexDirection: "column"})};
`;

const ImgContainer = styled.div`
  flex: 1;
`;

const Image = styled.img`
  width: 100%;
  height: 90vh;
  object-fit: cover;
   ${tablet({height: "50vh"})};
`;

const InfoContainer = styled.div`
  flex: 1;
  padding: 0 50px;
   ${tablet({padding: "10px"})};
`;
const Title = styled.h1`
  font-weight: 300;
`;

const Desc = styled.p`
  margin: 20px 0;
`;

const Price = styled.span`
  font-weight: 200;
  font-size: 40px;
`;

const FilterContainer = styled.div`
  width: 50%;
  margin: 30px 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
   ${tablet({width: "100%"})};
`;

const Filter = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const FilterColor = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  margin: 0px 5px;
  background: ${(props) => props.color};
  cursor: pointer;
`;

const FilterText = styled.span`
  font-size: 20px;
  font-weight: 300;
  margin-right: 20px;
`;

const Select = styled.select`
  padding: 5px;
`;

const Option = styled.option``;

const AddContainer = styled.div`
  width: 50%;
  display: flex;
  justify-content: space-between;
  ${tablet({width: "100%"})};
`;

const AmountContainer = styled.div`
  display: flex;
  align-items: center;
  font-weight: 700;
`;

const Amount = styled.span`
  width: 30px;
  height: 30px;
  border-radius: 10px;
  border: 1px solid teal;
  margin: 0 5px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Button = styled.button`
  padding: 10px;
  border: 2px solid teal;
  background: #fff;
  cursor: pointer;
  font-weight: 500;

  &:hover {
    background: #f8f4f4;
  }
`;

const ProductPage = () => {
  return (
    <Container>
      <Announcement />
      <Navbar />
      <Wrapper>
        <ImgContainer>
          <Image
            src="https://hotlinemedia.blob.core.windows.net/product-imagery/a1557/printed/500px_100/a1557-cotton-printed-tote-bag-5oz-natural-ylh4.jpg"
            alt=""
          />
        </ImgContainer>
        <InfoContainer>
          <Title>Denim Jumpsuit</Title>
          <Desc>
            There are many variations of passages of Lorem Ipsum available, but
            the majority have suffered alteration in some form, by injected
            humour, or randomised words which don't look even slightly
            believable. If you are going to use a passage of Lorem Ipsum, you
            need to be sure there isn't anything embarrassing hidden in the
            middle of text. All the Lorem Ipsum generators on the Internet tend
            to repeat predefined chunks as necessary, making this the first true
            generator on the Internet. It uses a dictionary of over 200 Latin
            words, combined with a handful of model sentence structures, to
            generate Lorem Ipsum which looks reasonable.
          </Desc>
          <Price>£20</Price>
          <FilterContainer>
            <Filter>
              <FilterText>Color:</FilterText>
              <FilterColor color="black"></FilterColor>
              <FilterColor color="darkblue"></FilterColor>
              <FilterColor color="grey"></FilterColor>
            </Filter>
            <Filter>
              <FilterText> Size:</FilterText>
              <Select>
                <Option>XS</Option>
                <Option>S</Option>
                <Option>M</Option>
                <Option>L</Option>
                <Option>XL</Option>
              </Select>
            </Filter>
          </FilterContainer>
          <AddContainer>
            <AmountContainer>
              <RemoveIcon style={{ cursor: 'pointer' }} />
              <Amount>1</Amount>
              <AddIcon style={{ cursor: 'pointer' }} />
            </AmountContainer>
            <Button>ADD TO CART</Button>
          </AddContainer>
        </InfoContainer>
      </Wrapper>
      <Newsletter />
      <Footer />
    </Container>
  );
};

export default ProductPage;
