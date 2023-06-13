import React from "react";
import styled from "styled-components";
import { useState } from "react";
import { motion } from "framer-motion";
import { FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";
import useMenuAnimation from "../hooks/useMenuAnimation";

export default function Hamburger() {
  const [isOpen, setIsOpen] = useState(false);
  const scope = useMenuAnimation(isOpen);

  return (
    <StyledNav
      className="menu"
      ref={scope}
    >
      <StyledButton
        whileTap={{ scale: 0.97 }}
        onClick={() => setIsOpen(!isOpen)}
      >
        Contact
        <StyledContainer
          className="arrow"
          style={{ transformOrigin: "50% 55%" }}
        >
          <svg
            width="15"
            height="15"
            viewBox="0 0 20 20"
          >
            <path d="M0 7 L 20 7 L 10 16" />
          </svg>
        </StyledContainer>
      </StyledButton>
      <StyledUl
        style={{
          pointerEvents: isOpen ? "auto" : "none",
          clipPath: "inset(10% 50% 90% 50% round 10px)",
        }}
      >
        <StyledLi>
          <StyledLink
            href="https://www.instagram.com/mi2__pic/?hl=ja"
            target="_blank"
          >
            <FaInstagram />
            Instagram
          </StyledLink>
        </StyledLi>
        <StyledLi>
          <StyledLink
            href="https://www.linkedin.com/in/mitsuhiro-okada"
            target="_blank"
          >
            <FaLinkedin />
            Linkedin
          </StyledLink>
        </StyledLi>
        <StyledLi>
          <StyledLink
            href="https://twitter.com/mi2__user"
            target="_blank"
          >
            <FaTwitter />
            Twitter
          </StyledLink>
        </StyledLi>
      </StyledUl>{" "}
    </StyledNav>
  );
}

const StyledNav = styled.nav`
  z-index: 100;
  position: absolute;
  width: 100%;
  padding: 16px;
  bottom: 0;
  left: 0;
`;

const StyledContainer = styled.div``;

const StyledButton = styled(motion.button)`
  background: #b76cfd;
  opacity: 0.8;
  color: white;
  width: 50%;
  padding: 8px;
  border-radius: 8px;
  font-size: 16px;
  font-weight: 600;
  border: none;
`;

const StyledUl = styled.ul`
  padding: 16px;
  width: 100%;
  list-style: none;
  background: white;
`;

const StyledLi = styled.li`
  display: block;
  transform-origin: -20px 50%;
  color: black;
  padding: 8px;
`;

const StyledLink = styled.a`
  color: black;
  text-decoration: none;
  font-size: 16px;
  font-weight: 600;
  display: flex;
  align-items: center;

  &:hover {
    color: #000;
    text-decoration: none;
  }

  svg {
    margin-right: 8px;
  }
`;
