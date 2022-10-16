import styled from 'styled-components';

export const PhonebookForm = styled.form`
  display: flex;
  flex-direction: column;

  margin-top: 18px;
  padding: 20px;
  border: 1px solid tomato;
  border-radius: 8px;
`;

export const PhonebookLable = styled.label`
  display: flex;
  flex-direction: column;
  font-size: 18px;
  margin-top: 10px;
`;
export const PhonebookInput = styled.input`
  width: 200px;
  height: 35px;
  border: solid rgba(0, 0, 0, 0.2);
  border-radius: 8px;
`;

export const PhonebookSubBtn = styled.button`
  margin-top: 15px;
  width: 100%;
  height: 40px;

  background-color: #479e50;
  color: white;
  border-radius: 8px;
  font-weight: 700;
  border-color: transparent;
  transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);

  &:hover {
    cursor: pointer;
    background-color: green;
    background-color: #54b95f;
    scale: 0.994;
  }
`;
