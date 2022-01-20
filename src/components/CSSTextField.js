import { styled } from '@mui/material/styles';
import { TextField } from '@mui/material';

const CssTextField = styled(TextField)({
    // Fieldset label on focus
    '& label.Mui-focused': {
        color: '#545B5A',
    },
    
    '& .MuiOutlinedInput-root': {
        '& fieldset': {
            borderColor: 'none',
        },

        // Fieldset box on hover
        '&:hover fieldset': {
            borderColor: 'black',
        },

        // Fieldset box on focus
        '&.Mui-focused fieldset': {
            borderColor: '#545B5A',
        },
    },
});

export default CssTextField;
