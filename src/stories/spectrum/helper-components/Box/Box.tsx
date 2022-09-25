import { FC, ReactNode } from 'react'
import styles from './Box.module.css'

export interface IBox {
  children: ReactNode;
  salam?: string;
}

export const Box: FC<IBox> = ({ children }) => (
  <div className={styles.box} >
    {children}
  </div>
)
