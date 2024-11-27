import styles from './Post.module.css'

export function Post () {
    return (
        <article className={styles.post}>
            <header>
                <div className={styles.author}>
                    <img className={styles.avatar} src="https://github.com/franciscovaz.png" />
                    <div className={styles.authorInfo}>
                        <strong>Francisco Vaz</strong>
                        <span>Frontend Engineer</span>
                    </div>
                </div>

                <time title='25 de Novembro às 23:38h' dateTime="2024-11-25 23:38:00">Publicado à 1h</time>
            </header>

            <div className={styles.content}>
                <p>Fala galeraa 👋</p>

                <p>Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀</p>

                <p><a href="">jane.design/doctorcare</a></p>

                <p>
                    <a href="">#novoprojeto</a>{' '}
                    <a href="">#nlw</a>{' '}
                    <a href="">#rocketseat</a>
                    </p>

            </div>

            <form className={styles.commentForm}>
                <strong>Deixa o teu feedback</strong>

                <textarea 
                    placeholder='Deixa um comentário'
                />

                <button type="submit">Publicar</button>
            </form>
        </article>  
)
}