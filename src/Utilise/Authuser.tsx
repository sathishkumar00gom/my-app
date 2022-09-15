export const authuser: any = () => {
  const getuser = localStorage.getItem("user");
  const getuserdetail = JSON.parse(getuser || "{}");
  console.log(getuserdetail[0]?.email, "getuserdetail");
  const check = getuserdetail[0]?.email ? true : false;
  return check;
};
