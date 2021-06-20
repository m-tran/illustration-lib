const theme = {
	colors: {
		blue: '#0070ff',
		lightgrey: '#f6f6ff',
		white: '#ffffff',
		grey: '#404040',
		linkHover: '#ffffff',
	},
	sizes: {
		sm: '1rem',
		md: '2rem',
		lg: '3rem',
	},
};

export default theme;

export const getColor = (color) => (props) => props.theme.colors[color];
export const getSize = (size) => (props) => props.theme.sizes[size];

