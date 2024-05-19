export type TName = {
    firstName: string;
    middleName?: string;
    lastName: string;
}

export type TAddress = {
    street: string;
    city: string;
    state: string;
    country: string;
}

export type TParents = {
    fatherName: TName;
    fatherOcuppation: string;
    fatherContactNo: string;
    motherName: TName;
    motherOcuppation: string;
    motherContactNo: string;
}

export type TGuardian = {
    guardianName: TName;
    age: number;
    relation: "Father" | "Mother";
    address: TAddress;
    contactNo: string;
}

export type TStudent = {
    id: string;
    name: TName;
    age: number;
    gender: "male" | "female" | "other";
    presentAddress: TAddress;
    permanentAddress?: TAddress;
    guardian: TGuardian;
    email: string;
    contactNo: string;
    parents: TParents;
    bloodGroup?: "A+" | "A-" | "B+" | "B-" | "AB+" | "AB-" | "O+" | "O-";
    dateOfBirth: string;
    profileImg?: string;
}