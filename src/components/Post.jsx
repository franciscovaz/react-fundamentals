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

            <div className={styles.container}>
            <p>Fala galeraa 👋</p>

            <p>Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀</p>

            <p>👉 <a href="">jane.design/doctorcare</a></p>

            <p><a href="">#novoprojeto #nlw #rocketseat</a></p>

            </div>
        </article>  
)
}