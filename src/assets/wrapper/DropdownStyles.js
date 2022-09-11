import styled from "styled-components";
import tw from "twin.macro";

export const Wrapper = styled.li`
  .dropdown-menu {
    top: 100%;
    left: 0;
    z-index: 1000;
    display: none;
    min-width: 10rem;
    padding: 0.5rem 0;
    margin: 0.5rem 0;
    font-size: 1rem;
    color: #212529;
    list-style: none;
    background-color: #f1f9fc;
    background-clip: padding-box;
    border-radius: 0.25rem;
    animation: fadeDropdown 0.2s; /* required for the fade animation */

    ${tw``}
  }

  @keyframes fadeDropdown {
    0% {
      opacity: 0;
    }

    100% {
      opacity: 1;
    }
  }

  .dropdown-menu.show {
    display: block;
    top: 90%;
    left: auto;
  }

  .dropdown-item {
    display: block;
    width: 100%;
    padding: 0.5rem 1.5rem;
    clear: both;
    text-align: inherit;
    white-space: nowrap;
    background-color: transparent;
    color: #6b747b;
    font-weight: 600;
    font-size: 0.875rem;
    line-height: 0.875rem;
    text-decoration: none;
  }

  .dropdown-item:hover,
  .dropdown-item:focus {
    text-decoration: none;
    background-color: #f1f9fc;
    color: #ff6e84;
  }

  .dropdown-divider {
    overflow: hidden;
    width: 100%;
    height: 1px;
    margin: 0.5rem auto 0.5rem auto;
    background-color: #d4dce2;
  }
  @media (min-width: 1024px) {
    .dropdown-menu {
      position: absolute;
      margin-top: 0.25rem;
      box-shadow: 0 3px 3px 1px rgba(0, 0, 0, 0.05);
    }
  }
`;
