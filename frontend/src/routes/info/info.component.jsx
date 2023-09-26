import Auth from "../login_auth/auth.component";

const Info=()=>{
    const id=localStorage.getItem("userId");
    return(
        <div className="info">
        {id?(<h1>this is list of organisations</h1>)
        :(<Auth/>)}
        </div>
    )
}

export default Info;