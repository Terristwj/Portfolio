"use client";

export default interface IMessage {
    id: number;
    message: string;
    username: string;
    created_at: string;
    is_hidden?: boolean;
}
