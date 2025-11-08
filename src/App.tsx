import './App.css'
import {useState, useEffect} from "react";
import TextInputComponent from "./components/TextInputComponent";


import GenerateMessage from "./logic/GenerateMessage";

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

    const handleButtonPress = (agentDpt: string) => {
        GenerateMessage(agentDpt,lisaAgentName,lisaAgentSupportNAme);
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
            <button type="submit" onClick={() => {
                handleButtonPress("Prepay");
            }}>Prepay
            </button>
            <br/>
            <br/>
            <button type="submit"
                    onClick={() => {
                        handleButtonPress("Residential");
                    }}
            >Residential
            </button>
        </div>
    )
}

export default App
