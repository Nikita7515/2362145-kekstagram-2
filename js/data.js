const POST_COUNT = 25;
const POST_COMMENT_AVATAR_COUNT = 6;

const LIKES_COUNT = {
  min: 15,
  max: 200
};
const COMMENT_COUNT = {
  min: 0,
  max: 30
};

const EFFECTS = {
  none: {
    name: 'none',
    filter: '',
    min: 0,
    max: 100,
    step: 1,
    unit: ''
  },
  chrome: {
    name: 'chrome',
    filter: 'grayscale',
    min: 0,
    max: 1,
    step: 0.1,
    unit: ''
  },
  sepia: {
    name: 'sepia',
    filter: 'sepia',
    min: 0,
    max: 1,
    step: 0.1,
    unit: ''
  },
  marvin: {
    name: 'marvin',
    filter: 'invert',
    min: 0,
    max: 100,
    step: 1,
    unit: '%'
  },
  phobos: {
    name: 'phobos',
    filter: 'blur',
    min: 0,
    max: 3,
    step: 0.1,
    unit: 'px'
  },
  heat: {
    name: 'heat',
    filter: 'brightness',
    min: 1,
    max: 3,
    step: 0.1,
    unit: ''
  }
};

const getMiniaturesData = () => {

  const POST_DESCRIPTION = [
    'Как-же красиво!',
    'Просто еще одна фотография для вас',
    'Момент запечетленный в памяти',
    'Просто наслаждаюсь жизнью',
    'В поисках прекрасного',
    'Мир глазами фотографа',
    'Обычный день, необычный момент',
    'Вдохновение повсюду',
    'Счастье здесь и сейчас',
    'Жизнь - это калейдоскоп',
    'Остановись мгновение, ты прекрасно',
    'Фотография - это окно в другой мир',
    'Красота в каждом кадре',
    'Эмоции без слов',
    'Искусство видеть',
    'Мои воспоминания - мое богатство'
  ];
  const POST_COMMENT_MESSAGE = [
    'Всё отлично!',
    'В целом всё неплохо. Но не всё.',
    'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
    'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
    'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
    'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!'
  ];
  const POST_COMMENT_NAME = [
    'Лариса',
    'Никита',
    'Валерия',
    'Вячеслав',
    'Павел',
    'Анастасия',
    'Дмитрий',
    'Мария',
    'Илья',
    'Денис',
    'Евгения'
  ];

  return { POST_DESCRIPTION, POST_COMMENT_MESSAGE, POST_COMMENT_NAME, };
};

export {
  POST_COUNT,
  LIKES_COUNT,
  COMMENT_COUNT,
  getMiniaturesData,
  POST_COMMENT_AVATAR_COUNT,
  EFFECTS
};
