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
      <Link to={href}>
        <button className="btn btn-warning w-20 m-3">Read more</button>
      </Link>
    </section>
  );
};

export default HomepageGameSection;
