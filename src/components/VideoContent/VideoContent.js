import styled from 'styled-components';

const Box = styled.div `
  width:882px;
  background-color: white;
  border-radius: 15px;
  margin: 0 auto;
  box-shadow: 0px 0px 33px rgba(0,0,0,.16);
  overflow:hidden;
`; 

export const VideoPlayer = styled(Box) `
  height:513px;
  margin-top:30px;
`;

export const VideoDetails = styled(Box) `
  .leftDetails {
    float: left;
  }

  .rightDetails {
    padding: 20px;
    float:right;

    img {
      margin: 80px 0 0 10px;
    }
  }
`;

export const VideoDescription = styled.div `
  padding-left: 20px;

  p {
    max-width: 400px;
  }
`;

export const VideoAuthor = styled.div `
  padding:20px;

  .leftAvatar{
    float:left;
    margin-right:15px;
  }

  h3 {
    color: #63688A;
    font-weight: 600;
    font-size: 24px;
    margin: 10px 0 0 0;
  }

  .description {
    font-size: 14px;
  }

  .authorName {
    font-size: 17px;
    font-weight: 600;
  }
`;

export const TagBox = styled.div`
  background-color: #D5DEEA;
  color: #FFF;
  font-size: 15px;
  border-radius: 15px;
  padding: 0 15px;
  text-align: center;
  height: 30px;
  line-height:36px;
`;

