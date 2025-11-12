const GenerateMessage = async (agentDpt: string, lisaAgentName:string, lisaAgentSupportNAme:string) => {
    switch (agentDpt) {
        case "Residential":
            let message = `Hi ${lisaAgentName}, ${lisaAgentSupportNAme} here from the ppm team. How can I help ?`;
            message ? await navigator.clipboard.writeText(message): alert("nothing to copy");
            break
        case "Prepay":
            let message2 = `Hi ${lisaAgentName}, ${lisaAgentSupportNAme} here. How can I help ?`;
            message2 ? await navigator.clipboard.writeText(message2): alert("nothing to copy");
            break
        case "responded":
            let message3 = `Hi ${lisaAgentName}, ${lisaAgentSupportNAme} here. Having a look :)`;
            message3 ? await navigator.clipboard.writeText(message3): alert("nothing to copy");
    }
}

export default GenerateMessage;
