const GenerateMessage = (agentDpt: string, lisaAgentName:string, lisaAgentSupportNAme:string) => {
    switch (agentDpt) {
        case "Residential":
            alert(`Hi ${lisaAgentName}, ${lisaAgentSupportNAme} here from the ppm team. How can I help ?`);
            break;
        case "Prepay":
            alert( `Hi ${lisaAgentName}, ${lisaAgentSupportNAme} here. How can I help ?`);
            break;
    }
}

export default GenerateMessage;