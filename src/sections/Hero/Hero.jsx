import styles from './HeroStyles.module.css';
import heroImg from '../../assets/hero-img.png';
import sun from '../../assets/sun.svg';
import moon from '../../assets/moon.svg';
import twitterLight from '../../assets/twitter-light.svg';
import twitterDark from '../../assets/twitter-dark.svg';
import githubLight from '../../assets/github-light.svg';
import githubDark from '../../assets/github-dark.svg';
import linkedinLight from '../../assets/linkedin-light.svg';
import linkedinDark from '../../assets/linkedin-dark.svg';
import CV from '../../assets/cv.pdf';
import {useTheme} from '../../common/ThemeContext';

function Hero() {
  const { theme, toggleTheme } = useTheme();

  const themeIcon = theme === 'light' ? sun : moon;
  const twitterIcon = theme === 'light' ? twitterLight : twitterDark;
  const githubIcon = theme === 'light' ? githubLight : githubDark;
  const linkedinIcon = theme === 'light' ? linkedinLight : linkedinDark;

  return (
    // section is a section that contains one or many div module
    // section id is unique id for each module
    // section className is a format class that the section uses (for example, all yellow background)

    // div is a module, you can add text, img inside
    // div className is a format class that the div uses (for example, same size)

    // img: className, src, alt
    // h1-h6: head title big to small
    // p: paragraph
    // a href: hyperlink. Can add button inside
    // a href download: for click to download
    // a href = 'link' target = "_blank": click and start a new page with link

    <section id="hero" className={styles.container}>
      
        <div className={styles.colorModeContainer}>
            <img 
                className={styles.hero}
                src={heroImg} 
                alt="Profile picture" 
            />
            <img 
                className={styles.colorMode} 
                src={themeIcon} 
                alt="color mode icon" 
                onClick={toggleTheme}
            />
        </div>
        <div className={styles.info}>
          <h1>
            Tien Yi
            <br/>
            Lee
          </h1>
          <h2>
            Software Engineer
          </h2>
          <span>
            <a href="https://twitter.com/" target="_blank">
              <img src={twitterIcon} alt="Twitter icon"/>
            </a>
            <a href="https://github.com/" target="_blank">
              <img src={githubIcon} alt="Github icon"/>
            </a>
            <a href="https://linkedin.com/" target="_blank">
              <img src={linkedinIcon} alt="Linkedin icon"/>
            </a>
          </span>
          <p className={styles.description}>
            4th year UCI student
          </p>
          <a href={CV} download>
            <button className="hover">
              Resume
            </button>
          </a>
        </div>
    </section>
  );
}

export default Hero;