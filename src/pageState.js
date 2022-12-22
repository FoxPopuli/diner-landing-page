let isMobile = window.matchMedia('(max-width: 600px)');
let isTablet = window.matchMedia('(min-width: 601px) and (max-width: 960px)');
let isDesktop = window.matchMedia('(min-width: 961px)');

export const getState = () => {
    if (isMobile) return 'mobile';
    if (isTablet) return 'tablet';
    if (isDesktop) return 'desktop';
}

// export default {
//     isMobile, isTablet, isDesktop
// }
