import styled from 'styled-components';

// 전역 스타일
const GlobalStyle = createGlobalStyle`
  * {
    background-color: rgb(11, 20, 68);
  }
`;

const AppContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

const Movie = styled.div`
  width: 200px;
  height: 300px;
  margin: 10px;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  margin-bottom: 10px;
  position: relative;

  /* 8개의 아이템에 대한 스타일 */
  &:nth-child(-n + 8) {
    width: calc(12.5% - 10px);
  }

  /* 9번부터 20번까지의 아이템에 대한 스타일 */
  &:nth-child(n + 9):nth-child(-n + 20) {
    width: calc(12.5% - 10px);
  }
`;

const MovieImage = styled.img`
  max-width: 100%;
  height: 100%;
  object-fit: cover;
`;

const Content = styled.div`
  padding: 10px;
  text-align: center;
  background-color: rgb(76, 77, 126);
  justify-content: flex-start;
  width: 130px;
  height: 50px;

  p {
    margin: 5px 0;
    background-color: transparent;
  }
`;

const Overlay = styled.div`
  background-color: rgba(0, 0, 0, 0.7);
  color: white;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 20px;
  opacity: 0;
  transition: opacity 0.3s ease-in-out;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
`;

const MovieDetail = styled.div`
  p {
    background-color: transparent;
  }
`;

const MovieContainer = styled.div`
  &:hover ${Overlay} {
    opacity: 1;
  }
`;

// Export components
export {
  GlobalStyle,
  AppContainer,
  Movie,
  MovieImage,
  Content,
  Overlay,
  MovieDetail,
  MovieContainer,
};
