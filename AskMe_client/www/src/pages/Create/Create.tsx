import { useState } from 'react';
import styles from './Create.module.scss'
import Button from '../../components/Button/Button';
import { createPost } from '../../api/posts';
import { useAuthContext } from '../../context/authContext';

const Create: React.FC = () => {

    const { authUser } = useAuthContext()

    const [title, setTitle] = useState<string>("Title");
    const [text, setText] = useState<string>("");



    const create_post = async () => {
        if (text && title) {
            const message = await createPost(authUser._id, text, title)
            console.log(message)
        }
        console.log("enter all inputs")
    }



    return (
        <section className={styles.window}>
            <input type="text" value={title} className={styles.titleInput} onChange={e => setTitle(e.target.value)}/>

            <div className={styles.postBody}>
                <textarea placeholder='Just begin typing...' value={text} onChange={e => setText(e.target.value)}>
                </textarea>
            </div>
            <div className={styles.createBlock}>
                <Button clickHandler={create_post} type='button' width='200px' height='40px'>
                    Create
                </Button>
            </div>
        </section>
    )
}

export default Create;