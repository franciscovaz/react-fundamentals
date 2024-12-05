import { format, formatDistanceToNow } from 'date-fns';
import ptPT from 'date-fns/locale/pt-BR'

import { Avatar } from './Avatar'
import { Comment } from './Comment'
import styles from './Post.module.css'
import { useState } from 'react';

export function Post ({author, publishedAt, content}) {
    const publishedDateFormatted = format(publishedAt, "d 'de' LLLL 'às' HH:mm'h'",
        {
            locale: ptPT
        }
    );

    const [comments, setComments] = useState(['Comentário porreiro num post brutal!']);

    const [newCommentText, setNewCommentText] = useState('');

    const publishedDateRelativeNow = formatDistanceToNow(publishedAt, {
        locale: ptPT,
        addSuffix: true
    })

    function handleCreateNewComment() {
        event.preventDefault();

        setComments([...comments, newCommentText]);

        setNewCommentText('');
    }

    function handleNewCommentChange() {
        setNewCommentText(event.target.value);
    }

    function deleteComment(comment) {
        console.log(`Comment to delete: ${comment}`);  
    }

    return (
        <article className={styles.post}>
            <header>
                <div className={styles.author}>
                    <Avatar src={author.avatarUrl} />
                    <div className={styles.authorInfo}>
                        <strong>{author.name}</strong>
                        <span>{author.role}</span>
                    </div>
                </div>

                <time title={publishedDateFormatted} dateTime={publishedAt.toISOString()}>
                    {publishedDateRelativeNow}
                </time>
            </header>

            <div className={styles.content}>
                { content.map(line => {
                    if(line.type === 'paragraph'){
                        return <p key={line.content}>{line.content}</p>
                    } else if(line.type === 'link') {
                        return <p key={line.content}><a href="#">{line.content}</a></p>
                    }
                })}

            </div>

            <form onSubmit={handleCreateNewComment} className={styles.commentForm}>
                <strong>Deixa o teu feedback</strong>

                <textarea 
                    name="comment"
                    placeholder='Deixa um comentário'
                    value={newCommentText}
                    onChange={handleNewCommentChange}
                />

                <footer>
                    <button type="submit">Publicar</button>
                </footer>
            </form>

            <div className={styles.commentList}>
                { comments.map(comment => {
                    return (
                        <Comment 
                            key={comment} 
                            content={comment} 
                            onDeleteComment={deleteComment} 
                        />
                    )
                }) }
            </div>
        </article>  
)
}