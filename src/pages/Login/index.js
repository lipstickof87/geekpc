import { Card } from 'antd'
import './index.scss' //记得引入，不然没用！！！！
import React from 'react'
import { Button, Checkbox, Form, Input } from 'antd'
import { useNavigate } from 'react-router-dom';
import { useStore } from '@/store'

const Login = () => {
     const { loginStore } = useStore()
   const navigate = useNavigate()
  const onFinish = async (values) => {
    const { mobile, code } = values
    console.log(values)
    try {
      await loginStore.login({ mobile, code })
      //console.log(loginStore.token)
      //记得导入import { useNavigate } from 'react-router-dom';
      navigate('/')
    } catch (e) {
      console.log(e.response?.data?.message || 'login failed')
    }
  }
  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo)
  }

  // const navigate = useNavigate()
 

  return (
    <div className="login">
      <Card className="login-container">
        <Form
         
          style={{ maxWidth: 600 }}
          validateTrigger={['onBlur', 'onChange']}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          autoComplete="off"
        >
          <Form.Item
            label="Username"
            name="mobile"
            rules={[{ required: true, message: 'Please input your username!' }]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="Password"
            name="code"
            rules={[{ required: true, message: 'Please input your password!' }]}
          >
            <Input.Password />
          </Form.Item>

          <Form.Item
            name="remember"
            valuePropName="checked"
            wrapperCol={{ offset: 8, span: 16 }}
          >
            <Checkbox>agreement</Checkbox>
          </Form.Item>

          <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
            <Button type="primary" htmlType="submit">
              Submit
            </Button>
          </Form.Item>
        </Form>
      </Card>
    </div>
  )
}
export default Login
