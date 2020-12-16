import API from '../api'

const addForm = (data) => {
    return fetch(`${API}/`, {
                method: 'POST',
                headers: {
                    Accept: 'application/json',
			        'Content-Type': 'application/json'
                },
                body: JSON.stringify(data)
    }).then((response) => {
        
    }).catch((err) => {
        console.log("error :", err);
    })
}

export default addForm;