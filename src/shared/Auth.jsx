const IsLogin = () => !!localStorage.getItem("login-token");
export default IsLogin;
