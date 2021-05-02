import util from 'util';
import path from 'path';
import fse from 'fs-extra';
import byteSize from 'byte-size';
import * as childProcess from 'child_process';
import { formatISO } from 'date-fns';

import { Folder, Document } from '../../icons';

// Avoid hardcoding the name of the folder this file resides in (i. e. the 
// path where these pages will be accessible at).
const filesPath = process.env.__DHOW_PAGE_DIR
    .slice(process.env.__DHOW_STAGING_PATH.length);

const Directory = ({ entries }) => (<>
    <div className={'container'}>
        <ul className={'space-y-2'}>
            {process.env.__DHOW_ROUTE_PATH !== `${filesPath}/` ? (
                <li className={'text-gray-700'}>
                    <a href={path.normalize(process.env.__DHOW_ROUTE_PATH + '/..')}>
                        back
                    </a>
                </li>
            ) : (<></>)}

            {entries.map((entry) => (<>
                <li className={'flex flex-row space-x-4'}>
                    {entry.isDirectory ? (
                        <Folder />
                    ) : (
                        <Document />
                    )}

                    <p className={'flex-grow'}>
                        <a href={entry.href}>
                            {entry.name}
                        </a>
                    </p>

                    {entry.isDirectory ? (<></>) : (<>
                        <p className={'text-gray-500 text-sm'}>
                            <span className={'mr-2'}>
                                {byteSize(entry.size)}
                            </span>

                            <time datetime={entry.lastModification}>
                                {entry.lastModification}
                            </time>
                        </p>
                    </>)}
                </li>
            </>))}
        </ul>
    </div>
</>);

export default Directory;

const contentName =
    process.env.NODE_ENV === 'production' ? 'files' : 'dummy-files'
const contentPath = path.resolve('public', contentName);

export const getProps = async (relativePath) => {
    const directory = path.join(contentPath, relativePath);
    const content = await fse.readdir(directory, { withFileTypes: true });

    const entries = [];

    for (const entry of content) {
        const stat = await fse.stat(path.join(directory, entry.name));

        const isDirectory = entry.isDirectory();
        const href = path.join(
            '/', isDirectory ? filesPath : contentName, relativePath,
            entry.name
        );

        entries.push({
            name: entry.name,
            size: stat.size,
            lastModification: formatISO(stat.mtimeMs, { representation: 'date' }),

            href,
            isDirectory,
        });
    }

    // const treeHash = await exec('git rev-parse HEAD')

    return {
        entries: entries.sort((a, b) => (
            // Not sure if boolean arithmetic like this is a good idea
            b.isDirectory - a.isDirectory || a.name.localeCompare(b.name)
        )),
    };
};

export const getPaths = async () => {
    const getDirectories = async (directory) => {
        const content = await fse.readdir(directory, { withFileTypes: true });

        const directories = []

        for (const entry of content) {
            if (!entry.isDirectory()) {
                continue;
            }

            const entryPath = path.resolve(directory, entry.name);

            directories.push(
                entryPath.slice(contentPath.length),
                ...(await getDirectories(entryPath))
            );
        }

        return directories;
    };

    return [ '/', ...(await getDirectories(contentPath)) ];
};
