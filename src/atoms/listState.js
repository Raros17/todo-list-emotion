import { atom } from "recoil";

const listState = atom({
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
      },
      {
        id: 2,
        isDone: false,
        content: "당근"
      }
    ],
})

export {listState};