
import styles from './Button.module.scss';

const Button = ({ children, className, colour, ...rest }) => {
    let buttonClassName = styles.button;

    if (className) {
        buttonClassName = `${buttonClassName} + ${className}`
    }
    
    return (
        <button {...rest} className={buttonClassName} data-colour={colour}>
            { children }
        </button>
    )
}

export default Button;