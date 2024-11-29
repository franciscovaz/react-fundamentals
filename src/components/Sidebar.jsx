import { Avatar } from './Avatar';
import styles from './Sidebar.module.css';

import { PencilLine } from 'phosphor-react';

export function Sidebar() {
    return (
        <aside className={styles.sidebar}>
            <img 
                className={styles.cover}
                src="https://plus.unsplash.com/premium_photo-1678566154673-a728037f3f00?q=50&w=500&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />

            <div className={styles.profile}>
                <Avatar src="https://github.com/franciscovaz.png"/>
                
                <strong>Francisco Vaz</strong>
                <span>Software Engineer</span>
            </div>

            <footer>
                <a href="#">
                    <PencilLine /> 
                    Editar perfil
                </a>
            </footer>
        </aside>
    );
}