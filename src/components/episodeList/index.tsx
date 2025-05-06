import { EpisodeType } from "../../services/courseService";
import styles from "./styles.module.scss";

interface props {
  episode: EpisodeType;
}

const EpisodeList = ({ episode }: props) => {

    const handleSecondsToMin = (totalSeconds: number) => {
        const minutes = Math.floor(totalSeconds / 60)

        const seconds = totalSeconds % 60

        function toString(num : number){
            return num.toString().padStart(2, "0")
        }

        const result = `${toString(minutes)}:${toString(seconds)}`

        return result
    }
  return (
    <>
      <div className={styles.episodeCard}>
        <div className={styles.episodeOrderTime}>
          <p className={styles.episodeOrder}>Episódios nº {episode.order}</p>
          <p className={styles.episodeTime}>{handleSecondsToMin(episode.secondsLong)}</p>
        </div>
        <div className={styles.episodeTitleDescription}>
          <p className={styles.episodeTitle}> {episode.name}</p>
          <p className={styles.episodeDescription}>
            {episode.synopsis}
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestias cumque et, id hic quae magni repudiandae
            officia omnis pariatur placeat, distinctio ipsa. Minus velit aperiam, maiores sed facilis pariatur eligendi
            quod placeat quia voluptatibus error, explicabo numquam consequatur ipsum, laudantium molestiae repellat
            molestias cupiditate deserunt? Quaerat eos hic dignissimos ducimus. <br />
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sit, hic.
          </p>
        </div>
      </div>
    </>
  );
};

export default EpisodeList;
