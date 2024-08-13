import React, { FC } from 'react';
import styles from './Button.module.scss';


interface IButtonProps {
    children: React.ReactNode,
    width?: string,
    height?: string,
    clickHandler: () => void,
    type?: 'submit' | 'button' | 'reset' | undefined,
    isValid?: boolean,
}


const Button: FC<IButtonProps> = ({ children, width, height, clickHandler, type, isValid }) => {
    return (
        <button onClick={clickHandler} type={type}  style={{'width': width, 'height': height}} className={styles.button}>
            {children}
        </button>
    )
}

export default Button;