import { memo } from "react";
import "./masonry.scss";
import Image from "../Image/Image";
import { PictureWithMeta } from "../../redux/matrix/matrix";

interface Props {
  picMatrix: PictureWithMeta[][];
  windowWidth?: number;
}

function Masonry({ picMatrix, windowWidth }: Props) {
  return (
    <div className="masonry">
      {picMatrix.map((col, colIdx) => (
        <div key={colIdx} data-testid="col" className="col">
          {col.map((cell) => (
            <div className="cell" key={cell._id}>
              <Image
                src={cell.src}
                alt={cell.name}
                width={cell.width}
                height={cell.height}
                windowWidth={windowWidth!}
                col={picMatrix.length}
              />
            </div>
          ))}
        </div>
      ))}
    </div>
  );
}

export default memo(Masonry);
