import React, { useEffect } from "react"
import { Button } from "antd"

const DefaultLayout = (props) => {
    useEffect(() => {
        const auth = localStorage.getItem('user')
        if (auth) {
            props.history.push('/')
            return
        }
    }, [])
    return (
        <div>
            <Button onClick={() => {
                props.history.push('/')
            }}>返回</Button>
        </div>
    )
}

export default DefaultLayout
