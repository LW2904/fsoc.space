import path from 'path';
import marked from 'marked';
import parseFrontMatter from 'gray-matter';
import { readdir, readFile } from 'fs/promises';

import { Container } from '../../components/utils';

const Index = ({ posts }) => (<>
    <Container className={'prose mb-3'}>
        {posts.map(({ name, date,  }))}
    </Container>
</>);

const contentDirectory = 'posts'

export const getProps = async () => {
    const filePaths = (await readdir(contentDirectory))
        .map((p) => path.parse(p)).map((p) => p.name, p.ext));

        console.log(filePaths)

    const posts = [];

    for (const filePath of filePaths) {
        const parsed = parseFrontMatter(
            await readFile(path.join(contentDirectory, filePath), 'utf-8')
        );

        posts.push(parsed.data);
    }

    return { posts };
};

export default Index;
