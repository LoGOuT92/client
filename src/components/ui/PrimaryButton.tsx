import styles from "../../styles/primaryButton.module.scss";

interface Props {
  title: string;
  color?: string | "white";
  width?: number;
  height?: number;
  type?: "button" | "submit" | "reset" | undefined;
}

export function PrimaryButton({ title, color, width, height, type }: Props) {
  return (
    <button type={type} className={styles.primaryButton}>
      {title}
    </button>
  );
}
