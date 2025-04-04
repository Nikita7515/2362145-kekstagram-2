const COMMENTS_PER_PAGE = 5;
let currentComments = [];
let shownComments = 0;
const AVATAR_ROUND_SIZE = 35;

const initCommentsPagination = (comments, container, loader, counter, total) => {
  if (!comments && comments.length === 0) {
    container.innerHTML = '';
    loader.classList.add('hidden');
    counter.textContent = '0';
    total.textContent = '0';
    return;
  }

  currentComments = comments;
  shownComments = 0;
  container.innerHTML = '';
  loader.classList.remove('hidden');
  total.textContent = comments.length;

  const renderNextComments = () => {
    const commentsPortion = currentComments.slice(shownComments, shownComments + COMMENTS_PER_PAGE);

    commentsPortion.forEach(({ avatar, name, message, }) => {
      const comment = document.createElement('li');
      comment.className = 'social__comment';
      const img = document.createElement('img');
      img.classList.add('social__picture');
      img.src = avatar;
      img.alt = name;
      img.width = AVATAR_ROUND_SIZE;
      img.height = AVATAR_ROUND_SIZE;

      const text = document.createElement('p');
      text.classList.add('social__text');
      text.textContent = message;

      comment.appendChild(img);
      comment.appendChild(text);
      container.appendChild(comment);
    });

    shownComments += commentsPortion.length;
    counter.textContent = shownComments;

    if (shownComments >= currentComments.length) {
      loader.classList.add('hidden');
    }
  };

  loader.addEventListener('click', renderNextComments);
};

const destroyCommentsPagination = (loader) => {
  loader.classList.add('hidden');
  // eslint-disable-next-line no-undef
  loader.removeEventListener('click', renderNextComments);
};

export { initCommentsPagination, destroyCommentsPagination };
