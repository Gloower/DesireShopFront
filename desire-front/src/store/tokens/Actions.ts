export type Action = { type: "ADD_TOKEN", playload: string }

export const addToken = (token: string): { payload: string; type: string } =>({
    type: "ADD_TOKEN",
    payload: token,
});