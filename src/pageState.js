export const getState = () => {
    let isMobile = window.matchMedia('(max-width: 563px)');
    let isTablet = window.matchMedia('(min-width: 564px) and (max-width: 960px)');
    let isDesktop = window.matchMedia('(min-width: 961px)');
    
    if (isMobile.matches) return 'mobile';
    if (isTablet.matches) return 'tablet';
    if (isDesktop.matches) return 'desktop';
}
