import React from 'react';

interface LabelProps {
    title: string;
    note?: string;
    children?: React.ReactNode;
}

const Label: React.FC<LabelProps> = ({ title, note, children }) => {
    return (
        <div className="flex items-center space-x-2">
            <p className="flex font-semibold">
                {title}
            </p>
            {children}
            {note !== undefined && (
                <>
                    <p className="flex text-subtitle font-light">
                        |
                    </p>
                    <p className="flex text-subtitle font-light">
                        {note}
                    </p>
                </>
            )}
        </div>
    );
};

export default Label;