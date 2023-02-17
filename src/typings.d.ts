export interface User{
    comments: Array;
    createdAt: string;
    email: string;
    image: string;
    isAdmin: boolean;
    isModerator: boolean;
    isBanned: boolean;
    password: string;
    updatedAt:string;
    username: string;
    _id:string;
}
export interface Ipost{
    author:User;
    comments: Comment[];
    context:string;
    header: string;
    image: string;
    slug: string;
    _id: string;
}
export interface Comment{
    content:string;
    dateTime: string;
    likes: Array<string>
    parentId2:string;
    repies:Array;
    time: string;
    user:User
}
export interface Iplayer{
    Name: string;
    Number:number;
    Positions: string;
    SurName:string;
    _id:string;
}