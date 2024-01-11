import { atom } from "recoil";

const inputState = atom({
    key: 'inputState',    
    default: '',
  });
  
  export {inputState};