const inputClick = () => {
    console.log('click')
}
const mouseOver = () => {
    console.log('mouse over')
}


const elements = <input placeholder='Help text' onClick={inputClick} onMouseEnter={mouseOver}/>
const app = document.getElementById("app")

ReactDOM.render(elements, app);
