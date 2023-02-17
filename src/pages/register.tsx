import { Layout } from "@/components/Layout";
import styles from "../styles/login.module.scss";
import { InputField } from "@/components/ui/InputField";
import { PrimaryButton } from "@/components/ui/PrimaryButton";
import Image from "next/image";

export default function register() {
  return (
    <Layout>
      <div className={styles.loginContainer}>
        <Image
          src="https://www.acmilan.com/images/logo.png"
          alt="Milan logo"
          width={75}
          height={150}
        />
        <form className={styles.formContainer}>
          <InputField title="Email" type="email" placeholder="Email" />
          <InputField title="Login" type="text" placeholder="Login" />
          <InputField title="Password" type="password" placeholder="Password" />
          <PrimaryButton title="Create account" type="submit" />
        </form>
      </div>
    </Layout>
  );
}
