import { useEffect, useState } from 'react'
import style from "./app.module.css"
import SwitchTheme from './SwitchTheme'
import Cv from './assets/Cv.jsx'
import Github from './assets/Github'
import Mail from './assets/Mail'
import Linkedin from './assets/Linkedin'
import Mongodb from './assets/tech/Mongodb'
import Postgresql from './assets/tech/Postgresql'
import zustandpng from "./assets/tech/zustand.png"
import Redux from './assets/tech/Redux'
import Nextjs from './assets/tech/Nextjs'
import Ts from './assets/tech/Ts'
import Js from './assets/tech/Js'
import Express from './assets/tech/Express'
import SvgReact from './assets/tech/SvgReact'
import freelance from "./assets/experiencia/freelance.png"
import coderhouse from "./assets/experiencia/coderhouse.png"
import coally from "./assets/experiencia/coally.png"
import tekal from "./assets/experiencia/tekal.jpg"
import BorderCollie from "./assets/BorderCollie.jpg"

function App() {
  const [hora, setHora] = useState(new Date().toLocaleTimeString())
  const [theme, setTheme] = useState("light")
  useEffect(() => {
    setTimeout(() => {
      setHora(new Date().toLocaleTimeString())
    }, (60000 - (`${hora.slice(-2)}` + "000")))
  }, [hora])

  return (
    <main className={`${style.main} `}>
      <section>
        <div className={`${style.configuracion} ${style.carta1} ${theme !== "dark" ? style.interiordark : style.interiorlight}`}>
          <div className={`${style.carta1} ${theme !== "dark" ? style.dark : style.light}`}>

            <h1 className={theme === "dark" ? style.darkh1 : style.lighth1}>{new Date().toLocaleString().split(",")[0]}</h1>
            <h1>{hora.slice(0, -3)}</h1>
            <SwitchTheme setTheme={setTheme} theme={theme} />
          </div>
        </div>
        <div className={`${style.perfil} ${style.carta2} ${theme !== "dark" ? style.interiordark : style.interiorlight}`}>
          <div className={`${style.carta2} ${theme !== "dark" ? style.dark : style.light}`}>
            <h1 className={theme === "dark" ? style.darkh1 : style.lighth1}>Alexis Coronel</h1>
            <h3 style={{ margin: '0', padding: '0' }}>Front End / Full stack (PERN & MERN)</h3>
            <div className={style.contenedorButtonsCarta2} style={{height:'max-content'}}>
              <a href="https://docs.google.com/document/d/1aC1p0H6l2iwmhwatC0da2zk1F--5CEeeWMsaZrkKk-I/edit?usp=sharing" target="_blank" className={`${style.buttonCarta2} ${theme === "dark" ? style.dark : style.light}`} style={{height:'max-content'}}><Cv /> Curriculum</a>
              <a href="https://github.com/SacZ16" target="_blank" className={`${style.buttonCarta2} ${theme === "dark" ? style.dark : style.light}`} style={{height:'max-content'}}><Github /> Github</a>
              <a href="https://www.linkedin.com/in/alexis-coronel/" target="_blank" className={`${style.buttonCarta2} ${theme === "dark" ? style.dark : style.light}`} style={{height:'max-content'}}><Linkedin /> Linkedin</a>
            </div>
            <div className={`${style.buttonCarta2} ${theme === "dark" ? style.dark : style.light}`} style={{height:'max-content'}}><Mail /> alexiscoronel545@gmail.com</div>
          </div>
        </div>
        <div className={`${style.calendario}  ${style.cartacalendario} ${theme !== "dark" ? style.interiordark : style.interiorlight}`}>
          <div className={`${style.carta5} ${theme !== "dark" ? style.dark : style.light}`}>
          <h1  className={theme === "dark" ? style.darkh1 : style.lighth1} style={{ textAlign: 'center' }}>Soy un Border Collie</h1>
          <img src={BorderCollie} alt="BorderCollie" width={"100%"} />
          <div style={{paddingRight:'10px',paddingLeft:'10px'}}>
            <div>✅ Inteligente</div>
            <li>Aprende comandos y rutinas con muy pocas repeticiones.</li>
            <li>Capaz de resolver problemas por sí solo.</li>
            <li>Le encanta tener tareas o desafíos.</li>
            <div>🏃 Activo y enérgico</div>
            <li>Necesita mucho ejercicio físico y mental todos los días.</li>
            <li>No es una raza para dejar sola muchas horas o tener en un espacio chico sin estimulación.</li>
            <div>🐾 Trabajador</div>
           <li>Se crió para pastoreo, así que tiene un instinto fuerte de "ordenar" o controlar el entorno (a veces incluso a personas o niños).</li> 
            <li>Ama tener un propósito.</li>
          </div>
        </div>
        </div>
        <div className={`${style.sobreMi} ${style.carta5} ${theme !== "dark" ? style.interiordark : style.interiorlight}`}>
          <div className={`${style.carta5} ${theme !== "dark" ? style.dark : style.light}`}>
            <h1 className={theme === "dark" ? style.darkh1 : style.lighth1} style={{ textAlign: 'center' }}>Sobre mi</h1>
            <span style={{ textAlign: 'start', padding: '10px' }}>¡Hola! Soy Alexis Coronel, desarrollador Front-End con más de 3 años de experiencia profesional, también tengo
experiencia como Full-Stack. Comencé a programar a los 13 años, cuando desarrollé mi primera página web para un proyecto
escolar, y desde entonces descubrí mi pasión por la programación.
Formado en Frontend y Backend lo cual me permitió desarrollar competencias como pensamiento creativo, comunicación,
adaptabilidad, dedicación y trabajo en equipo.
Me describiría como una persona entusiasta, empática y emprendedora.</span>
          </div>
        </div>
        <div className={`${style.tecnologias} ${style.carta6} ${theme !== "dark" ? style.interiordark : style.interiorlight}`}>
          <div className={`${style.carta6} ${theme !== "dark" ? style.dark : style.light}`}>
            <h1 className={theme === "dark" ? style.darkh1 : style.lighth1}>Tecnologias</h1>
            <div className={style.contenedorTecnologias}>
              <div className={theme === "dark" ? style.darksvgdivespecial : style.lightsvgdivespecial}><SvgReact /> ReactJs</div>
              <div className={theme === "dark" ? style.darksvgdiv : style.lightsvgdiv}><Express /> Express</div>
              <div className={theme === "dark" ? style.darksvgdiv : style.lightsvgdiv}><Ts />TypeScript</div>
              <div className={theme === "dark" ? style.darksvgdiv : style.lightsvgdiv}><Js /> JavaScript</div>
              <div className={theme === "dark" ? style.darksvgdiv : style.lightsvgdiv}><Nextjs /> NextJs</div>
              <div className={theme === "dark" ? style.darksvgdiv : style.lightsvgdiv}><Mongodb /> MongoDB</div>
              <div className={theme === "dark" ? style.darksvgdiv : style.lightsvgdiv}><img width={41} height={31} src={zustandpng} alt="algo" />Zustand</div>
              <div className={theme === "dark" ? style.darksvgdiv : style.lightsvgdiv}><Postgresql /> postgreSQL</div>
              <div className={theme === "dark" ? style.darksvgdiv : style.lightsvgdiv}><Redux /> Redux</div>
            </div>
          </div>
        </div>
        <div className={`${style.habilidades} ${style.carta7} ${theme !== "dark" ? style.interiordark : style.interiorlight}`}>
          <div className={`${style.carta7} ${theme !== "dark" ? style.dark : style.light}`}>
            <h1 className={theme === "dark" ? style.darkh1 : style.lighth1}>Habilidades<br/> Blandas</h1>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '5px',paddingRight:'10px',paddingLeft:'10px' }}>
              <div>Pensamiento critico</div>
              <div>Toma de decisiones</div>
              <div>Atencion al detalle</div>
              <div>Trabajo en equipo</div>
              <div>Autonomia</div>
            </div>
          </div>
        </div>
        <div className={`${style.exp} ${theme !== "dark" ? style.interiordark : style.interiorlight}`}>
          <h1 className={`${style.carta8} ${theme !== "dark" ? style.dark : style.light}`}>⬇️Experiencia de trabajo ⬇️</h1>
        </div>
        <div className={`${style.historial} ${style.carta8} ${theme !== "dark" ? style.interiordark : style.interiorlight}`}>
          <div className={`${style.carta8} ${theme !== "dark" ? style.dark : style.light}`}>
            <div style={{ padding: '10px' }}>

              <hr width="100%" /><div className={style.contenedorTrabajo}>
                <img width={200} height={200} alt="coderhouse" src={coderhouse} />
                <div className={style.contenedorTrabajoinfo}>
                  <h3>CODER HOUSE</h3>
                  <h3>12/2021 - Actualidad.</h3>
                  <h4>Rol/Suplente del profesor: Tutor de FrontEnd, Backend y JavaScript</h4>
                  <span>Actividad: Mi trabajo es corregir y mejorar el código.Ofrecer asistencia en caso de problemas.</span>
                  <span>Ayude a más de 1.000 personas con problemas en vivo.</span>
                  <span>Brindar acompañamiento técnico y emocional a lo largo del proceso de aprendizaje en programación.</span>
                  <span>Más de 150 Estudiantes acompañados exclusivamente</span>
                  <span>Mi objetivo es asegurar que el código final sea eficiente y efectivo para su uso previsto.</span>
                  <span>Más de 2.700 Trabajos corregidos en tiempo y forma.</span>
                </div>
              </div>
              <hr width="100%" />
              <div className={style.contenedorTrabajo}>
                <img width={200} height={200} alt="freelance" src={freelance} />
                <div className={style.contenedorTrabajoinfo}>
                  <h3>FREELANCER</h3>
                  <h3>12/2022 - Actualidad.</h3>
                  <h4>Rol: Full Stack</h4>
                  <span>Diseño y Desarrollo de Aplicaciones Web Personalizadas</span>
                  <span>Optimización de Rendimiento y Experiencia de Usuario</span>
                  <span>Integración de Funcionalidades Avanzadas</span>
                  <span>Gestión Efectiva del Ciclo de Desarrollo</span>
                </div>
              </div>
              <hr width="100%" />
              <div className={style.contenedorTrabajo}>
                <img width={200} height={200} backgroundColor="white" alt="coally" src={coally} />
                <div className={style.contenedorTrabajoinfo}>
                  <h3>COALLY</h3>
                  <h3>07/2021 - 11/2022</h3>
                  <h4>Rol: 07/21 Jr -Full Stack _05/22_ Ssr - Full Stack 11/22
                  </h4>
                  <span>Integración de Funcionalidades Avanzadas</span>
                  <span>Actividad: </span>
                  <li>Desarrollar componentes y funcionalidades de la interfaz de usuario.</li>
                  <li>Implementar pruebas unitarias y de integración.</li>
                  <span>Logros:</span>
                  <li>Participé en el desarrollo de una aplicación web.</li>
                  <li>Implemté la lógica de negocio para el backend de una aplicación web de gestión de clientes utilizando React, Node.js, y MongoDB.</li>
                  <li>Lideré el desarrollo de una nueva funcionalidad para la aplicación web</li>
                </div>
              </div>
              <hr width="100%" />
              <div className={style.contenedorTrabajo}>
                <img width={200} height={200} alt="tekal" src={tekal} />
                <div className={style.contenedorTrabajoinfo}>
                  <h3>TEKAL/MEMORABLE</h3>
                  <h3>06/2021 - 07/2021.</h3>
                  <h4>Rol: Full Stack</h4>
                  <span>Actividad: Colaboré en el desarrollo de un juego web que predice el impacto cognitivo de ciertos videos e imágenes, midiendo la memorabilidad de los mismos, tanto a corto como a largo plazo. con supervisión</span>
                </div>
              </div>
              <hr width="100%" />
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

export default App
