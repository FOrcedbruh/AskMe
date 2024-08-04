import { useState } from 'react';
import styles from './Registration.module.scss'
import eye from './../../icons/eye.svg';
import closeEye from './../../icons/closeEye.svg';
import Button from '../../components/Button/Button';
import { Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { motion } from 'framer-motion';
import { regHandler } from '../../api/auth';
import { useAuthContext } from '../../context/authContext';



interface IFormState {
    username: string,
    password: string,
    email: string,
    fullname: string
}


const Registration: React.FC = () => {

    const { setAuthUser } = useAuthContext();

    const {
        handleSubmit,
        register,
        formState: {
            errors,
            isValid
        },
        reset
    } = useForm<IFormState>({
        mode: 'onChange'
    })

    const [gender, setGender] = useState<string>('Male');

    const [view, setView] = useState<boolean>(false);

    const viewHandler = (e: any) => {
        e.preventDefault()
        setView(!view);
    }



    const onSubmit = async (data: IFormState) => {
        const username: string = data.username;
        const password: string = data.password;
        const fullname: string = data.fullname;
        const email: string = data.email;
        
        const res = await regHandler(username, email, fullname, gender, password);

        console.log(res);

        localStorage.setItem('user', JSON.stringify(res));
        setAuthUser(res);
        reset();
    }

    return (
        <section className={styles.window}>
            <h1>Create an account</h1>

            <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
                <div>
                    <input placeholder='username' type="text" {...register('username', {
                        required: 'Enter username',
                        minLength: {
                            value: 4,
                            message: 'Min 4 symbols'
                        }
                    })}/>
                    {errors.username && <motion.p initial={{ opacity: 0}} animate={{ opacity: 1}} className={styles.error}>{errors.username.message}</motion.p>}
                </div>
                <div>
                    <input placeholder='email' type="email" {...register('email', {
                        required: 'Enter email',
                        pattern: {
                            value: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                            message: 'Invalid email syntax'
                        }
                    })}/>
                    {errors.email && <motion.p initial={{ opacity: 0}} animate={{ opacity: 1}} className={styles.error}>{errors.email.message}</motion.p>}
                </div>
                <div>
                    <input placeholder='fullname' type="text" {...register('fullname', {
                        required: 'Enter your fullname'
                    })}/>
                    {errors.fullname && <motion.p initial={{ opacity: 0}} animate={{ opacity: 1}} className={styles.error}>{errors.fullname.message}</motion.p>}
                </div>
                <div className={styles.genders}>
                    <div onClick={() => setGender('Male')} style={{'backgroundColor': gender ===  'Male' ? '#76ABAE' : '#222831'}}>Male</div>
                    <div onClick={() => setGender('Female')} style={{'backgroundColor': gender === 'Female' ? '#76ABAE' : '#222831'}}>Female</div>
                </div>
                <div className={styles.password}>
                    <div>
                        <input placeholder='password' type={view ? 'text' : 'password'} {...register('password', {
                            required: 'Password is required',
                            minLength: {
                                value: 6,
                                message: 'Min 6 symbols'
                            }
                        })}/>
                        <button onClick={(e) => viewHandler(e)}><img src={view ? eye : closeEye} alt="eye" width={24} height={24}/></button>
                    </div>
                    {errors.password && <motion.p initial={{ opacity: 0}} animate={{ opacity: 1}} className={styles.error}>{errors.password.message}</motion.p>}
                </div>
                <Button isValid={isValid} type='submit' width='100%' height='40px'>
                    Create
                </Button>
                <article><p>Already have an account?</p><Link to={'/login'}>Log in</Link></article>
            </form>
        </section>
    )
}

export default Registration;