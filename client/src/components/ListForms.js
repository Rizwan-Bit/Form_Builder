import {Component} from 'react'
import { Link } from "react-router-dom";
import { connect } from "react-redux"
import getForms from '../actions/getForms'

class ListForms extends Component{

    componentDidMount() {
        this.props.onGetForms();
    }

    render() {
        return (
            <div className="container">
                    <div className="row">
                        <ul className="list-group">
                            {this.props.data.map((f, i) => (    
                            <li
                                key={i}
                                className="list-group-item  align-items-center"
                            >
                                <strong className="font">{f.name}</strong>
                                <Link to={`/forms/${f._id}`}>
                                    <span className="btn btn-primary d-flex justify-content-around mt-3 mb-3">
                                        Form URL
                                    </span>
                                </Link>
                                <strong className="font mt-5">CreatedAt: {f.createdAt.substring(0, 10)}</strong> <br />
                                <strong className="font mt-5">Total Responses: {f.count}</strong>
                            </li>
                            ))}
                        </ul>
                    </div>
                </div>
        )
    }
}

const mapStateToProps = state => {
   return{
        data: state.data
   }
}

const mapDispatchToProps = (dispatch) => {
    return{
        onGetForms: () => dispatch(getForms())
    }
}

export default  connect(mapStateToProps, mapDispatchToProps)(ListForms);