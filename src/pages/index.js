const Home = () => {
    return (<>
        <div className={'h-screen w-full flex flex-col justify-center items-center px-4'}>
            <div className={'flex flex-col items-center ty'}>
                <img src={'/assets/logo.svg'} alt={'fsoc'} />

                <nav className={'w-full flex flex-row justify-between ty'}>
                    <a href={'/about'}>/about</a> <a href={'/projects'}>/projects</a> <a href={'/words'}>/words</a> <a href={'/files'}>/files</a>
                </nav>

                <p className={'mt-2'}>
                    Hey there, I'm Laurenz Weixlbaumer, although I usually go 
                    by <code>fsoc</code> online. I'm a software developer living in 
                    Austria and currently a freelancer.
                </p>
            </div>
        </div>
    </>);
};

export default Home;
