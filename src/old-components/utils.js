import { createElement } from 'dhow'

export const Container = ({ children, className, as = 'div', ...props }) => {
    return createElement(as, {
        className: `custom-container ${className}`, ...props
    }, children);
};

export const Date = ({ date }) => {
    return (<>
        {date.getUTCFullYear()}-{date.getUTCMonth() + 1}-{date.getUTCDate()}
    </>)
};
