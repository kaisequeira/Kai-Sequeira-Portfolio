import React from 'react';

interface ProjectPaneProps {
  className: string;
  children?: React.ReactNode;
  colour: string;
  title: string;
  note?: string;
}

const ProjectPane: React.FC<ProjectPaneProps> = ({ className, colour, children, title, note }) => {
  return (
    <div className={className}>
        <div className={'rounded-3xl h-full w-full'} style={{ backgroundImage: colour }}>
            {children}
        </div>
        <div className="flex flex-row space-x-4 pt-6 justify-start w-full">
            <p className="flex text-content font-semibold">
                {title}
            </p>
            {note !== undefined && (<p className="flex text-subtitle font-light">
                |
            </p>)}
            <p className="flex text-subtitle font-light">
                {note}
            </p>
        </div>
    </div>
  );
};

export default ProjectPane;