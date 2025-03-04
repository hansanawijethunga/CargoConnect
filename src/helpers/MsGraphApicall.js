
import { msalInstance } from "../main"; 
import { graphConfig, loginRequest } from "./authConfig";

export async function callMsGraph(accessToken) {
    console.log("cascda");
    if (!accessToken) {
        const account = msalInstance.getActiveAccount();
        if (!account) {
            throw Error("No active account! Verify a user has been signed in and setActiveAccount has been called.");
        }
    
        const response = await msalInstance.acquireTokenSilent({
            ...loginRequest,
            account: account
        });
        accessToken = response.accessToken;
    }

    const headers = new Headers();
    const bearer = `Bearer ${accessToken}`;

    headers.append("Authorization", bearer);
    console.log("cascda123");
    const options = {
        method: "GET",
        headers: headers
    };

    const data=  fetch(graphConfig.graphMeEndpoint, options)
        .then(response => response.json())
        .catch(error => console.error(error));
        console.log("cascda123589");
    console.log(data)
    return data;    
}