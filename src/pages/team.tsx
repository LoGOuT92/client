import { Layout } from "@/components/Layout";
import { NEXT_PUBLIC_API } from "../../path";
import styles from "../styles/team.module.scss";
import { Player } from "../components/Player/Player";
import { Iplayer } from "@/typings";

export default function team({ players }: any) {
  console.log(players);
  const type = ["Goalkeeper", "Defender", "Midfilder", "Forward"];

  return (
    <Layout>
      <div className={styles.TeamContainer}>
        {type.map((type: string, index) => (
          <div key={index} className={`${styles.playerRow}`}>
            <p>{type}s</p>
            <div className={styles.playerT}>
              {players.map((player: Iplayer) =>
                type == player.Positions ? (
                  <div key={player._id}>
                    <Player player={player} />
                  </div>
                ) : null
              )}
            </div>
          </div>
        ))}
      </div>
    </Layout>
  );
}

export async function getServerSideProps() {
  const res = await fetch(`${NEXT_PUBLIC_API}/api/players`);
  const { players } = await res.json();

  return { props: { players } };
}
