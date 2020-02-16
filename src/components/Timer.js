import React from "react";
import { CountdownCircleTimer } from "react-countdown-circle-timer";
import { Header, Button, Icon, Container } from "semantic-ui-react";
class Timer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            seconds: 0,
            isPlaying: false,
            buttonActive: false
        }
    }

    startTimer = () => {
        this.setState({ isPlaying: !this.state.isPlaying, buttonActive: !this.state.buttonActive })
    }

    setCountdown = (times) => () => {
        this.setState({ seconds: times * 60 })
    }

    resetTimer = () => {
        this.setState({ seconds: 0, isPlaying: true })
    }

    renderTime = value => {
        if (value === 0) {
            return <Header as='h4' textAlign='center' inverted>Ecoulé...</Header>;
        }

        return (
            <div className="timer">
                <Header as='h5' textAlign='center' inverted>Restant</Header>
                <Header as='h4' textAlign='center' inverted>{value}</Header>
                <Header as='h5' textAlign='center' inverted>secondes</Header>
            </div>
        );
    };



    generateTimeButton = () => {
        let availableValue = this.props.Timer.split(',')
        return availableValue.map(value => {
            return (
                <Button key={value} onClick={this.setCountdown(value)}>
                    {value + " min"}
                </Button>
            )
        })
    }

    render() {
        let buttonValue = this.state.buttonActive ? 'Pause' : 'Lancer'
        let iconValue = this.state.buttonActive ? 'pause' : 'play'
        return (
            <Container>
                <CountdownCircleTimer
                    isPlaying={this.state.isPlaying}
                    durationSeconds={this.state.seconds}
                    renderTime={this.renderTime}
                    size={130}
                    colors={[["#2185d0"]]}
                />
                <br />
                <Button icon toggle active={this.state.buttonActive} onClick={this.startTimer} labelPosition='left' floated='left'>
                    <Icon name={iconValue} />
                    {buttonValue}
                </Button>
                <Button icon onClick={this.resetTimer} labelPosition='left' floated='right'>
                    <Icon name='undo' />
                    Reset
                </Button>
                <br />
                <Button.Group widths='5'>
                    {this.generateTimeButton()}
                </Button.Group>
            </Container>
        );
    }
}



export default Timer