
import React, { useRef, useCallback } from "react";
//import { FormHandles } from "@unform/core"
import { Link, useNavigate } from 'react-router-dom'
import { useAuth } from "../../hooks/auth"



import {
    UserOutlined,
    InfoCircleOutlined,
} from '@ant-design/icons';

import {
    FiMail,
    FiLock
} from 'react-icons/fi'
import {  Checkbox } from "antd";

import {
    Container,
    Background,
    Form, 
    CheckBoxDiv,
    Input,
    Content,
    Button
} from './style'
import { useToast } from "@chakra-ui/react";

//import { Input } from '../../compoments/input/index'
//import { Button } from '../../compoments/buttom/index'

interface AuthTypes {
    email: string
    password: string
}

export const SignIn: React.FC = () => {
    const toast = useToast()
    const navegate = useNavigate()
    const { signIn, user } = useAuth()
   
    console.log(user)



    const hendleSubmit = useCallback(async (data: any) => {
       
        try {
             if(data.email){
                 await signIn({ email: data.email, password: data.password })
              }
            navegate("/municipe")
        } catch (error) {
            console.log(error)
            toast({
                title: 'Senha ou email errado',
                description: "Erro ao fazer login, tente novamente!",
                status: 'error',
                position: 'top-right',
                duration: 4000,
                isClosable: true,
              })
        }
    }, [signIn])

    const onFinish = (values: any) => {
        console.log('Success:', values);
      };
    
      const onFinishFailed = (errorInfo: any) => {
        console.log('Failed:', errorInfo);
      };

    return (
        <Container>
            <Background />
            <Content>

                <h1>Fazer Login</h1>
                <Form
                    name="basic"
                    layout="vertical"
                    initialValues={{ remember: true }}
                    onFinish={hendleSubmit}
                    onFinishFailed={onFinishFailed}
                    autoComplete="off"
                >
                    <Form.Item
                        label="E-mail"
                        name="email"
                        rules={[{ required: true, message: 'Please input your E-mail!' }]}
                    >
                        <Input  placeholder="E-mail" prefix={<FiMail />}/>
                    </Form.Item>

                    <Form.Item
                        label="Password"
                        name="password"
                        rules={[{ required: true, message: 'Please input your password!' }]}
                    >
                        <Input type="password" placeholder="Password" prefix={<FiLock />} />
                    </Form.Item>

                   <Button htmlType="submit">Acessar plataforma</Button>
                </Form>
                <footer>
                   <div><InfoCircleOutlined /> Acesso restrito à sócios e moderadores</div>
                   <div><span><Link to='/create'>Cria já sua conta</Link></span></div>
                </footer>

               
            </Content>

        </Container>
    )
}