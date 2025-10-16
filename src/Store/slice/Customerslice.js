// import { createSlice } from "@reduxjs/toolkit";

// const customerslice = createSlice({
//     name: "customer",
//     initialState: [],
//     reducers: {
//         addCustomer: (state, action) => {
//             state.push(action.payload)
//         }
//     }
// }

// )

// export const { addCustomer } = customerslice.actions
// export default customerslice.reducer

import { createSlice } from "@reduxjs/toolkit";

const customerSlice = createSlice({
    name: "customer",
    initialState: [],
    reducers: {
        addCustomer: (state, action) => {
            state.push(action.payload);
        },
        deleteCustomer: (state, action) => {
            return state.filter((item, index) => index !== action.payload)
        },
        editCustomer: (state, action) => {
            const { index, name } = action.payload;
            state[index] = name;
            return state;

        }
    },
});

export const { addCustomer, deleteCustomer, editCustomer } = customerSlice.actions;
export default customerSlice.reducer;
