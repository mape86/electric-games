import React from "react";
import { Link } from "react-router-dom";

interface SectionProps {
  className: string;
  title: string;
  href: string;
}

const HomepageGameSection = ({ className, title, href }: SectionProps) => {
  return (
    <section className={className}>
      <h1>{title}</h1>
      <br></br>
      <Link className="btn btn-outline-warning w-20" to={href}>
        Read more
      </Link>
    </section>
  );
};

export default HomepageGameSection;
