import React, { useEffect, useContext, useState } from 'react'
import Issues from './Issues'
import InputForm from './InputForm'
import { makeStyles } from "@material-ui/core/styles"
import axios from 'axios'

import Grid from '@material-ui/core/Grid'

const userAxios = axios.create()

userAxios.interceptors.request.use(config => {
    const token = localStorage.getItem('token')
    config.headers.Authorization = `Bearer ${token}`
    return config
})


const useStyles = makeStyles((theme) => ({
    
}))


function Home(){
    const classes = useStyles()
    const [issueState, setIssueState] = useState()

    function postIssue(input){
        userAxios.post('/api/issues', input)
            .then(res => {
                const issues = res.data
                setIssueState((prev) => [...prev, issues])
                console.log(issueState)
            })
            .catch(err => {
                console.log(err)
            })
    }

    const getIssues = async () => {
        try {
            const resp = await userAxios.get('/api/issues')
            setIssueState(resp.data)
        } catch (err) {
            console.log(err)
        }
    }

    useEffect(() => {
        getIssues()
    }, [])
    

    return(
         <Grid container direction='column'>
            <Grid item container spacing={2}>
            <Grid item xs={2} />
            <Grid item xs={8} >
                <InputForm 
                    postIssue={postIssue}
                />
                {
                    issueState ? <Issues issues={issueState} /> : "Loading"
                }
            </Grid>
            <Grid item xs={2} />
            </Grid>
        </Grid>
    )
    
    
}

export default Home