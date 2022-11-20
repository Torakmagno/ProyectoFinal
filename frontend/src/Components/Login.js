import React from "react";
import Button from "react-bootstrap/Button";
import { useAuth0 } from "@auth0/auth0-react";

export const LoginButton = () => {
    const { loginWithRedirect } = useAuth0();

    return (
        <Button
            variant="primary"
            size="sm"
            className="me-3"
            onClick={() => loginWithRedirect()}
        >
            Log In
        </Button>
    );
};
