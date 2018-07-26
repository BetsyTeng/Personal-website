import React,{Component} from 'react';
import style from './style.scss';
import sonwScene from './About';
class About extends Component{
    componentDidMount(){
    
        sonwScene(this.refs['canvas-box']);
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