import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import getForm from '../actions/getForm';
import submitForm from '../actions/submitForm';

const GenrateForm = ({match}) => {

    const [values, setValues] = useState({
        name: '',
        questions: [],
        id: '',
    })

    const [answers, setAnswers] = useState([])

    const { name, questions} = values;
    const space = "   "
    
    const init = (formId) => {
        getForm(formId).then((data) => {
            console.log(data)
            if(data.error){
                console.log(data.error)
            } else {
                setValues({
                    ...values,
                    name: data.name,
                    questions: data.questions,
                    id: data.id,
                })
            }
        })
    }

    const handleChange = (name) => event => {
        setValues({...values, [name]: event.target.value});
        setAnswers({...answers, [name]: event.target.value});
    }

    const handleChangeCheck = (name) => event => {
        setValues({...values, [name]: event.target.value})
        setAnswers({...answers, [name]: event.target.value});
    }

    const handleChangeRadio = (name) => event => {
        setValues({...values, [name]: event.target.value})
        setAnswers({...answers, [name]: event.target.value});
    }

    const showCheckOptions = (i) => {
        return(
        questions[i].OptionsFields.map((o, index) => {
            return <span className="col col-xl-6 col-lg-6 col-md-6" key={index}> 
                        {o}  {space}  <input type="checkbox" name="OptionsFields" className="mt-2 mb-2" value={o}  onChange={handleChangeCheck(o)}/> {space}
                    </span>
        })
        )
    }

    const showRadioOptions = (i) => {
        return(
        questions[i].OptionsFields.map((o, index) => {
            return <span className="col col-xl-6 col-lg-6 col-md-6" key={index}> 
                        {o}  {space}  <input type="radio" name="OptionsFields" className="mt-2 mb-2" value={o}  onChange={handleChangeRadio(o)}/> {space}
                    </span>
        })
        )
    }

    const clickSubmit = (event) => {
        submitForm({values, answers}).then(() => {
            event.preventDefault();
            alert("Data Submited Successfully!");
            return init(match.params.formId);
        })
    }

    useEffect(() => {
        init(match.params.formId);
        // eslint-disable-next-line
	}, []);

    return (
            <div className="container mt-5">
                <div className="row">
                    <div className="col col-xl-6 col-lg-6 mt-3">
                        <form className="mb-3">
                        <h4>{name}</h4>

                        {questions.map((q, i) => (
                            <div key={i}>
                                <label className="text-muted mt-4">{q.question + " "}</label>
                                {
                                    q.type==="Checkbox" ? 
                                    <div>
                                        {showCheckOptions(i)}
                                    </div>
                                    :
                                    null
                                }
                                {
                                    q.type==="Radio" ?
                                    <div>
                                        {showRadioOptions(i)}
                                    </div>
                                    :
                                    null
                                }
                                {
                                    q.type==="Text" ? 
                                    <div>
                                        <input type={q.type} onChange={handleChange(q.type)} className={q.type === "Radio" ? "radio mt-2" : "form-control mt-2"} />
                                    </div>
                                    : 
                                    null
                                }
                            </div> 
                        ))}
                            <button onClick={clickSubmit} className="btn btn-outline-primary mt-3 mb-5">Submit</button> {space} {space}
                             {space} {space}<Link to="/forms" className="btn btn-outline-primary mt-3 mb-5">Go Back</Link>
                        </form>
                    </div>
                </div>
            </div>
    )
}

export default GenrateForm;