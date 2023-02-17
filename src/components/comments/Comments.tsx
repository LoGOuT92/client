import { SingleComment } from "./SingleComment/SingleComment";
import styles from "./comments.module.scss";

export function Comments() {
  return (
    <div className={styles.commentsContainer}>
      <div className={styles.mainComment}>
        <SingleComment />
        <div className={styles.replyComment}>
          <SingleComment isReplyComment />
          <SingleComment isReplyComment />
          <SingleComment isReplyComment />
        </div>
      </div>

      <div className={styles.mainComment}>
        <SingleComment />
      </div>
      <div className={styles.mainComment}>
        <SingleComment />
      </div>

      <div className={styles.mainComment}>
        <SingleComment />
        <div className={styles.replyComment}>
          <SingleComment isReplyComment />
          <SingleComment isReplyComment />
          <SingleComment isReplyComment />
        </div>
      </div>
      <div className={styles.mainComment}>
        <SingleComment />
      </div>
      <div className={styles.mainComment}>
        <SingleComment />
      </div>
    </div>
  );
}
