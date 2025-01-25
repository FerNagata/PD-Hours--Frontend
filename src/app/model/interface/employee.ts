export interface IEmployee {
    id: number;
    name: string;
    estimatedHours: number;
    squadId: number;
}

export interface ICreateEmployee {
    name?: string;
    estimatedHours?: number;
    squadId?: number | string;
}

