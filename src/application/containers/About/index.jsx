import React,{Component} from 'react';
import style from './style.scss';
import sonwScene from './About';
import {
    AboutRequest,
    ActionCreateScene
  } from "../../actions";
  
import {connect} from 'react-redux';



@connect((state,props)=>({
    aboutRequestResult:state.aboutRequestResult,
    createSceneHandler:state.createSceneHandler
    }))
class About extends Component{
    constructor(){
        super();
        this.initScene = this.initScene.bind(this);
    }

    componentWillMount(){
        this.props.dispatch(AboutRequest({}));
    }

    componentDidMount(){
        this.initScene();
    }

    initScene(){

        const {aboutRequestResult}  = this.props;
        const data = aboutRequestResult.data;
        let bgUrl = aboutRequestResult.loaded?`./application${(aboutRequestResult&&aboutRequestResult.loaded?aboutRequestResult.data.pulic.background:'')}`:null;
        console.log('createScene',aboutRequestResult.createScene);
        if(bgUrl&&!aboutRequestResult.createScene)
        {
            
            this.props.dispatch(ActionCreateScene({}));
            setTimeout(()=>{
                sonwScene(this.refs['canvas-box'],bgUrl);
            },200);
        }
    }

    componentWillReceiveProps(nextProps,currentProps){
    }
    componentDidUpdate(){
        this.initScene();
    }

    componentWillUnmount(){
        console.log('::::::::::::::::::::::::::::::::::::::componentWillUnmount');
    }
    render(){
      return (
            <section className={style.About}>
               <div id="canvas-warpper" ref='canvas-box' className={style.canvasWarpper}></div> 
            </section>
        )
    }
}

export default About;