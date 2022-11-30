import classes from './Input.module.css';

const Input = (props) => {
    return (
        <div
        className={`${classes.control} ${
          props.stateValid === false ? classes.invalid : ""
        }`}
      >
        <label htmlFor={props.type}>E-Mail</label>
        <input
          type= {props.type}
          id={props.type}
          value={props.value}
          onChange={props.onChange}
          onBlur={props.onBlur}
        />
      </div>
    );
};

export default Input;