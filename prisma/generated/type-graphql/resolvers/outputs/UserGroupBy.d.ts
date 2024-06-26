import { UserCountAggregate } from "../outputs/UserCountAggregate";
import { UserMaxAggregate } from "../outputs/UserMaxAggregate";
import { UserMinAggregate } from "../outputs/UserMinAggregate";
export declare class UserGroupBy {
    id: string;
    name: string | null;
    email: string;
    password: string;
    role: "ADMIN" | "USER";
    createdAt: Date;
    updatedAt: Date;
    emailVerified: Date | null;
    image: string | null;
    _count: UserCountAggregate | null;
    _min: UserMinAggregate | null;
    _max: UserMaxAggregate | null;
}
