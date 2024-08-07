import styles from './Profile.module.scss';
import { useNavigate } from 'react-router-dom';


const Profile: React.FC = () => {

    const navigate = useNavigate()


    return (
        <section className={styles.window}>
            <div onClick={() => navigate(-1)} className={styles.backBtn}>
                <p>back</p>
            </div>
        </section>
    )
}

export default Profile;