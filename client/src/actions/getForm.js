import API from '../api'

const getForm = (id) => {
    return fetch(`${API}/forms/${id}`,{
        method: 'GET',
        headers: {
                Accept: 'application/json',
			    'Content-Type': 'application/json'
        }
    }).then((response) => {
			return response.json();
	}).catch((err) => console.log(err));
}

export default getForm;