import styled from "styled-components";

const Container = styled.div`
  height: 30px;
  background: teal;
  color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: 400;
  font-size: 0.9rem;
`;

const Announcement = () => {
  return <Container>Super Deal! Free Shipping on Orders Over £50</Container>;
};

export default Announcement;
