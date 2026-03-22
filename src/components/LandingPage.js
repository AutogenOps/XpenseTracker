import React, { useState } from 'react';

const LandingPage = () => {
    const [name, setName] = useState('');
    const [totalBudget, setTotalBudget] = useState('');
    const [categoryBudgets, setCategoryBudgets] = useState({});
    const [error, setError] = useState('');

    const handleChange = (e) => {
        const { name, value } = e.target;
        if (name === 'name') {
            setName(value);
        } else if (name === 'totalBudget') {
            setTotalBudget(value);
        } else {
            setCategoryBudgets({ ...categoryBudgets, [name]: value });
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Validation
        if (!name || !totalBudget) {
            setError('Name and total budget are required.');
            return;
        }
        if (parseFloat(totalBudget) <= 0) {
            setError('Total budget must be greater than zero.');
            return;
        }

        // Further processing...
        setError('');
        console.log('Submitted:', { name, totalBudget, categoryBudgets });
    };

    return (
        <div>
            <h1>Budget Planner</h1>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="name">Name:</label>
                    <input type="text" name="name" value={name} onChange={handleChange} required />
                </div>
                <div>
                    <label htmlFor="totalBudget">Total Budget:</label>
                    <input type="number" name="totalBudget" value={totalBudget} onChange={handleChange} required />
                </div>
                <div>
                    <label htmlFor="category1">Category 1 Budget:</label>
                    <input type="number" name="category1" value={categoryBudgets.category1 || ''} onChange={handleChange} />
                </div>
                <div>
                    <label htmlFor="category2">Category 2 Budget:</label>
                    <input type="number" name="category2" value={categoryBudgets.category2 || ''} onChange={handleChange} />
                </div>
                {/* Additional categories can be added similarly */}
                <button type="submit">Submit</button>
                {error && <p style={{ color: 'red' }}>{error}</p>}
            </form>
        </div>
    );
};

export default LandingPage;