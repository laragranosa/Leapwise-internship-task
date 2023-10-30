import { styled } from "../../styles/stitches.config"

export const LinkComponentContainer = styled('div', {
    display: 'flex',
    flexDirection: 'column',
    gap: '12px',
    padding: '20px',
    alignItems: 'center',
    backgroundColor: '$greyWhite',
    borderRadius: '12px',
    width: '100%',
});

export const RemoveButtonContainer = styled('div', {
    display: 'flex',
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '$greyWhite',
    borderRadius: '12px',
    maxHeight: '30px',
});

export const StyledDragger = styled('div', {
    maxWidth: '120px',
    padding: '8px',
    backgroundColor: 'inherit',
    color: '$greyDark',
    cursor: 'pointer',
    '&:hover': {
    backgroundColor: '$greenDisabled',
    color: '$greenActive',
    },
    '&:active': {
    backgroundColor: '$greenDisabled',
    color: '$greenActive',
    },
})