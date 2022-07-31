// CSS
import styles from "./About.module.css";

import { Link } from "react-router-dom";

const About = () => {
  return (
    <div className={styles.about}>
      <h2>
        Sobre o mini<span>BLOG</span>
      </h2>
      <p>
        Este é um projeto construído em React no front-end e Firebase do
        back-end.
      </p>
      <Link to="/posts/create" className="btn">
        Criar publicação
      </Link>
    </div>
  );
};

export default About;
