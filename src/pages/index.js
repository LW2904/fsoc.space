const Home = () => {
    return (<>
        <div className={'flex flex-col items-center prose container'}>
            <img src={'/assets/logo.svg'} alt={'fsoc'} />

            <nav className={'w-full flex flex-row justify-between gap-2 mb-2'}>
                <a href={'/about'}>/about</a> 
                <a href={'/projects'}>/projects</a> 
                <a href={'/words'}>/words</a> 
                <a href={'/files'}>/files</a>
            </nav>

            <p>
                Hi, I'm Laurenz Weixlbaumer, a software developer living in Austria. Online, 
                I mainly go by <code>fsoc</code>. I build things, usually by writing things.
            </p>

            <p>
                You can contact me by email via <code>root@ this domain</code>. I'm on <a href={'https://github.com/fs-c/'}>github/fs-c</a> and <a href={'https://gitlab.com/fsoc'}>gitlab/fsoc</a>. 
                Sometimes I play games on <a href={'http://steamcommunity.com/profiles/76561198091491690'}>steam/f50c</a>.
            </p>
        </div>
    </>);
};

export default Home;

export const getProps = () => {
    return {
        showHeader: false,
        wrapperClassName: 'w-full flex flex-col justify-center items-center',
    };
}
