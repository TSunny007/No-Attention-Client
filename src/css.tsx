import { css } from 'emotion';

export const card_div: any = css({
    'marginLeft': '10%',
    'marginRight': '10%',
    'marginTop': '10px'
});

export const carousel_panel: any = css({
    border: '1px solid black',
    position: 'relative',
    height: '100%',
    width: '100%',
    overflow: 'hidden',
    minHeight: '92.5vh',
    background: '#1188BC',
});

export const carousel_container: any = css({
    height: '100%',
    width: '100%'
});

export const centered_slide: any = css({
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    paddingRight: '30px',
});

export const button_layout: any = css({
    position: 'absolute',
    top: '50%',
    left: '90%',
    transform: 'translate(-50%, -50%)',
    fontSize: '50px',
});
