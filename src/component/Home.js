import React, { Component } from 'react'
import { connect } from 'react-redux'
export class Home extends Component {
  render() {
  const {topList,bottomList,delItem,addItem}=this.props 
  console.log(this.props)
    return (
        <div>
                <div className="topList">
                {
                    topList.map((item,index)=>{
                        return <span key={index}>{item.title}
                        <span className="span" onClick={()=>{
                            delItem(index,item)
                        }}>
                        X
                        </span>
                        </span>
                    })
                }
            </div>
        <hr/>
        <div className="bottomList">
        {
            bottomList.map((item,index)=>{
                return <span key={index}>{item.title}
                <span onClick={()=>{
                    addItem(item,index)
                }} className="span">
                +
                </span>
                </span>
            })
        }
        
        
        </div>
        
        </div>
     
    )
    
  }
  componentDidMount(){

  }
}
//从仓库去初始值解构
const mapStateToProps = (state) => {
    const {topList,bottomList}=state
  return {
    topList,
    bottomList
  }
}
//写逻辑代码
const mapDispatchToProps =(dispatch) => {
  return {
        delItem(index,item){
            dispatch({
                type:'DEL_ITEM',
                index,item
            })
        },
        addItem(item,index){
            dispatch({
                type:'ADD_ITEM',
                index,item
            })
        }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home)
