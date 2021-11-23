import React, { useState } from "react";
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import { styled } from '@mui/material/styles';

const MessageComponent = () => {
    const Input = styled('input')({
        display: 'none',
    });

    return (
        <div
            >
            <TextField
                id="outlined-multiline-flexible"
                label="Message"
                placeholder="Lorem Ipsum..."
                multiline
                size="small"
            />
            <Stack direction="row" alignItems="center" spacing={2}>
                <label htmlFor="contained-button-file">
                    <Input accept="image/*" id="contained-button-file" multiple type="file" />
                    <Button variant="contained" component="span" sx={{ m: 1 }}>
                        Attachment
                    </Button>
                </label>
            </Stack>
        </div>


    );
}

const DraftAnnouncementComponent = () => {


    return (
        <>
            <MessageComponent />
        </>
    );
}

export default DraftAnnouncementComponent;
