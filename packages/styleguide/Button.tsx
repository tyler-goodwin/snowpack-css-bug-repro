import React from "react"

import styles from "./Button.module.css"

export interface ButtonProps {
  onClick: () => void
}

export const Button: React.FC<ButtonProps> = ({ onClick, children }) => (
  <button onClick={onClick} className={styles.button}>
    {children}
  </button>
)