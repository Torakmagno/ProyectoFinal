import React from "react";
import Button from "react-bootstrap/Button";
import { useAuth0 } from "@auth0/auth0-react";

export const LogoutButton = () => {
    const { logout } = useAuth0();

    return (
        <span onClick={() => logout({ returnTo: window.location.origin })}>
            Log out
        </span>
    );
};