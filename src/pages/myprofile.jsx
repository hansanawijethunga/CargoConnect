import { InteractionRequiredAuthError, InteractionStatus, InteractionType } from "@azure/msal-browser";
import { MsalAuthenticationTemplate, useMsal } from "@azure/msal-react";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { callMsGraph } from "../helpers/MsGraphAPIcall";
import { loginRequest } from "../helpers/authConfig";
import { ErrorComponent } from "../Components/ErrorComponent";
import { Loading } from "../Components/Loading";

const ProfileContent = () => {
  const { instance, inProgress } = useMsal();
  const [graphData, setGraphData] = useState(null);

  useEffect(() => {
    console.log("Working");
    if (!graphData && inProgress === InteractionStatus.None) {
      callMsGraph()
        .then((response) => setGraphData(response))
        .catch((e) => {
          if (e instanceof InteractionRequiredAuthError) {
            instance.acquireTokenRedirect({
              ...loginRequest,
              account: instance.getActiveAccount(),
            });
          }
        });
    }
  }, [inProgress, graphData, instance]);

  console.log("data");
  console.log(graphData);
  return (
    <p>{graphData ?  graphData.displayName : null}</p>
  );
};

function Myprofile() {
  const authRequest = {
    ...loginRequest,
  };

  return (
    <MsalAuthenticationTemplate
      interactionType={InteractionType.Popup}
      authenticationRequest={authRequest}
      errorComponent={ErrorComponent}
      loadingComponent={Loading}
    >
      <ProfileContent />
    </MsalAuthenticationTemplate>
  );
}

export default Myprofile;
