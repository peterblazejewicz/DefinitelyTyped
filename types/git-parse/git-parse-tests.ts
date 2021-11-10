import { gitToJs, checkoutCommit, gitDiff, gitPull } from 'git-parse';

const repoPath = '.';
// $ExpectType Promise<GitCommit[]>
gitToJs(repoPath);

async () => {
    try {
        // $ExpectType void
        await checkoutCommit('.', 'invalidHash');
        // $ExpectType GitCommit[]
        await gitToJs(repoPath);
    } catch (e) {
        //
    }
};

gitToJs('/some_crazy_directory_that_does_not_exist/asdfasdfasdfasdfxxxx').catch(() => {
    //
});
gitToJs(repoPath).then(data => {
    // $ExpectType GitCommit[]
    data;
});

gitDiff(repoPath, '3bbdbc5').then(diff => {
    diff; // $ExpectType string
});

gitPull(repoPath)
    .then(() => {})
    .catch(err => {});
