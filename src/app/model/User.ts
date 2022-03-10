import { Permision } from "./Permision";
import { Role } from "./Role";

export interface User{
  id: number,
  addedDate: Date,
  firstname: string,
  lastname: string,
  sid: string,
  password: string,
  role: Role,
  status: string,
  permision: Permision
}
