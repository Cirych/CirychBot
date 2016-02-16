declare interface IMain {
    
}

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
    call(request: IUpdate): IReply|boolean;
}

declare interface IBotModuleNew {
    new (): any;
}

declare interface IBotModule {
    config: IBotModuleConfig;
    action(message: IMessage): IReply;
    getName(): string;
}
declare interface IBotModuleConfig {
    name: string;
    type: string;
    command?: string;
}



// Function types


// Telegram types
declare interface IUpdate {
    update_id: number;
    message?: IMessage;
    inline_query?: IInlineQuery;
    chosen_inline_result?: IChosenInlineResult;
}
declare interface IGetUpdates {
    offset?: number;
    limit?: number;
    timeout?: number;
}
declare interface IInlineQuery {
    id: string;     // Unique identifier for this query
    from: IUser;    // Sender
    query: string;  // Text of the query
    offset: string;  // Offset of the results to be returned, can be controlled by the bot
}
declare interface IChosenInlineResult {
    result_id: string;
    from: IUser;
    query: string;
}
declare interface IMessage {
    message_id: number;
    from?: IUser;
    date: Date;
    chat: IChat;
    forward_from?: IUser;
    forward_date?: Date;
    reply_to_message?: IMessage;
    text?: string;
    audio?: IAudio;
    document?: IDocument;
    photo?: Array<IPhotoSize>;
    sticker?: ISticker;
    video?: IVideo;
    voice?: IVoice;
    caption?: string;
    contact?: IContact;
    location?: ILocation;
    new_chat_participant?: IUser;
    left_chat_participant?: IUser;
    new_chat_title?: string;
    new_chat_photo?: Array<IPhotoSize>;
    delete_chat_photo?: boolean;
    group_chat_created?: boolean;
    supergroup_chat_created?: boolean;
    channel_chat_created?: boolean;
    migrate_to_chat_id?: number;
    migrate_from_chat_id?: number;
}
declare interface IChat {
    id: number;
    type: string;
    title: string;
    username: string;
    first_name: string;
    last_name: string;
}
declare interface IUser {
    id: number;
    first_name: string;
    last_name: string;
}
declare interface IAudio {
    file_id: string;
    duration: number;
    performer?: string;
    title?: string;
    mime_type?: string;
    file_size?: number;
}
declare interface IDocument {
    file_id: string;
    thumb?: IPhotoSize;
    file_name?: string;
    mime_type?: string;
    file_size?: number;
}
declare interface IPhotoSize {
    file_id: string;
    width: number;
    height: number;
    file_size?: number;
}
declare interface ISticker {
    file_id: string;
    width: number;
    height: number;
    thumb?: IPhotoSize;
    file_size?: number;
}
declare interface IVideo {
    file_id: string;
    width: number;
    height: number;
    duration: number;
    thumb?: IPhotoSize;
    mime_type?: string;
    file_size?: number;
}
declare interface IVoice {
    file_id: string;
    duration: number;
    mime_type?: string;
    file_size?: number;
}
declare interface IContact {
    phone_number: string;
    first_name: string;
    last_name?: string;
    user_id?: number;
}
declare interface ILocation {
    longitude: number;
    latitude: number;
}
declare interface IUserProfilePhotos {
    total_count: number;
    photos: Array<IPhotoSize>;
}

declare interface IFile {
    file_id: string;
    file_size?: number;
    file_path?: string;
}

declare interface IReply {
    method: string
}

declare interface IsendMessage extends IReply {
    chat_id: number | string;
    text: string;
    parse_mode?: string;
    disable_web_page_preview?: boolean;
    reply_to_message_id?: number;
    reply_markup?: IReplyKeyboardMarkup|IReplyKeyboardHide|IForceReply;
}

// keyboards
declare interface IReplyKeyboardMarkup {
    keyboard: Array<Array<string>>;
    resize_keyboard?: boolean;  // Requests clients to resize the keyboard vertically for optimal fit 
    one_time_keyboard?: boolean;// Requests clients to hide the keyboard as soon as it's been used.
    selective?: boolean;        // Use this parameter if you want to show the keyboard to specific users only
}
declare interface IReplyKeyboardHide {
    hide_keyboard: boolean;
    selective?: boolean;
}
declare interface IForceReply {
    force_reply: boolean;
    selective?: boolean;
}