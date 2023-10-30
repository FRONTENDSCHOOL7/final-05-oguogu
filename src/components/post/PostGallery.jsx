import { Container, SectionTitle } from 'components/home/FollowingFeed.style'
import React from 'react'
import PostCard from './PostCard'
import { GalleryEle, IconGalleryMore, PostGalleryBg } from './PostGallery.style'

export default function PostGallery() {
  return (
    <Container>
    <SectionTitle>게시물</SectionTitle>
    <PostGalleryBg>
      <GalleryEle></GalleryEle>
      <GalleryEle><IconGalleryMore/></GalleryEle>
      <GalleryEle></GalleryEle>
      <GalleryEle></GalleryEle>
      <GalleryEle></GalleryEle>
      <GalleryEle><IconGalleryMore/></GalleryEle>
    </PostGalleryBg>
    <PostCard />
  </Container>
  )
}
