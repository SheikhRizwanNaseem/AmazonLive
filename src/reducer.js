import React from 'react'



export const initialState = {

    basket :[],
    user: null,
}

const reducer = ( state , action) => {
    console.log(action)
    switch(action.type){
        case "Add to  Basket":
            return {...state, 
                basket:[...state.basket , action.item],
            
            };

         case "Remove From Basket": 

         let newBasket = [...state.basket]
  const index=state.basket.findIndex(
      (basketitem) =>  basketitem.id === action.id
  );

  if (index >=0) {
      newBasket.splice(index , 1);
  } else {
      console.warn(
          `Cant Remove Product (id: ${action.id}) as it is not present `
      )
  }

            return {...state , basket:newBasket};
         default:
         return state
        
    }
}

export default reducer
