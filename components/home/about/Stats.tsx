import styles from "./stats.module.scss";
import { AiFillCode, AiFillSmile } from "react-icons/ai";
import { Reveal } from "@/components/utils/Reveal";

export const Stats = () => {
  return (
    <div className={styles.stats}>
      <Reveal>
        <div className={styles.statColumn}>
          <h4>
            <AiFillCode size="2.4rem" color="var(--brand)" />
            <span>Skills</span>
          </h4>
          <div className={styles.statGrid}>
            <span className="chip">Java</span>
            <span className="chip">Sensor integration</span>
             <span className="chip">Actuator control</span>
             <span className="chip">Arduino & its types</span>
             <span className="chip">ESP8266</span>
              <span className="chip">ESP32</span>
              <span className="chip">Raspberry Pi</span>
              <span className="chip">hardware design principles</span>
          </div>
        </div>
      </Reveal>
      <Reveal>
        <div className={styles.statColumn}>
          <h4>
            <AiFillSmile size="2.4rem" color="var(--brand)" />
            <span>Learning</span>
          </h4>
          <div className={styles.statGrid}>
            <span className="chip">PCB designing</span>
            <span className="chip">3D Printing</span>
            <span className="chip">R&D</span>
             <span className="chip">Robotics and automation</span>
            <span className="chip">circuit design</span>
          </div>
        </div>
      </Reveal>
    </div>
  );
};
