import styles from './Layout.module.scss';
import { Outlet } from 'react-router-dom';
import { useState } from 'react';
import Sidebar from '../../components/Sidebar/Sidebar';

const Layout: React.FC = () => {

    const [sidebar, setSidebar] = useState<boolean>(false);

    return (
        <>
            {sidebar && <Sidebar setSidebar={setSidebar}/>}
            <header className={styles.header}>
                <div className={styles.logo} onClick={() => setSidebar(true)}><h1>AskMe</h1></div>
                <div></div>
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