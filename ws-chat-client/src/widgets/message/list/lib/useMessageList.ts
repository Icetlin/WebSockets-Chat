import {createSocketConnection} from "@/entities/message/lib";
import {Message} from '@/entities/message/model';
import {ref, unref} from "vue";

export const useMessageList = () => {
    const messages = ref<Message[]>([]);
    const connection = createSocketConnection();

    connection.onmessage = (message) => {
        try {
            const messageRaw = JSON.parse(message.data);
                console.log(messageRaw);

            if (messageRaw.action === 'delete') {
                removeMessageById(messageRaw.msgId);
            } else {
                addMessage({
                    id: messageRaw.msgId,
                    username: messageRaw.userName,
                    value: messageRaw.msgValue,
                    createdAt: messageRaw.msgDate,
                });
            }
        } catch (e) {
            console.error(e);
        }
    };

    const addMessage = (message: Message) => {
        messages.value.push(message);
    }

    const removeMessageById = (id: Message['id']) => {
        const messageToDeleteIndex = unref(messages).findIndex((msg) => msg.id === id);

        messages.value.splice(messageToDeleteIndex, 1);
    };

    return {
        messages,
    };
};
