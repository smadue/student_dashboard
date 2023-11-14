import "./password.css"

export default function Password() {
  return (
    <div className="password">
        <div className="passwordWrapper">
            <h1 className="passwordTitle">Change Password</h1>
            <div className="passwordForm">
                <form action="/submit-password" method="POST">
                    <div>
                        <label htmlFor="currentpassword">Current Password</label>
                        <input type="password" id="currentpassword" name="current_password" />
                    </div>

                    <div>
                        <label htmlFor="newpassword">New Password</label>
                        <input type="password" id="newpassword" name="new_password" />
                    </div>

                    <div>
                        <label htmlFor="repeatpassword">Repeat Password</label>
                        <input type="password" id="repeatpassword" name="repeat_password" />
                    </div>

                    <div>
                        <input type="checkbox" id="agree" name="agree"/>
                        <label htmlFor="agree"><span>*</span>I agreed to change my password</label>
                    </div>

                    <button type="submit">Change Password</button>
                </form>
            </div>
        </div>
    </div>
  )
}
