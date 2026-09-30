import { createSystem, defaultConfig, defineConfig } from '@chakra-ui/react';

const config = defineConfig({
  theme: {
    tokens: {
      colors: {
        brand: {
          50: { value: '#fff' },
          100: { value: '#e6f2ff' },
          200: { value: '#808080' },
          300: { value: '#00FF00' },
          400: { value: '#3399ff' },
          500: { value: '#3182ce' },
          600: { value: '#2b6cb0' },
          700: { value: '#2c5282' },
          800: { value: '#2a4365' },
          900: { value: '#1a365d' },
          950: { value: '#101010' },
        },
      },
      radii: {
        xs: { value: '0.125rem' },
        sm: { value: '0.25rem' },
        md: { value: '0.375rem' },
        lg: { value: '0.5rem' },
        xl: { value: '0.75rem' },
      },
    },
    semanticTokens: {
      colors: {
        brand: {
          solid: { value: '{colors.brand.500}' },
          contrast: { value: '{colors.brand.100}' },
          fg: {
            value: {
              base: '{colors.brand.950}',
              _dark: '{colors.brand.300}',
            },
          },
          muted: { value: '{colors.brand.100}' },
          subtle: { value: '{colors.brand.200}' },
          emphasized: { value: '{colors.brand.300}' },
          focusRing: { value: '{colors.brand.500}' },
        },
        bg: {
          page: {
            value: {
              base: '{colors.brand.50}',
              _dark: '{colors.brand.950}',
            },
          },
        },
      },
    },
  },
});

export const system = createSystem(defaultConfig, config);
