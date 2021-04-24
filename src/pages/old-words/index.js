import path from 'path';
import parseFrontMatter from 'gray-matter';
import { readdir, readFile } from 'fs/promises';

import { Container, Date } from '../../components/utils';

const Index = ({ posts }) => (<>
    <Container className={'mb-3'}>
        <div className={'prose border-b border-gray-300 mb-3 pb-3'}>
            <p>
                If you come across any errors in the following posts please feel free to send me an email about it. 
                All content in these posts is released to the public domain unless otherwise noted. 
            </p>
        </div>

        <ol className={'space-y-3'}>
            {posts.map(({ slug, title, date, description }) => (<>
                <li className={'text-gray-700'}>
                    <h3 className={'text-xl font-serif text-gray-900'}>
                        <a href={'/words/' + slug} className={'underline'}>{title}</a>

                        <small className={'text-sm font-sans text-gray-700 ml-2'}>
                            <Date date={date} />
                        </small>
                    </h3>

                    <p className={''}>
                        {description}
                    </p>
                </li>
            </>))}
        </ol>
    </Container>
</>);

const contentDirectory = 'posts'

export const getProps = async () => {
    const filePaths = await readdir(contentDirectory)

    const posts = [];

    for (const filePath of filePaths) {
        const parsed = parseFrontMatter(
            await readFile(path.join(contentDirectory, filePath), 'utf-8')
        );

        posts.push({ slug: path.parse(filePath).name,...parsed.data });
    }

    return { posts: posts.sort((a, b) => b.date - a.date) };
};

export default Index;
