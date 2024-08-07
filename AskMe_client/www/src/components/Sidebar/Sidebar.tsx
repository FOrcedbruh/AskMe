import { Dispatch, SetStateAction } from 'react';
import styles from './Sidebar.module.scss';
import { routes } from '../../routes/routes';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useAuthContext } from '../../context/authContext';
import { logoutHandler } from '../../api/auth';
import Button from '../Button/Button';
import logoutIcon from './../../icons/logout.svg';



interface SidebarPropsType {
    setSidebar: Dispatch<SetStateAction<boolean>>,
}

const logout = async () => {
    const res = await logoutHandler();
    localStorage.removeItem('user');

    console.log(res)
}



const Sidebar: React.FC<SidebarPropsType> = ({setSidebar}) => {

    const { authUser } = useAuthContext();


    

    return (
        <motion.aside initial={{
            x: -300
        }} animate={{
            x: 0,
            transition: { duration: 0.2, ease: 'easeInOut' }
        }} className={styles.aside}>
            <p onClick={() => setSidebar(false)}>back</p>
            <ul className={styles.menu}>
                {routes.map(({title, icon, path}) => {
                    return (
                        <li onClick={() => setSidebar(false)} key={title}><Link to={path}><img src={icon} width={20} height={20}/>{title}</Link></li>
                    )
                })}
            </ul>
            {authUser && <Button type='button' clickHandler={logout} width='100%' height='40px'>Log out <img src={logoutIcon} width={20} height={20}/></Button>}
        </motion.aside>
    )
}

export default Sidebar;