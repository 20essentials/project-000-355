import { style, globalStyle, keyframes } from '@vanilla-extract/css';

// Reset global y font-family, cursor pointer
globalStyle(`*, *::before, *::after`, {
  boxSizing: 'border-box',
  margin: 0,
  padding: 0,
  fontFamily: `sans-serif, system-ui, -apple-system,
    BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu,
    Cantarell, 'Open Sans', 'Helvetica Neue'`,
  WebkitTapHighlightColor: 'transparent',
  cursor: 'pointer',
});

globalStyle('html', {
  scrollBehavior: 'smooth',
  scrollbarWidth: 'thin',
});

// body styles
export const bodyStyle = style({
  height: '100vh',
  width: '100%',
  display: 'flex',
  flexWrap: 'wrap',
  placeContent: 'center',
  backgroundImage: 'linear-gradient(to bottom, var(--clr), var(--clr2))',
  overflow: 'hidden',
  viewTransitionName: 'circle' as any, // TS no conoce aún viewTransitionName
});

// section styles
export const sectionStyle = style({
  backgroundImage: 'var(--bg)',
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  position: 'fixed',
  width: '100%',
  height: '100%',
  inset: 0,
  display: 'flex',

  selectors: {
    '&::before, &::after': {
      content: '""',
      display: 'block',
      width: '5vmax',
      height: '5vmax',
      position: 'absolute',
      top: '50%',
      transform: 'translateY(-50%) rotate(90deg)',
      pointerEvents: 'none',
      backgroundImage: `url('assets/arrow.png')`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundBlendMode: 'multiply',
      filter: 'invert(1)',
    },
    '&::before': {
      left: '2vmax',
      transform: 'translateY(-50%) rotate(-90deg) scaleX(-1)',
    },
    '&::after': {
      right: '2vmax',
    },
    'a': {
      width: '50%',
      height: '100%',
      display: 'block',
      backgroundColor: 'transparent',
    },
  },
});

// Keyframes para animación fadeZoom
export const fadeZoom = keyframes({
  '0%': {
    opacity: 0,
    transform: 'scale(0.8)',
  },
  '100%': {
    opacity: 1,
    transform: 'scale(1)',
  },
});

// Animaciones para view transitions (global)
globalStyle('::view-transition-old(circle)', {
  animation: `${fadeZoom} 0.5s ease reverse forwards`,
});
globalStyle('::view-transition-new(circle)', {
  animation: `${fadeZoom} 0.5s ease forwards`,
});

// @view-transition { navigation: auto; } no soportado en vanilla-extract, poner en CSS global o manualmente
