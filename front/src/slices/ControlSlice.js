import {createSlice} from '@reduxjs/toolkit'


let initialState={
    isSidebarOpen:false,
}

let ControlSlice = createSlice({
  name: "control",
  initialState,
  reducers: {
    openSidebar: (state) => {
      state.isSidebarOpen = true;
    },
    closeSidebar: (state) => {
      state.isSidebarOpen = false
    },
  },
});


export const {closeSidebar,openSidebar}=ControlSlice.actions
export default ControlSlice.reducer