export const initialState = null;
export const reducer = (state, action) => {
   if (action.type === "Admin") {
      return action.payload;
   }
   return state;
}