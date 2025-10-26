// Write your code here!
// Build fx to display random posts to the user
// Access an external API to gather all the post then loop through and display the posts

// Endpoint: https://jsonplaceholder.typicode.com/posts

async function fetchAndDisplayPosts() {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts');
        const posts = await response.json();
        displayPosts(posts);
        return posts; // Return the posts for testing purposes
    } catch (error) {
        console.error('Error fetching posts:', error);
    }
}
fetchAndDisplayPosts();

function displayPosts(posts) {
    const postsDisplay = document.querySelector('#post-list');
    postsDisplay.innerHTML = '';
    posts.forEach(post => {
        const listItem = document.createElement('li');
        const title = document.createElement('h1');
        title.textContent = post.title;
        const body = document.createElement('p');
        body.textContent = post.body;
        listItem.appendChild(title);
        listItem.appendChild(body); // appends title (h1) and body(p) to the list item (li)
        postsDisplay.appendChild(listItem); // appends the list item (li) to the post list (ul)
    });
}

// Export for test access
if (typeof module !== 'undefined') {
    module.exports = { fetchAndDisplayPosts, displayPosts };
}