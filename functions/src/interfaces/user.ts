export enum IUserRoleType {
    ADMIN = "admin",
    TRAINER = "trainer",
    MEMBER = "member"
}

export interface IUserLocationType {
    lat: number;
    lng: number;
}

export interface IUserGoalType {
    goal: string;
    archive: boolean
}

export interface IUserAchievementType {
    currentStreak: number;
    longestStreak: number;
    programCompleted: number;
}

export interface IUser {
    id?: string;
    firstname: string;
    lastname: string;
    gender: string;
    email: string;
    role: IUserRoleType;
    birthday?: string;
    phone?: string,
    photo?: string,
    location?: IUserLocationType,
    goal?: IUserGoalType[],
    achievement?: IUserAchievementType,
    programIds?: number[]
}
