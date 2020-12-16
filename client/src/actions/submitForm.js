import API from '../api';

const submitForm = (data) => {
        return fetch(`${API}/forms/submit`,{
        method: 'POST',
        headers: {
                Accept: 'application/json',
			    'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    }).then((response) => {
	
        }).catch((err) => console.log(err));
}

export default submitForm;