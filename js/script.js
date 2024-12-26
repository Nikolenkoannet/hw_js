'use strict'

const input = document.createElement('input');
input.type = 'number';
input.placeholder = 'Enter post ID (1-100)';
document.body.appendChild(input);

const searchButton = document.createElement('button');
searchButton.textContent = 'Find Post';
document.body.appendChild(searchButton);

const postContainer = document.createElement('div');
document.body.appendChild(postContainer);

function showMessage(message) {
    postContainer.innerHTML = `<p>${message}</p>`;
}

function findPostById(postId) {
    fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`)
        .then((res) => res.json())
        .then((post) => {
            postContainer.innerHTML = `<h2>${post.title}</h2><p>${post.body}</p>`;
            const button = document.createElement('button');
            button.textContent = 'Download comments';
            button.onclick = function () {
                fetch(`https://jsonplaceholder.typicode.com/posts/${postId}/comments`)
                    .then((res) => res.json())
                    .then((comments) => {
                        comments.forEach((c) => {
                            postContainer.innerHTML += `<p><strong>${c.email}:</strong> ${c.body}</p>`;
                        });
                    });
            };
            postContainer.appendChild(button);
        })
        .catch(() => showMessage('Post not found'));
}

document.querySelector('button').onclick = function () {
    const postId = Number(document.querySelector('input').value);
    if (postId >= 1 && postId <= 100) {
        findPostById(postId);
    } else {
        showMessage('ID must be between 1 and 100');
    }
};
