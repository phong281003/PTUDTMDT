function addComment() {
    var commentInput = document.querySelector('.comment-input');
    var commentText = commentInput.value.trim();

    if (commentText !== '') {
        var commentsList = document.querySelector('.comments-list');
        var newComment = document.createElement('div');
        newComment.className = 'comment-item';
        newComment.innerHTML = '<strong>Người dùng:</strong> ' + commentText;
        commentsList.appendChild(newComment);

        // Clear the input field after adding a comment
        commentInput.value = '';
    }
}