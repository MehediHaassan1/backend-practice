export type Name = {
    firstName: string;
    middleName?: string;
    lastName: string;
}

export type Address = {
    street: string;
    city: string;
    state: string;
    zipCode: string;
    country: string;
}

export type Parents = {
    fatherName: Name;
    fatherOcuppation: string;
    fatherContactNo: string;
    motherName: Name;
    motherOcuppation: string;
    motherContactNo: string;
}

export type Guardian = {
    guardianName: Name;
    age: number;
    relation: "Father" | "Mother" ;
    address: Address;
    contactNo: string;
}

export type Student = {
    id: string;
    name: Name;
    age: number;
    gender: "Male" | "Female" ;
    presentAddress: Address;
    permanentAddress?: Address;
    guardian: Guardian;
    email: string;
    contactNo: string;
    parents: Parents;
    bloodGroup?: "A+" | "A-" | "B+" | "B-" | "AB+" | "AB-" | "O+" | "O-";
    dateOfBirth: string;
    profileImg?: string;
}