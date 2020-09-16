import styled from 'styled-components';

export const Grid = styled.div `
  margin: 0 auto;
  width:761px;

  h3 {
    font-size: 16px;
    font-weight:600;
  }

  .timeLine {
    position: absolute;
    margin-left: 13px;
    margin-top: 60px;
  }
`;

export const TimeSeparator = styled.div `
  font-size: 13px;
  font-weight: 600;
  height: 20px;

  hr {
    float:right;
    width: 715px;
    border: none;
    height: 1px;
    color: #C3CBD5;
    background-color: #C3CBD5;
  }
`;

export const ProgramBox = styled.div `
  width: 658px;
  height: 73px;
  background-color: #E06D6D;
  border-radius: 15px;
  color: #FFF;
  display: flex;
  flex-direction: column;
  opacity: .4;
  margin-left: 60px;

  .programTitle {
    font-size: 17px;
    font-weight: 600;
    margin: 20px 0 0 20px;
  }

  .programTime {
    margin: 5px 0 0 20px;
  }
`;
