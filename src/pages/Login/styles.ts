import styled from "styled-components";

export const Container = styled.div`
  height: 100vh;
  width: 100%;
  display: flex;
`;

export const LeftContainer = styled.div`
  flex: 1.5;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;

  & > p {
    font-size: 1rem;
    padding: 2rem;
  }

  & a {
    color: var(--primary-green);
    text-decoration: underline;
  }
`;

export const BoxLogin = styled.div`
  width: 44.7rem;
  height: 34.7rem;
  border-radius: 2.4rem;
  border: 3px solid #f5f7fa;
  box-shadow: 0rem 0rem 1rem 0rem var(--dark-gray);
  display: flex;
  flex-direction: column;
  gap: 3rem;
  align-items: center;
  justify-content: center;

  & fieldset {
    width: auto;
  }
`;

export const MainContentLogin = styled.div`
  display: flex;
  flex-direction: column;
  gap: 3rem;
  align-items: center;
  height: 100%;
  justify-content: center;

  & p {
    font-size: 1.6rem;
  }
`;

export const RightContainer = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2rem;
`;

export const OrangeContainer = styled.div`
  display: flex;
  flex-direction: column;
  border-radius: 3.2rem;
  height: 100%;
  align-items: flex-start;
  justify-content: center;
  color: var(--white);

  & h1 {
    font-size: 3rem;
  }

  & p {
    font-size: 1.6rem;
  }

  & div:nth-child(1) {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    height: 26rem;
    width: 50rem;
    gap: 2rem;
    background: var(--primary-green);
    border-radius: 3.2rem;
    z-index: 2;
    padding: 2rem;
  }

  & div:nth-child(2) {
    overflow: hidden;
    width: 50rem;
    display: flex;
    justify-content: flex-end;
    background: var(--primary-orange);
    border-radius: 3.2rem;
    z-index: 2;
  }

  & div:nth-child(3) {
    position: absolute;
    width: 4rem;
    min-height: 40rem;
    background: var(--primary-orange);
  }
`;
