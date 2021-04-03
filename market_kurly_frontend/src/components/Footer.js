import React from 'react';
import styled from 'styled-components'
import FooterLeft from './FooterLeft';
import FooterRight from './FooterRight';

const Footer = (props) => {
  return (
    <React.Fragment>
      <Foot>
        <FooterLeft />
        <FooterRight />
      </Foot>
    </React.Fragment>
  );
};
const Foot = styled.div`
  width: 1050px;
  margin: 0px auto;
  padding-bottom: 60px;
  font-weight: 400;
  letter-spacing: -0.2px;
  display: flex;
`;
export default Footer;