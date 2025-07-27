export function InputElement({value, fun}) {
    return (
        <>
            <input 
                type="text"
                value={value}
                onChange={fun}
            />
        </>
    )
}