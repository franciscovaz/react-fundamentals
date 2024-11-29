import { ThumbsUp, Trash } from 'phosphor-react'
import styles from './Comment.module.css'
import { Avatar } from './Avatar'

export function Comment() {
    return (
        <div className={styles.comment}>
            <Avatar hasBorder={false} src="https://github.com/diego3g.png" />

            <div className={styles.commentBox}>
                <div className={styles.commentContent}>
                    <header>
                        <div className={styles.authorAndTime}>
                            <strong>Francisco Vaz</strong>
                            <time title='25 de Novembro às 23:38h' dateTime="2024-11-25 23:38:00">Cerca de 1h atrás</time>
                        </div>

                        <button title='Eliminar comentário'>
                            <Trash size={24}/>
                        </button>
                    </header>
                    <p>Muito bom John, parabéns!!</p>
                </div>

                <footer>
                    <button>
                        <ThumbsUp />Gostos<span>20</span>
                    </button>
                </footer>
            </div>
        </div>
    )
}