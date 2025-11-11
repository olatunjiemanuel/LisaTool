import './App.css'
import {useState, useEffect} from "react";
import TextInputComponent from "./components/TextInputComponent";
import NotificationComponent from "./components/NotificationComponent";


import GenerateMessage from "./logic/GenerateMessage";

function App() {
    const [lisaAgentSupportNAme, setLisaAgentSupportNAme] = useState("");
    const [lisaAgentName, setLisaAgentNAme] = useState("");
    const [notificationVisible, setNotificationVisible] = useState(false);


    useEffect(() => {
        const storedAgent = localStorage.getItem("storedAgent");
        setLisaAgentSupportNAme(storedAgent ?? "");
    }, []);

    useEffect(() => {
        localStorage.setItem("storedAgent", lisaAgentSupportNAme);
    }, [lisaAgentSupportNAme]);

    const handleButtonPress = async (agentDpt: string) => {
        await GenerateMessage(agentDpt, lisaAgentName, lisaAgentSupportNAme);
        setNotificationVisible(true);
        setTimeout(() => setNotificationVisible(false), 5000);
    }
    return (
        <>
            {notificationVisible && <NotificationComponent/>}
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
                <button type="submit" onClick={async () => {
                    await handleButtonPress("Prepay");
                }}>Prepay
                </button>
                <br/>
                <br/>
                <button type="submit"
                        onClick={async () => {
                            await handleButtonPress("Residential");
                        }}
                >Residential
                </button>
            </div>
        </>
    )
}

export default App
