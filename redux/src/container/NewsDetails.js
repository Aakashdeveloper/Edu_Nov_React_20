import React,{Component} from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import {selectedNews} from '../actions/action_file';


class NewsDetails extends Component{
    componentDidMount(){
        this.props.dispatch(selectedNews(this.props.match.params.id))
    }

    renderDetails = ({selected}) => {
        if(selected){
            return selected.map((data) => {
                return(
                    <div key={data.id}>
                    <div className="tags">
                        <span>
                            <i className="fa fa-eye"></i>
                            {data.views}
                        </span>
                        <span>
                            <i className="fa fa-thumbs-up"></i>
                            {data.likes[0]}
                        </span>
                        <span>
                            <i className="fa fa-thumbs-down"></i>
                            {data.likes[1]}
                        </span>
                    </div>
                    <div className="top">
                        <h2>{data.title}</h2>
                        <span>Artcile By:{data.author}</span>
                        <img src={`/images/articles/${data.img}`}/>
                        <div className="body_news">
                            {data.body}
                        </div>
                    </div>
                </div>
                )
            })
        }
    }
    render(){
        return(
            <div className="news_container">
                {this.renderDetails(this.props.datalist)}
            </div>
        )
    }
}

//receive the state
function mapStateToProps(state){
    console.log(state)
    return{
        datalist:state.article
    }
}

NewsDetails.protoTypes={
    dispatch:PropTypes.func
}

export default connect(mapStateToProps)(NewsDetails)