import * as React from 'react'

import styled from 'styled-components'
import Link from 'gatsby-link'

interface PostCardProps {
    path: string
    title: string
    author: string
    date: string
    tags: Array<string>
    excerpt: string
}

export default ({ path, title, author, date: rawTime, tags, excerpt }: PostCardProps) => {
    const date: any = new Date();
    date.setTime(rawTime);

    const formattedDate = date.toLocaleDateString();

    return (
        <Container>
            <GoToPost to={path}>
                <Title>{title}</Title>
                <Excerpt>{excerpt}</Excerpt>
            </GoToPost>
            <Section>
                <Meta><time>{formattedDate}</time></Meta>
                <Meta>{author}</Meta>
            </Section>
            <TagList>
                {tags.map((tag, index) =>
                    <TagItem key={index}>{tag}</TagItem>
                )}
            </TagList>
        </Container>
    )
}

const Container = styled.div`
    overflow: hidden;
    max-width: 760px;
`

const GoToPost = styled(Link) `
    text-decoration: none;
    color: black;

    &:hover {
        text-decoration: underline;
    }
`

const Title = styled.h3`
    margin-bottom: 0;
`

const Excerpt = styled.p`
`

const Section = styled.section`
    margin: 10px 0;
`

const Meta = styled.span`
    margin-right: 10px;
`

const TagList = styled.ul`
    padding-left: 0;
    list-style: none;
`

const TagItem = styled.li`
    float: left;
    font-size: 12px;
    background-color: #eee;
    border-radius: 3px;
    margin-right: 8px;
    padding: 2px 10px;
`