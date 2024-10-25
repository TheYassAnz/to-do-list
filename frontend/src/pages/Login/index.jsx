export default function Login() {
    const onSubmit = (e) => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;
        console.log(email, password);
    }
    return (
        <>
            <form onSubmit={e => onSubmit(e)}>
                <fieldset>
                    <legend>Login</legend>
                    <input type="email" name="email" id="email" /><br />
                    <input type="password" name="password" id="password" /><br />
                    <input type="submit" value="Login" />
                </fieldset>
            </form>
        </>
    )
}