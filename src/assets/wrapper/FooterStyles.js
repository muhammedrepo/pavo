import styled from "styled-components";

export const Wrapper = styled.section`
  .footer {
    padding-top: 6rem;
    padding-bottom: 3rem;
    background: linear-gradient(rgba(255, 255, 255, 1), rgba(197, 234, 249, 1));
    text-align: center;
  }

  .footer a {
    text-decoration: none;
  }

  .footer .fa-stack {
    width: 2em;
    margin-bottom: 1.25rem;
    margin-right: 0.375rem;
    font-size: 1.5rem;
  }

  .footer .fa-stack .fa-stack-1x {
    color: #252c38;
    transition: all 0.2s ease;
  }

  .footer .fa-stack .fa-stack-2x {
    color: #ffffff;
    transition: all 0.2s ease;
  }

  .footer .fa-stack:hover .fa-stack-1x {
    color: #ffffff;
  }

  .footer .fa-stack:hover .fa-stack-2x {
    color: #252c38;
  }
`;
