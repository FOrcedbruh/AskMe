import styles from './Profile.module.scss';
import { useNavigate } from 'react-router-dom';
import { useAuthContext } from '../../context/authContext';
import avatarIcon from './../../icons/account.svg';




const Profile: React.FC = () => {

    

    const navigate = useNavigate();

    const { authUser } = useAuthContext();

    return (
        <section className={styles.window}>
            <div onClick={() => navigate(-1)} className={styles.backBtn}>
                <p>back</p>
            </div>
            <div className={styles.userInfo}>
                <div className={styles.avatar}>
                    <img width={100} height={100} src={avatarIcon}/>
                </div>
                <h1>{authUser.username}</h1>
                <p className={styles.email}>{authUser.email}</p>
            </div>
            <div className={styles.achievments}>

            </div>
            <div className={styles.posts}>

            </div>
        </section>
    )
}

export default Profile;