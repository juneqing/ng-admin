export namespace Types {
    export interface IUser {
        nickname: string;
    }
    export interface Field {
        label: string;
        key: string;

    }

    export interface ITaskTag {
        _id?: string,
        name: string,
        sort: number,
        createDt?: Date;
        subTaskNum?: number;
    }

    export interface ITask {
        _id?: string;
        title: string;
        createDt: Date;
        fee: number;

        publisher: string | IUser;
        shareMoney: number;
        // 余额
        totalMoney: number;
        active: boolean;
        websiteUrl: string;

    }
    export interface IGetMoneyRequest {
        _id?: string;
        user: IUser;
        money: number;
        createDt: number;
        status: 1 | 2 | 3;
    }

}
