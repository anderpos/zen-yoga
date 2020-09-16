import styled from 'styled-components';

export const ViewersBar = styled.div `
  background-color: #fff;
  width: 88px;
  height: calc(110vh - 90px);
  border-radius: 0 15px 15px 0;
  box-shadow: 0px 0px 33px rgba(0,0,0,.16);
  display:flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  float:left;
  text-align: center;

  div {
    margin-bottom: 25px;
  }

  .onlineUsers {
    font-size: 15px;
    font-weight: 600;
  }
`;


