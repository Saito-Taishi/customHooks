import { useState } from 'react';

export type MessageList = {
    idx: number;
    text: string;
}

export const useAddTextList = () => {
    const [textList, setTextList] = useState<MessageList[]>([
        { idx: 0, text: '一つ目のメッセージです。' },
        { idx: 1, text: '二つ目のメッセージです。' },
        { idx: 2, text: '三つ目のメッセージです。' },
    ]
    );
    const addText = (text: string) => {
        setTextList((prev) => [
            ...prev,
            { idx: prev.length, text },
        ]);
    }
    return {
        textList,
        addText,
    };
}