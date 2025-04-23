import styles from './ProjectsStyles.module.css'
import viberr from '../../assets/viberr.png'
import ProjectCard from '../../common/ProjectCard';
import freshBurger from '../../assets/fresh-burger.png';
import hipsster from '../../assets/hipsster.png';
import fitLift from '../../assets/fitlift.png';

function Projects() {
  return (
    <section id='projects' className={styles.container}>
      <h1 className='sectionTitle'>Projects</h1>
      <div className={styles.projectsContainer}> 
        <ProjectCard 
          src={viberr} 
          link='https://github.com' 
          h3="Viberr"
          p="Streaming App"
        />
        <ProjectCard 
          src={freshBurger} 
          link='https://github.com' 
          h3="freshBurger"
          p="Streaming App2"
        />
        <ProjectCard 
          src={hipsster} 
          link='https://github.com' 
          h3="hipsttterrrrrrr"
          p="Streaming App3"
        />
        <ProjectCard 
          src={fitLift} 
          link='https://github.com' 
          h3="fitLiftfitLift"
          p="Streaming App4"
        />
      </div>
    </section>
    
  );
};

export default Projects;