import { atom } from "recoil";

const searchState = atom({
    key: 'searchState',    
    default: '',
  });
  
  export {searchState};