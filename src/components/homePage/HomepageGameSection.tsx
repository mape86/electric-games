import React from 'react'
import { Link } from 'react-router-dom'

interface SectioProps {
    className: string
    title: string
    href: string
}

const  HomepageGameSection = ({className, title, href}:SectioProps) => {
  return (
    <section className={className}>
    <h1>{title}</h1>
    <Link to={href}>Read more</Link>
  </section>
  )
}

export default HomepageGameSection
