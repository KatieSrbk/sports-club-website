export const Container = {
  variants: {
    slider: {
      m: 0,
      my: 16,
      p: 0,
      maxWidth: 'none',

      '.Slider': {
        width: '100%',

        '.flickity-button': {
          _focus: {
            boxShadow: 'none',
          },
        },
      },

      '.Plate': {
        width: ['170px', '230px', '300px', '310px', '310px', '350px'],
        margin: '0 16px',
        background: 'white',
        height: 'auto',
      },

      '.Plate div': {
        transition: '800ms',
        transform: 'scale(0.9)', // Уменьшаем картинку в центре
      },

      '.Plate h2': {
        color: '#cfcccc',
        fontSize: '24px',
        display: 'flex',
        justifyContent: 'center',
      },

      '.Plate img': {
        width: '100%',
        height: ['120px', '160px', '220px', '240px', '240px', '280px'],
        objectFit: 'cover',
      },

      '.Slider .is-selected div': {
        transform: 'scale(1)', // Увеличиваем картинку в центре
      },

      // Затемнение боковых изображений
      '.Slider .Plate:not(.is-selected) img': {
        filter: 'brightness(80%)', // Уменьшаем яркость боковых изображений
        transition: 'filter 300ms ease', // Плавный переход
      },
    },
  },
};
