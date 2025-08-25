import React, { useId, forwardRef, useState } from 'react'
import Button from './Button'

//one way of using forwardref
const Input = forwardRef(function Input({
    label,
    type = "text",
    className = "",
    ...props
}, ref) {
    const id = useId()
    const [fileName, setFileName] = useState("")

    if (type === "file") {
        return (
            <div className="w-full">
                {label && (
                    <label
                        className="inline-block mb-1 pl-1"
                        htmlFor={id}
                    >
                        {label}
                    </label>
                )}

                {/* hidden file input */}
                <input
                    id={id}
                    type="file"
                    ref={ref}
                    {...props}
                    className="hidden"
                    onChange={(e) => {
                        setFileName(e.target.files[0]?.name || "")
                        props?.onChange?.(e) // still trigger react-hook-form
                    }}
                />

                {/* styled button */}
                <label htmlFor={id}>
                    <Button type="button" className="cursor-pointer">
                        Choose File
                    </Button>
                </label>

                {/* show chosen file name if available */}
                {fileName && (
                    <span className="ml-2 text-sm text-gray-700">{fileName}</span>
                )}
            </div>
        )
    }

    // default input (non-file types)
    return (
        <div className="w-full">
            {label && (
                <label
                    className="inline-block mb-1 pl-1"
                    htmlFor={id}
                >
                    {label}
                </label>
            )}
            <input
                type={type}
                className={`px-3 py-2 rounded-lg bg-white text-black outline-none focus:bg-gray-50 duration-200 border border-gray-200 w-full ${className}`}
                ref={ref}
                {...props}
                id={id}
            />
        </div>
    )
})

export default Input
