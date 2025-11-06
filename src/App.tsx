import './App.css'
import {useState, useEffect} from "react";
import TextInputComponent from "./components/TextInputComponent";

function App() {
    const [lisaAgentSupportNAme, setLisaAgentSupportNAme] = useState("");
    const [lisaAgentName, setLisaAgentNAme] = useState("");


    useEffect(() => {
        const storedAgent = localStorage.getItem("storedAgent");
        setLisaAgentSupportNAme(storedAgent ?? "");
    }, []);

    useEffect(() => {
        localStorage.setItem("storedAgent", lisaAgentSupportNAme);
    }, [lisaAgentSupportNAme]);

    const onSubmit = (agentDpt: string) => {
        agentDpt == "Residential" ? alert(`Hi ${lisaAgentName}, ${lisaAgentSupportNAme} here from the ppm team. How can I help ?`) : alert(`Hi ${lisaAgentName}, ${lisaAgentSupportNAme} here. How can I help ?`);
    }
    return (
        <div className="formContainer">
            <TextInputComponent htmlFor="agentInput" id="agentInput" label="Please enter your name:"
                                textInputValue={lisaAgentSupportNAme} onChange={e => {
                {
                    setLisaAgentSupportNAme(e.target.value)
                }
            }}/>
            <TextInputComponent htmlFor="lisaAgentInput" id="lisaAgentInput" label="Please enter the agent's name:"
                                onChange={e => {
                                    {
                                        setLisaAgentNAme(e.target.value)
                                    }
                                }}/>
            <p>Is this a prepay agent or Residential agent: </p>
            <button type="submit" onClick={() => {
                onSubmit("Prepay");
            }}>Prepay
            </button>
            <br/>
            <br/>
            <button type="submit"
                    onClick={() => {
                        onSubmit("Residential");
                    }}
            >Residential
            </button>
        </div>
    )
}

export default App
