import { Container } from './utils';

const Item = ({ children, href }) => (<>
    <div className={'group flex flex-col'}>
        <a href={href} className={'pb-1 pt-3 cursor-pointer'}>
            {children}
        </a>

        <div className={'h-px w-full bg-gray-500 group-hover:bg-indigo-600'} />
    </div>
</>);

const Header = () => (<>
    <div className={'flex flex-row items-end mb-3'}>
        <div className={'h-px bg-gray-300 flex-grow'} />

        <Container className={'!p-0 flex flex-row items-end'} as={'header'}>
            <div className={'w-4 h-px bg-gray-300'} />

            <Item href={'/'}>fsoc.space</Item>

            <div className={'flex-grow h-px bg-gray-300'} />

            <Item href={'/words'}>/files</Item>

            <div className={'w-4 h-px bg-gray-300'} />

            <Item href={'/words'}>/words</Item>

            <div className={'w-4 h-px bg-gray-300'} />
        </Container>

        <div className={'h-px bg-gray-300 flex-grow'} />
    </div>
</>);

export default Header;
