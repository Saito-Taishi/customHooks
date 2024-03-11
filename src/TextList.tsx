import { Box, Text, VStack ,Container} from "@chakra-ui/react";
import React from "react";
import { MessageList } from "./hooks";

type Props = {
    textList :MessageList[]
}

export const TextList= (textList:Props) => {

    return (
        <VStack spacing={4} align="start">
        {textList.textList.map((text, index) => (
            <Box key={index} p={4} borderWidth={1} borderRadius="md">
                <Text>テキストの内容は{text.text}</Text>
                <Text>テキストのインデックスは:{text.idx}</Text>
                <Container height={10} />
            </Box>
        ))}
        </VStack>
    );
};

