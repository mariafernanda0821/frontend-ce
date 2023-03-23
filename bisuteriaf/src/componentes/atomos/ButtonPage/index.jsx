import {Btn} from './styles';

const ButtonPage = props =>{
        return <Btn style={props.style} onClick={props.onClick} >{props.icon}</Btn>
}

export default ButtonPage