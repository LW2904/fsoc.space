import { Container } from './utils';

const Footer = () => (<>
    <div className={'w-full border-t border-gray-300 mt-3'}>
        <Container as={'footer'}>
            <div className={'pt-2 pb-3 flex flex-row text-gray-700 text-sm'}>
                <p>
                    Made with <a className={'underline'} href={'https://github.com/fs-c/dhow/tree/rewrite'}>fs-c/dhow</a>.
                </p>

                <div className={'flex-grow'} />

                <a className={'underline'} href={'/legal'}>/legal</a>
            </div>
        </Container>
    </div>
</>);

export default Footer;
