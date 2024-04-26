import linkedinIcon from "../../assets/linkedin-icons.png";
import githubIcon from "../../assets/github-icons.png";
import emailIcon from "../../assets/email-icons.png";
import styles from "./style.module.css";
import { useTranslation } from "react-i18next";

export const Footer = () => {
  const { t } = useTranslation();
  return (
    <footer className={styles.footer} id="Contact">
      <div className="container">
        <div className={styles.footerContent}>
          <div className={styles.flexbox}>
            <h2 className="title md">{t("Contato")}</h2>
            <div className={styles.imageContent}>
              {/* <div>
                <a href="https://wa.me/41984969334">
                  <img src={whatsappIcon} alt="whatsappIcon" />
                </a>
              </div> */}
              <div>
                <a href="https://www.linkedin.com/in/felipe-silva-de-oliveira-0006b11ab/" target="_blank">
                  <img src={linkedinIcon} alt="linkedinIcon" />
                </a>
                <span className="paragraph"></span>
              </div>
              <div>
                <a href="https://github.com/Felipe-S-O/" target="_blank">
                  <img src={githubIcon} alt="githubIcon" />
                </a>
              </div>
            </div>
          </div>
          <div> 
          <div className={styles.email}>           
            <a href="mailto:felipe.silva414897@gmail.com">
              <img src={emailIcon} alt="githubIcon" />
            </a>      
            <p className="paragraph">felipe.silva414897@gmail.com</p>      
          </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
