import React from 'react';
import ReactFlow, { Background, Controls } from 'reactflow';
import 'reactflow/dist/style.css';

const defaultNodes = [
  {
    id: '1',
    type: 'input',
    data: { label: 'Start' },
    position: { x: 100, y: 50 },
  },
  {
    id: '2',
    data: { label: 'Design UI' },
    position: { x: 250, y: 150 },
  },
  {
    id: '3',
    data: { label: 'Build Backend' },
    position: { x: 100, y: 250 },
  },
  {
    id: '4',
    type: 'output',
    data: { label: 'Launch' },
    position: { x: 250, y: 350 },
  },
];

const defaultEdges = [
  { id: 'e1-2', source: '1', target: '2' },
  { id: 'e1-3', source: '1', target: '3' },
  { id: 'e2-4', source: '2', target: '4' },
  { id: 'e3-4', source: '3', target: '4' },
];

export function WorkflowGraph() {
  return (
    <div style={{ height: 300, width: '100%' }}>
      <ReactFlow nodes={defaultNodes} edges={defaultEdges} fitView>
        <Background />
        <Controls />
      </ReactFlow>
    </div>
  );
}
