import styles from "./wrapper.module.scss";
interface IWrapperProps {
  children?: React.ReactNode;
}

export function Wrapper({ children }: IWrapperProps) {
  return <div className={styles.wrapper}>{children}</div>;
}
