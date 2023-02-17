import { Iplayer } from "@/typings";
import styles from "./player.module.scss";

export function Player({ player }: { player: Iplayer }) {
  return (
    <div className={`${styles.playerContainer} ${styles[player.Positions]}`}>
      <label>{player.Name}</label>
      <label>
        <strong>{player.SurName}</strong>
      </label>
      <label>{player.Number}</label>
    </div>
  );
}
