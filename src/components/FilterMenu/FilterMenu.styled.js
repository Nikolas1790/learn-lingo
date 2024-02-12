import styled from 'styled-components'

export const WraperMenu = styled.div`
  display: flex;
  gap: 20px;
  /* align-items: center; */
  /* flex-direction:column; */
  /* background-size: cover;
  min-height: 640px; */
`

export const TitleMenu = styled.p`
  font-weight: 500;
  color: rgb(138, 138, 137);
  margin-bottom:8px;
`

export const OptLanguages = styled.li`
  font-weight: 500;
  /* width: 600px; */
  /* height: 300px; */
  
  /* color: rgb(138, 138, 137); */
`

export const Dropdown = styled.div`
  position: relative;
`;

export const DropdownButton = styled.button`
display: flex;

font-weight: 500;
font-size: 18px;
  width: 221px;
  height: 48px;
  border-radius: 14px; 
  border: none;
  outline: none;
  cursor: pointer;

  background-color: #fff;
  padding: 10px;
  border: 1px solid red;
  cursor: pointer;
`;

export const DropdownList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  position: absolute;
  top: 100%;
  left: 0;
  background-color: #fff;
  border: 1px solid #ccc;
  border-top: none;
  display: none;

  ${Dropdown}:hover & {
    display: block;
  }
`;

export const DropdownItem = styled.li`
  padding: 10px;
  cursor: pointer;
  

  &:hover {
    background-color: #f0f0f0;
  }
`;