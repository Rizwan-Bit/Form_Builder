import actions from './types'
import API from '../api'

const getForms = () => {
    return (dispatch) => {
        return fetch(`${API}/forms`, {
        method: 'GET',
        headers: {
                Accept: 'application/json',
			    'Content-Type': 'application/json'
        }
        }).then((response) => {
        
            response.json().then((res) => {
                dispatch({
                    type:actions.GET_FORMS,
                    payload: res  
                })
            })
	    }).catch((err) => console.log(err));
    }
}

export default getForms;