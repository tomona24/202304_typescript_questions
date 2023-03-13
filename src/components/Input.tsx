import React, { type Ref } from 'react'

interface InputProps {
    value: string
    onChange: (value: string) => void
    onBlur?: () => void
    inputRef?: Ref<HTMLInputElement>
    // propsはもっと多いですが、省略しています。
}

const Input = ({
    value,
    onChange,
    onBlur,
    inputRef,
}: InputProps): JSX.Element => {
    return (
        <input
            ref={inputRef}
            onChange={(e) => {
                onChange(e.target.value)
            }}
            onBlur={onBlur}
            value={value}
        />
    )
}

export default Input
