import styles from './Layout.module.scss';
import { Outlet, Link } from 'react-router-dom';
import { useState } from 'react';
import Sidebar from '../../components/Sidebar/Sidebar';
import { useAuthContext } from '../../context/authContext';

const Layout: React.FC = () => {

    const [sidebar, setSidebar] = useState<boolean>(false);
    const { authUser } = useAuthContext();

    return (
        <>
            {sidebar && <Sidebar setSidebar={setSidebar}/>}
            <header className={styles.header}>
                <div className={styles.logo} onClick={() => setSidebar(true)}><h1>AskMe</h1></div>
                {!authUser ? <div className={styles.auth}>
                    <Link to={'/login'}>Log in</Link>
                    <Link to={'/registration'}>Sign up</Link>
                </div> : <div>{authUser.username}</div>}
            </header>
            <section className={styles.outlet}>
                <Outlet />
            </section>
            <footer className={styles.footer}>

            </footer>
        </>
    )
}



export default Layout;