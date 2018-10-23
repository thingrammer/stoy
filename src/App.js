import React, {Component} from 'react';
import './component/TitleBar';
import {TitleBar} from './component/TitleBar';
import {Helmet} from "react-helmet";

let ctx;
let loc = [
    [0, 0],
    [0, 0],
    [0, 0],

]
let mov = [
    [0, 0],
    [0, 0],
    [0, 0],
]
const WIDTH = 400;
const HEIGHT = 600;

class App extends Component {
    constructor(props) {
        super(props)
        this.state = {
            ctx: {},

        }
        this.initi = this.initi.bind(this)
        this.rc = this.rc.bind(this)
    }

    initi() {
        loc.forEach((p) => {
            p[0] += Math.random() * WIDTH;
            p[1] += Math.random() * HEIGHT;
        })
    }

    rc() {
        // let canvas = document.getElementById("cancas")
        // var ctx = canvas.getContext("2d")
        // let ctx = this.state.ctx
        ctx.fillStyle = "#FFFFFF1f"
        ctx.fillRect(0, 0, WIDTH, HEIGHT);
        loc.forEach((p) => {
            ctx.fillStyle = "black"
            p[0] += (Math.random() - 0.5) * 5
            p[1] += (Math.random() - 0.5) * 5
            ctx.fillRect(p[0], p[1], 2, 2)
        })
        // console.log("??/**/")
    }

    add() {
        loc.push([Math.random() * WIDTH, Math.random() * HEIGHT])

    }

    componentDidMount() {
        // this.setState({
        //     ctx: document.getElementById("cancas").getContext("2d")
        // }, this.rc)

        this.initi();
        ctx = document.getElementById("cancas").getContext("2d")
        setInterval(this.rc, 10)
        setInterval(this.add, 100);

    }

    render() {
        return (
            <>
                <Helmet>
                    <title>Fatgrammer's Timeline</title>
                    <meta name="description" content="fatgrammer's timeline"/>
                    <meta name='theme-color' content="#880088"/>
                </Helmet>
                <TitleBar/>
                <canvas style={{marginLeft: "5%"}} id="cancas" width="400px" height="600x"></canvas>

            </>
        );
    }
}

export default App;
