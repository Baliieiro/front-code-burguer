import styled from "styled-components";

export const SectionContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  background: #fff;
  max-width: 100vw;
  gap: 2.25rem;
  padding: 3.2rem;

  .rec.rec-arrow {
    background-color: #9758a6;
    color: #efefef;
  }

  .rec.rec-arrow:hover {
    border: 2px solid #9758a6;
    background-color: #efefef;
    color: #9758a6;
  }

  .rec.rec-arrow:disabled {
    border: none;
    background-color: #bebebf;
    color: #efefef;
  }
`;
export const TitleImage = styled.img`
  width: 273px;
`;
export const ContainerItems = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  p {
    font-size: 22px;
    font-style: normal;
    font-weight: 700;
    line-height: 120%;
  }
  button {
    border-radius: 8px;
    width: 100%;
  }
`;
export const Image = styled.img`
  width: 200px;
  height: 200px;
  border-radius: 10px;
`;
