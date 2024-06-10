export interface User {
  id: string,
  FirstName: string,
  LastName: string,
  phone_number:string,
  email:string,
  password:string,
  user_image:string,
  project_id:string,
  isAssignedProject: string,
  isCreated: boolean;
}

export interface login_details{
  email:string,
  password:string
}