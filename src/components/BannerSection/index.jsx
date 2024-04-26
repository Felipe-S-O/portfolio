import { username } from "../../data/user";
import profilImage from "../../assets/fotoPerfil.jpg";
import styles from "./style.module.css";
import Typewriter from "typewriter-effect";
import { useTranslation } from "react-i18next";
import curriculo from "../../assets/Felipe silva currículo dev.pdf";

export const BannerSection = () => {
  const { t } = useTranslation();

  const handleDownloadCv = () => {
    const link = document.createElement("a");
    link.href = curriculo;
    link.download = "Currículo-Felipe-S-O.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section className="section-padding">
      <div className="container">
        <div className={styles.bannerInfo}>
          <div className={styles.bannerContent}>
            <span className="username">{username}</span>
            <h1 className="title lg">{t("BemVindo")}</h1>
            <p className="paragraph ">
              <Typewriter
                options={{
                  strings: [t("Apresentacao")],
                  autoStart: true,
                  loop: true,
                  delay: 2,
                }}
              />
            </p>
            <div className={styles.btn}>
              <button className="btn" onClick={handleDownloadCv}>
                {t("Download")}
              </button>
              <a href="#Contact">
                <button className="btn_outline">{t("Contato")}</button>
              </a>
            </div>
          </div>
          <img src={profilImage} alt="ProfilImage"></img>
        </div>
      </div>
    </section>
  );
};
