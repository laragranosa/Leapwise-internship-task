import { styled } from "../../styles/stitches.config";

export const FormHeaderContainer = styled('div', {
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    padding: '8px 8px 0px',
    marginBlock: '40px',
    alignSelf: 'center',
    textAlign: 'center',
});

export const FormHeaderTitle = styled('a', {
    width: '100%',
    fontSize: '28px',
    fontWeight: 'bold',
    margin: '10px 0px',
});

export const FormHeaderDescription = styled('a', {
    width: '100%',
    fontSize: '16px',
    margin: '10px 0px',
    textAlign: 'center',
});

