import { theme } from "../styles/stitches.config";
import Preview from "../modules/preview/Preview";

const previewPage = () => {
  return (
    <div
      style={{
        height: "100%",
        width: "100%",
        backgroundColor: theme.colors.greyLight,
        overflow: "auto",
      }}
    >
      <title>Preview</title>
      <Preview />
    </div>
  );
};

export default previewPage;
