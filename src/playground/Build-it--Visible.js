//VisibilityToggle-render, constructor, handleToggleVisibility
//visibility -> false

class VisibilityToggle extends React.Component{
    constructor(props){
        super(props);
        this.detail = 'Here are some detail that you want to see!';
        this.visibleToggleName = 'show detail';
        this.handleToggleVisibility = this.handleToggleVisibility.bind(this);
        // this.visible = false;
        this.state = {
            visible: false
        };
    }
    handleToggleVisibility(){
        this.setState((prevState) => {
            return {
                visible: !prevState.visible
            }
        })
        // console.log(this.state.visible);
    }
    render(){
        return(
            <div>
                <h1>Visibility Toggle</h1>
                <button onClick = {this.handleToggleVisibility}>
                    {this.state.visible?'hide detail':'show detail'}
                </button>
                <p>{this.state.visible&&this.detail}</p>
            </div>
        )
    }
}

ReactDOM.render(<VisibilityToggle />, document.getElementById('app'));














// const app = {
//     name: 'Visibility Toggle',
//     detail: 'Here are some detail that you want to see!'
// }

// let buttonCap = 'show detail';
// let showDetail = false;
// const onDetail = () => {
//     buttonCap = (buttonCap === 'show detail'?'hide detail':'show detail');
//     // console.log(buttonCap);
//     showDetail = !(buttonCap === 'show detail');
//     // console.log(buttonCap === 'show detail');
//     renderDetail();

// };

// const appRoot = document.getElementById("app");
// const renderDetail = () => {
//     const templateApp = (//the JSX
//         <div>
//             <h1>{app.name}</h1>
//             <button onClick = {onDetail}>{buttonCap}</button>
//             {showDetail&&<p>{app.detail}</p>}
//         </div>
//     );
//     ReactDOM.render(templateApp,appRoot);//can use document.getElementById() directly
// };
// renderDetail();







