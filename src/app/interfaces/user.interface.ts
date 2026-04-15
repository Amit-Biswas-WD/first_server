export interface IUser {
  fullName: string;
  email: string;
  password: string;
  role: "user" | "admin" | "super_admin";
  address: {
    street: string;
    city: string;
    country: string;
    phone: string;
  };
  createdAt?: Date;
  updatedAt?: Date;
}
