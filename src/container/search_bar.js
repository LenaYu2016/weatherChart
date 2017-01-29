import React,{Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {fetchWeather} from '../actions/index';
export class SearchBar extends Component{
    constructor(props){
        super(props);
        this.state={term:''};
        this.onInputChange=this.onInputChange.bind(this);
        this.onSearch=this.onSearch.bind(this);
    }
    onInputChange(e){
        const value=e.target.value;
        this.setState({term:value});
       // console.log(e.target.value);
    }
    onSearch(e){
        e.preventDefault();
         this.props.fetchWeather(this.state.term);
        this.setState({term:''});
    }
    render(){
        return (<form className="input-group" onSubmit={this.onSearch}>
            <input value={this.state.term} onChange={this.onInputChange} className="form-control"/>
            <span className="input-group-btn">
                <button type="submit" className="btn btn-secondary">Submit</button>
            </span>
        </form>);
    }
}
function mapDispatchToProps(dispatch){
    return bindActionCreators({fetchWeather},dispatch);
}
export default connect(null,mapDispatchToProps)(SearchBar);