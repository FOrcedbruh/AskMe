import React, { FC } from 'react';
import styles from './Button.module.scss';


interface IButtonProps {
    children: React.ReactNode,
    width?: string,
    height?: string,
    click?: () => void,
    type?: 'submit' | 'button' | 'reset',
    isValid?: boolean,
}


const Button: FC<IButtonProps> = ({ children, width, height, click, type, isValid }) => {
    return (
        <button disabled={!isValid} type={type} onClick={click} style={{'width': width, 'height': height}} className={styles.button}>
            {children}
        </button>
    )
}

export default Button;