export const getUser = () => {
  let user = localStorage.getItem("user");
  if (!user) {
    user = JSON.stringify({ locations: [] });
    localStorage.setItem("user", user);
  }
  return JSON.parse(user);
};

export const setUser = (user) => {
  localStorage.setItem("user", JSON.stringify(user));
};
