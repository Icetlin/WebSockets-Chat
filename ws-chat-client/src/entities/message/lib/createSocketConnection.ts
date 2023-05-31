let connection: WebSocket | undefined = undefined;

export const createSocketConnection = () => {
    if (connection === undefined) {
        connection = new WebSocket('ws://localhost:3000');
    }

    return connection;
};
