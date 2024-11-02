// @ts-ignore
import React, {useState} from "react";
import axios from "axios";
import TaskInput from "./components/TaskInput";
import TaskAnalysis from "./components/TaskAnalysis";

const App: React.FC = () => {
    const [analysis, setAnalysis] = useState<string>('');

    const handleAnalyze = async (taskDescription: string) => {
        try {
            const response = await axios.post('http://localhost:5000/api/tasks/analyze', {
                taskDescription,
            });
            setAnalysis(response.data.analysis);
        } catch (error) {
            console.error('Error while analyzing the task', error);
            setAnalysis('Failed to analyze task.')
        }
    };

    return (
        <div style={{ padding: '20px'}}>
            <h1>AI platform for task analysis</h1>
            <TaskInput onAnalyze={handleAnalyze} />
            {analysis && <TaskAnalysis analysis={analysis} />}
        </div>
    );
};

export default App;