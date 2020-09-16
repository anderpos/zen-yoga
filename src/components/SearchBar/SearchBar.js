import styled from 'styled-components';

export const SearchForm = styled.form `
  div {
    height:52px;
    width:398px;
    border-radius:27px;
    background-color:#7D819D;
    display: flex;
    color: #fff;
  }

  input {
    border:none;
    align-self: center;
    margin:10px 0 0 30px;
    width:100%;
    font-size:18px;
    height:40px;
    color: #fff;
    background: transparent;
  }

  input::placeholder {
    color: #fff;
    opacity: .5;
  }

  textarea:focus, input:focus{
    outline: none;
  }

  img { 
    align-self: center;
    margin-right:30px;
  }
`;

