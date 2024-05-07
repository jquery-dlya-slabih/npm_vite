import type { FC } from 'react';

import styles from './button.module.scss';

interface IButton {
  text: string;
}

const Button: FC<IButton> = ({ text }) => (
  <button className={styles.button}>{text}</button>
);

export default Button;
