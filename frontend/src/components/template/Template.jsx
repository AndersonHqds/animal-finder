import React from 'react'
import Content from './Content'
import Header from './Header'
import Footer from './Footer'
import Menu from './Menu'
import { USER_INFO } from '../../utils/consts'
import { isValidTokenUser } from '../../api/user/user'

export default ({ onlyRenderContent, children }) => {

    const [ isValidToken, setTokenValidate ] = React.useState(false);

    React.useEffect(() => {
        const checkToken = async() => {
            const user = JSON.parse(localStorage.getItem(USER_INFO)) || null
            const tokenResponse = await isValidTokenUser(user.token)
            setTokenValidate(tokenResponse)
        }
        checkToken()
    }, [])

    if(!onlyRenderContent && !isValidToken){
        return <>Loading...</>
    }
    else{
        return(<>
            { !onlyRenderContent && <Header /> }
            { !onlyRenderContent && <Menu /> }
            <Content>{ children }</Content>
            { !onlyRenderContent && <Footer /> }
        </>);
    }
}