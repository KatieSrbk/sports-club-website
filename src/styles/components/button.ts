export const Button = {
  variants: {
    headerNav: {
      bg: 'transparent',
      height: '56px',
      position: 'relative',
      color: 'white',
      whiteSpace: 'normal',
      fontSize: {
        md: '12px',
        lg: '14px',
        xl: '16px',
        '2xl': '18px',
      },

      _after: {
        content: '""',
        position: 'absolute',
        bottom: 0,
        left: 0,
        width: '100%',
        height: '3.5px',
        bg: 'teal.500',
        opacity: 0, // Скрыто по умолчанию
        transition: 'opacity 0.3s', // Плавный переход
      },
      _hover: {
        _after: { opacity: 1 }, // Появляется при наведении
      },
    },
  },
};
