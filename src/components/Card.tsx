import React from "react";
import Img from "gatsby-image";

export const Card: React.FC<any> = ({
  url,
  cover,
  date,
  tags,
  title,
  localCover,
}) => (
  <div className="card">
    <a href={url} target="_blank" rel="noopener noreferrer">
      <div>
        {/* not all images will have a local cover (e.g., GIFs) */}

        <img src={cover} alt={title} />
      </div>
      <div>
        <div>
          <p>{date}</p>
        </div>
      </div>
      <div>
        <div>
          <span>
            {tags.map((tag: string) => (
              <span key={tag}>{tag}</span>
            ))}
          </span>
          <h4>{title}</h4>
        </div>
      </div>
    </a>
  </div>
);
