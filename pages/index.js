import Head from 'next/head'
import styles from '../styles/Home.module.css'
import ContainerBlock from '../components/ContainerBlock'
// import FavoriteProjects from '../components/FavoriteProjects'
// import LatestCode from '../components/LatestCode'
import Hero from '../components/Hero'

export default function Home() {
  return (
    <ContainerBlock
      title='Pierre Yan - Student'
      description='Personal Site'
    >
      <Hero />
      {/* <FavoriteProjects /> */}
      {/* <LatestCode /> */}
    </ContainerBlock>
  )
}
