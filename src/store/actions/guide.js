export const ADD_BOARD = "tft-buildmanager/guide/ADD_BOARD";
export const REMOVE_BOARD = "tft-buildmanager/guide/REMOVE_BOARD";
export const MOVE_BOARD = "tft-buildmanager/guide/MOVE_BOARD";
export const SAVE_GUIDE = "tft-buildmanager/guide/SAVE_GUIDE";

export const addBoard = (payload) => ({ type: ADD_BOARD, payload });
export const removeBoard = (index) => ({ type: REMOVE_BOARD, index });
export const moveBoard = (index) => ({ type: MOVE_BOARD, index });
export const saveGuide = (payload) => ({ type: SAVE_GUIDE, payload });
