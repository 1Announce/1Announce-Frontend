import React from "react";
import { Link } from "react-router-dom";

import Button from '@mui/material/Button';

function Splash() {
    return (
        <body>
            <h1>Splash Screen</h1>
            <Button
                component={Link}
                to="/Home"
                variant="contained">
                    Sign In
            </Button>
        </body>
    );
}

export default Splash;