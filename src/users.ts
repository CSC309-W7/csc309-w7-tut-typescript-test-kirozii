import type { User } from "./types";

export const apiResponse: unknown = [
        { name: "Tony", age: 23 },
        { name: "Kevin", age: "24" }, // invalid
        { name: "Jim", age: 25 },
];

export function getUsersData(): User[] {
        if (!Array.isArray(apiResponse)) return [];

        return apiResponse.map((u: any) => ({
                name: String(u.name),
                age: Number(u.age),
        }));
}

export function formatAges(users: User[]): string[] {
        return users.map((u) => u.age.toFixed(0));
}
