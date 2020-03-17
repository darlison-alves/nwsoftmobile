import * as React from 'react';
import { FAB, Portal, Provider } from 'react-native-paper';

export default class Menu extends React.Component {
    state = {
        open: false,
    };

    render() {
        const { logOut, newTask } = this.props
        return (
            <Provider >
                <Portal>

                    {this.props.children}
                    <FAB.Group
                        style={{ backgroundColor: 'rgba(0,0,0,0)' }}
                        open={this.state.open}
                        icon={'plus'}
                        actions={[
                            { icon: 'exit-run', label: 'Sair', onPress: () => logOut() },
                            { icon: 'plus', label: 'Nova Tarefa', onPress: () => newTask() }

                        ]}
                        onStateChange={({ open }) => this.setState({ open })}
                        onPress={() => {
                            if (this.state.open) {
                                // do something if the speed dial is open
                            }
                        }}
                    />

                </Portal>
            </Provider>
        );
    }
}