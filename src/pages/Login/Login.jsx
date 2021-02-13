import React, { useState } from 'react'
import { Form, Button, Input, message } from 'antd'
import { UserOutlined, LockOutlined } from '@ant-design/icons'
import '../../style/view-style/login.scss'

const Login = (props) => {
    const [loading, setLoading] = useState(false)
    // 登录事件
    const on_submit = (value) => {
        setLoading(true)
        console.log('value', props)
        message.success('登录成功', 1)
        setTimeout(() => {
            setLoading(false)
            props.history.push('/home')
        }, 1000)
    }
    return (
        <div className='login-container'>
            <Form layout='horizontal' className='form-box' onFinish={on_submit} >
                <Form.Item name='username' rules={[{required: true, message: '请输入用户名'}]}>
                    <Input 
                        prefix={<UserOutlined className="site-form-item-icon" />}
                        placeholder="请输入用户名"
                    />
                </Form.Item>
                <Form.Item name='password' rules={[{required: true, message: '请输入密码'}]}>
                    <Input
                        prefix={<LockOutlined className="site-form-item-icon" />}
                        type="password"
                        placeholder="请输入密码"
                    />
                </Form.Item>
                <Form.Item>
                    <Button loading={loading} type="primary" htmlType="submit" className="login-form-button">
                        登录
                    </Button>
                </Form.Item>
            </Form>
        </div>
    )
}

export default Login
