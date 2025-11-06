import './App.css'
import {useState, useEffect} from "react";

function App() {
    const [lisaAgentSupportNAme, setLisaAgentSupportNAme] = useState("");
    const [lisaAgentName, setLisaAgentNAme ] = useState("");


    useEffect(() => {
        const storedAgent = localStorage.getItem("storedAgent");
        console.log(storedAgent);
        setLisaAgentSupportNAme(storedAgent ?? "");
    }, []);

    useEffect(() => {
        localStorage.setItem("storedAgent", lisaAgentSupportNAme);
    }, [lisaAgentSupportNAme]);

const onSubmit = (agentDpt:string) => {
    // localStorage.setItem("lisaAgentSupportNAme", JSON.stringify(lisaAgentSupportNAme));
    agentDpt == "Residential" ? alert(`Hi ${lisaAgentName}, ${lisaAgentSupportNAme} here from the ppm team. How can I help today ?`):alert(`Hi ${lisaAgentName}, ${lisaAgentSupportNAme} here. How can I help ?`);
}
  return (
    <>
        <form>
            <label htmlFor="lisaAgentSupportNAme">Please enter your name: </label>
            <input type ='text' id = "lisaAgentSupportNAme"  value={lisaAgentSupportNAme} onChange = {e => {
                // JSON.stringify(localStorage.getItem(lisaAgentSupportNAme
                setLisaAgentSupportNAme(e.target.value)
            }}>
            </input>
            <br/>
            <label htmlFor="lisaAgentNAme">Please enter the agent's name: </label>
            <input type ='text' id = "lisaAgentNAme" onChange={e => {setLisaAgentNAme(e.target.value)}} >
            </input>
            <br/>
            <p>Is this a prepay agent or Residential agent: </p>

            <button type = "submit" onClick={()=> {
                onSubmit("Prepay");
            }}>Prepay</button>
            <br/>
            <br/>
            <button type = "submit"
                    onClick={()=> {
                        onSubmit("Residential");
                    }}
            >Residential</button>
        </form>
    </>
  )
}

export default App
