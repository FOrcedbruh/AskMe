import { useState } from 'react';
import styles from './Login.module.scss'
import eye from './../../icons/eye.svg';
import closeEye from './../../icons/closeEye.svg';
import Button from '../../components/Button/Button';
import { Link } from 'react-router-dom';

const Login: React.FC = () => {


    const [view, setView] = useState<boolean>(false);

    const viewHandler = (e: any) => {
        e.preventDefault()
        setView(!view);
    }

    const onSubmit = () => {
        
    }

    return (
        <section className={styles.window}>
            <h1>Sign in</h1>

            <form className={styles.form}>
                <div>
                    <input placeholder='email' type="email" />
                </div>
                <div className={styles.password}>
                    <input placeholder='password' type={view ? 'text' : 'password'} />
                    <button onClick={(e) => viewHandler(e)}><img src={view ? eye : closeEye} alt="eye" width={24} height={24}/></button>
                </div>
                <Button click={onSubmit} width='100%' height='40px'>
                    Submit
                </Button>
                <article><p>Don't have an account?</p><Link to={'/registration'}>Create</Link></article>
            </form>
        </section>
    )
}

export default Login;