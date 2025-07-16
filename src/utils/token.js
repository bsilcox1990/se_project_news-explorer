export const setToken = (token) => {
  localStorage.setItem("JWT", token);
};

export const getToken = () => {
  return localStorage.getItem("JWT");
};

export const deleteToken = () => {
  localStorage.removeItem("JWT");
};
