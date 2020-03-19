import React, {useState} from 'react'

function BountyForm(props){
    const [formData, setFormData] = useState({firstName: '', lastName: '', bounty: 0})
    
    function handleChange(e){
        const {name, value} = e.target
        setFormData(prevForm => ({...prevForm, [name]: value}))
    }

    function handleSubmit(e){
        e.preventDefault()
        const {firstName, lastName, bounty} = formData
        props.addBounty(firstName, lastName, bounty)
    }

    return (
        <form onSubmit={handleSubmit}>
            <input 
                name='firstName' 
                placeholder='First Name...'
                value={formData.firstName}
                onChange={handleChange}
            ></input>
            <input 
                name='lastName' 
                placeholder='Last Name...'
                value={formData.lastName}
                onChange={handleChange}
            ></input>
            <label for="bounty">Bounty: </label>
            <input 
                name='bounty' 
                id="bounty"
                type='number' 
                value={formData.bounty}
                onChange={handleChange}
            ></input>
            <button>Submit</button>
        </form>
    )
}

export default BountyForm