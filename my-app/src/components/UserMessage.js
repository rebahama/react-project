import React from 'react'

function UserMessage(props) {
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
                </div>
            ) : (<p> Please sign in</p>)}

        </div>
    )
}

export default UserMessage