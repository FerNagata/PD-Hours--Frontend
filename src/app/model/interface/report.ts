export interface IReport {
    id: number;
    description: string;
    employeeId: number;
    spentHours: number;
    createdAt: Date;
}

export interface ICreateReport {
    employeeId?: number | string;
    spentHours?: number;
    description?: string;
}

export interface ISquadMembersData {
    member: string;
    description: string;
    spentHours: number;
    createdAt: Date;
}