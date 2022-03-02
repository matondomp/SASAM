import { FC } from "react";

import { Footer } from "antd/lib/layout/layout";

import {
    Container,
    Sider,
    Content,
    Breadcrumb,
    Layout
} from './style'

import { Aside } from '../../components/aside'
import { Header } from '../../components/header'



export const DashBord: FC = ({ children }) => {

    return (
        <Layout>

            <Sider className="site-layout-background"
                style={{
                   // maxWidth: '600px !important',
                   // width: '600px !important',
                   // minWidth: '600px !important'
                }}  >
                <Aside />
            </Sider>

            {/*    <Container> */}
            {/*  
                 */}
            <Layout
                className="site-layout-background"
                style={{ width: '90%', marginTop: '0' }} >

                <Header />
                <Layout style={{ padding: '80px 0 20px 100px' }}>
                    <Breadcrumb style={{ margin: '16px 0' }}>
                        <Breadcrumb.Item>Home</Breadcrumb.Item>
                        <Breadcrumb.Item>List</Breadcrumb.Item>
                        <Breadcrumb.Item>App</Breadcrumb.Item>
                    </Breadcrumb>

                    <Content

                        style={{
                            padding: 24,
                            margin: 0,
                            minHeight: 280,
                            backgroundColor: '#fff'
                        }}>
                        {children}
                    </Content>

                </Layout>
                <Footer style={{ textAlign: 'center', marginTop: '0', backgroundColor: '#f0f2f5', color: '#001529' }}>
                    Ant Design ©2018 Created by Ant UED
                </Footer>
            </Layout>
            {/*  </Container> */}


        </Layout>
    )
}