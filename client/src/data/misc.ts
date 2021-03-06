export type Color = {
    r: number;
    g: number;
    b: number;
}

export interface User {
    id: string;
    name: string;
    pfp: string;
}

export interface JoinedUser extends User {
    color: Color;
}

export interface Room {
    people: User[];
    displayName: string;
    urlName: string;
    owner: string;
}

interface EventBase {
    timestamp: number;
}

export interface NoteOnEvent extends EventBase {
    event: 'note-on';
    data: {
        key: number;
        velocity: number;
    };
}

export interface NoteOffEvent extends EventBase {
    event: 'note-off';
    data: {
        key: number;
    };
}

export type EventData = NoteOnEvent | NoteOffEvent;

export interface BatchEventData {
    data: EventData[];
    recordStartTime: number;
}

export interface SendBatchEventData extends BatchEventData {
}

export interface RecieveBatchEventData extends BatchEventData {
    startTime: number;
    endTime: number;
    user: string;
}