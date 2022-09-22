const getIsLoggedIn = state => state.auth.isLoggedIn;
const getIsFetchingCurrentUser = state => state.auth.isFechingCurrentUser;
const getUserName = state => state.auth.user.name;

const authSelector = {
  getIsLoggedIn,
  getUserName,
  getIsFetchingCurrentUser,
};

export default authSelector;
