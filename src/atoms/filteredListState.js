import { atom } from "recoil";

const filteredListState = atom({
    key: 'filteredListState',    
    default: '',
  });
  
  export {filteredListState};