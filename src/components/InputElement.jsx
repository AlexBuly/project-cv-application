export function InputElement({value, fun}) {
    return (
        <>
            <input 
                type="text"
                value={value}
                fun={fun}
            />
        </>
    )
}