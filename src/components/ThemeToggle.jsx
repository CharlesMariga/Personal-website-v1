import React from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { selectMode, setMode } from "../features/theme/themeSlice";
import Icon from "./Icon";

const ThemeToggle = ({ closeModal }) => {
  const mode = useSelector(selectMode);

  const dispatch = useDispatch();

  const changeMode = () => {
    const newMode = mode === "light" ? "dark" : "light";
    localStorage.setItem("themeMode", newMode);
    dispatch(setMode(newMode));
    closeModal();
  };

  return (
    <Toggle aria-label="toggle mode" onClick={changeMode}>
      {mode === "dark" && <Icon name="Sun" width={38} height={38} />}
      {mode === "light" && <Icon name="Moon" width={28} height={28} />}
    </Toggle>
  );
};

const Toggle = styled.button`
  background-color: transparent;
  border: none;
  cursor: pointer;
  margin-left: 2rem;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 3.8rem;

  &:hover {
    svg {
      fill: var(--primary);
    }
  }

  svg {
    fill: var(--text-color);
    transition: var(--transition);
  }
`;

export default ThemeToggle;
