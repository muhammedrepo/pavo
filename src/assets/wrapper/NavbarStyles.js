import styled from "styled-components";
import tw from "twin.macro";

export const Wrapper = styled.div`
  .navbar {
    position: relative;
    background-color: #f1f9fc;
    padding: 0.5rem 1rem;
    flex-flow: row wrap;
    justify-content: space-between;
    align-items: center;
    font-weight: 600;
    font-size: 0.875rem;
    line-height: 0.75rem;
    transition: all 0.2s ease;
  }
  .fixed-top {
    position: fixed;
    top: 0;
    right: 0;
    left: 0;
    z-index: 1030;
  }

  .navbar-toggler-icon {
    content: "";
    background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='30' height='30' viewBox='0 0 30 30'%3e%3cpath stroke='rgba%280, 0, 0, 0.5%29' stroke-linecap='round' stroke-miterlimit='10' stroke-width='2' d='M4 7h22M4 15h22M4 23h22'/%3e%3c/svg%3e");
    background-repeat: no-repeat;
    background-position: center center;
    background-size: 100% 100%;
  }

  .navbar-collapse {
    flex-basis: 100%;
  }

  .navbar.top-nav-collapse {
    padding-top: 0.5rem;
    padding-bottom: 0.5rem;
    background-color: #f1f9fc;
  }

  .offcanvas-collapse {
    position: fixed;
    top: 3.25rem; /* adjusts the height between the top of the page and the offcanvas menu */
    bottom: 0;
    left: 100%;
    width: 100%;
    padding-right: 1rem;
    padding-left: 1rem;
    overflow-y: auto;
    visibility: hidden;
    background-color: #f1f9fc;
    transition: visibility 0.3s ease-in-out, -webkit-transform 0.3s ease-in-out;
    transition: transform 0.3s ease-in-out, visibility 0.3s ease-in-out;
    transition: transform 0.3s ease-in-out, visibility 0.3s ease-in-out,
      -webkit-transform 0.3s ease-in-out;
  }

  .offcanvas-collapse.open {
    visibility: visible;
    -webkit-transform: translateX(-100%);
    transform: translateX(-100%);
  }

  .dropdown.show > a,
  .nav-link:hover,
  .nav-link.active-link {
    color: #ff6e84;
    text-decoration: none;
  }
  .background-transparent {
    ${tw`rounded text-xl leading-none hover:no-underline focus:no-underline lg:hidden lg:text-gray-400`}
  }
  .fab {
    ${tw` text-primary hover:text-secondary text-xl transition-all duration-200 mr-1.5`}
  }
  @media (min-width: 1024px) {
    /* General Styles */

    /* Navigation */
    .navbar {
      background-color: transparent;
      flex-wrap: nowrap;
      justify-content: start;
      padding-left: 0;
      padding-right: 0;
      padding-top: 1.75rem;
    }

    .navbar-collapse {
      flex-basis: auto;
    }

    .navbar.top-nav-collapse {
      padding-top: 0.5rem;
      padding-bottom: 0.5rem;
      background-color: #f1f9fc;
    }

    .offcanvas-collapse {
      position: static;
      top: auto;
      bottom: auto;
      left: auto;
      width: auto;
      padding-right: 0;
      padding-left: 0;
      background-color: transparent;
      overflow-y: visible;
      visibility: visible;
    }

    .offcanvas-collapse.open {
      -webkit-transform: none;
      transform: none;
    }
  }
`;
