import { styled } from '@mui/material/styles';
import { Select } from '@mui/material';

const CssSelect = styled(Select)({
    // Fieldset label on focus
    '& label.Mui-focused': {
        color: '#545B5A',
    },
    
    '&.MuiOutlinedInput-root': {
        // Fieldset box color
        '& fieldset': {
            borderColor: 'none',
            color: 'black'
        },

        // Fieldset box on hover
        '&:hover fieldset': {
            borderColor: 'black',
        },

        // Fieldset box on focus
        '&.Mui-focused fieldset': {
            borderColor: '#545B5A',
        },
    }
});

export default CssSelect;
