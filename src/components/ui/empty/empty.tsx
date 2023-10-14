import { emptyStyle } from "./emptyStyle";

export const NotFoundComponent = () => {
  return (
    <div style={emptyStyle.emptyContainer}>
      <h2 style={emptyStyle.emptyText}>THIS PAGE NOT FOUND!</h2>
    </div>
  );
};
