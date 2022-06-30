export const initialState ={
    basket:["bread","god"],

};
 function reducer(state,action){
    console.log(action)
    switch (action.type){
        case 'ADD_TO_BASKET':
        //kogic for adding item to basket 
        break;
        case 'REMOVE_FROM_BASKET':
            //logic for removing item to basket 

         break;
         default:
         return state;
    }
}
export default reducer