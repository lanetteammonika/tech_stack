import React, { Component } from 'react';
import {Text,View,TouchableWithoutFeedback,LayoutAnimation} from 'react-native';
import { connect } from 'react-redux';
import { CardSection } from './common';
import * as actions from '../actions';

class ListItem extends Component{
    componentWillUpdate(){
        LayoutAnimation.spring();
    }


    renderDescription(){
        const {expanded} = this.props;
        if(expanded){
            return(
                <CardSection>
                    <Text style={{flex:1}}>
                        {this.props.library.description}
                    </Text>
                </CardSection>
            );

        }
    }


    render(){
        const {id, title}= this.props.library;
        //console.log(this.props);
        return(
            <TouchableWithoutFeedback
                onPress={() => this.props.selectLibrary(id) }
            >
                <View>
                    <CardSection>
                        <Text style={styles.titleStyle}>
                          {title}
                        </Text>
                    </CardSection>
                    {this.renderDescription()}
                </View>
            </TouchableWithoutFeedback>
        );
    }
}
const styles={
    titleStyle:{
        fontSize:18,
        paddingLeft:15
    }
}

const mapsStateToProps = (state,ownProps) =>{
    const expanded= state.selectedLibraryId === ownProps.library.id;
    return { expanded };
}

export default connect(mapsStateToProps, actions)(ListItem)