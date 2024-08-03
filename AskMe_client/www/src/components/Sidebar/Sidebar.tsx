import { Dispatch, SetStateAction } from 'react';
import styles from './Sidebar.module.scss';


interface SidebarPropsType {
    setSidebar: Dispatch<SetStateAction<boolean>>;
}

const Sidebar: React.FC<SidebarPropsType> = ({setSidebar}) => {

    return (
        <aside className={styles.aside}>
            <p onClick={() => setSidebar(false)}>back</p>
        </aside>
    )
}

export default Sidebar;