import { Stack } from '@mantine/core';

export function SelectedWorkPage() {
  return (
    <Stack align="center" gap="md">
      <p>Check out some of my recent projects and work.</p>
      <Stack gap="lg" w="100%" maw={800}>
        <div style={{ border: '1px solid #ccc', borderRadius: '8px', padding: '20px' }}>
          <h3>E-Commerce Website</h3>
          <p>Full-stack e-commerce platform built with React, Node.js, and MongoDB.</p>
          <p><strong>Technologies:</strong> React, Node.js, Express, MongoDB, Stripe API</p>
          <p><strong>Features:</strong> User authentication, product catalog, shopping cart, payment processing</p>
        </div>
        
        <div style={{ border: '1px solid #ccc', borderRadius: '8px', padding: '20px' }}>
          <h3>Task Management App</h3>
          <p>Collaborative task management application with real-time updates.</p>
          <p><strong>Technologies:</strong> React, TypeScript, Socket.io, PostgreSQL</p>
          <p><strong>Features:</strong> Real-time collaboration, drag-and-drop, team management</p>
        </div>
        
        <div style={{ border: '1px solid #ccc', borderRadius: '8px', padding: '20px' }}>
          <h3>Weather Dashboard</h3>
          <p>Interactive weather dashboard with data visualization and forecasts.</p>
          <p><strong>Technologies:</strong> React, D3.js, OpenWeather API, Chart.js</p>
          <p><strong>Features:</strong> Interactive charts, location-based weather, historical data</p>
        </div>
      </Stack>
    </Stack>
  );
}
