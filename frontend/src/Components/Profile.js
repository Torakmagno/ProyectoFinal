import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Dropdown from "react-bootstrap/Dropdown";
import { LogoutButton } from "./Logout";
import { useAuth0 } from "@auth0/auth0-react";

export const Profile = () => {
    const { user, isAuthenticated, isLoading } = useAuth0();

    if (isLoading) {
        return <div>Loading...</div>;
    }

    return (
        isAuthenticated && (
            <Navbar.Collapse className="justify-content-end me-2">
                <Dropdown>
                    <Dropdown.Toggle variant="primary" id="dropdown-basic">
                        {user.name}
                    </Dropdown.Toggle>
                    <Dropdown.Menu>
                        {/*<Dropdown.Item href="#/action-1">Action</Dropdown.Item>*/}
                        <Dropdown.Item>
                            <LogoutButton />
                        </Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown>
            </Navbar.Collapse>
        )
    );
};
