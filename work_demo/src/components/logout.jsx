import { GoogleLogout } from "react-google-login";

const clientId = "342662024476-dd9s96aij7rj7f46sbd86jq5c2rpldag.apps.googleusercontent.com";

function Logout() {
    const onSuccess = () => {
        alert('Logout made successfully');
    };

    return (
        <div>
            <GoogleLogout
                clientId={clientId}
                buttonText='Logout'
                onLogoutSuccess={onSuccess}
            />
        </div>
    );
}

export default Logout;