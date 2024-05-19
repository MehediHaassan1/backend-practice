import { z } from 'zod';

// Name schema
const nameValidationSchema = z.object({
  firstName: z.string().nonempty(),
  middleName: z.string().optional(),
  lastName: z.string().nonempty()
});

// Address schema
const addressValidationSchema = z.object({
  street: z.string().nonempty(),
  city: z.string().nonempty(),
  state: z.string().nonempty(),
  country: z.string().nonempty()
});

// Guardian schema
const guardianValidationSchema = z.object({
  guardianName: nameValidationSchema,
  age: z.number().min(0),
  relation: z.enum(["Father", "Mother"]),
  address: addressValidationSchema,
  contactNo: z.string().nonempty()
});

// Parents schema
const parentsValidationSchema = z.object({
  fatherName: nameValidationSchema,
  fatherOcuppation: z.string().nonempty(),
  fatherContactNo: z.string().nonempty(),
  motherName: nameValidationSchema,
  motherOcuppation: z.string().nonempty(),
  motherContactNo: z.string().nonempty()
});

// Student schema
const studentValidationSchema = z.object({
  id: z.string().nonempty(),
  name: nameValidationSchema,
  age: z.number().min(0),
  gender: z.enum(["male", "female", "other"]),
  presentAddress: addressValidationSchema,
  permanentAddress: addressValidationSchema,
  guardian: guardianValidationSchema,
  email: z.string().email(),
  contactNo: z.string().nonempty(),
  parents: parentsValidationSchema,
  bloodGroup: z.enum(["A+", "A-", "B+", "B-", "AB+", "AB-", "O+", "O-"]).optional(),
  dateOfBirth: z.string().nonempty(),
  profileImg: z.string().optional()
});

// Example usage
// const validateStudent = (student: unknown) => {
//   return studentValidationSchema.safeParse(student);
// };

export default studentValidationSchema;
