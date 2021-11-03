import React from "react";

import Button from '@mui/material/Button';

function Title() {
    return <h1>1Announce</h1>;
}

function Home() {
    return (
        <body>
            <h1>Home Screen</h1>
            <Title />
            <Button
                variant='contained'
                color='primary'>
                    Create Announcement
            </Button>

            <h2>Upcoming Announcements</h2>

            <h2>Past Announcements</h2>
        </body>
    );
}

export default Home;