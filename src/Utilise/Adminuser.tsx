export const Admin = (getuserdetail: any, values: any) => {
  const admin =
    getuserdetail[0]?.email === values?.email &&
    values?.email === "sathishkumar@gmail.com" &&
    getuserdetail[0]?.password === values?.password &&
    values?.password === "12345678";
  return admin;
};
