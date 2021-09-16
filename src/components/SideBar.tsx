import { GenreResponseProps } from "../App";
import { Button } from "./Button";

interface ISideBar {
  genres: GenreResponseProps[];
  onClick: (value: number) => void;
  selectedGenreId: number;
}

export function SideBar({ genres, onClick, selectedGenreId }: ISideBar) {
  return (
    <nav className="sidebar">
        <span>Watch<p>Me</p></span>

        <div className="buttons-container">
          {genres.map(genre => (
            <Button
              key={String(genre.id)}
              title={genre.title}
              iconName={genre.name}
              onClick={() => onClick(genre.id)}
              selected={selectedGenreId === genre.id}
            />
          ))}
        </div>

      </nav>
  );
}