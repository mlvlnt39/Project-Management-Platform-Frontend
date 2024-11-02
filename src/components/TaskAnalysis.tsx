// @ts-ignore
import React from 'react';

interface TaskAnalysisProps {
    analysis: string;
}

const TaskAnalysis: React.FC<TaskAnalysisProps> = ({ analysis }) => (
    <div>
        <h3>Analysis results</h3>
        <p>{analysis}</p>
    </div>
);

export default TaskAnalysis;