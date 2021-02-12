import React, {useEffect} from 'react'
import { Form, Button, Input } from 'antd'
import { UserOutlined, LockOutlined } from '@ant-design/icons'
import '../style/view-style/login.scss'

const Login = (props) => {
    useEffect(() => {
        console.log('props', props)
    }, [])
    // 登录事件
    const on_submit = (value) => {
        console.log('value', props)
        props.history.push('/home')
    }
    return (
        <div className='login-container'>
            <Form layout='horizontal' className='form-box' onFinish={on_submit} >
                <Form.Item name='username' rules={[{required: true, message: '请输入用户名'}]}>
                    <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="请输入用户名" />
                </Form.Item>
                <Form.Item name='password' rules={[{required: true, message: '请输入密码'}]}>
                    <Input
                        prefix={<LockOutlined className="site-form-item-icon" />}
                        type="password"
                        placeholder="请输入密码"
                    />
                </Form.Item>
                <Form.Item>
                    <Button type="primary" htmlType="submit" className="login-form-button">
                        登录
                    </Button>
                </Form.Item>
            </Form>
        </div>
    )
}

export default Login


// es5
// function Demo(a,b) {
//     this.a = a;
//     this.b = b;
// }

// Demo.prototype.toString  = function() {
//     return this.a + '----' + this.b;
// }

// es6
// class DemoA {
//     constructor(a, b) {
//         this.a = a;
//         this.b = b;
//     }

//     toString() {
//         return this.a + '----' + this.b;
//     }
// }