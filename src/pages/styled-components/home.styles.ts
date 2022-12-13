import styled from "styled-components";

export const Main = styled.main`
  width: 100vw;
  height: 100vh;
  position: relative;
`;

export const BgImageTop = styled.div`
  display: flex;
  width: 100vw;
  height: 26vh;

  figure {
    width: 100%;
    height: 100%;
    margin: 0;
    padding: 0;

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }
`;

export const BgFigureCenter = styled.figure`
  position: absolute;
  left: 0;
  right: 0;
  top: 5%;
  width: min(100% - 15px, 740px);
  margin-inline: auto;
`;

export const TitleAndTheme = styled.div`
  display: flex;
  justify-content: space-between;

  h1 {
    font-size: 38px;
    color: #fff;
    letter-spacing: 20px;
    text-transform: uppercase;
    font-weight: 700;
    margin: 0;
  }

  figure {
    cursor: pointer;
    margin: 0;
    width: 35px;
    height: 35px;

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }
`;

export const BgBackgroundDown = styled.div`
  width: 100vw;
  height: 74vh;
  background-color: #fafafa;
`;
