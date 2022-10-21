

function Input({ props }) {
    const { label, name, placeholder, setOnChange } = props;

    return (
        <>
            <label htmlFor={name}>{label}</label>
            <input type="text" name={name} placeholder={placeholder} onChange={(e) => setOnChange(e.target.value)} />
        </>
    );
}

export default Input;
