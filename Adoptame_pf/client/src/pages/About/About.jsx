import React from 'react'
import style from './About.module.css'
import NavBar from '../../common/NavBar/NavBar'

function About() {
  return (
    <div>
      <NavBar />
    <div className={style.color}>
        <div className={style.recuadro}>
            <h1>Nuestra misión</h1>
            <p className={style.aboutUs}>"Adoptame" es una organización sin fines de lucro liderada por un grupo de 
              voluntarios que buscan superar la situación de sobrepoblación, abandono, crueldad e
              indiferencia que viven millones de animales en nuestro país. (Buenos Aires/Argentina).
              Propiciamos una actitud de respeto hacia todas las especies, entendiendo que no son 
              “cosas” para ser utilizadas por el ser humano. Rechazamos todo tipo de explotación 
              animal, incluyendo su uso como vestimenta, comida, entretenimiento y experimentació
            </p>
            <img className='imgAbout' src="/img/img about us 1.jpg" alt="cat and dog" width="1024" height="450"/>
              <h2>Nuestros objetivos:</h2>
            <ul>
              <li>Luchar contra el abandono, el maltrato y el sufrimiento animal.</li>
              <li>Educar sobre el respeto por la vida de los animales a través de charlas y talleres educativos en lugares públicos y privados.</li>
              <li>Organizar campañas de castración gratuitas y/o a bajo costo en las zonas vulnerables donde el Estado está ausente y los perros y gatos se reproducen sin control.</li>
              <li>Concientizar sobre la importancia de las castraciones masivas, gratuitas, sistemáticas y extensivas como único método ético de control de la superpoblación animal y exigir al Estado que cumpla con la normativa vigente.</li>
              <li>Asistir a animales en situación de riesgo de muerte, brindarles la atención médica necesaria para recuperarlos y encontrar familias responsables para su adopción.</li>
              <li>Asesorar a la población respecto a cómo actuar en casos de maltrato animal.</li>
            </ul>
        </div>    

    </div>
    </div>
  )
}


export default About
