export type RootStackParamList = {
    Root: undefined,
    Contacts: undefined,
    ChatRoom: undefined,
}
export type Contacts = {
    id: undefined,
    users: undefined,
    lastMessage: undefined,
}


export type User = {
    id: string;
    name: string;
    imageUri: string;
    status: string;

}

export type Message = {
    id: string,
    content: string,
    createdAt: string,

}

export type ChatRoom = {
    id: string,
    users: User[],
    lastMessage: Message,

};