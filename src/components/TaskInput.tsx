// @ts-ignore
import React, {useState} from "react";

interface TaskInputProps {
    onAnalyze: (taskDescription: string) => void;
}

const TaskInput: React.FC<TaskInputProps> = ({onAnalyze}) => {
    const [taskDescription, setTaskDescription] = useState('');

    const handleAnalyze = () => {
        if (taskDescription.trim()) {
            onAnalyze(taskDescription);
        }
    };
    return (
        <div>
            <textarea value={taskDescription}
                      onChange={(e) => setTaskDescription(e.target.value)}
                      placeholder="Enter task description"
                      rows={4}
                      cols={50}
            />
            <button onClick={handleAnalyze}>Analyze task</button>
        </div>
    )
};

export default TaskInput;