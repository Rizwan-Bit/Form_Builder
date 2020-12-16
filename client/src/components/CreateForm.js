import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

import addForm from '../actions/addForm';

function CreateForm() {

        const [formName, setFormName] = useState(''); 

        const [inputFields, setInputFields] = useState([
            { 
                id: uuidv4(), 
                question: '', 
                type: 'Text',
                OptionsFields: [""],
            },
        ]);

        const handleSubmit = (e) => {

            e.preventDefault();
            
            addForm({inputFields, formName, id: uuidv4()}).then(() => {
                    return( 
                        setFormName(''),
                        setInputFields([{
                            ...inputFields,
                            id: '',
                            question: '',
                            type: 'Text',
                            OptionsFields: [""]
                        }])
                    )
            })
            alert("Form saved successfully!");
        };

        const handleChangeInput = (id, event) => {
            const newInputFields = inputFields.map(i => {
                if(id === i.id) {
                    i[event.target.name] = event.target.value
                }
                return i;
            })
    
            setInputFields(newInputFields);
        }

        const handleAddFields = (e) => {
            e.preventDefault();
            setInputFields([...inputFields, { id: uuidv4(),  question: '', type: 'Text', OptionsFields: [""]  }])
        }

        const handleRemoveFields = id => {
            const values  = [...inputFields];
            values.splice(values.findIndex(value => value.id === id), 1);
            setInputFields(values);
        }

        const handleChangeFormName = (formName, event) => {
            setFormName(event.target.value)
        }

        const checkOptionsChange = (index, inputIndex, e) => {
            const fields = [...inputFields];
            fields[inputIndex].OptionsFields[index] = e.target.value;
            setInputFields(fields);
        }

        
        const radioOptionsChange = (index, inputIndex, e) => {
            const fields = [...inputFields];
            fields[inputIndex].OptionsFields[index] = e.target.value;
            setInputFields(fields);
        }

        const deleteCheckoption = (index, inputIndex) => {
            const fields = [...inputFields];
            fields[inputIndex].OptionsFields.splice(index, 1)
          
            setInputFields(fields);
        }

        const deleteRadioOption = (index, inputIndex) => {
            const fields = [...inputFields];
            fields[inputIndex].OptionsFields.splice(index, 1)
            setInputFields(fields);
        }

        const AddCheckOption = (index,e) => {
            e.preventDefault();
            const fields = [...inputFields];
            fields[index].OptionsFields.push('');

            console.log("inputfields : ", fields)
            setInputFields(fields);
        }

        const AddRadioOption = (index, e) => {
            e.preventDefault();
            const fields = [...inputFields];
            fields[index].OptionsFields.push('');

            console.log("inputfields : ", fields)
            setInputFields(fields);
        }

        const showCheckOptions = (inputIndex) => {
            const optionsFields = inputFields[inputIndex].OptionsFields.map((field, index) => {
                    return (<div className="col col-xl-6 col-lg-6 col-md-6" key={index}> 
                                <input type="text" name="OptionsFields" className="form-control mt-2 mb-2" value={field} onChange={e => checkOptionsChange(index, inputIndex, e)} placeholder="Enter The option" />
                                <button className="btn-danger" onClick={e => deleteCheckoption(index, inputIndex)}>Delete</button>
                            </div>)
            })
            console.log("options ; ", optionsFields)
            return optionsFields;
        }

        const showRadioOptions = (inputIndex) => {
            const optionsFields = inputFields[inputIndex].OptionsFields.map((field, index) => {
                    return (<div className="col col-xl-6 col-lg-6 col-md-6" key={index}> 
                                <input type="text" name="OptionsFields" className="form-control mt-2 mb-2" value={field} onChange={e => radioOptionsChange(index, inputIndex, e)} placeholder="Enter The option" />
                                <button className="btn-danger" onClick={e => deleteRadioOption(index, inputIndex)}>Delete</button>
                            </div>)
            })
            console.log("options ; ", optionsFields)
            return optionsFields;
        }

        return (
            <div className="container mt-5">
                <div className="row">
                <form className="col col-xl-12 col-lg-12">
                    { inputFields.map((inputField, index) => (
          
                    <div key={index}>
                        <div className="col col-md-6 col-lg-6 col-xl-6 mt-2 mb-2">
                            <input
                                    type="text"
                                    name="question"
                                    className="form-control"
                                    placeholder="Enter The Question"
                                    value={inputField.question}
                                    onChange={event => handleChangeInput(inputField.id, event)}
                            />
                        </div>
                        <div className="col col-md-6 col-lg-6 col-xl-6 mt-2 mb-2">
                            <select
                                    type="text"
                                    name="type"
                                    className="form-control"
                                    placeholder="Type of answer: Text, Checkbox, Radio"
                                    value={inputField.type}
                                    onChange={event => handleChangeInput(inputField.id, event)}
                            >
                                <option disabled>Please Select</option>
                                <option value="Text">Text</option>
                                <option value="Checkbox">Checkbox</option>
                                <option value="Radio">Radio</option>
                            </select>
                        </div>
                        <div>
                                

                                {inputField.type === "Checkbox" ? 
                                    <div>
                                        <button className="btn btn-success" onClick={(e) => AddCheckOption(index,e)}>+ Option</button>
                                    </div>
                                :null}
                                {console.log("render checkbox option")}
                                {inputField.type === "Checkbox" ? 
                                        showCheckOptions(index)
                                    :
                                        null
                                }

                                {inputField.type === "Radio" ? (
                                    <div>
                                        <button className="btn btn-success" onClick={(e) => AddRadioOption(index,e)}>+ Option</button>
                                    </div>
                                ):null} 

                                {inputField.type === "Radio" ? 
                                        showRadioOptions(index)
                                    :
                                        null
                                }                       
                        </div>
                    <button className="btn btn-danger mt-3 mb-3" disabled={inputFields.length === 1} onClick={() => handleRemoveFields(inputField.id)}>
                            Remove Question
                        </button>
                    </div>
        ))}

                <div>
                        <button className="btn btn-primary mt-3 mb-3" onClick={handleAddFields}>
                            Add Question
                        </button><br/>

                </div>
                <div className="col col-md-6 col-lg-6 col-xl-6 mt-2 mb-2">
                    <input
                            type="text"
                            name="formName"
                            className="form-control"
                            placeholder="Enter The Form Name"
                            value={formName}
                            onChange={event => handleChangeFormName(formName, event)}
                    />
                </div>

                    <button className="btn btn-dark mt-3 mb-5" type="submit" onClick={handleSubmit}>Save Form</button>
                </form>
            </div>
      </div>
  )
}

export default CreateForm;