import React, { Component } from 'react';
import { ScrollView, Animated, TouchableOpacity, Text, View } from 'react-native';
import { Header } from '../components/common/header';
import { Header_Maximum_Height, Header_Minimum_Height } from '../defaults/constants';
import { TextHeaderBody, ContainerHeader } from '../components/common/styles/list-style';
import { CardTask } from '../components/card-list/card-task';
//import all the components we are going to use. 


const HEADER_SCROLL_DISTANCE = Header_Maximum_Height - Header_Minimum_Height
export default class ListTasks extends Component {
    constructor () {
        super();
        this.AnimatedHeaderValue = new Animated.Value(0);
    }

    render() {

        const { navigation, tasks = [] } = this.props;

        const AnimateHeaderBackgroundColor = this.AnimatedHeaderValue.interpolate({
            inputRange: [0, Header_Maximum_Height - Header_Minimum_Height],
            outputRange: ['#003f5c', '#003f5c'],
            extrapolate: 'clamp',
        });

        const AnimateHeaderHeight = this.AnimatedHeaderValue.interpolate({
            inputRange: [0, Header_Maximum_Height - Header_Minimum_Height],
            outputRange: [Header_Maximum_Height, Header_Minimum_Height],
            extrapolate: 'clamp',
        });


        const imageOpacity = this.AnimatedHeaderValue.interpolate({
            inputRange: [0, HEADER_SCROLL_DISTANCE / 2, HEADER_SCROLL_DISTANCE],
            outputRange: [1, 1, 0],
            extrapolate: 'clamp',
        });

        const imageTranslate = this.AnimatedHeaderValue.interpolate({
            inputRange: [0, HEADER_SCROLL_DISTANCE],
            outputRange: [0, -50],
            extrapolate: 'clamp',
        });

        return (
            <ContainerHeader >

                <ScrollView
                    scrollEventThrottle={16}
                    contentContainerStyle={{ paddingTop: Header_Maximum_Height, borderTopLeftRadius: 100, borderTopRightRadius: 50 }}
                    onScroll={Animated.event([
                        { nativeEvent: { contentOffset: { y: this.AnimatedHeaderValue } } },
                    ])}>
                    {/* Put all your Component here inside the ScrollView */}

                    {
                        tasks.map(task => (
                            <TouchableOpacity key={task._id} onPress={() => navigation.push('Details', task)} >
                                <CardTask task={task} />
                            </TouchableOpacity>)
                        )
                    }

                </ScrollView>

                {!tasks.length &&
                    (<View style={{ flex: 5, alignContent: 'center', alignItems: 'center', justifyContent: 'center' }} >
                        <TextHeaderBody  > Sem tarefas no momento... </TextHeaderBody>
                    </View>)}

                <Header imageOpacity={imageOpacity} imageTranslate={imageTranslate} AnimateHeaderHeight={AnimateHeaderHeight} AnimateHeaderBackgroundColor={AnimateHeaderBackgroundColor} />
            </ContainerHeader>
        );
    }
}

