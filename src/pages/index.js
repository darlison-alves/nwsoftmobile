import React from 'react'
import { AsyncStorage, Alert } from 'react-native'
import Axios from 'axios';

import { IndexContainer, IndexContent } from "./styles/index-style";
import ListTasks from './List-tasks';
import Menu from '../components/common/menu';
import { BACKEND } from '../defaults/url_backend';
import { Loader } from '../components/common/Loader';

export class Index extends React.Component {

    state = {
        tasks: [],
        loading: false
    }

    static navigationOptions = {
        header: null,
    };

    logOut = async () => {
        await AsyncStorage.clear()
        this.props.navigation.navigate('Login')
    }

    newTask = () => {
        this.props.navigation.navigate('Register')
    }

    componentDidMount() {
        console.log("cacac")
        this.setState({ loading: true })
        Axios.get(`${BACKEND}/tasks`)
            .then(res => {
                this.setState({ tasks: res.data, loading: false })
            }).catch(err => {
                this.setState({ loading: false })
                Alert.alert("Lista tarefas", err.toString())
            })
    }

    render() {
        //console.log("this", this.props.navigation)
        return (
            <IndexContainer>
                <IndexContent>
                    <Loader visible={this.state.loading} text={"Carregando tarefas..."} />
                    <Menu logOut={this.logOut} newTask={this.newTask} >
                        <ListTasks {...this.props} tasks={this.state.tasks} />
                    </Menu>
                </IndexContent>
            </IndexContainer >
        )
    }

}