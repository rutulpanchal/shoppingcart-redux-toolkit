import { createSlice } from '@reduxjs/toolkit';

export const productSlice = createSlice({
  name: 'product',
  initialState: {items: [
    {id:1,title:'Winter body', desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, ex.", price:110,img:'https://picsum.photos/200', stock:0},
    {id:2,title:'Adidas', desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, ex.", price:80,img: 'https://picsum.photos/200',stock:0},
    {id:3,title:'Vans', desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, ex.",price:120,img: 'https://picsum.photos/200',stock:0},
    {id:4,title:'White', desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, ex.", price:260,img:'https://picsum.photos/200',stock:0},
    {id:5,title:'Cropped-sho', desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, ex.", price:160,img: 'https://picsum.photos/200',stock:0},
    {id:6,title:'Blues', desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, ex.",price:90,img: 'https://picsum.photos/200',stock:0}
],
addedItems:[],
total: 0
  },
  reducers: {
    increment: state => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      state.value += 1;
    },
    decreseAmount: (state,action) => {
      state.addedItems.map(item => item.id===action.payload ? (item.stock-=1, state.total-=(item.price)): console.log('hi') )
    },
    increseAmount: (state, action) => {
      state.addedItems.map(item => item.id===action.payload ? (item.stock+=1, state.total+=(item.price)): console.log('hi') )
    },
    showProduct: (state) => {
       state.items.map(item => console.log('slice',item.title))
        
      },
    addProduct: (state,action) => {
        
        state.items.map(item =>  item.id===action.payload ? (item.stock===0 ? ( state.addedItems.push(item)) : item.stock+=1) : console.log('out of stoock',item.name))
        state.addedItems.map(item => item.id===action.payload ? (item.stock+=1, state.total+=(item.price)): console.log('hi') )
        console.log('stock',state.total)  
      
       },
       removeProduct: (state,action) => {
        
       console.log('removeid',action.payload)
       //state.addedItems.map(item => item.id===action.payload ? state.addedItems.splice(item.id-1,1): console.log('no item'))
       state.addedItems.map(item => item.id===action.payload ? (state.total-=(item.price*item.stock),item.stock=0): console.log('hi') )
       state.items.map(item =>  item.id===action.payload ? item.stock=0 : console.log('out of stoock',item.name)) 
       const filtereditem = state.addedItems.filter(item => item.id!==action.payload) 
         state.addedItems = filtereditem
      
       },
  },
});

export const { increment, decrement, incrementByAmount, showProduct, addProduct,removeProduct,increseAmount ,decreseAmount} = productSlice.actions;

// The function below is called a thunk and allows us to perform async logic. It
// can be dispatched like a regular action: `dispatch(incrementAsync(10))`. This
// will call the thunk with the `dispatch` function as the first argument. Async
// code can then be executed and other actions can be dispatched
export const incrementAsync = amount => dispatch => {
  setTimeout(() => {
    dispatch(incrementByAmount(amount));
  }, 1000);
};

// The function below is called a selector and allows us to select a value from
// the state. Selectors can also be defined inline where they're used instead of
// in the slice file. For example: `useSelector((state) => state.counter.value)`
//export const selectCount = state => state.counter.value;

export default productSlice.reducer;
