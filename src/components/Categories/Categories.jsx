import styled from 'styled-components';
import { mobile } from '../../responsive';
import { categories } from '../../data';
import CategoryItem from './CtegoryItem';

const Container = styled.div`
 display: flex;
 justify-content: space-between;
 padding: 20px;
 ${mobile({ padding: '0', flexDirection: 'column' })};
`;
const Categories = () => {
 return (
  <Container>
   {categories.map((item) => {
    return <CategoryItem key={item.id} item={item} />;
   })}
  </Container>
 );
};

export default Categories;

