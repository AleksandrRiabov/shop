import styled from "styled-components";
import { categories } from "../../data";
import CategoryItem from "./CtegoryItem";

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 20px;
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
