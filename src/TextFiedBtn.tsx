import React, { useState } from 'react';
import { Button, Input, Stack } from '@chakra-ui/react';

export const TextFieldBtn = () => {
    const [text, setText] = useState('');

    const handleSubmit = () => {
        // Handle submit logic here
        console.log('Submitted text:', text);
    };

    return (
        <Stack spacing={4}>
            <Input
                placeholder="Enter text"
                value={text}
                onChange={(e) => setText(e.target.value)}
            />
            <Button colorScheme="teal" onClick={handleSubmit}>
                Submit
            </Button>
        </Stack>
    );
};

