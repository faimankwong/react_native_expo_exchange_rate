import React, { Component } from 'react'
import {Svg} from "expo";
const {Defs, Image, ClipPath, Path,Line,G,Text} = Svg;
import {StyleSheet, Dimensions,ScrollView} from 'react-native';
let { height, width } = Dimensions.get('window');
import * as siteAction from './actions/siteAction';
import {bindActionCreators} from 'redux';
import { connect } from "react-redux";

ccy2arr = (arr) => {
    let data = []
    let i=arr.length;
    arr.map(obj => {
           const obj_ccy = {
                x: i--,
                y:  +obj.value
            }
            data=[obj_ccy,...data]
}
    )
    return data
}

let key=0;
let y_value=0;
class LineChart extends Component {


    componentDidMount() {
        Expo.ScreenOrientation.allow(Expo.ScreenOrientation.Orientation.ALL)
    };

    shouldComponentUpdate(nextProps, nextState) {
       return this.props.dim.dim.height!=nextProps.dim.dim.height
    }

    Xaixs=(ccy_data,svgHeight,svgWidth)=> {
        let only_x = ccy_data.map(point=>this.Label(point,'x', this.getMinY(ccy_data),this.getMaxX(ccy_data),this.getMaxY(ccy_data),ccy_data.length,svgHeight,svgWidth));
         return only_x
    }
    Label=(ccy_data,label,min,max,max_y,length,svgHeight,svgWidth)=>{

        if (label==='y') {
            let point = this.getSvgY_label(ccy_data.y, max,svgHeight) * 10;
            return (<Svg.Text key={key++} x={min} y={point} dx="-10">{ccy_data.y}</Svg.Text>)
        }
        if (label==='x') {
            let point = this.getSvgX_label(ccy_data.x, max,svgWidth) ;
            const mins=this.getSvgY_label(min ,max_y,svgHeight)*10
            let count=-length+y_value++
            if (count===-1)
                return (<Svg.Text  fill="#fff" key={key++} x={point*0.5} y={mins} dy="35">{'(Days)'}</Svg.Text>)
            if (count%3===0)
                return (<Svg.Text  fill="#fff" key={key++} x={point} y={mins} dy="15">{count}</Svg.Text>)
        }
    }



    Yaixs=(ccy_data,svgHeight,svgWidth)=> {
        let point = this.getSvgY_label(this.getMaxY(ccy_data), this.getMaxY(ccy_data),svgHeight) * 10;
        const only_y =
            [<Svg.Text  fill="#fff" key={key++} x={this.getMinX(ccy_data)} y={point} dx="5"  dy="-35">{this.getMinY(ccy_data)}</Svg.Text>
            ,<Svg.Text fill="#fff"  key={key++} x={this.getMinX(ccy_data)} y={point} dx="15"  dy="-20">{" to "}</Svg.Text>
            ,<Svg.Text  fill="#fff" key={key++} x={this.getMinX(ccy_data)} y={point} dx="5"  dy="-5">{this.getMaxY(ccy_data)}</Svg.Text>]
        return only_y
    }




    getMinX(ccy_data) {
        const data =ccy_data;
        const only_x = data.map(obj => obj.x)
        const min_x = Math.min.apply(null, only_x)
        return min_x
    }
    getMinY(ccy_data) {
        const data =ccy_data;
        const only_y = data.map(obj => obj.y)
        const min_y = Math.min.apply(null, only_y)
        return min_y
    }
    getMaxX(ccy_data) {
        const data =ccy_data;
        const only_x = data.map(obj => obj.x)
        const max_x = Math.max.apply(null, only_x)
        return max_x
    }
    getMaxY(ccy_data) {
        const data =ccy_data;
        const only_y = data.map(obj => obj.y)
        const max_y = Math.max.apply(null, only_y)
        return max_y
    }
    getSvgX(x,ccy_data,svgWidth) {
        return (x / this.getMaxX(ccy_data)) * svgWidth+5
    }
    getSvgY(y,ccy_data,svgHeight) {
        return (svgHeight - (y / this.getMaxY(ccy_data)) * svgHeight)*1.5+4.5 //increare height and shift
    }

