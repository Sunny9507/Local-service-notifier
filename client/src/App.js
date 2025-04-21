import React, { useState } from 'react';

function App() {
    const [areaCode, setAreaCode] = useState('');
    const [services, setServices] = useState([]);

    const fetchServices = async () => {
        try {
            const response = await fetch(`http://localhost:5002/api/services?areaCode=${areaCode}`);
            const data = await response.json();
            setServices(data);
        } catch (error) {
            console.error("Error fetching services:", error);
        }
    }
    

    return (
        <div className="App">
            <h1>Local Service Availability Notifier</h1>
            <input
                type="text"
                placeholder="Enter Area Code"
                value={areaCode}
                onChange={e => setAreaCode(e.target.value)}
            />
            <button onClick={fetchServices}>Search</button>

            {services.length > 0 ? (
                <ul>
                    {services.map(service => (
                        <li key={service._id}>
                            <strong>{service.name}</strong> ({service.category}) - {service.contactNumber}
                        </li>
                    ))}
                </ul>
            ) : <p>No services found for this area.</p>}
        </div>
    );
}

export default App;
