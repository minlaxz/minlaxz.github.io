import React from 'react';
import { NormalContainer } from '@/Components/Containers';
import { ToHome, ToCheatsheets } from '@/Routes/';
import { NavigationButtons } from '@/Components/Buttons';
import { Cards, Card, CardBody, CardHead, Pre, UlView, LiView, SourceProP } from '@/Components/Views';

const CardContent = (props) => {
    return (
        <span>
            <UlView>
                {
                    props.content.map((item, index) => {
                        return (
                            <LiView key={index}>
                                {item.head}
                                <Pre>{item.command}</Pre>
                            </LiView>
                        )
                    })
                }
            </UlView>
        </span>
    )
}

export default () => (
    <NormalContainer justifyContent="flex-start" height="100%">
        <SourceProP fontSize="16px" fontWeight="bold">
            Git Cheat Sheet
        </SourceProP>
        <NavigationButtons>
            <ToHome cusName="Back to Home 🏡" />
            <ToCheatsheets cusName="Back to List 📔" />
        </NavigationButtons>
        <Cards>
            <Card>
                <CardHead> Create </CardHead>
                <CardBody>
                    <CardContent content={[
                        { head: "Clone and Existing Repository", command: '$ git clone ssh://user@domain.com/repo.git' },
                        { head: "Create a new local repository", command: '$ git init' },
                    ]} />
                </CardBody>
            </Card>
            <Card>
                <CardHead> Local Changes </CardHead>
                <CardBody>
                    <CardContent content={[
                        { head: "Changed files in your working directory", command: '$ git status' },
                        { head: "Changes to tracked files", command: '$ git diff' },
                        { head: "Add all current changes to the next commit", command: '$ git add .' },
                        { head: "Add some changes in <file> to the next commit", command: '$ git add -p <file>' },
                        { head: "Commit all local changes in tracked files", command: '$ git commit -a' },
                        { head: "Commit previously staged changes", command: '$ git add -p' },
                        { head: "Add some changes in to the next commit", command: '$ git commit' },
                        { head: "Change the last commit, Don‘t amend published commits!", command: '$ git commit --amend' },
                    ]} />
                </CardBody>
            </Card>
            <Card>
                <CardHead> Branching & Tags </CardHead>
                <CardBody>
                    <CardContent content={[
                        { head: "List all existing branches", command: '$ git branch' },
                        { head: "Switch HEAD branch", command: '$ git checkout <branch>' },
                        { head: "Create a new branch based on your current HEAD", command: '$ git branch <new-branch>' },
                        { head: "Create a new tracking branch based on a remote branch", command: '$ git checkout --track <remote/branch>' },
                        { head: "Delete a local branch", command: '$ git branch -d <branch>' },
                        { head: "Mark the current commit with a tag", command: '$ git tag <tag-name>' },
                    ]} />
                </CardBody>
            </Card>
            <Card>
                <CardHead> Update & Publish </CardHead>
                <CardBody>
                    <CardContent content={[
                        { head: "List all currently configured remotes", command: '$ git remote -v' },
                        { head: "Show information about a remote", command: '$ git remote show <remote>' },
                        { head: "Add new remote repository, named <remote>", command: '$ git remote add <remote> <url>' },
                        { head: "Download all changes from <remote>, but don‘t integrate into HEAD", command: '$ git fetch <remote>' },
                        { head: "Download changes and directly merge/integrate into HEAD", command: '$ git pull <remote> <branch>' },
                        { head: "Publish local changes on a remote", command: '$ git push <remote> <branch>' },
                        { head: "Delete a branch on the remote", command: '$ git branch -dr <remote/branch>' },
                        { head: "Publish your tags", command: '$ git push --tags' },
                    ]} />
                </CardBody>
            </Card>
            <Card>
                <CardHead> Merge & Rebase </CardHead>
                <CardBody>
                    <CardContent content={[
                        { head: "Merge <branch> into your current HEAD", command: '$ git merge <branch>' },
                        { head: "Rebase your current HEAD onto <branch> Don‘t rebase published commits!", command: '$ git rebase <branch>' },
                        { head: "Abort a rebase", command: '$ git rebase --abort' },
                        { head: "Continue a rebase after resolving conflicts", command: '$ git rebase --continue' },
                        { head: "Use your configured merge tool to solve conflicts", command: '$ git mergetool' },
                        { head: "Use your editor to manually solve conflicts", command: '$ git add <resolved-file>' },
                        { head: "After resolving mark file as resolved", command: '$ git rm <resolved-file>' },
                    ]} />
                </CardBody>
            </Card>
            <Card>
                <CardHead> Undo </CardHead>
                <CardBody>
                    <CardContent content={[
                        { head: "Discard all local changes in your working directory", command: '$ git reset --hard HEAD' },
                        { head: "Discard local changes in a specific file", command: '$ git checkout <file>' },
                        { head: "Revert a commit (by producing a new commit with contrary changes)", command: '$ git revert <commit>' },
                        { head: "Reset your HEAD pointer to a previous commit & discard all changes since then", command: '$ git reset --hard <commit>' },
                        { head: "Reset your HEAD pointer to a previous commit & preserve all changes as unstaged changes", command: '$ git reset <commit>' },
                        { head: "Reset your HEAD pointer to a previous commit & preserve uncommitted local changes", command: '$ git reset --keep <commit>' },
                    ]} />
                </CardBody>
            </Card>
        </Cards>

    </NormalContainer>
)