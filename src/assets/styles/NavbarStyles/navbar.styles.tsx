import styled from "styled-components";
import logo from "../../icons/logo.png";

export const NavbarWrapper = styled.nav`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 90vw;
`;

export const NavbarLogoWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    background-position: center;
    background-size: contain;
    background-repeat: no-repeat;
    background-color: url(${logo});
    background-color: var(--white);
    border-radius: 0.3125rem;
    width: clamp(6.25rem, 20%, 12.5rem);
    min-height: 30px;
    margin: 0 auto;
    box-shadow: 0px 1px 10px 0px rgba(0, 0, 0, 0.1);
`;
    
export const NavbarLogo = styled.img`
    width: 90%;
    padding: 1.9375rem 1.0625rem;
`;

export const NavbarLink = styled.p`
    font-weight: 600;
    font-size: var(--font-H6);
    color: ${({ variant }) =>
    variant === "download" ? "var(--white)" : "var(--black)"};
    background-color: ${({ variant }) => 
    variant === "download" ? "var(--royal-blue)" : "null"
    };
    line-height: 1.875rem;
    padding: ${({ variant }) => 
        variant === "download" ? ".3rem" : "null"
    };
    border-radius: ${({ variant }) => 
        variant === "download" ? "5px" : "null"
    };

    &:hover {
        color: ${({ variant }) => 
            variant === "download" ? "var(--black)" : "var(--royal-blue)"
        };        
        text-decoration: underline;
    }

    @media (max-width: 890px) {
        font-size: 0.625rem;
        width: ${({ variant }) =>
        variant === "download" ? "4.75rem" : "null"};
        text-align: center;
    }
`;

export const NavBarWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  flex-flow: row nowrap;
  align-items: center;
  width: 90vw;
  margin: 0 auto;
  background-color: var(--white);
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  height: 3.75rem;
  width: 90vw;
  gap: 2.5rem;
  padding: 0 2px 0 2px;

    @media (max-width: 1150px) {
        margin-top: 1.875rem;        
    }

    @media (max-width: 1050px) {
      gap: 1.25rem;
    }

    @media (max-width: 900px) {
        gap: 0.625rem;
    }
`;

export const MobileMenu = styled.div`
  display: none;
  flex-direction: column;
  position: absolute;
  top: 60px; 
  left: 5vw; 
  background: var(--white);
  border-radius: 8px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  padding: 1rem;
  width: 90vw;

  @media (max-width: 890px) {
    display: flex;
  }
`;

export const BurgerMenu = styled.div`
  display: none;
  flex-direction: column;
  justify-content: space-around;
  width: 2rem;
  height: 2rem;
  background: none;
  border: none;
  cursor: pointer;
  z-index: 10;

  @media (max-width: 890px) {
    display: flex;
  }

  div {
    width: 2rem;
    height: 0.25rem;
    background: var(--black);
    border-radius: 5px;
    transition: all 0.3s linear;
    position: relative;
  }
`;