    getSvgY_label(y,ccy_data_label,svgHeight) {
        return (svgHeight - (y / ccy_data_label) * svgHeight)*1.5+4.5//increare height and shift
    }

    getSvgX_label(x,ccy_data_label,svgWidth) {
        return (x / ccy_data_label) * svgWidth+5
    }




    makePath(ccy_data,svgHeight,svgWidth) {
        const { color } = this.props
        const data =ccy_data;
        let pathD = ` M  ${this.getSvgX(data[0].x,data,svgWidth)} ${this.getSvgY(data[0].y,data,svgHeight)*10} `

        pathD += data.map((point, i) => {
            return `L ${this.getSvgX(point.x,data,svgWidth)} ${this.getSvgY(point.y,data,svgHeight)*10}  `
        })

        return (
            <Svg.Path fill='none'  d={pathD}  stroke='#ff4500'  strokeWidth="2" />
        )
    }
    makeAxis(ccy_data,svgHeight,svgWidth) {
        const { navigation } = this.props
        const {ccy}=navigation.state.params
        const minX = this.getMinX(ccy_data)
        const maxX = this.getMaxX(ccy_data)
        const minY = this.getMinY(ccy_data)
        const maxY = this.getMaxY(ccy_data)
        return (
            <Svg.G >
                <Svg.Text  fontWeight="bold" fill="#fff" x={svgWidth*0.8/2} y={this.getSvgY(maxY,ccy_data,svgHeight)/40} >Currency Rate({ccy} / USD)</Svg.Text>
                <Svg.Text fontWeight="bold" fill="#fff"  x={svgWidth*0.82/2} y={this.getSvgY(maxY,ccy_data,svgHeight)*3} >seems last 30 days</Svg.Text>
                <Svg.Line    stroke="#fff"   strokeWidth="2"
                    x1={this.getSvgX(minX,ccy_data,svgWidth)}
                    y1={this.getSvgY(minY,ccy_data,svgHeight)*10}
                    x2={this.getSvgX(maxX,ccy_data,svgWidth)}
                    y2={this.getSvgY(minY,ccy_data,svgHeight)*10}
                />
                <Svg.Line    stroke="#fff"   strokeWidth="2"
                    x1={this.getSvgX(minX,ccy_data,svgWidth)}
                    y1={this.getSvgY(minY,ccy_data,svgHeight)*10}
                    x2={this.getSvgX(minX,ccy_data,svgWidth)}
                    y2={this.getSvgY(maxY,ccy_data,svgHeight)*10}
                />
            </Svg.G>
        )
    }

    render() {
            const { dim,navigation ,actions} = this.props
        const ccy_data=ccy2arr(navigation.state.params.data);
        const {change_dim} =actions
        let svg_height=dim.dim.height;
        let svg_width=dim.dim.width;
        key=0;
        y_value=0;
        Dimensions.addEventListener('change', () => {
            change_dim()
        });
        return (
            <ScrollView style={styles.container}>
            <Svg style={{height:svg_height, width:svg_width*0.92}} viewBox={`0 0 ${svg_width} ${svg_height}`}>
                {this.makePath(ccy_data,svg_height,svg_width)}
                {this.makeAxis(ccy_data,svg_height,svg_width)}
                {this.Yaixs(ccy_data,svg_height,svg_width)}
                {this.Xaixs(ccy_data,svg_height,svg_width)}
            </Svg>
            </ScrollView>
        )
    }
}

LineChart.defaultProps = {
    data: ccy2arr([]),
    color: '#ff4500',
    svgHeight: height,
    svgWidth: width,
}


const styles = StyleSheet.create({
    container: {
        backgroundColor: '#000'
    },
    titleText: {
        fontSize: 12,
        fontFamily: 'bold',
        backgroundColor: '#000'
    },
});

function mapStateToProps(state) {
    return {
        dim:state.DimensionReducer
    }
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(siteAction, dispatch),
    }
}

export default connect(mapStateToProps,mapDispatchToProps,
)(LineChart);


