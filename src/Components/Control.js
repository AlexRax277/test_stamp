const Control = ({ msg, stop }) => {
    return <div className="msg">
        {msg}
        <button className="btn-cancel" onClick={ stop }>Отмена</button>
    </div>
};

export default Control;
