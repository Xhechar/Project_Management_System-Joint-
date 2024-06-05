export interface User {
  user_id: string,
  FirstName: string,
  LastName: string,
  phone_number:string,
  email:string,
  password:string,
  user_profile:string[],
  project_id:string
  project_status: boolean
}