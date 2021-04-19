import path from 'path';
import marked from 'marked';
import parseFrontMatter from 'gray-matter';
import { readdir, readFile } from 'fs/promises';

import { Container } from '../../components/utils';

const Post = ({ name, date, description, content }) => (<>
    <Container className={'prose mb-3'}>
        <span>{date}</span>

        <h1 className={'font-serif'}>
            {name}
        </h1>

        <h3 className={'!font-normal !text-gray-700 font-serif'}>
            {description}
        </h3>

        <div html={content} />
    </Container>
</>);

const contentDirectory = 'posts'

export const getPaths = async () => {
    const parsedFilePaths = (await readdir(contentDirectory))
        .map((p) => path.parse(p));

    return parsedFilePaths.map((p) => path.join(p.dir, p.name));
};

export const getProps = async (slug) => {
    const parsedPost = parseFrontMatter(
        await readFile(path.join(contentDirectory, `${slug}.md`), 'utf-8')
    );

    parsedPost.content = marked(parsedPost.content);

    return { content: parsedPost.content, ...parsedPost.data };
};

export default Post;
