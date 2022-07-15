import {Navigate} from 'react-router-dom'

type protectedProps = {
    isLoggedIn: boolean,
    children: JSX.Element
}

const Protected: React.FC<protectedProps> = ({ isLoggedIn, children}) => {

    if (!isLoggedIn) {
        return <Navigate to={"/"}/>
    }

    return children
}

export default Protected