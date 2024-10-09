import React from 'react'

interface LabelProps {
    title?: string
    note?: string
    children?: React.ReactNode
    unresponsive?: boolean
}

const Label: React.FC<LabelProps> = ({
    title,
    note,
    children,
    unresponsive,
}) => {
    return (
        <div
            className={`flex lg:flex-row lg:items-center ${unresponsive ? 'flex-row items-center' : 'flex-col items-start'} gap-2`}
        >
            <div className='flex flex-row gap-2'>
                {title !== undefined && (
                    <p className="flex font-semibold">{title}</p>
                )}
                {children}
            </div>
            {note !== undefined && (
                <>
                    <p
                        className={`lg:flex text-subtitle font-light ${unresponsive ? 'flex' : 'hidden'}`}
                    >
                        |
                    </p>
                    <p className="flex text-subtitle font-light">{note}</p>
                </>
            )}
        </div>
    )
}

export default Label
