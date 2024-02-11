import styled from "styled-components";

export const ContainerCart = styled.section`
  min-height: 100vh;
  background-color: #efefef;
  section {
    display: flex;
    gap: 2rem;
    justify-content: center;
    padding: 3rem;
  }
`;
export const Banner = styled.img`
  width: 100%;
`;
export const ContainerTable = styled.div`
  background-color: #fff;
  border-radius: 1rem;
  width: 60%;
  padding: 1rem;
  strong {
    display: flex;
    justify-content: center;
    padding: 2rem 0;
  }
`;
export const Head = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  border-bottom: 2px solid #9a9a9d;
  p {
    padding: 1rem 0;
    color: #9a9a9d;
    font-size: 1rem;
    line-height: 19px;
  }
`;

export const ResumeRequest = styled.div`
  width: 315px;
  button {
    width: 100%;
    margin-top: 30px;
  }
`;
export const ContainerItems = styled.div`
  width: 100%;
  background-color: #fff;
  border-radius: 1rem;
  padding: 3rem 2rem 1rem;

  .top {
    display: grid;
    grid-gap: 10px 50px;
    grid-template-areas: "title title" "items items-price" "tax tax-price";
    .title {
      grid-area: title;
      font-size: 1.25rem;
      margin-bottom: 20px;
    }
    .items {
      grid-area: items;
      color: #9a9a9d;
    }
    .items-price {
      grid-area: items-price;
      text-align: end;
      color: #9a9a9d;
    }
    .tax {
      grid-area: tax;
      color: #9a9a9d;
    }
    .tax-price {
      grid-area: tax-price;
      text-align: end;
      color: #9a9a9d;
    }
  }
  .bottom {
    display: grid;
    margin-top: 50px;
    grid-gap: 20px 50px;

    grid-template-areas: "h2 p";
    h2 {
      grid-area: h2;
      font-size: 1.7rem;
    }
    p {
      grid-area: p;
      font-size: 1.7rem;
      text-align: end;
    }
  }
`;
