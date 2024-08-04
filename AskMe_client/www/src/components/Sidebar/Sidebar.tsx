import { Dispatch, SetStateAction } from 'react';
import styles from './Sidebar.module.scss';
import { routes } from '../../routes/routes';
import { Link } from 'react-router-dom';

interface SidebarPropsType {
    setSidebar: Dispatch<SetStateAction<boolean>>;
}

const Sidebar: React.FC<SidebarPropsType> = ({setSidebar}) => {

    return (
        <aside className={styles.aside}>
            <p onClick={() => setSidebar(false)}>back</p>
            <ul className={styles.menu}>
                {routes.map(({title, icon, path}) => {
                    return (
                        <li key={title}><Link to={path}><img src={icon} width={20} height={20}/>{title}</Link></li>
                    )
                })}
            </ul>
        </aside>
    )
}

export default Sidebar;