const { TFT_BASE } = require("../../config");

export const createUser = (user) => async (dispatch) => {
  const response = await fetch(`${TFT_BASE}/users`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ user }),
  })

  if (response.ok) {
    const { token } = await response.json();
    window.localStorage.setItem(TOKEN_KEY, token);
    dispatch(setToken(token));
  } else {
    console.log("User Creation Failed!");
  }
}
