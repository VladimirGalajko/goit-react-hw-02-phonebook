import styled from 'styled-components';

export const H2 = styled.h2`
  margin-top: 40px;
  margin-bottom: 20px;
  text-align: center;
`;

export const Div = styled.div`


  margin-top: 20px;
  
  ${props => {
    if (props.title === 'Contacts') {
      return {        
        boxShadow: '1px 1px 1px #fff, 1px 1px 1px #babecc',
        backgroundColor: '#f3f1f1',
        borderRadius: '10px'
      
      };
    }
  }}
`;