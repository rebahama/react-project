import React from 'react'


function MethodChildFunc(props) {
    return (
        <div>

            {props.isLoggedIn ? (
                <div>
                    <p> Welocme complete the steps below</p>
                    <ol>
                        <li>Confirm email </li>
                        <li>Confirm profile </li>
                        <li> Subscribe</li>
                    </ol>
                    <button onClick={props.handleSignOut}> Sign out </button>
                </div>
            ) : (
            <div>
            <p> Please sign in</p>
            <button onClick={props.handleSignIn}> Sign in</button>
            </div>
            )}

        </div>
    )
}

export default MethodChildFunc