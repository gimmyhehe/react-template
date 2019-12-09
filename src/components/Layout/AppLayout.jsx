import React,{ Component } from 'react'
import styled from 'styled-components'
import { Layout, Menu, Breadcrumb } from 'antd'
import yueyiTTF from '@assets/Yueyi.ttf'

const { Header, Content, Footer } = Layout

const StyleLayout = styled(Layout)`
  background-color: #f4f8f9 !important;
  min-height: 100vh;
`
const Logo = styled.div`
  @font-face {
    font-family: yueyiFont;
    src: url(${yueyiTTF});
  }

  margin-top: 30px;
  margin-bottom: 30px;
  font-size: 30px;
  font-weight: 600;
  font-family: yueyiFont;
  color: #98c1d9;
  text-align: center;

  &:hover {
    cursor: pointer;
  }
`

export default class AppLayout extends Component{
  render(){
    return (
      <StyleLayout>
        <Header>
          this is header!
        </Header>
        <Content>{this.props.children}</Content>
      </StyleLayout>
    )
  }

}
