declare interface IEnvironment {
    port: number;
    ip: string;
    domain: string;
    key: Buffer;
    cert: Buffer;
    [key: string]: any;
}

declare interface IBot {
    getName(): string;
    call(request: IUpdate): void;
}

declare interface IBotModuleNew {
    new (): any;
}

declare interface IBotModule {
    getName(): string;
}

declare interface IUpdate {
    update_id: number;
    message: IMessage;
    inline_query: {};
    chosen_inline_result: {};
}
declare interface IMessage {
    message_id: number,
    from: IUser,
    date: number,
    chat: IChat,
    forward_from: IUser,
    forward_date: number,
    reply_to_message: IMessage,
    text: string,
    audio?: IAudio,
    document?: IDocument,
    photo?: Array<IPhotoSize>
}
declare interface IChat {
    id: number,
    type: string,
    title: string,
    username: string,
    first_name: string,
    last_name: string
}
declare interface IUser {
    id: number,
    first_name: string,
    last_name: string
}
declare interface IAudio {
    file_id: string,
    duration: number,
    performer?: string,
    title?: string,
    mime_type?: string,
    file_size?: string
}
declare interface IDocument {
    file_id: string,
    thumb?: IPhotoSize,
    file_name?: string,
    mime_type?: string,
    file_size?: string
}
declare interface IPhotoSize {
    file_id: string,
    width: number,
    height: number,
    file_size?: string
}

declare interface IsendMessage {
    method: string,
    chat_id: number | string,
    text: string,
    parse_mode?: string,
    disable_web_page_preview?: boolean,
    reply_to_message_id?: number,
    reply_markup?: IReplyKeyboardMarkup|IReplyKeyboardHide|IForceReply
}

// keyboars
declare interface IReplyKeyboardMarkup {
    keyboard: Array<Array<string>>,
    resize_keyboard?: boolean,  // Requests clients to resize the keyboard vertically for optimal fit 
    one_time_keyboard?: boolean,// Requests clients to hide the keyboard as soon as it's been used.
    selective?: boolean         // Use this parameter if you want to show the keyboard to specific users only
}
declare interface IReplyKeyboardHide {
    hide_keyboard: boolean,
    selective?: boolean
}
declare interface IForceReply {
    force_reply: boolean,
    selective?: boolean
}