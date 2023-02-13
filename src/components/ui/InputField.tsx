import styles from "../../styles/inputField.module.scss";

interface Props {
  title: string;
  type: string;
  placeholder?: string;
  error?: string;
}

export function InputField({ placeholder, title, type, error }: Props) {
  return (
    <div className={styles.inputContainer}>
      <div className={styles.input}>
        <label htmlFor={title}>{title}: </label>
        <input type={type} id={title} placeholder={placeholder}></input>
      </div>
      {error && <label className={styles.error}>{error}</label>}
    </div>
  );
}
