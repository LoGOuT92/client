import { Layout } from "@/components/Layout";
import styles from "../styles/login.module.scss";
import { InputField } from "@/components/ui/InputField";
import { PrimaryButton } from "@/components/ui/PrimaryButton";
import Link from "next/link";
import Image from "next/image";
import img2 from "../styles/logoCircles.png";

export default function login() {
  return (
    <Layout>
      <div className={styles.loginContainer}>
        <Image
          src="https://www.acmilan.com/images/logo.png"
          alt=""
          width={75}
          height={150}
        />
        <form className={styles.formContainer}>
          <InputField title="Email" type="email" placeholder="Email" />
          <InputField title="Password" type="password" placeholder="Password" />
          <PrimaryButton title="Login" type="submit" />
        </form>
        <Link href="/register">
          <div className={styles.registerOption}>Not registered? Join us</div>
        </Link>
      </div>
    </Layout>
  );
}
