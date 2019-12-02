import React, {Component} from 'react';
import {Button, Header,Icon, Modal, Card} from 'semantic-ui-react'
import ReactStopwatch from 'react-stopwatch';
import ScoreBoard from './ScoreBoard';
import Piles from './Piles'

export default class PileChoosing extends Component{
    state = {
            modalOpen: false,
            stopWatch:false
    };

    handleOpen = () => this.setState({ modalOpen: true });
    handleClose = () => this.setState({ modalOpen: false,stopWatch:true });
    //updateTime = (seconds) => this.seconds=seconds;

    componentDidMount() {
        this.handleOpen=this.handleOpen.bind(this);
        this.handleClose=this.handleClose.bind(this);
        this.handleOpen();
    }

    componentWillUnmount() {

    }

    render() {
        return(
            <div>
                <Modal
                    //trigger={<Button onClick={this.handleOpen}>Show Modal</Button>}
                    open={this.state.modalOpen}
                    onClose={this.handleClose}
                    basic
                    size='small'
                    >
                    <Header icon='browser' content='Cookies policy'/>
                    <Modal.Content>
                        <h3>This website uses cookies to ensure the best user experience.</h3>
                    </Modal.Content>
                    <Modal.Actions>
                        <Button color='green' onClick={this.handleClose} inverted>
                            <Icon name='checkmark'/> Got it
                        </Button>
                    </Modal.Actions>
                </Modal>
                <ReactStopwatch
                    seconds={0}
                    minutes={0}
                    hours={0}
                    limit="00:00:60"
                    onChange={({hours, minutes, seconds}) => {
                    }}
                    onCallback={() => console.log('Finish')}
                    render={({formatted, hours, minutes, seconds}) => {
                        return (
                            <div >
                                <Card header = {'Time spent '+ seconds + ' seconds'} meta ='Total time : 60 seconds'/>
                            </div>
                        );
                    }}
                />

                <Piles />
            </div>
        )
    }
}