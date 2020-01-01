import {createStore,applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
const initState={
        topList:[
            {
             "title":"钱包", 
            },{
                "title":"转账"
            },{
                "title":"收钱"
            },{
                "title":"付钱"
            }, {
                "title":"余额宝", 
               },{
                   "title":"转账"
               },{
                   "title":"芝麻信用"
               },{
                   "title":"付钱"
               }
        ],
        bottomList:[
            {
                "title":"钱包1", 
               },{
                   "title":"转账1"
               },{
                   "title":"收钱1"
               },{
                   "title":"付钱1"
               }, {
                   "title":"余额宝1", 
                  },{
                      "title":"转账1"
                  },{
                      "title":"芝麻信用1"
                  },{
                      "title":"付钱1"
                  } 
        ]
}
const reducer=(state=initState,action)=>{
     const newArr=JSON.parse(JSON.stringify(state))
        switch(action.type){
            case 'DEL_ITEM':
              newArr.topList.splice(action.index,1)
              newArr.bottomList.push(action.item)
              return newArr
              case 'ADD_ITEM':
              newArr.bottomList.splice(action.index,1)
              newArr.topList.push(action.item)
              console.log(newArr.topList)
              return newArr
            default:
              return state; 
        }
}
const store =createStore(reducer,applyMiddleware(thunk))
export default store