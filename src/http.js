export async function fetchAllMeals() {
    const response = await fetch('http://localhost:3000/meals');
    const resData = await response.json();

    if (!response.ok) {
        throw new Error('Failed to fetch places');
    }

    return resData;
}

export async function orderMeals(orders) {
    const response = await fetch('http://localhost:3000/orders', {
        method: 'PUT',
        body: JSON.stringify({ orders }),
        headers: {
            'Content-Type': 'application/json',
        },
    });

    const resData = await response.json();

    if (!response.ok) {
        throw new Error('Failed to update user data.');
    }

    return resData.message;
}