import { styled } from '@stitches/react';

export const HeaderContainer = styled('div', {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: 'white',
    alignItems: 'center',
    height: '100px',
    margin: '24px',
    borderRadius: '12px',
});

export const SwitchButtonsContainer = styled('div', {
    display: 'flex',
    backgroundColor: 'white',
    height: '100%',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    flexWrap: 'nowrap',
    flexBasis: '300px',
})