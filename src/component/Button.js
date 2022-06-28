import { styled } from '@stitches/react';

const Button = styled('button', {
  fontFamily: 'Noto Sans, sans-serif',
  fontSize: '16px',
  fontWeight: '500',
  color: '#fff',
  borderRadius: '3px',
  border: 'none',
  cursor: 'pointer',
  transition: '0.2s',

  variants: {
    variant: {
      purple: {
        background: 'rgba(96, 22, 252, 1)',

        '&:hover': {
          background: 'rgba(96, 0, 252, 1)'
        },
      },
      light: {
        background: 'rgba(255, 255, 255, 0.1)',

        '&:hover': {
          background: 'rgba(255, 255, 255, 0.08)'
        },
      }
    },
    size: {
      normal: {
        padding: '15px 55px'
      },
      small: {
        fontSize: '14px',
        padding: '10px 30px'
      }
    }
  },

  defaultVariants: {
    variant: 'purple',
    size: 'normal'
  }
});

export default Button;