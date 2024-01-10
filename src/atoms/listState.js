import { atom } from "recoil";

export const inputState = atom({
    key: 'inputState',    
    default: '',
  });
  
export const listState = atom({
    key: 'listState',
    default: [{
        id: 0,
        isDone: false,
        content: "사과"
      },
      {
        id: 1,
        isDone: false,
        content: "배"
      }],
})
