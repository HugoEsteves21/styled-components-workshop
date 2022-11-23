import React from "react";

/* Import Your Files Below This Line*/
import styled from "styled-components";

function Footer() {
  return (
    <StyldFooter>
      <p>© 2022 Ironhack. All Rights Reserved</p>
    </StyldFooter>
  );
}

const StyldFooter = styled.footer`
  background-color:#676FA3;
  height: 5vh;
  display: flex;
  align-items: center;

  p {
    color: white;
    margin-left: 1vh;
  }
  
`;

export default Footer;
