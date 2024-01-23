import styled from "styled-components";

export const Box = styled.div`
  position: fixed;
  height: 15%;
  width: 15%;
  top: 20vh;
  right: 0;
  img {
    margin-left: 35px;
    width: 70%;
    cursor: pointer;
  }
  @media screen and (max-width: 1023px) {
    left: 75vw;
    top: 70vh;
    img {
      margin: 0;
      width: 150%;
    }
  }
`;

export const Close = styled.div`
  cursor: pointer;
  display: flex;
  justify-content: center;
  margin-left: 70%;
  text-align: center;
  width: 20px;
  height: 20px;
  margin-bottom: 30px;
  @media screen and (max-width: 1023px) {
    width: 15px;
    height: 15px;
    margin-left: 130%;
  }
`;

export const GachaBox = styled.div`
  text-align: center;
  padding-top: 10px;
  padding-right: 20px;
  width: 1024px;
  height: 800px;
  z-index: 100;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  border-radius: 10px;
  background-color: white;
  img {
    margin-top: 20%;
    width: 40%;
    height: 40%;
  }
  @media screen and (max-width: 1023px) {
    width: 350px;
    height: 800px;
  }
`;

export const GachaClose = styled.div`
  cursor: pointer;
  width: 20px;
  height: 20px;
`;
