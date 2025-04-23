import styles from './SkillsStyles.module.css';
import checkMarkIcon from '../../assets/checkmark-dark.svg';
import SkillList from '../../common/SkillList'

function Skills() {
  return (
    <section id='skills' className={styles.container}>
        <h1 className='sectionTitle'>Skills</h1>
        <div className={styles.skillList}>
            <SkillList src={checkMarkIcon} skill="HTML" />
            <SkillList src={checkMarkIcon} skill="CSS" />
            <SkillList src={checkMarkIcon} skill="JavaScript" />
            <SkillList src={checkMarkIcon} skill="Python" />
            <SkillList src={checkMarkIcon} skill="Node" />
        </div>
        <hr /> {/* separation line */}
        <div className={styles.skillList}>
            <SkillList src={checkMarkIcon} skill="React" />
            <SkillList src={checkMarkIcon} skill="Anglar" />
            <SkillList src={checkMarkIcon} skill="Vue" />
            <SkillList src={checkMarkIcon} skill="Tailwind CSS" />
        </div>
        <hr /> {/* separation line */}
        <div className={styles.skillList}>
            <SkillList src={checkMarkIcon} skill="Redux" />
            <SkillList src={checkMarkIcon} skill="Webpack" />
            <SkillList src={checkMarkIcon} skill="Git" />
            <SkillList src={checkMarkIcon} skill="Jest" />
            <SkillList src={checkMarkIcon} skill="Bootstrap" />
        </div>
    </section>
  );
}

export default Skills;