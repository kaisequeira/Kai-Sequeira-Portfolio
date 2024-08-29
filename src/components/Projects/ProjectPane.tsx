import React from 'react';
import Label from '../_Global/Label';

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
        <div className="flex flex-row gap-4 pt-6 justify-start w-full">
          <Label title={title} note={note}/>
        </div>
    </div>
  );
};

export default ProjectPane;