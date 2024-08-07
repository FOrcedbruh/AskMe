import { useState } from 'react';
import styles from './Login.module.scss'
import eye from './../../icons/eye.svg';
import closeEye from './../../icons/closeEye.svg';
import Button from '../../components/Button/Button';
import { Link, useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { loginHandler } from '../../api/auth';
import { useAuthContext } from '../../context/authContext';


interface IStateProps {
    email: string,
    passowrd: string
}


const Login: React.FC = () => {

    const navigate = useNavigate()

    const { setAuthUser } = useAuthContext()

    const {
        handleSubmit,
        register,
        formState: {
            errors,
            isValid
        },
        reset
    } = useForm<IStateProps>({
        mode: 'onChange'
    });

    const [view, setView] = useState<boolean>(false);

    const viewHandler = (e: any) => {
        e.preventDefault()
        setView(!view);
    }


    const onSubmit = async (data: IStateProps) => {
        const email: string = data.email
        const password: string = data.passowrd;

        const res = await loginHandler(email, password);

        localStorage.setItem('user', JSON.stringify(res));
        setAuthUser(res);
        reset();

        if (localStorage.getItem('user')) {
            navigate('/')
        }
    }


    return (
        <section className={styles.window}>
            <h1>Sign in</h1>

            <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
                <div>
                    <input placeholder='email' type="email" {...register('email', {
                        required: 'Enter email',
                        pattern: {
                            value: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                            message: 'Invalid email syntax'
                        }
                    })}/>
                    {errors.email && <p className={styles.error}>{errors.email.message}</p>}
                </div>
                <div className={styles.password}>
                    <div>
                        <input placeholder='password' type={view ? 'text' : 'password'} {...register('passowrd', {
                            required: 'Password is required',
                            minLength: {
                                value: 6,
                                message: 'Min 6 symbols'
                            }
                        })}/>
                        <button onClick={(e) => viewHandler(e)}><img src={view ? eye : closeEye} alt="eye" width={24} height={24}/></button>
                    </div>
                    {errors.passowrd && <p className={styles.error}>{errors.passowrd.message}</p>}
                </div>
                <Button isValid={isValid} type='submit' width='100%' height='40px'>
                    Sign in
                </Button>
                <article><p>Don't have an account?</p><Link to={'/registration'}>Create</Link></article>
            </form>
        </section>
    )
}

export default Login;