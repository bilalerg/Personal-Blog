// Yorumları dinamik olarak eklemek için fonksiyon
function submitComment() {
    const commentText = document.getElementById('comment').value;

    if (commentText === "") {
        alert("Lütfen bir yorum yazın!");
        return false;
    }

    const commentList = document.getElementById('comment-list');
    const newComment = document.createElement('p');
    newComment.textContent = commentText;

    commentList.appendChild(newComment);

    // Yorum formunu temizleyin
    document.getElementById('comment').value = '';
    return false; // Formun sayfayı yenilemesini engeller
}
