import { useState } from "react"
import "./MiOrg.css"

const MiOrg= (props) => {
    //Estado---hooks
    //useState---- es como utiliza el estado
    //const [nombreVariable, funcionQueActualiza] = useSetate(valorInicial)----- Esta es la forma en como se va a definir un estado
   console.log(props)
   //const [mostrar, actualizarMostar] =useState(true)

    //const manejarClick = () => {         /*se agregar nueva funcionalidad de estado*/
      //  console.log("mostar/Ocultar elemento", !mostrar)
        //actualizarMostar(!mostrar)
    //} 


    return <section className="orgSection">
        <h3 className="title"> Mi organizacion</h3>
        <img src = "/img/add.png" alt = "add" onClick = {props.cambiarMostrar}/>
    </section>
}

export default MiOrg