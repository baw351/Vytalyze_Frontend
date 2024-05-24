document.addEventListener('DOMContentLoaded', function() {
    const carousels = document.querySelectorAll('.carousel');

    carousels.forEach(carousel => {
        const imagesContainer = carousel.querySelector('.carousel-images');
        const images = carousel.querySelectorAll('img');
        const prevButton = carousel.querySelector('.prev');
        const nextButton = carousel.querySelector('.next');

        let currentIndex = 0;

        function updateCarousel() {
            const offset = -currentIndex * 100; 
            imagesContainer.style.transform = `translateX(${offset}%)`;
        }

        prevButton.addEventListener('click', function() {
            if (currentIndex > 0) {
                currentIndex--;
                updateCarousel();
            }
        });

        nextButton.addEventListener('click', function() {
            if (currentIndex < images.length - 1) {
                currentIndex++;
                updateCarousel();
            }
        });
    });

    const posts = document.querySelectorAll('.post');

    posts.forEach(post => {
        const commentButton = post.querySelector('.comment-button');
        const commentsSection = post.querySelector('.post-comments');

        commentButton.addEventListener('click', function() {
            commentsSection.classList.toggle('visible');
        });

        const addCommentButton = post.querySelector('.add-comment-button');
        const commentInput = post.querySelector('.add-comment input');

        addCommentButton.addEventListener('click', function() {
            const commentText = commentInput.value.trim();
            if (commentText) {
                const comment = document.createElement('div');
                comment.classList.add('comment');
                comment.innerHTML = `
                    <span class="username">New_User</span> ${commentText} <button class="like-button">❤️</button> <span class="comment-likes">0 likes</span>
                `;
                commentsSection.appendChild(comment);
                commentInput.value = '';
            }
        });

        const likeButton = post.querySelector('.like-button');
        const likesDisplay = post.querySelector('.post-likes');
        let likes = parseInt(likesDisplay.textContent.split(' ')[0]);
        let liked = false;

        likeButton.addEventListener('click', function() {
            liked = !liked;
            if (liked) {
                likes++;
                likeButton.classList.add('liked');
            } else {
                likes--;
                likeButton.classList.remove('liked');
            }
            likesDisplay.textContent = `${likes} likes`;
        });

        const commentLikeButtons = post.querySelectorAll('.comment .like-button');
        commentLikeButtons.forEach(button => {
            const commentLikesDisplay = button.nextElementSibling;
            let commentLikes = parseInt(commentLikesDisplay.textContent.split(' ')[0]);
            let commentLiked = false;

            button.addEventListener('click', function() {
                commentLiked = !commentLiked;
                if (commentLiked) {
                    commentLikes++;
                    button.classList.add('liked');
                } else {
                    commentLikes--;
                    button.classList.remove('liked');
                }
                commentLikesDisplay.textContent = `${commentLikes} likes`;
            });
        });
    });

    const fileInput = document.getElementById('file-upload');
    const preview = document.querySelector('.publish-post .preview');
    const userNameInput = document.getElementById('user-name');

    fileInput.addEventListener('change', function() {
        const file = fileInput.files[0];
        if (file) {
            preview.innerHTML = '';
            if (file.type.startsWith('image/')) {
                const img = document.createElement('img');
                img.src = URL.createObjectURL(file);
                preview.appendChild(img);
            } else if (file.type.startsWith('video/')) {
                const video = document.createElement('video');
                video.src = URL.createObjectURL(file);
                video.controls = true;
                preview.appendChild(video);
            }
        }
    });

    const publishButton = document.getElementById('publish-button');
    const postText = document.getElementById('post-text');

    publishButton.addEventListener('click', function() {
        const file = fileInput.files[0];
        const text = postText.value;
        const userName = userNameInput.value || 'Utilisateur';

        if (file || text.trim() !== '') {
            const newPost = document.createElement('div');
            newPost.classList.add('post');
            newPost.dataset.id = Math.floor(Math.random() * 1000); 

            const postHeader = document.createElement('div');
            postHeader.classList.add('post-header');
            postHeader.innerHTML = `
                <img src="./template/image_template/origine-logo-JO-Paris-2024.jpg" alt="User avatar" class="avatar" width="50" height="50">
                <span class="username">${userName}</span>
            `;
            newPost.appendChild(postHeader);

            if (file) {
                const postImage = document.createElement('div');
                postImage.classList.add('post-image');
                if (file.type.startsWith('image/')) {
                    const img = document.createElement('img');
                    img.src = URL.createObjectURL(file);
                    postImage.appendChild(img);
                } else if (file.type.startsWith('video/')) {
                    const video = document.createElement('video');
                    video.src = URL.createObjectURL(file);
                    video.controls = true;
                    postImage.appendChild(video);
                }
                newPost.appendChild(postImage);
            }

            const postActions = document.createElement('div');
            postActions.classList.add('post-actions');
            postActions.innerHTML = `
                <button class="like-button">❤️ Like</button>
                <button class="comment-button">💬 Commentaires</button>
            `;
            newPost.appendChild(postActions);

            const postLikes = document.createElement('div');
            postLikes.classList.add('post-likes');
            postLikes.textContent = '0 likes';
            newPost.appendChild(postLikes);

            if (text.trim() !== '') {
                const postCaption = document.createElement('div');
                postCaption.classList.add('post-caption');
                postCaption.innerHTML = `
                    <span class="username">${userName}</span> ${text}
                `;
                newPost.appendChild(postCaption);
            }
            const addCommentSection = document.createElement('div');
            addCommentSection.classList.add('add-comment');
            addCommentSection.innerHTML = `
                <input type="text" placeholder="Ajouter un commentaire...">
                <button class="add-comment-button">Commenter</button>
            `;
            newPost.appendChild(addCommentSection);

            const container = document.querySelector('.container');
            container.insertBefore(newPost, container.firstChild);
            fileInput.value = '';
            postText.value = '';
            preview.innerHTML = '';
        }
    });
});
