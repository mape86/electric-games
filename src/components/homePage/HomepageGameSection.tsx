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
      <div className="d-flex justify-content-center">
        <Link to={href}>
          <button className="btn btn-outline-warning w-20">Read more</button>
        </Link>
      </div>
    </section>
  );
};

export default HomepageGameSection;
