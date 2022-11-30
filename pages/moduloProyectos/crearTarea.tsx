import Head_ from '../head'
import Header from '../header'
import styles from '../../styles/proyectos.module.css'
import Script from 'next/script'


export default function crearTarea(){

    return (
        <>
        <Head_ nombre='Nueva tarea'></Head_>
        <Header></Header>
        <main className={styles.main}>
        <div className={styles.container}>

        <form>
            <div className = {styles.camposForm}>
                <h1 className={styles.tituloForm}>Nueva tarea</h1>
                <div>
                    <label id = "tareaID" >ID Tarea </label>
                </div>
                <input type="text"  id="tareaID" name="tareaid" placeholder="ID nueva tarea"  >
                </input>
                <div></div>
                <br />
                <div>
                    <label id = "descripcionID" >Descripcion </label>
                </div>
                <input type="text"  id="descripcionID" name="tareaid" placeholder="Una descripcion"></input>
                <div></div>
                <br />
                <div>
                    <label id = "estadoID" >Estado </label>
                </div>
                <select>
                    <option disabled selected> Estado</option>
                    <option value = "optionAbierto"> Abierto </option>
                    <option value = "optionEnAnalisis"> En análisis</option>
                    <option value = "optionDerivado">Derivado </option>
                    <option value = "optionResuelto">Resuelto </option>
                    <option value = "optionCerrado">Cerrado </option>
                </select>
                <div></div>
                <br />
                <div>
                    <label id = "duracionEstID" >Duración estimada </label>
                </div>
                <input type="text"  id="duracionID" name="duracionid" placeholder="Estimación"></input>
                <div></div>
                <br />
                <div>
                    <label id = "tiempoInvertidoID" >Tiempo invertido </label>
                </div>
                <input type="text"  id="tiempoInvertidoID" name="tiempoinvertidoid" placeholder="Invertido"></input>
                <div></div>
                <br />
                <div>
                    <label id = "fechaEstimadaFinID" >Fecha estimada de fin </label>
                </div>
                <input type = "date" id = "FechaEstimadaFin" name = "finestimaciondeProyecto"></input>
                <div></div>
                <br />
                <div>
                    <label id = "fechaRealFinID" >Fecha real de fin </label>
                </div>
                <input type = "date" id = "FechaRealFin" name = "finrealdeProyecto"></input>
                <div></div>
                <br />
                <div>
                    <label id = "recursosAsignadosID" >Recursos asignados </label>
                </div>
                <select id="optionDropDown" size={2} multiple> </select>
                <Script src = "../../dropdown.js"></Script>
                <div></div>

                <br />

                <div>
                    <label id = "tareasCondicionalID" >Tareas condicionales </label>
                </div>
                <select id="tareaOptionDropDown" size={2} multiple > </select>
                <Script src = "../../modulo_proyectos_dropdown_tareas.js"></Script>
                <div></div>

                

                <div className={styles.botonesView}>
                    <button type="reset">Cancelar</button>
                    <button type="submit">Guardar</button>
                </div>
                
            </div>
        
        </form>
        </div>
        </main>
        </>
    )
}