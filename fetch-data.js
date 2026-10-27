const apiUrl = 'https://jsonplaceholder.typicode.com/users';
const dataContainer = document.getElementById('api-data');

async function fetchUserData() {
    try {
        const response = await fetch(apiUrl);
        const users = await response.json();
        const userList = document.createElement('ul');

        dataContainer.innerHTML = '';
        dataContainer.appendChild(userList);
        
        users.forEach(user => {
            const li = document.createElement('li');
            li.textContent = user.name;
            userList.appendChild(li);
        });
    } catch (error) {
        dataContainer.innerHTML = `Failed to load user data.`;
    };
};

document.addEventListener('DOMContentLoaded', event => {
    fetchUserData();
});
